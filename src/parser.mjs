/**
 * @file
 * Este archivo contiene la implementación de un parser que recorre un árbol de sintaxis abstracta (AST) y ejecuta acciones
 * basadas en los nodos. Además, se incluye la definición de una clase para manejar visitantes personalizados.
 *
 * @version 1.0.0
 * @authors 
 * - Victor Quesada Rodriguez
 * - Esteban Mojica
 * - Pablo Alvarez
 * @date Última modificación: 2024-11-17
 */

import JavaScriptVisitor from "../parser/JavaScriptVisitor.js";

/**
 * Representa un nodo en el árbol de sintaxis abstracta (AST).
 */
class ASTNode {
    /**
     * Crea una instancia de ASTNode.
     * @param {string} type - El tipo de nodo (e.g., 'FUNCTION_DECLARATION', 'NUMBER').
     * @param {Object} [value=null] - Información adicional del nodo.
     * @param {ASTNode[]} [children=[]] - Hijos del nodo en el árbol de sintaxis.
     * @param {number} [weight=0] - Peso o metadatos adicionales del nodo.
     */
    constructor(type, value = null, children = [], weight = 0) {
        this.type = type;
        this.value = value;
        this.children = Array.isArray(children) ? children : [children];
        this.weight = weight;
    }
}
/**
 * Clase para manejar visitantes personalizados en el árbol de sintaxis abstracta (AST).
 */
class MyVisitor extends JavaScriptVisitor {
	 /**
     * Visita una declaración de impresión.
     * @param {Object} ctx - Contexto del nodo.
     * @returns {ASTNode} Nodo AST correspondiente.
     */
	visitPrintStatement(ctx) {
		const message = this.visit(ctx.expression());
		return new ASTNode("PRINT", null, [message],1);
	}

	/**
     * Visita una expresión.
     * @param {Object} ctx - Contexto del nodo.
     * @returns {ASTNode} Nodo AST correspondiente.
     */
	visitExpression(ctx) {
		if (ctx.binaryOperation()) {
			return this.visitBinaryOperation(ctx.binaryOperation());
		} else if (ctx.NUMBER()) {
			return new ASTNode("NUMBER", {
				value: parseFloat(ctx.NUMBER().getText()),
			});
		}
	}

	/**
     * Visita una declaración.
     * @param {Object} ctx - Contexto del nodo.
     * @returns {ASTNode} Nodo AST correspondiente.
     */
	visitDeclaration(ctx) {
		const isConstant = ctx.getChild(0).getText() === "const"; // 'const' or 'let'
		const variableAssignmentNode = this.visit(ctx.variableAssignment());
		return new ASTNode("DECLARATION", { isConstant }, [variableAssignmentNode]);
	}

	/**
     * Visita una operación binaria.
     * @param {Object} ctx - Contexto del nodo.
     * @returns {ASTNode} Nodo AST correspondiente.
     */
	visitBinaryOperation(ctx) {
		const left = this.visit(ctx.multiplicativeExpression(0));
		const right = this.visit(ctx.multiplicativeExpression(1));
		const op = ctx.getChild(1).getText(); // "+" o "-"
		return new ASTNode(op, null, [left, right], 1);
	}

	/**
     * Visita una asignación de variable.
     * @param {Object} ctx - Contexto del nodo.
     * @returns {ASTNode} Nodo AST correspondiente.
     */
	// Visit for variable assignment (IDENTIFIER '=' expression)
	visitVariableAssignment(ctx) {
		const variableName = ctx.IDENTIFIER().getText(); // Get the variable name
		const expressionValue = this.visit(ctx.expression()); // Visit the expression on the right side
		return new ASTNode("LET", { name: variableName }, [expressionValue], 1);
	}

	/**
     * Visita una expresión numérica.
     * @param {Object} ctx - Contexto del nodo.
     * @returns {ASTNode} Nodo AST correspondiente.
     */
	visitNumberExpr(ctx) {

		return new ASTNode("INT", parseInt(ctx.NUMBER().getText(), 10), [], 1);
	}


