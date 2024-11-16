// Generated from ./grammar/JavaScript.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import JavaScriptVisitor from './JavaScriptVisitor.js';

const serializedATN = [4,1,30,217,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,1,
0,5,0,42,8,0,10,0,12,0,45,9,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,
1,57,8,1,1,2,1,2,1,2,1,2,3,2,63,8,2,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,
1,5,1,5,3,5,76,8,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,5,6,85,8,6,10,6,12,6,88,9,
6,1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,9,1,9,5,9,99,8,9,10,9,12,9,102,9,9,1,9,1,
9,1,10,1,10,5,10,108,8,10,10,10,12,10,111,9,10,1,10,1,10,1,11,1,11,5,11,
117,8,11,10,11,12,11,120,9,11,1,11,1,11,1,12,1,12,5,12,126,8,12,10,12,12,
12,129,9,12,1,12,1,12,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,14,
1,14,1,14,1,14,1,14,1,14,1,14,1,15,1,15,1,15,1,15,1,15,1,15,1,16,1,16,1,
16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,3,16,169,8,16,
1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,5,16,180,8,16,10,16,12,16,183,
9,16,1,17,1,17,1,17,1,17,1,17,1,18,1,18,1,18,1,18,5,18,194,8,18,10,18,12,
18,197,9,18,3,18,199,8,18,1,18,1,18,1,19,1,19,1,19,1,19,1,19,5,19,208,8,
19,10,19,12,19,211,9,19,3,19,213,8,19,1,19,1,19,1,19,0,1,32,20,0,2,4,6,8,
10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,0,3,1,0,18,19,1,0,15,17,1,0,
20,24,228,0,43,1,0,0,0,2,56,1,0,0,0,4,62,1,0,0,0,6,64,1,0,0,0,8,68,1,0,0,
0,10,73,1,0,0,0,12,81,1,0,0,0,14,89,1,0,0,0,16,91,1,0,0,0,18,96,1,0,0,0,
20,105,1,0,0,0,22,114,1,0,0,0,24,123,1,0,0,0,26,132,1,0,0,0,28,141,1,0,0,
0,30,148,1,0,0,0,32,168,1,0,0,0,34,184,1,0,0,0,36,189,1,0,0,0,38,202,1,0,
0,0,40,42,3,2,1,0,41,40,1,0,0,0,42,45,1,0,0,0,43,41,1,0,0,0,43,44,1,0,0,
0,44,1,1,0,0,0,45,43,1,0,0,0,46,57,3,4,2,0,47,57,3,8,4,0,48,57,3,14,7,0,
49,57,3,16,8,0,50,57,3,18,9,0,51,57,3,20,10,0,52,57,3,24,12,0,53,57,3,26,
13,0,54,57,3,28,14,0,55,57,3,30,15,0,56,46,1,0,0,0,56,47,1,0,0,0,56,48,1,
0,0,0,56,49,1,0,0,0,56,50,1,0,0,0,56,51,1,0,0,0,56,52,1,0,0,0,56,53,1,0,
0,0,56,54,1,0,0,0,56,55,1,0,0,0,57,3,1,0,0,0,58,59,5,1,0,0,59,63,3,6,3,0,
60,61,5,2,0,0,61,63,3,6,3,0,62,58,1,0,0,0,62,60,1,0,0,0,63,5,1,0,0,0,64,
65,5,27,0,0,65,66,5,3,0,0,66,67,3,32,16,0,67,7,1,0,0,0,68,69,5,1,0,0,69,
70,5,27,0,0,70,71,5,3,0,0,71,72,3,10,5,0,72,9,1,0,0,0,73,75,5,4,0,0,74,76,
3,12,6,0,75,74,1,0,0,0,75,76,1,0,0,0,76,77,1,0,0,0,77,78,5,5,0,0,78,79,5,
6,0,0,79,80,3,18,9,0,80,11,1,0,0,0,81,86,5,27,0,0,82,83,5,7,0,0,83,85,5,
27,0,0,84,82,1,0,0,0,85,88,1,0,0,0,86,84,1,0,0,0,86,87,1,0,0,0,87,13,1,0,
0,0,88,86,1,0,0,0,89,90,3,32,16,0,90,15,1,0,0,0,91,92,5,8,0,0,92,93,5,4,
0,0,93,94,3,32,16,0,94,95,5,5,0,0,95,17,1,0,0,0,96,100,5,9,0,0,97,99,3,2,
1,0,98,97,1,0,0,0,99,102,1,0,0,0,100,98,1,0,0,0,100,101,1,0,0,0,101,103,
1,0,0,0,102,100,1,0,0,0,103,104,5,10,0,0,104,19,1,0,0,0,105,109,5,9,0,0,
106,108,3,2,1,0,107,106,1,0,0,0,108,111,1,0,0,0,109,107,1,0,0,0,109,110,
1,0,0,0,110,112,1,0,0,0,111,109,1,0,0,0,112,113,5,10,0,0,113,21,1,0,0,0,
114,118,5,9,0,0,115,117,3,2,1,0,116,115,1,0,0,0,117,120,1,0,0,0,118,116,
1,0,0,0,118,119,1,0,0,0,119,121,1,0,0,0,120,118,1,0,0,0,121,122,5,10,0,0,
122,23,1,0,0,0,123,127,5,9,0,0,124,126,3,2,1,0,125,124,1,0,0,0,126,129,1,
0,0,0,127,125,1,0,0,0,127,128,1,0,0,0,128,130,1,0,0,0,129,127,1,0,0,0,130,
131,5,10,0,0,131,25,1,0,0,0,132,133,5,11,0,0,133,134,5,4,0,0,134,135,3,32,
16,0,135,136,5,5,0,0,136,137,5,12,0,0,137,138,3,20,10,0,138,139,5,13,0,0,
139,140,3,24,12,0,140,27,1,0,0,0,141,142,5,11,0,0,142,143,5,4,0,0,143,144,
3,32,16,0,144,145,5,5,0,0,145,146,5,12,0,0,146,147,3,22,11,0,147,29,1,0,
0,0,148,149,5,14,0,0,149,150,5,4,0,0,150,151,3,32,16,0,151,152,5,5,0,0,152,
153,3,18,9,0,153,31,1,0,0,0,154,155,6,16,-1,0,155,156,5,4,0,0,156,157,3,
32,16,0,157,158,5,5,0,0,158,169,1,0,0,0,159,160,7,0,0,0,160,169,3,32,16,
8,161,169,5,27,0,0,162,169,5,28,0,0,163,169,5,29,0,0,164,169,3,36,18,0,165,
169,3,38,19,0,166,169,3,34,17,0,167,169,3,6,3,0,168,154,1,0,0,0,168,159,
1,0,0,0,168,161,1,0,0,0,168,162,1,0,0,0,168,163,1,0,0,0,168,164,1,0,0,0,
168,165,1,0,0,0,168,166,1,0,0,0,168,167,1,0,0,0,169,181,1,0,0,0,170,171,
10,11,0,0,171,172,7,1,0,0,172,180,3,32,16,12,173,174,10,10,0,0,174,175,7,
0,0,0,175,180,3,32,16,11,176,177,10,9,0,0,177,178,7,2,0,0,178,180,3,32,16,
10,179,170,1,0,0,0,179,173,1,0,0,0,179,176,1,0,0,0,180,183,1,0,0,0,181,179,
1,0,0,0,181,182,1,0,0,0,182,33,1,0,0,0,183,181,1,0,0,0,184,185,5,1,0,0,185,
186,5,27,0,0,186,187,5,3,0,0,187,188,3,10,5,0,188,35,1,0,0,0,189,198,5,25,
0,0,190,195,3,32,16,0,191,192,5,7,0,0,192,194,3,32,16,0,193,191,1,0,0,0,
194,197,1,0,0,0,195,193,1,0,0,0,195,196,1,0,0,0,196,199,1,0,0,0,197,195,
1,0,0,0,198,190,1,0,0,0,198,199,1,0,0,0,199,200,1,0,0,0,200,201,5,26,0,0,
201,37,1,0,0,0,202,203,5,27,0,0,203,212,5,4,0,0,204,209,3,32,16,0,205,206,
5,7,0,0,206,208,3,32,16,0,207,205,1,0,0,0,208,211,1,0,0,0,209,207,1,0,0,
0,209,210,1,0,0,0,210,213,1,0,0,0,211,209,1,0,0,0,212,204,1,0,0,0,212,213,
1,0,0,0,213,214,1,0,0,0,214,215,5,5,0,0,215,39,1,0,0,0,16,43,56,62,75,86,
100,109,118,127,168,179,181,195,198,209,212];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class JavaScriptParser extends antlr4.Parser {

    static grammarFileName = "JavaScript.g4";
    static literalNames = [ null, "'let'", "'const'", "'='", "'('", "')'", 
                            "'=>'", "','", "'print'", "'{'", "'}'", "'if'", 
                            "'then'", "'else'", "'while'", "'*'", "'/'", 
                            "'%'", "'+'", "'-'", "'<'", "'>'", "'<='", "'>='", 
                            "'=='", "'['", "']'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, "IDENTIFIER", "NUMBER", "STRING_LITERAL", 
                             "WS" ];
    static ruleNames = [ "program", "statement", "declaration", "variableAssignment", 
                         "functionDeclaration", "functionExpression", "formalParameters", 
                         "expressionStatement", "printStatement", "blockStatement", 
                         "ifBlockStatement", "ifThenBlockStatement", "elseBlockStatement", 
                         "ifThenElseStatement", "ifThenStatement", "whileStatement", 
                         "expression", "lambdaExpression", "listExpression", 
                         "callExpression" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = JavaScriptParser.ruleNames;
        this.literalNames = JavaScriptParser.literalNames;
        this.symbolicNames = JavaScriptParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 16:
    	    		return this.expression_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 11);
    		case 1:
    			return this.precpred(this._ctx, 10);
    		case 2:
    			return this.precpred(this._ctx, 9);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, JavaScriptParser.RULE_program);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 43;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 973884182) !== 0)) {
	            this.state = 40;
	            this.statement();
	            this.state = 45;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, JavaScriptParser.RULE_statement);
	    try {
	        this.state = 56;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 46;
	            this.declaration();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 47;
	            this.functionDeclaration();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 48;
	            this.expressionStatement();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 49;
	            this.printStatement();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 50;
	            this.blockStatement();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 51;
	            this.ifBlockStatement();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 52;
	            this.elseBlockStatement();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 53;
	            this.ifThenElseStatement();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 54;
	            this.ifThenStatement();
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 55;
	            this.whileStatement();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	declaration() {
	    let localctx = new DeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, JavaScriptParser.RULE_declaration);
	    try {
	        this.state = 62;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 58;
	            this.match(JavaScriptParser.T__0);
	            this.state = 59;
	            this.variableAssignment();
	            break;
	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 60;
	            this.match(JavaScriptParser.T__1);
	            this.state = 61;
	            this.variableAssignment();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	variableAssignment() {
	    let localctx = new VariableAssignmentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, JavaScriptParser.RULE_variableAssignment);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 64;
	        this.match(JavaScriptParser.IDENTIFIER);
	        this.state = 65;
	        this.match(JavaScriptParser.T__2);
	        this.state = 66;
	        this.expression(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	functionDeclaration() {
	    let localctx = new FunctionDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, JavaScriptParser.RULE_functionDeclaration);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 68;
	        this.match(JavaScriptParser.T__0);
	        this.state = 69;
	        this.match(JavaScriptParser.IDENTIFIER);
	        this.state = 70;
	        this.match(JavaScriptParser.T__2);
	        this.state = 71;
	        this.functionExpression();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	functionExpression() {
	    let localctx = new FunctionExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, JavaScriptParser.RULE_functionExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 73;
	        this.match(JavaScriptParser.T__3);
	        this.state = 75;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===27) {
	            this.state = 74;
	            this.formalParameters();
	        }

	        this.state = 77;
	        this.match(JavaScriptParser.T__4);
	        this.state = 78;
	        this.match(JavaScriptParser.T__5);
	        this.state = 79;
	        this.blockStatement();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	formalParameters() {
	    let localctx = new FormalParametersContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, JavaScriptParser.RULE_formalParameters);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 81;
	        this.match(JavaScriptParser.IDENTIFIER);
	        this.state = 86;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===7) {
	            this.state = 82;
	            this.match(JavaScriptParser.T__6);
	            this.state = 83;
	            this.match(JavaScriptParser.IDENTIFIER);
	            this.state = 88;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expressionStatement() {
	    let localctx = new ExpressionStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, JavaScriptParser.RULE_expressionStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 89;
	        this.expression(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	printStatement() {
	    let localctx = new PrintStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, JavaScriptParser.RULE_printStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 91;
	        this.match(JavaScriptParser.T__7);
	        this.state = 92;
	        this.match(JavaScriptParser.T__3);
	        this.state = 93;
	        this.expression(0);
	        this.state = 94;
	        this.match(JavaScriptParser.T__4);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	blockStatement() {
	    let localctx = new BlockStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, JavaScriptParser.RULE_blockStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 96;
	        this.match(JavaScriptParser.T__8);
	        this.state = 100;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 973884182) !== 0)) {
	            this.state = 97;
	            this.statement();
	            this.state = 102;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 103;
	        this.match(JavaScriptParser.T__9);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ifBlockStatement() {
	    let localctx = new IfBlockStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, JavaScriptParser.RULE_ifBlockStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 105;
	        this.match(JavaScriptParser.T__8);
	        this.state = 109;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 973884182) !== 0)) {
	            this.state = 106;
	            this.statement();
	            this.state = 111;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 112;
	        this.match(JavaScriptParser.T__9);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ifThenBlockStatement() {
	    let localctx = new IfThenBlockStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, JavaScriptParser.RULE_ifThenBlockStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 114;
	        this.match(JavaScriptParser.T__8);
	        this.state = 118;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 973884182) !== 0)) {
	            this.state = 115;
	            this.statement();
	            this.state = 120;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 121;
	        this.match(JavaScriptParser.T__9);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	elseBlockStatement() {
	    let localctx = new ElseBlockStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, JavaScriptParser.RULE_elseBlockStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 123;
	        this.match(JavaScriptParser.T__8);
	        this.state = 127;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 973884182) !== 0)) {
	            this.state = 124;
	            this.statement();
	            this.state = 129;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 130;
	        this.match(JavaScriptParser.T__9);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ifThenElseStatement() {
	    let localctx = new IfThenElseStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, JavaScriptParser.RULE_ifThenElseStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 132;
	        this.match(JavaScriptParser.T__10);
	        this.state = 133;
	        this.match(JavaScriptParser.T__3);
	        this.state = 134;
	        this.expression(0);
	        this.state = 135;
	        this.match(JavaScriptParser.T__4);
	        this.state = 136;
	        this.match(JavaScriptParser.T__11);
	        this.state = 137;
	        this.ifBlockStatement();
	        this.state = 138;
	        this.match(JavaScriptParser.T__12);
	        this.state = 139;
	        this.elseBlockStatement();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ifThenStatement() {
	    let localctx = new IfThenStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, JavaScriptParser.RULE_ifThenStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 141;
	        this.match(JavaScriptParser.T__10);
	        this.state = 142;
	        this.match(JavaScriptParser.T__3);
	        this.state = 143;
	        this.expression(0);
	        this.state = 144;
	        this.match(JavaScriptParser.T__4);
	        this.state = 145;
	        this.match(JavaScriptParser.T__11);
	        this.state = 146;
	        this.ifThenBlockStatement();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	whileStatement() {
	    let localctx = new WhileStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, JavaScriptParser.RULE_whileStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 148;
	        this.match(JavaScriptParser.T__13);
	        this.state = 149;
	        this.match(JavaScriptParser.T__3);
	        this.state = 150;
	        this.expression(0);
	        this.state = 151;
	        this.match(JavaScriptParser.T__4);
	        this.state = 152;
	        this.blockStatement();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	expression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExpressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 32;
	    this.enterRecursionRule(localctx, 32, JavaScriptParser.RULE_expression, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 168;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ParensContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 155;
	            this.match(JavaScriptParser.T__3);
	            this.state = 156;
	            this.expression(0);
	            this.state = 157;
	            this.match(JavaScriptParser.T__4);
	            break;

	        case 2:
	            localctx = new UnaryExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 159;
	            _la = this._input.LA(1);
	            if(!(_la===18 || _la===19)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 160;
	            this.expression(8);
	            break;

	        case 3:
	            localctx = new IdentifierExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 161;
	            this.match(JavaScriptParser.IDENTIFIER);
	            break;

	        case 4:
	            localctx = new NumberExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 162;
	            this.match(JavaScriptParser.NUMBER);
	            break;

	        case 5:
	            localctx = new StringExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 163;
	            this.match(JavaScriptParser.STRING_LITERAL);
	            break;

	        case 6:
	            localctx = new ListExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 164;
	            this.listExpression();
	            break;

	        case 7:
	            localctx = new CallExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 165;
	            this.callExpression();
	            break;

	        case 8:
	            localctx = new LambdaExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 166;
	            this.lambdaExpression();
	            break;

	        case 9:
	            localctx = new VariableAssigContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 167;
	            this.variableAssignment();
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 181;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,11,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 179;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new MultiplicativeExprContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, JavaScriptParser.RULE_expression);
	                    this.state = 170;
	                    if (!( this.precpred(this._ctx, 11))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
	                    }
	                    this.state = 171;
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 229376) !== 0))) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 172;
	                    this.expression(12);
	                    break;

	                case 2:
	                    localctx = new AdditiveExprContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, JavaScriptParser.RULE_expression);
	                    this.state = 173;
	                    if (!( this.precpred(this._ctx, 10))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
	                    }
	                    this.state = 174;
	                    _la = this._input.LA(1);
	                    if(!(_la===18 || _la===19)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 175;
	                    this.expression(11);
	                    break;

	                case 3:
	                    localctx = new CompareExprContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, JavaScriptParser.RULE_expression);
	                    this.state = 176;
	                    if (!( this.precpred(this._ctx, 9))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
	                    }
	                    this.state = 177;
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 32505856) !== 0))) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 178;
	                    this.expression(10);
	                    break;

	                } 
	            }
	            this.state = 183;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,11,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	lambdaExpression() {
	    let localctx = new LambdaExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, JavaScriptParser.RULE_lambdaExpression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 184;
	        this.match(JavaScriptParser.T__0);
	        this.state = 185;
	        this.match(JavaScriptParser.IDENTIFIER);
	        this.state = 186;
	        this.match(JavaScriptParser.T__2);
	        this.state = 187;
	        this.functionExpression();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	listExpression() {
	    let localctx = new ListExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, JavaScriptParser.RULE_listExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 189;
	        this.match(JavaScriptParser.T__24);
	        this.state = 198;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 973864978) !== 0)) {
	            this.state = 190;
	            this.expression(0);
	            this.state = 195;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===7) {
	                this.state = 191;
	                this.match(JavaScriptParser.T__6);
	                this.state = 192;
	                this.expression(0);
	                this.state = 197;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 200;
	        this.match(JavaScriptParser.T__25);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	callExpression() {
	    let localctx = new CallExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, JavaScriptParser.RULE_callExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 202;
	        this.match(JavaScriptParser.IDENTIFIER);
	        this.state = 203;
	        this.match(JavaScriptParser.T__3);
	        this.state = 212;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 973864978) !== 0)) {
	            this.state = 204;
	            this.expression(0);
	            this.state = 209;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===7) {
	                this.state = 205;
	                this.match(JavaScriptParser.T__6);
	                this.state = 206;
	                this.expression(0);
	                this.state = 211;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 214;
	        this.match(JavaScriptParser.T__4);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

JavaScriptParser.EOF = antlr4.Token.EOF;
JavaScriptParser.T__0 = 1;
JavaScriptParser.T__1 = 2;
JavaScriptParser.T__2 = 3;
JavaScriptParser.T__3 = 4;
JavaScriptParser.T__4 = 5;
JavaScriptParser.T__5 = 6;
JavaScriptParser.T__6 = 7;
JavaScriptParser.T__7 = 8;
JavaScriptParser.T__8 = 9;
JavaScriptParser.T__9 = 10;
JavaScriptParser.T__10 = 11;
JavaScriptParser.T__11 = 12;
JavaScriptParser.T__12 = 13;
JavaScriptParser.T__13 = 14;
JavaScriptParser.T__14 = 15;
JavaScriptParser.T__15 = 16;
JavaScriptParser.T__16 = 17;
JavaScriptParser.T__17 = 18;
JavaScriptParser.T__18 = 19;
JavaScriptParser.T__19 = 20;
JavaScriptParser.T__20 = 21;
JavaScriptParser.T__21 = 22;
JavaScriptParser.T__22 = 23;
JavaScriptParser.T__23 = 24;
JavaScriptParser.T__24 = 25;
JavaScriptParser.T__25 = 26;
JavaScriptParser.IDENTIFIER = 27;
JavaScriptParser.NUMBER = 28;
JavaScriptParser.STRING_LITERAL = 29;
JavaScriptParser.WS = 30;

JavaScriptParser.RULE_program = 0;
JavaScriptParser.RULE_statement = 1;
JavaScriptParser.RULE_declaration = 2;
JavaScriptParser.RULE_variableAssignment = 3;
JavaScriptParser.RULE_functionDeclaration = 4;
JavaScriptParser.RULE_functionExpression = 5;
JavaScriptParser.RULE_formalParameters = 6;
JavaScriptParser.RULE_expressionStatement = 7;
JavaScriptParser.RULE_printStatement = 8;
JavaScriptParser.RULE_blockStatement = 9;
JavaScriptParser.RULE_ifBlockStatement = 10;
JavaScriptParser.RULE_ifThenBlockStatement = 11;
JavaScriptParser.RULE_elseBlockStatement = 12;
JavaScriptParser.RULE_ifThenElseStatement = 13;
JavaScriptParser.RULE_ifThenStatement = 14;
JavaScriptParser.RULE_whileStatement = 15;
JavaScriptParser.RULE_expression = 16;
JavaScriptParser.RULE_lambdaExpression = 17;
JavaScriptParser.RULE_listExpression = 18;
JavaScriptParser.RULE_callExpression = 19;

class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavaScriptParser.RULE_program;
    }

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof JavaScriptVisitor ) {
	        return visitor.visitProgram(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavaScriptParser.RULE_statement;
    }

	declaration() {
	    return this.getTypedRuleContext(DeclarationContext,0);
	};

	functionDeclaration() {
	    return this.getTypedRuleContext(FunctionDeclarationContext,0);
	};

	expressionStatement() {
	    return this.getTypedRuleContext(ExpressionStatementContext,0);
	};

	printStatement() {
	    return this.getTypedRuleContext(PrintStatementContext,0);
	};

	blockStatement() {
	    return this.getTypedRuleContext(BlockStatementContext,0);
	};

	ifBlockStatement() {
	    return this.getTypedRuleContext(IfBlockStatementContext,0);
	};

	elseBlockStatement() {
	    return this.getTypedRuleContext(ElseBlockStatementContext,0);
	};

	ifThenElseStatement() {
	    return this.getTypedRuleContext(IfThenElseStatementContext,0);
	};

	ifThenStatement() {
	    return this.getTypedRuleContext(IfThenStatementContext,0);
	};

	whileStatement() {
	    return this.getTypedRuleContext(WhileStatementContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof JavaScriptVisitor ) {
	        return visitor.visitStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavaScriptParser.RULE_declaration;
    }

	variableAssignment() {
	    return this.getTypedRuleContext(VariableAssignmentContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof JavaScriptVisitor ) {
	        return visitor.visitDeclaration(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VariableAssignmentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavaScriptParser.RULE_variableAssignment;
    }

	IDENTIFIER() {
	    return this.getToken(JavaScriptParser.IDENTIFIER, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof JavaScriptVisitor ) {
	        return visitor.visitVariableAssignment(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FunctionDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavaScriptParser.RULE_functionDeclaration;
    }

	IDENTIFIER() {
	    return this.getToken(JavaScriptParser.IDENTIFIER, 0);
	};

	functionExpression() {
	    return this.getTypedRuleContext(FunctionExpressionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof JavaScriptVisitor ) {
	        return visitor.visitFunctionDeclaration(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FunctionExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavaScriptParser.RULE_functionExpression;
    }

	blockStatement() {
	    return this.getTypedRuleContext(BlockStatementContext,0);
	};

	formalParameters() {
	    return this.getTypedRuleContext(FormalParametersContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof JavaScriptVisitor ) {
	        return visitor.visitFunctionExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FormalParametersContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavaScriptParser.RULE_formalParameters;
    }

	IDENTIFIER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(JavaScriptParser.IDENTIFIER);
	    } else {
	        return this.getToken(JavaScriptParser.IDENTIFIER, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof JavaScriptVisitor ) {
	        return visitor.visitFormalParameters(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpressionStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavaScriptParser.RULE_expressionStatement;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof JavaScriptVisitor ) {
	        return visitor.visitExpressionStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PrintStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavaScriptParser.RULE_printStatement;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof JavaScriptVisitor ) {
	        return visitor.visitPrintStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BlockStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavaScriptParser.RULE_blockStatement;
    }

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof JavaScriptVisitor ) {
	        return visitor.visitBlockStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IfBlockStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavaScriptParser.RULE_ifBlockStatement;
    }

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof JavaScriptVisitor ) {
	        return visitor.visitIfBlockStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IfThenBlockStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavaScriptParser.RULE_ifThenBlockStatement;
    }

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof JavaScriptVisitor ) {
	        return visitor.visitIfThenBlockStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ElseBlockStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavaScriptParser.RULE_elseBlockStatement;
    }

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof JavaScriptVisitor ) {
	        return visitor.visitElseBlockStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IfThenElseStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavaScriptParser.RULE_ifThenElseStatement;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	ifBlockStatement() {
	    return this.getTypedRuleContext(IfBlockStatementContext,0);
	};

	elseBlockStatement() {
	    return this.getTypedRuleContext(ElseBlockStatementContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof JavaScriptVisitor ) {
	        return visitor.visitIfThenElseStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IfThenStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavaScriptParser.RULE_ifThenStatement;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	ifThenBlockStatement() {
	    return this.getTypedRuleContext(IfThenBlockStatementContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof JavaScriptVisitor ) {
	        return visitor.visitIfThenStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class WhileStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavaScriptParser.RULE_whileStatement;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	blockStatement() {
	    return this.getTypedRuleContext(BlockStatementContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof JavaScriptVisitor ) {
	        return visitor.visitWhileStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavaScriptParser.RULE_expression;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class StringExprContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	STRING_LITERAL() {
	    return this.getToken(JavaScriptParser.STRING_LITERAL, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof JavaScriptVisitor ) {
	        return visitor.visitStringExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JavaScriptParser.StringExprContext = StringExprContext;

class ParensContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof JavaScriptVisitor ) {
	        return visitor.visitParens(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JavaScriptParser.ParensContext = ParensContext;

class VariableAssigContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	variableAssignment() {
	    return this.getTypedRuleContext(VariableAssignmentContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof JavaScriptVisitor ) {
	        return visitor.visitVariableAssig(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JavaScriptParser.VariableAssigContext = VariableAssigContext;

class UnaryExprContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof JavaScriptVisitor ) {
	        return visitor.visitUnaryExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JavaScriptParser.UnaryExprContext = UnaryExprContext;

class LambdaExprContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	lambdaExpression() {
	    return this.getTypedRuleContext(LambdaExpressionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof JavaScriptVisitor ) {
	        return visitor.visitLambdaExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JavaScriptParser.LambdaExprContext = LambdaExprContext;

class NumberExprContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	NUMBER() {
	    return this.getToken(JavaScriptParser.NUMBER, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof JavaScriptVisitor ) {
	        return visitor.visitNumberExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JavaScriptParser.NumberExprContext = NumberExprContext;

class AdditiveExprContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof JavaScriptVisitor ) {
	        return visitor.visitAdditiveExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JavaScriptParser.AdditiveExprContext = AdditiveExprContext;

class CallExprContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	callExpression() {
	    return this.getTypedRuleContext(CallExpressionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof JavaScriptVisitor ) {
	        return visitor.visitCallExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JavaScriptParser.CallExprContext = CallExprContext;

class ListExprContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	listExpression() {
	    return this.getTypedRuleContext(ListExpressionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof JavaScriptVisitor ) {
	        return visitor.visitListExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JavaScriptParser.ListExprContext = ListExprContext;

class MultiplicativeExprContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof JavaScriptVisitor ) {
	        return visitor.visitMultiplicativeExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JavaScriptParser.MultiplicativeExprContext = MultiplicativeExprContext;

class IdentifierExprContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	IDENTIFIER() {
	    return this.getToken(JavaScriptParser.IDENTIFIER, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof JavaScriptVisitor ) {
	        return visitor.visitIdentifierExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JavaScriptParser.IdentifierExprContext = IdentifierExprContext;

class CompareExprContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof JavaScriptVisitor ) {
	        return visitor.visitCompareExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JavaScriptParser.CompareExprContext = CompareExprContext;

class LambdaExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavaScriptParser.RULE_lambdaExpression;
    }

	IDENTIFIER() {
	    return this.getToken(JavaScriptParser.IDENTIFIER, 0);
	};

	functionExpression() {
	    return this.getTypedRuleContext(FunctionExpressionContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof JavaScriptVisitor ) {
	        return visitor.visitLambdaExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ListExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavaScriptParser.RULE_listExpression;
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof JavaScriptVisitor ) {
	        return visitor.visitListExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CallExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavaScriptParser.RULE_callExpression;
    }

	IDENTIFIER() {
	    return this.getToken(JavaScriptParser.IDENTIFIER, 0);
	};

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof JavaScriptVisitor ) {
	        return visitor.visitCallExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




JavaScriptParser.ProgramContext = ProgramContext; 
JavaScriptParser.StatementContext = StatementContext; 
JavaScriptParser.DeclarationContext = DeclarationContext; 
JavaScriptParser.VariableAssignmentContext = VariableAssignmentContext; 
JavaScriptParser.FunctionDeclarationContext = FunctionDeclarationContext; 
JavaScriptParser.FunctionExpressionContext = FunctionExpressionContext; 
JavaScriptParser.FormalParametersContext = FormalParametersContext; 
JavaScriptParser.ExpressionStatementContext = ExpressionStatementContext; 
JavaScriptParser.PrintStatementContext = PrintStatementContext; 
JavaScriptParser.BlockStatementContext = BlockStatementContext; 
JavaScriptParser.IfBlockStatementContext = IfBlockStatementContext; 
JavaScriptParser.IfThenBlockStatementContext = IfThenBlockStatementContext; 
JavaScriptParser.ElseBlockStatementContext = ElseBlockStatementContext; 
JavaScriptParser.IfThenElseStatementContext = IfThenElseStatementContext; 
JavaScriptParser.IfThenStatementContext = IfThenStatementContext; 
JavaScriptParser.WhileStatementContext = WhileStatementContext; 
JavaScriptParser.ExpressionContext = ExpressionContext; 
JavaScriptParser.LambdaExpressionContext = LambdaExpressionContext; 
JavaScriptParser.ListExpressionContext = ListExpressionContext; 
JavaScriptParser.CallExpressionContext = CallExpressionContext; 
