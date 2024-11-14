
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
		return new ASTNode("PRINT", null, [message]);
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


	visitParens(ctx) {
		return this.visit(ctx.expr());
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
		return new ASTNode(operationType, null, [left, right], 1);
	}
	visitMultiplicativeExpr(ctx) {
		const left = this.visit(ctx.expression(0));
		const right = this.visit(ctx.expression(1));
		const operator = ctx.getChild(1).getText(); // Obtiene '*' o '/'
		const operationType = operator === '*' ? 'MUL' : 'DIV';
		return new ASTNode(operationType, null, [left, right], 1);
	}

	visitStringExpr(ctx) {
		return new ASTNode("STR", ctx.STRING_LITERAL().getText(), 1);
	}


	visitListExpression(ctx) {
		return new ASTNode("LIST", ctx.getText());
	}
	visitIfThenElseStatement(ctx) {
		const condition = this.visit(ctx.expression(0));
		condition.isIf = true;


		const thenBranch = this.visit(ctx.ifBlockStatement(0));
		
		const elseBranch = this.visit(ctx.elseBlockStatement(1));

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

	
		condition.weight = (countLeafNodes(thenBranch))+1;        //para que no caiga en el bt y se salte el else
		thenBranch.weight = countLeafNodes(elseBranch);
		return new ASTNode("IF_THEN_ELSE", null, [condition, thenBranch, elseBranch]);
	}

	visitIfBlockStatement(ctx) {
		const statements = ctx.statement().map(statement => this.visit(statement));

		return new ASTNode("blockStatement", null, statements);
	}

	visitElseBlockStatement(ctx) {
		const statements = ctx.statement().map(statement => this.visit(statement));
		return new ASTNode("elseBlockStatement", null, statements);
	}

	visitIfThenStatement(ctx) {
		const condition = this.visit(ctx.expression(0));
		const thenBranch = this.visit(ctx.ifBlockStatement(0));

		return new ASTNode("IF_THEN", null, [condition, thenBranch]);
	}

  visitFunctionDeclaration(ctx) {
    const functionName = ctx.IDENTIFIER().getText();
    const functionBody = this.visit(ctx.functionExpression());
    return new ASTNode("FUNCTION_DECLARATION", { name: functionName }, functionBody);
  }

  visitCallExpression(ctx) {
    const functionName = ctx.IDENTIFIER().getText();
    const args = ctx.expression().map(arg => this.visit(arg));
    return new ASTNode("CALL", { name: functionName }, args);
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
}

export { MyVisitor, ASTNode };