	/**
     * Visita una expresión de identificador.
     * @param {Object} ctx - Contexto del nodo.
     * @returns {ASTNode} Nodo AST correspondiente.
     */
	visitIdentifierExpr(ctx) {
		const identifierName = ctx.getText();
		return new ASTNode("IDENTIFIER", { name: identifierName }, [], 1);
	}

	/**
     * Visita una expresión aditiva.
     * @param {Object} ctx - Contexto del nodo.
     * @returns {ASTNode} Nodo AST correspondiente.
     */
	visitAdditiveExpr(ctx) {
		const left = this.visit(ctx.expression(0));
		const right = this.visit(ctx.expression(1));
		const operator = ctx.getChild(1).getText(); // Obtiene '+' o '-'
		const operationType = operator === '+' ? 'ADD' : 'SUB';
		return new ASTNode('BINARY_OPER', operationType, [left, right], 1);
	}

	/**
     * Visita una expresión multiplicativa.
     * @param {Object} ctx - Contexto del nodo.
     * @returns {ASTNode} Nodo AST correspondiente.
     */
	visitMultiplicativeExpr(ctx) {
		const left = this.visit(ctx.expression(0));
		const right = this.visit(ctx.expression(1));
		const operator = ctx.getChild(1).getText(); // Obtiene '*' o '/'
		const operationType = operator === '*' ? 'MUL' : 'DIV';
		return new ASTNode('BINARY_OPER', operationType, [left, right], 1);
	}


	/**
     * Visita una expresión de cadena.
     * @param {Object} ctx - Contexto del nodo.
     * @returns {ASTNode} Nodo AST correspondiente.
     */
	visitStringExpr(ctx) {
		return new ASTNode("STR", ctx.STRING_LITERAL().getText(),null, 1);
	}

	/**
     * Visita una expresión de lista.
     * @param {Object} ctx - Contexto del nodo.
     * @returns {ASTNode} Nodo AST correspondiente.
     */
	visitListExpression(ctx) {
		const nodes=new ASTNode("LIST", ctx.getText());
		nodes.weight=1;
		return nodes;
	}

	/**
     * Visita una declaración if-then-else.
     * @param {Object} ctx - Contexto del nodo.
     * @returns {ASTNode} Nodo AST correspondiente.
     */
	visitIfThenElseStatement(ctx) {
		const condition = this.visit(ctx.expression(0));
		condition.isIf = true;
		const thenBranch = this.visit(ctx.ifBlockStatement(0));
		const elseBranch = this.visit(ctx.elseBlockStatement(1));
		condition.weight = (countLeafNodes(thenBranch))+1;        //para que no caiga en el bt y se salte el else
		thenBranch.weight = countLeafNodes(elseBranch);
		return new ASTNode("IF_THEN_ELSE", null, [condition, thenBranch, elseBranch]);
	}

	/**
     * Visita un bloque if.
     * @param {Object} ctx - Contexto del nodo.
     * @returns {ASTNode} Nodo AST correspondiente.
     */
	visitIfBlockStatement(ctx) {
		const statements = ctx.statement().map(statement => this.visit(statement));

		return new ASTNode("blockStatement", null, statements);
	}

	/**
     * Visita un bloque if-then.
     * @param {Object} ctx - Contexto del nodo.
     * @returns {ASTNode} Nodo AST correspondiente.
     */
	visitIfThenBlockStatement(ctx) {
		const statements = ctx.statement().map(statement => this.visit(statement));

		return new ASTNode("blockStatementIf", null, statements);
	}

	/**
     * Visita un bloque else.
     * @param {Object} ctx - Contexto del nodo.
     * @returns {ASTNode} Nodo AST correspondiente.
     */
	visitElseBlockStatement(ctx) {
		const statements = ctx.statement().map(statement => this.visit(statement));
		return new ASTNode("elseBlockStatement", null, statements);
	}

