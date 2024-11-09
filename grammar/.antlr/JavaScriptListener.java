// Generated from c:/Users/USUARIO/Downloads/EIF400-II-2024-simpleCompilerDemo-CLoria (1)/simpleCompilerDemo/grammar/JavaScript.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link JavaScriptParser}.
 */
public interface JavaScriptListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link JavaScriptParser#program}.
	 * @param ctx the parse tree
	 */
	void enterProgram(JavaScriptParser.ProgramContext ctx);
	/**
	 * Exit a parse tree produced by {@link JavaScriptParser#program}.
	 * @param ctx the parse tree
	 */
	void exitProgram(JavaScriptParser.ProgramContext ctx);
	/**
	 * Enter a parse tree produced by {@link JavaScriptParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterStatement(JavaScriptParser.StatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link JavaScriptParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitStatement(JavaScriptParser.StatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link JavaScriptParser#declaration}.
	 * @param ctx the parse tree
	 */
	void enterDeclaration(JavaScriptParser.DeclarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link JavaScriptParser#declaration}.
	 * @param ctx the parse tree
	 */
	void exitDeclaration(JavaScriptParser.DeclarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link JavaScriptParser#variableAssignment}.
	 * @param ctx the parse tree
	 */
	void enterVariableAssignment(JavaScriptParser.VariableAssignmentContext ctx);
	/**
	 * Exit a parse tree produced by {@link JavaScriptParser#variableAssignment}.
	 * @param ctx the parse tree
	 */
	void exitVariableAssignment(JavaScriptParser.VariableAssignmentContext ctx);
	/**
	 * Enter a parse tree produced by {@link JavaScriptParser#functionDeclaration}.
	 * @param ctx the parse tree
	 */
	void enterFunctionDeclaration(JavaScriptParser.FunctionDeclarationContext ctx);
	/**
	 * Exit a parse tree produced by {@link JavaScriptParser#functionDeclaration}.
	 * @param ctx the parse tree
	 */
	void exitFunctionDeclaration(JavaScriptParser.FunctionDeclarationContext ctx);
	/**
	 * Enter a parse tree produced by {@link JavaScriptParser#functionExpression}.
	 * @param ctx the parse tree
	 */
	void enterFunctionExpression(JavaScriptParser.FunctionExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link JavaScriptParser#functionExpression}.
	 * @param ctx the parse tree
	 */
	void exitFunctionExpression(JavaScriptParser.FunctionExpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link JavaScriptParser#formalParameters}.
	 * @param ctx the parse tree
	 */
	void enterFormalParameters(JavaScriptParser.FormalParametersContext ctx);
	/**
	 * Exit a parse tree produced by {@link JavaScriptParser#formalParameters}.
	 * @param ctx the parse tree
	 */
	void exitFormalParameters(JavaScriptParser.FormalParametersContext ctx);
	/**
	 * Enter a parse tree produced by {@link JavaScriptParser#expressionStatement}.
	 * @param ctx the parse tree
	 */
	void enterExpressionStatement(JavaScriptParser.ExpressionStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link JavaScriptParser#expressionStatement}.
	 * @param ctx the parse tree
	 */
	void exitExpressionStatement(JavaScriptParser.ExpressionStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link JavaScriptParser#printStatement}.
	 * @param ctx the parse tree
	 */
	void enterPrintStatement(JavaScriptParser.PrintStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link JavaScriptParser#printStatement}.
	 * @param ctx the parse tree
	 */
	void exitPrintStatement(JavaScriptParser.PrintStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link JavaScriptParser#blockStatement}.
	 * @param ctx the parse tree
	 */
	void enterBlockStatement(JavaScriptParser.BlockStatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link JavaScriptParser#blockStatement}.
	 * @param ctx the parse tree
	 */
	void exitBlockStatement(JavaScriptParser.BlockStatementContext ctx);
	/**
	 * Enter a parse tree produced by {@link JavaScriptParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterExpression(JavaScriptParser.ExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link JavaScriptParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitExpression(JavaScriptParser.ExpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link JavaScriptParser#binaryOperation}.
	 * @param ctx the parse tree
	 */
	void enterBinaryOperation(JavaScriptParser.BinaryOperationContext ctx);
	/**
	 * Exit a parse tree produced by {@link JavaScriptParser#binaryOperation}.
	 * @param ctx the parse tree
	 */
	void exitBinaryOperation(JavaScriptParser.BinaryOperationContext ctx);
	/**
	 * Enter a parse tree produced by {@link JavaScriptParser#multiplicativeExpression}.
	 * @param ctx the parse tree
	 */
	void enterMultiplicativeExpression(JavaScriptParser.MultiplicativeExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link JavaScriptParser#multiplicativeExpression}.
	 * @param ctx the parse tree
	 */
	void exitMultiplicativeExpression(JavaScriptParser.MultiplicativeExpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link JavaScriptParser#unaryExpression}.
	 * @param ctx the parse tree
	 */
	void enterUnaryExpression(JavaScriptParser.UnaryExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link JavaScriptParser#unaryExpression}.
	 * @param ctx the parse tree
	 */
	void exitUnaryExpression(JavaScriptParser.UnaryExpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link JavaScriptParser#lambdaExpression}.
	 * @param ctx the parse tree
	 */
	void enterLambdaExpression(JavaScriptParser.LambdaExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link JavaScriptParser#lambdaExpression}.
	 * @param ctx the parse tree
	 */
	void exitLambdaExpression(JavaScriptParser.LambdaExpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link JavaScriptParser#listExpression}.
	 * @param ctx the parse tree
	 */
	void enterListExpression(JavaScriptParser.ListExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link JavaScriptParser#listExpression}.
	 * @param ctx the parse tree
	 */
	void exitListExpression(JavaScriptParser.ListExpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link JavaScriptParser#callExpression}.
	 * @param ctx the parse tree
	 */
	void enterCallExpression(JavaScriptParser.CallExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link JavaScriptParser#callExpression}.
	 * @param ctx the parse tree
	 */
	void exitCallExpression(JavaScriptParser.CallExpressionContext ctx);
}