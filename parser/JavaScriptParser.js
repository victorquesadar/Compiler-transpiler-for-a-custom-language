// Generated from ./grammar/JavaScript.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import JavaScriptVisitor from './JavaScriptVisitor.js';

const serializedATN = [4,1,30,206,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,1,0,5,0,40,8,
0,10,0,12,0,43,9,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,55,8,1,1,
2,1,2,1,2,1,2,3,2,61,8,2,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,5,1,5,3,5,
74,8,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,5,6,83,8,6,10,6,12,6,86,9,6,1,7,1,7,1,
8,1,8,1,8,1,8,1,8,1,9,1,9,5,9,97,8,9,10,9,12,9,100,9,9,1,9,1,9,1,10,1,10,
5,10,106,8,10,10,10,12,10,109,9,10,1,10,1,10,1,11,1,11,5,11,115,8,11,10,
11,12,11,118,9,11,1,11,1,11,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,
1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,14,1,14,1,14,1,14,1,14,1,14,1,15,1,
15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,3,15,158,
8,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,5,15,169,8,15,10,15,12,
15,172,9,15,1,16,1,16,1,16,1,16,1,16,1,17,1,17,1,17,1,17,5,17,183,8,17,10,
17,12,17,186,9,17,3,17,188,8,17,1,17,1,17,1,18,1,18,1,18,1,18,1,18,5,18,
197,8,18,10,18,12,18,200,9,18,3,18,202,8,18,1,18,1,18,1,18,0,1,30,19,0,2,
4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,0,3,1,0,18,19,1,0,15,17,
1,0,20,24,217,0,41,1,0,0,0,2,54,1,0,0,0,4,60,1,0,0,0,6,62,1,0,0,0,8,66,1,
0,0,0,10,71,1,0,0,0,12,79,1,0,0,0,14,87,1,0,0,0,16,89,1,0,0,0,18,94,1,0,
0,0,20,103,1,0,0,0,22,112,1,0,0,0,24,121,1,0,0,0,26,130,1,0,0,0,28,137,1,
0,0,0,30,157,1,0,0,0,32,173,1,0,0,0,34,178,1,0,0,0,36,191,1,0,0,0,38,40,
3,2,1,0,39,38,1,0,0,0,40,43,1,0,0,0,41,39,1,0,0,0,41,42,1,0,0,0,42,1,1,0,
0,0,43,41,1,0,0,0,44,55,3,4,2,0,45,55,3,8,4,0,46,55,3,14,7,0,47,55,3,16,
8,0,48,55,3,18,9,0,49,55,3,20,10,0,50,55,3,22,11,0,51,55,3,24,12,0,52,55,
3,26,13,0,53,55,3,28,14,0,54,44,1,0,0,0,54,45,1,0,0,0,54,46,1,0,0,0,54,47,
1,0,0,0,54,48,1,0,0,0,54,49,1,0,0,0,54,50,1,0,0,0,54,51,1,0,0,0,54,52,1,
0,0,0,54,53,1,0,0,0,55,3,1,0,0,0,56,57,5,1,0,0,57,61,3,6,3,0,58,59,5,2,0,
0,59,61,3,6,3,0,60,56,1,0,0,0,60,58,1,0,0,0,61,5,1,0,0,0,62,63,5,27,0,0,
63,64,5,3,0,0,64,65,3,30,15,0,65,7,1,0,0,0,66,67,5,1,0,0,67,68,5,27,0,0,
68,69,5,3,0,0,69,70,3,10,5,0,70,9,1,0,0,0,71,73,5,4,0,0,72,74,3,12,6,0,73,
72,1,0,0,0,73,74,1,0,0,0,74,75,1,0,0,0,75,76,5,5,0,0,76,77,5,6,0,0,77,78,
3,18,9,0,78,11,1,0,0,0,79,84,5,27,0,0,80,81,5,7,0,0,81,83,5,27,0,0,82,80,
1,0,0,0,83,86,1,0,0,0,84,82,1,0,0,0,84,85,1,0,0,0,85,13,1,0,0,0,86,84,1,
0,0,0,87,88,3,30,15,0,88,15,1,0,0,0,89,90,5,8,0,0,90,91,5,4,0,0,91,92,3,
30,15,0,92,93,5,5,0,0,93,17,1,0,0,0,94,98,5,9,0,0,95,97,3,2,1,0,96,95,1,
0,0,0,97,100,1,0,0,0,98,96,1,0,0,0,98,99,1,0,0,0,99,101,1,0,0,0,100,98,1,
0,0,0,101,102,5,10,0,0,102,19,1,0,0,0,103,107,5,9,0,0,104,106,3,2,1,0,105,
104,1,0,0,0,106,109,1,0,0,0,107,105,1,0,0,0,107,108,1,0,0,0,108,110,1,0,
0,0,109,107,1,0,0,0,110,111,5,10,0,0,111,21,1,0,0,0,112,116,5,9,0,0,113,
115,3,2,1,0,114,113,1,0,0,0,115,118,1,0,0,0,116,114,1,0,0,0,116,117,1,0,
0,0,117,119,1,0,0,0,118,116,1,0,0,0,119,120,5,10,0,0,120,23,1,0,0,0,121,
122,5,11,0,0,122,123,5,4,0,0,123,124,3,30,15,0,124,125,5,5,0,0,125,126,5,
12,0,0,126,127,3,20,10,0,127,128,5,13,0,0,128,129,3,22,11,0,129,25,1,0,0,
0,130,131,5,11,0,0,131,132,5,4,0,0,132,133,3,30,15,0,133,134,5,5,0,0,134,
135,5,12,0,0,135,136,3,20,10,0,136,27,1,0,0,0,137,138,5,14,0,0,138,139,5,
4,0,0,139,140,3,30,15,0,140,141,5,5,0,0,141,142,3,18,9,0,142,29,1,0,0,0,
143,144,6,15,-1,0,144,145,5,4,0,0,145,146,3,30,15,0,146,147,5,5,0,0,147,
158,1,0,0,0,148,149,7,0,0,0,149,158,3,30,15,8,150,158,5,27,0,0,151,158,5,
28,0,0,152,158,5,29,0,0,153,158,3,34,17,0,154,158,3,36,18,0,155,158,3,32,
16,0,156,158,3,6,3,0,157,143,1,0,0,0,157,148,1,0,0,0,157,150,1,0,0,0,157,
151,1,0,0,0,157,152,1,0,0,0,157,153,1,0,0,0,157,154,1,0,0,0,157,155,1,0,
0,0,157,156,1,0,0,0,158,170,1,0,0,0,159,160,10,11,0,0,160,161,7,1,0,0,161,
169,3,30,15,12,162,163,10,10,0,0,163,164,7,0,0,0,164,169,3,30,15,11,165,
166,10,9,0,0,166,167,7,2,0,0,167,169,3,30,15,10,168,159,1,0,0,0,168,162,
1,0,0,0,168,165,1,0,0,0,169,172,1,0,0,0,170,168,1,0,0,0,170,171,1,0,0,0,
171,31,1,0,0,0,172,170,1,0,0,0,173,174,5,1,0,0,174,175,5,27,0,0,175,176,
5,3,0,0,176,177,3,10,5,0,177,33,1,0,0,0,178,187,5,25,0,0,179,184,3,30,15,
0,180,181,5,7,0,0,181,183,3,30,15,0,182,180,1,0,0,0,183,186,1,0,0,0,184,
182,1,0,0,0,184,185,1,0,0,0,185,188,1,0,0,0,186,184,1,0,0,0,187,179,1,0,
0,0,187,188,1,0,0,0,188,189,1,0,0,0,189,190,5,26,0,0,190,35,1,0,0,0,191,
192,5,27,0,0,192,201,5,4,0,0,193,198,3,30,15,0,194,195,5,7,0,0,195,197,3,
30,15,0,196,194,1,0,0,0,197,200,1,0,0,0,198,196,1,0,0,0,198,199,1,0,0,0,
199,202,1,0,0,0,200,198,1,0,0,0,201,193,1,0,0,0,201,202,1,0,0,0,202,203,
1,0,0,0,203,204,5,5,0,0,204,37,1,0,0,0,15,41,54,60,73,84,98,107,116,157,
168,170,184,187,198,201];


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
                         "ifBlockStatement", "elseBlockStatement", "ifThenElseStatement", 
                         "ifThenStatement", "whileStatement", "expression", 
                         "lambdaExpression", "listExpression", "callExpression" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = JavaScriptParser.ruleNames;
        this.literalNames = JavaScriptParser.literalNames;
        this.symbolicNames = JavaScriptParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 15:
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
	        this.state = 41;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 973884182) !== 0)) {
	            this.state = 38;
	            this.statement();
	            this.state = 43;
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
	        this.state = 54;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 44;
	            this.declaration();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 45;
	            this.functionDeclaration();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 46;
	            this.expressionStatement();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 47;
	            this.printStatement();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 48;
	            this.blockStatement();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 49;
	            this.ifBlockStatement();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 50;
	            this.elseBlockStatement();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 51;
	            this.ifThenElseStatement();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 52;
	            this.ifThenStatement();
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 53;
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
	        this.state = 60;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 56;
	            this.match(JavaScriptParser.T__0);
	            this.state = 57;
	            this.variableAssignment();
	            break;
	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 58;
	            this.match(JavaScriptParser.T__1);
	            this.state = 59;
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
	        this.state = 62;
	        this.match(JavaScriptParser.IDENTIFIER);
	        this.state = 63;
	        this.match(JavaScriptParser.T__2);
	        this.state = 64;
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
	        this.state = 66;
	        this.match(JavaScriptParser.T__0);
	        this.state = 67;
	        this.match(JavaScriptParser.IDENTIFIER);
	        this.state = 68;
	        this.match(JavaScriptParser.T__2);
	        this.state = 69;
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
	        this.state = 71;
	        this.match(JavaScriptParser.T__3);
	        this.state = 73;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===27) {
	            this.state = 72;
	            this.formalParameters();
	        }

	        this.state = 75;
	        this.match(JavaScriptParser.T__4);
	        this.state = 76;
	        this.match(JavaScriptParser.T__5);
	        this.state = 77;
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
	        this.state = 79;
	        this.match(JavaScriptParser.IDENTIFIER);
	        this.state = 84;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===7) {
	            this.state = 80;
	            this.match(JavaScriptParser.T__6);
	            this.state = 81;
	            this.match(JavaScriptParser.IDENTIFIER);
	            this.state = 86;
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
	        this.state = 87;
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
	        this.state = 89;
	        this.match(JavaScriptParser.T__7);
	        this.state = 90;
	        this.match(JavaScriptParser.T__3);
	        this.state = 91;
	        this.expression(0);
	        this.state = 92;
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
	        this.state = 94;
	        this.match(JavaScriptParser.T__8);
	        this.state = 98;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 973884182) !== 0)) {
	            this.state = 95;
	            this.statement();
	            this.state = 100;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 101;
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
	        this.state = 103;
	        this.match(JavaScriptParser.T__8);
	        this.state = 107;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 973884182) !== 0)) {
	            this.state = 104;
	            this.statement();
	            this.state = 109;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 110;
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
	    this.enterRule(localctx, 22, JavaScriptParser.RULE_elseBlockStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 112;
	        this.match(JavaScriptParser.T__8);
	        this.state = 116;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 973884182) !== 0)) {
	            this.state = 113;
	            this.statement();
	            this.state = 118;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 119;
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
	    this.enterRule(localctx, 24, JavaScriptParser.RULE_ifThenElseStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 121;
	        this.match(JavaScriptParser.T__10);
	        this.state = 122;
	        this.match(JavaScriptParser.T__3);
	        this.state = 123;
	        this.expression(0);
	        this.state = 124;
	        this.match(JavaScriptParser.T__4);
	        this.state = 125;
	        this.match(JavaScriptParser.T__11);
	        this.state = 126;
	        this.ifBlockStatement();
	        this.state = 127;
	        this.match(JavaScriptParser.T__12);
	        this.state = 128;
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
	    this.enterRule(localctx, 26, JavaScriptParser.RULE_ifThenStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 130;
	        this.match(JavaScriptParser.T__10);
	        this.state = 131;
	        this.match(JavaScriptParser.T__3);
	        this.state = 132;
	        this.expression(0);
	        this.state = 133;
	        this.match(JavaScriptParser.T__4);
	        this.state = 134;
	        this.match(JavaScriptParser.T__11);
	        this.state = 135;
	        this.ifBlockStatement();
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
	    this.enterRule(localctx, 28, JavaScriptParser.RULE_whileStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 137;
	        this.match(JavaScriptParser.T__13);
	        this.state = 138;
	        this.match(JavaScriptParser.T__3);
	        this.state = 139;
	        this.expression(0);
	        this.state = 140;
	        this.match(JavaScriptParser.T__4);
	        this.state = 141;
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
	    const _startState = 30;
	    this.enterRecursionRule(localctx, 30, JavaScriptParser.RULE_expression, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 157;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ParensContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 144;
	            this.match(JavaScriptParser.T__3);
	            this.state = 145;
	            this.expression(0);
	            this.state = 146;
	            this.match(JavaScriptParser.T__4);
	            break;

	        case 2:
	            localctx = new UnaryExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 148;
	            _la = this._input.LA(1);
	            if(!(_la===18 || _la===19)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 149;
	            this.expression(8);
	            break;

	        case 3:
	            localctx = new IdentifierExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 150;
	            this.match(JavaScriptParser.IDENTIFIER);
	            break;

	        case 4:
	            localctx = new NumberExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 151;
	            this.match(JavaScriptParser.NUMBER);
	            break;

	        case 5:
	            localctx = new StringExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 152;
	            this.match(JavaScriptParser.STRING_LITERAL);
	            break;

	        case 6:
	            localctx = new ListExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 153;
	            this.listExpression();
	            break;

	        case 7:
	            localctx = new CallExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 154;
	            this.callExpression();
	            break;

	        case 8:
	            localctx = new LambdaExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 155;
	            this.lambdaExpression();
	            break;

	        case 9:
	            localctx = new VariableAssigContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 156;
	            this.variableAssignment();
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 170;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,10,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 168;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new MultiplicativeExprContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, JavaScriptParser.RULE_expression);
	                    this.state = 159;
	                    if (!( this.precpred(this._ctx, 11))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
	                    }
	                    this.state = 160;
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 229376) !== 0))) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 161;
	                    this.expression(12);
	                    break;

	                case 2:
	                    localctx = new AdditiveExprContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, JavaScriptParser.RULE_expression);
	                    this.state = 162;
	                    if (!( this.precpred(this._ctx, 10))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
	                    }
	                    this.state = 163;
	                    _la = this._input.LA(1);
	                    if(!(_la===18 || _la===19)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 164;
	                    this.expression(11);
	                    break;

	                case 3:
	                    localctx = new CompareExprContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, JavaScriptParser.RULE_expression);
	                    this.state = 165;
	                    if (!( this.precpred(this._ctx, 9))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
	                    }
	                    this.state = 166;
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 32505856) !== 0))) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 167;
	                    this.expression(10);
	                    break;

	                } 
	            }
	            this.state = 172;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,10,this._ctx);
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
	    this.enterRule(localctx, 32, JavaScriptParser.RULE_lambdaExpression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 173;
	        this.match(JavaScriptParser.T__0);
	        this.state = 174;
	        this.match(JavaScriptParser.IDENTIFIER);
	        this.state = 175;
	        this.match(JavaScriptParser.T__2);
	        this.state = 176;
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
	    this.enterRule(localctx, 34, JavaScriptParser.RULE_listExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 178;
	        this.match(JavaScriptParser.T__24);
	        this.state = 187;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 973864978) !== 0)) {
	            this.state = 179;
	            this.expression(0);
	            this.state = 184;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===7) {
	                this.state = 180;
	                this.match(JavaScriptParser.T__6);
	                this.state = 181;
	                this.expression(0);
	                this.state = 186;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 189;
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
	    this.enterRule(localctx, 36, JavaScriptParser.RULE_callExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 191;
	        this.match(JavaScriptParser.IDENTIFIER);
	        this.state = 192;
	        this.match(JavaScriptParser.T__3);
	        this.state = 201;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 973864978) !== 0)) {
	            this.state = 193;
	            this.expression(0);
	            this.state = 198;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===7) {
	                this.state = 194;
	                this.match(JavaScriptParser.T__6);
	                this.state = 195;
	                this.expression(0);
	                this.state = 200;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 203;
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
JavaScriptParser.RULE_elseBlockStatement = 11;
JavaScriptParser.RULE_ifThenElseStatement = 12;
JavaScriptParser.RULE_ifThenStatement = 13;
JavaScriptParser.RULE_whileStatement = 14;
JavaScriptParser.RULE_expression = 15;
JavaScriptParser.RULE_lambdaExpression = 16;
JavaScriptParser.RULE_listExpression = 17;
JavaScriptParser.RULE_callExpression = 18;

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

	ifBlockStatement() {
	    return this.getTypedRuleContext(IfBlockStatementContext,0);
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
JavaScriptParser.ElseBlockStatementContext = ElseBlockStatementContext; 
JavaScriptParser.IfThenElseStatementContext = IfThenElseStatementContext; 
JavaScriptParser.IfThenStatementContext = IfThenStatementContext; 
JavaScriptParser.WhileStatementContext = WhileStatementContext; 
JavaScriptParser.ExpressionContext = ExpressionContext; 
JavaScriptParser.LambdaExpressionContext = LambdaExpressionContext; 
JavaScriptParser.ListExpressionContext = ListExpressionContext; 
JavaScriptParser.CallExpressionContext = CallExpressionContext; 