	/**
     * Visita una declaración if-then.
     * @param {Object} ctx - Contexto del nodo.
     * @returns {ASTNode} Nodo AST correspondiente.
     */
	visitIfThenStatement(ctx) {
		const condition = this.visit(ctx.expression(0));
		condition.isIf = true;
		const thenBranch = this.visit(ctx.ifThenBlockStatement(0));	
		condition.weight = (countLeafNodes(thenBranch)) ; // para que no caiga en el bt y se salte el else
		thenBranch.weight = countLeafNodes(thenBranch);
		return new ASTNode("IF_THEN", null, [condition, thenBranch]);
	}


	 /**
     * Visita una declaración while.
     * @param {Object} ctx - Contexto del nodo.
     * @returns {ASTNode} Nodo AST correspondiente.
     */
	visitWhileStatement(ctx) {
		const condition = this.visit(ctx.expression());
		condition.isIf = true;
		const body = this.visit(ctx.ifThenBlockStatement());
		const result = countLeafNodes(body)+countLeafNodes(condition);
		return new ASTNode("WHILE", result, [condition, body]);

	}

	/**
     * Visita los parámetros formales de una función.
     * @param {Object} ctx - Contexto del nodo.
     * @returns {ASTNode} Nodo AST correspondiente.
     */
	visitFormalParameters(ctx) {
		const statements = ctx.IDENTIFIER().map(id => id.getText());
		let result = statements.length;
		return new ASTNode("PARAMETER", result, statements);
	}

	/**
     * Visita una declaración de función.
     * @param {Object} ctx - Contexto del nodo.
     * @returns {ASTNode} Nodo AST correspondiente.
     */
	visitFunctionDeclaration(ctx) {
		const functionName = ctx.IDENTIFIER().getText();
		const functionBody = this.visit(ctx.functionExpression());
		return new ASTNode("FUNCTION_DECLARATION", { name: functionName }, functionBody);
	}

	/**
     * Visita una declaración let-in.
     * @param {Object} ctx - Contexto del nodo.
     * @returns {ASTNode} Nodo AST correspondiente.
     */
	visitFunctionLet(ctx) {
		const body = this.visit(ctx.blockStatement(0));
		const body1 = this.visit(ctx.blockStatement(1));
		return new ASTNode("LET_IN", null, [body,body1]);
	}

	/**
     * Visita una expresión de llamada a función.
     * @param {Object} ctx - Contexto del nodo.
     * @returns {ASTNode} Nodo AST correspondiente.
     */
	visitCallExpression(ctx) {
		const functionName = ctx.IDENTIFIER().getText();
		const args = ctx.expression().map(arg => this.visit(arg));
		return new ASTNode("CALL", { name: functionName }, args,2);
	}

	/**
     * Visita una declaración de retorno.
     * @param {Object} ctx - Contexto del nodo.
     * @returns {ASTNode} Nodo AST correspondiente.
     */
	visitReturnStatement(ctx) {
		const returnValue = this.visit(ctx.expression());
		return new ASTNode("RETURN", null, returnValue,1);
	}

	 /**
     * Visita una lista de llamadas.
     * @param {Object} ctx - Contexto del nodo.
     * @returns {ASTNode} Nodo AST correspondiente.
     */
	visitCallList(ctx) {
		const variable = ctx.IDENTIFIER().getText();
		const args = ctx.expression().map(arg => this.visit(arg));
		return new ASTNode("CALL_LIST", { name: variable }, args,1);
	}

	 /**
     * Visita una expresión de comparación.
     * @param {Object} ctx - Contexto del nodo.
     * @returns {ASTNode} Nodo AST correspondiente.
     */
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

	/**
     * Visita el programa completo.
     * @param {Object} ctx - Contexto del nodo.
     * @returns {ASTNode} Nodo AST correspondiente.
     */
	visitProgram(ctx) {
		// Procesa todas las declaraciones
		const statements = ctx.statement().map(statement => this.visit(statement));
		// Retorna un nodo representando el programa completo
		
		return new ASTNode("END", null, statements);
	}
	


}


/**
 * Cuenta los nodos hoja en un árbol de sintaxis abstracta (AST).
 * 
 * @param {ASTNode} node - Nodo raíz del árbol o subárbol.
 * @returns {number} El número de nodos hoja en el árbol.
 */
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
