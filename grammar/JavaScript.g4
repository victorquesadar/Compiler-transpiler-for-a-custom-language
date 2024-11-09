grammar JavaScript;

// Parser Rules
program: statement*;

statement
    : declaration
    | functionDeclaration
    | expressionStatement
    | printStatement
    | blockStatement
    ;

declaration
    : 'let' variableAssignment
    | 'const' variableAssignment
    ;

variableAssignment
    : IDENTIFIER '=' expression
    ;

functionDeclaration
    : 'let' IDENTIFIER '=' functionExpression
    ;

functionExpression
    : '(' formalParameters? ')' '=>' blockStatement
    ;

formalParameters
    : IDENTIFIER (',' IDENTIFIER)*
    ;

expressionStatement
    : expression
    ;

printStatement
    : 'print' '(' expression ')'
    ;

blockStatement
    : '{' statement* '}'
    ;

// Simplified expression rule with all operations in one place
expression
    : '(' expression ')'                               # parens
    | expression ('*' | '/' | '%') expression          # multiplicativeExpr
    | expression ('+' | '-') expression                # additiveExpr
    | expression ('<' | '>'| '<='| '>='| '==') expression       # compareExpr
    | ('+' | '-') expression                           # unaryExpr
    | IDENTIFIER                                       # identifierExpr
    | NUMBER                                           # numberExpr
    | STRING_LITERAL                                   # stringExpr
    | listExpression                                   # listExpr
    | callExpression                                   # callExpr
    | lambdaExpression                                 # lambdaExpr
    ;

lambdaExpression
    : 'let' IDENTIFIER '=' functionExpression
    ;

listExpression
    : '[' (expression (',' expression)*)? ']'
    ;

callExpression
    : IDENTIFIER '(' (expression (',' expression)*)? ')'
    ;

// Lexer Rules
IDENTIFIER
    : [a-zA-Z_][a-zA-Z0-9_]*
    ;

NUMBER
    : [0-9]+
    ;

STRING_LITERAL
    : '"' (~["\\] | '\\' .)* '"'
    ;

WS
    : [ \t\r\n]+ -> skip
    ;
