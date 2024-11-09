
import JavaScriptVisitor from "../parser/JavaScriptVisitor.js";

class ASTNode {
  constructor(type, value = null, children = []) {
    this.type = type;
    this.value = value;
    this.children = Array.isArray(children) ? children : [children];
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
    } else if (ctx.additiveExpr()) {
      return this.visitAdditiveExpr(ctx.visitAdditiveExpr());
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
    return new ASTNode(op, null, [left, right]);
  }

  // Visit for variable assignment (IDENTIFIER '=' expression)
  visitVariableAssignment(ctx) {
    const variableName = ctx.IDENTIFIER().getText(); // Get the variable name
    const expressionValue = this.visit(ctx.expression()); // Visit the expression on the right side
    return new ASTNode("LET", { name: variableName }, [expressionValue]);
  }
  visitNumberExpr(ctx) {
    return new ASTNode("INT", parseInt(ctx.NUMBER().getText(), 10));
  }


  visitParens(ctx) {
    return this.visit(ctx.expr());
  }
  visitIdentifierExpr(ctx) {
    const identifierName = ctx.getText();
    return new ASTNode("IDENTIFIER", { name: identifierName });
  }
  visitAdditiveExpr(ctx) {
    const left = this.visit(ctx.expression(0));
    const right = this.visit(ctx.expression(1));
    const operator = ctx.getChild(1).getText(); // Obtiene '+' o '-'
    const operationType = operator === '+' ? 'ADD' : 'SUB';
    return new ASTNode(operationType, null, [left, right]);
  }
  visitMultiplicativeExpr(ctx) {
    const left = this.visit(ctx.expression(0));
    const right = this.visit(ctx.expression(1));
    const operator = ctx.getChild(1).getText(); // Obtiene '*' o '/'
    const operationType = operator === '*' ? 'MUL' : 'DIV';
    return new ASTNode(operationType, null, [left, right]);
  }
  
  visitStringExpr(ctx) {
    return new ASTNode("STR", ctx.STRING_LITERAL().getText());
  }


  visitListExpression(ctx) {
    return new ASTNode("LIST", ctx.getText());
  } 
  compareExpr
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
    return new ASTNode("COMPARE", operationType, [left, right]);
  }
}

export { MyVisitor, ASTNode };
