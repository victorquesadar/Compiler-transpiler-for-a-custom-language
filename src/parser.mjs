
import JavaScriptVisitor from "../parser/JavaScriptVisitor.js";

class ASTNode {
	constructor(type, value = null, children = [], weight = 0) {
		this.type = type;
		this.value = value;
		this.children = Array.isArray(children) ? children : [children];
		this.weight = weight;
	}
}

class MyVisitor extends JavaScriptVisitor {
	visitPrintStatement(ctx) {
		const message = this.visit(ctx.expression());
		return new ASTNode("PRINT", null, [message],1);
	}
	visitExpression(ctx) {
		if (ctx.binaryOperation()) {
			return this.visitBinaryOperation(ctx.binaryOperation());
		} else if (ctx.NUMBER()) {
			return new ASTNode("NUMBER", {
				value: parseFloat(ctx.NUMBER().getText()),
			});
		}
	}

	visitDeclaration(ctx) {
		const isConstant = ctx.getChild(0).getText() === "const"; // 'const' or 'let'
		const variableAssignmentNode = this.visit(ctx.variableAssignment());
		return new ASTNode("DECLARATION", { isConstant }, [variableAssignmentNode]);
	}
	visitBinaryOperation(ctx) {
		const left = this.visit(ctx.multiplicativeExpression(0));
		const right = this.visit(ctx.multiplicativeExpression(1));
		const op = ctx.getChild(1).getText(); // "+" o "-"
		return new ASTNode(op, null, [left, right], 1);
	}

	// Visit for variable assignment (IDENTIFIER '=' expression)
	visitVariableAssignment(ctx) {
		const variableName = ctx.IDENTIFIER().getText(); // Get the variable name
		const expressionValue = this.visit(ctx.expression()); // Visit the expression on the right side
		return new ASTNode("LET", { name: variableName }, [expressionValue], 1);
	}
	visitNumberExpr(ctx) {

		return new ASTNode("INT", parseInt(ctx.NUMBER().getText(), 10), [], 1);
	}



	visitIdentifierExpr(ctx) {
		const identifierName = ctx.getText();
		return new ASTNode("IDENTIFIER", { name: identifierName }, [], 1);
	}
	visitAdditiveExpr(ctx) {
		const left = this.visit(ctx.expression(0));
		const right = this.visit(ctx.expression(1));
		const operator = ctx.getChild(1).getText(); // Obtiene '+' o '-'
		const operationType = operator === '+' ? 'ADD' : 'SUB';
		return new ASTNode('BINARY_OPER', operationType, [left, right], 1);
	}
	visitMultiplicativeExpr(ctx) {
		const left = this.visit(ctx.expression(0));
		const right = this.visit(ctx.expression(1));
		const operator = ctx.getChild(1).getText(); // Obtiene '*' o '/'
		const operationType = operator === '*' ? 'MUL' : 'DIV';
		return new ASTNode('BINARY_OPER', operationType, [left, right], 1);
	}

	visitStringExpr(ctx) {
		return new ASTNode("STR", ctx.STRING_LITERAL().getText(),null, 1);
	}

	visitListExpression(ctx) {
		const nodes=new ASTNode("LIST", ctx.getText());
		nodes.weight=1;
		return nodes;
	}
	visitIfThenElseStatement(ctx) {
		const condition = this.visit(ctx.expression(0));
		condition.isIf = true;
		const thenBranch = this.visit(ctx.ifBlockStatement(0));
		const elseBranch = this.visit(ctx.elseBlockStatement(1));
		condition.weight = (countLeafNodes(thenBranch))+1;        //para que no caiga en el bt y se salte el else
		thenBranch.weight = countLeafNodes(elseBranch);
		return new ASTNode("IF_THEN_ELSE", null, [condition, thenBranch, elseBranch]);
	}

	visitIfBlockStatement(ctx) {
		const statements = ctx.statement().map(statement => this.visit(statement));

		return new ASTNode("blockStatement", null, statements);
	}

