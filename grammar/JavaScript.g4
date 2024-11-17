grammar JavaScript;

// Parser Rules
program: statement* EOF;

statement
    : declaration
    | functionDeclaration
    | expressionStatement
    | printStatement
    | blockStatement
    | ifBlockStatement
    | elseBlockStatement
    | ifThenElseStatement
    | ifThenStatement
    | returnStatement
    | whileStatement
    | functionLet
    | callList   
    

    ;

declaration
    : 'let' variableAssignment
    | 'const' variableAssignment
    ;



variableAssignment
    : IDENTIFIER '=' expression
    ;

functionDeclaration
    : 'let' IDENTIFIER '=' functionExpression | 'const' IDENTIFIER '=' functionExpression
    ;

functionLet
    : 'let' blockStatement 'in' blockStatement
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
    : 'print' '(' (expression (',' expression)*)? ')'
    ;

returnStatement
    : 'return' '(' (expression (',' expression)*)? ')'
    ;

blockStatement
    : '{' statement* '}'
    ;

ifBlockStatement
    : '{' statement* '}'
    ;

ifThenBlockStatement
    : '{' statement* '}'
    ;

elseBlockStatement
    : '{' statement* '}'
    ;

ifThenElseStatement
    : 'if' '('expression')' 'then' ifBlockStatement 'else' elseBlockStatement
    ;

ifThenStatement
    : 'if' '('expression')' 'then' ifThenBlockStatement 
    ;

whileStatement
    : 'while' '(' expression ')' ifThenBlockStatement
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
    | callList                                           # callLis
    | listExpression                                   # listExpr
    | callExpression                                   # callExpr
    | lambdaExpression                                 # lambdaExpr
    | variableAssignment                                # variableAssig
                                       
    ;

lambdaExpression
    : 'let' IDENTIFIER '=' functionExpression
    ;


callExpression
    : IDENTIFIER '(' (expression (',' expression)*)? ')'
    ;

callList
    : IDENTIFIER '['(expression (',' expression)*)']'
    ;

listExpression
    : '[' (expression (',' expression)*)? ']'
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