	visitIfThenBlockStatement(ctx) {
		const statements = ctx.statement().map(statement => this.visit(statement));

		return new ASTNode("blockStatementIf", null, statements);
	}

	visitElseBlockStatement(ctx) {
		const statements = ctx.statement().map(statement => this.visit(statement));
		return new ASTNode("elseBlockStatement", null, statements);
	}

	visitIfThenStatement(ctx) {
		const condition = this.visit(ctx.expression(0));
		condition.isIf = true;
		const thenBranch = this.visit(ctx.ifThenBlockStatement(0));	
		condition.weight = (countLeafNodes(thenBranch)) ; // para que no caiga en el bt y se salte el else
		thenBranch.weight = countLeafNodes(thenBranch);
		return new ASTNode("IF_THEN", null, [condition, thenBranch]);
	}


	visitWhileStatement(ctx) {
		const condition = this.visit(ctx.expression());
		condition.isIf = true;
		const body = this.visit(ctx.ifThenBlockStatement());
		const result = countLeafNodes(body)+countLeafNodes(condition);
		return new ASTNode("WHILE", result, [condition, body]);

	}

	visitFormalParameters(ctx) {
		const statements = ctx.IDENTIFIER().map(id => id.getText());
		let result = statements.length;
		return new ASTNode("PARAMETER", result, statements);
	}

  visitFunctionDeclaration(ctx) {
    const functionName = ctx.IDENTIFIER().getText();
    const functionBody = this.visit(ctx.functionExpression());
    return new ASTNode("FUNCTION_DECLARATION", { name: functionName }, functionBody);
  }

  visitFunctionLet(ctx) {
	const body = this.visit(ctx.blockStatement(0));
	const body1 = this.visit(ctx.blockStatement(1));
	return new ASTNode("LET_IN", null, [body,body1]);
  }

  visitCallExpression(ctx) {
    const functionName = ctx.IDENTIFIER().getText();
    const args = ctx.expression().map(arg => this.visit(arg));
    return new ASTNode("CALL", { name: functionName }, args,2);
  }

  visitReturnStatement(ctx) {
	const returnValue = this.visit(ctx.expression());
	return new ASTNode("RETURN", null, returnValue,1);
  }

  visitCallList(ctx) {
	const variable = ctx.IDENTIFIER().getText();
	const args = ctx.expression().map(arg => this.visit(arg));
	return new ASTNode("CALL_LIST", { name: variable }, args,1);
  }

	visitCompareExpr(ctx) {
		const left = this.visit(ctx.expression(0));
		const right = this.visit(ctx.expression(1));
		const operator = ctx.getChild(1).getText();
		const operationMap = {
			'<': 'LT',
			'>': 'GT',
			'<=': 'LTE',
			'>=': 'GTE',
			'==': 'EQ',
			'!=': 'NE'
		};
		const operationType = operationMap[operator] || 'UNKNOWN';
		return new ASTNode("COMPARE", operationType, [left, right], 1);
	}
	visitProgram(ctx) {
		// Procesa todas las declaraciones
		const statements = ctx.statement().map(statement => this.visit(statement));
		// Retorna un nodo representando el programa completo
		
		return new ASTNode("END", null, statements);
	}
	


}


function countLeafNodes(node) {
	// Desciende recursivamente en `node[0]` hasta encontrar un nodo sin `node[0]`
	while (node[0] instanceof ASTNode || Array.isArray(node[0])) {
		node = node[0];
	}
	let leafCount = 0;
	// Condición para determinar si es una hoja: no tiene `children`
	if (!node.children || node.children.length === 0) {
		leafCount += node.weight;
	} else if (node.weight > 0) {
		leafCount += node.weight;
	}

	// Si tiene hijos en `children`, cuenta los nodos hoja en cada hijo recursivamente
	return leafCount += node.children.reduce((count, child) => count + countLeafNodes(child), 0);
}

export { MyVisitor, ASTNode };
