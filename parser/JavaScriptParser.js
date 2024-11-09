// Generated from ./grammar/JavaScript.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import JavaScriptVisitor from './JavaScriptVisitor.js';

const serializedATN = [4,1,26,150,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,1,0,5,0,30,8,0,10,0,12,0,33,9,0,1,1,1,1,1,1,1,1,1,1,3,1,40,8,1,
1,2,1,2,1,2,1,2,3,2,46,8,2,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,5,1,5,3,
5,59,8,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,5,6,68,8,6,10,6,12,6,71,9,6,1,7,1,7,
1,8,1,8,1,8,1,8,1,8,1,9,1,9,5,9,82,8,9,10,9,12,9,85,9,9,1,9,1,9,1,10,1,10,
1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,3,10,102,8,10,1,10,
1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,5,10,113,8,10,10,10,12,10,116,9,
10,1,11,1,11,1,11,1,11,1,11,1,12,1,12,1,12,1,12,5,12,127,8,12,10,12,12,12,
130,9,12,3,12,132,8,12,1,12,1,12,1,13,1,13,1,13,1,13,1,13,5,13,141,8,13,
10,13,12,13,144,9,13,3,13,146,8,13,1,13,1,13,1,13,0,1,20,14,0,2,4,6,8,10,
12,14,16,18,20,22,24,26,0,3,1,0,14,15,1,0,11,13,1,0,16,20,158,0,31,1,0,0,
0,2,39,1,0,0,0,4,45,1,0,0,0,6,47,1,0,0,0,8,51,1,0,0,0,10,56,1,0,0,0,12,64,
1,0,0,0,14,72,1,0,0,0,16,74,1,0,0,0,18,79,1,0,0,0,20,101,1,0,0,0,22,117,
1,0,0,0,24,122,1,0,0,0,26,135,1,0,0,0,28,30,3,2,1,0,29,28,1,0,0,0,30,33,
1,0,0,0,31,29,1,0,0,0,31,32,1,0,0,0,32,1,1,0,0,0,33,31,1,0,0,0,34,40,3,4,
2,0,35,40,3,8,4,0,36,40,3,14,7,0,37,40,3,16,8,0,38,40,3,18,9,0,39,34,1,0,
0,0,39,35,1,0,0,0,39,36,1,0,0,0,39,37,1,0,0,0,39,38,1,0,0,0,40,3,1,0,0,0,
41,42,5,1,0,0,42,46,3,6,3,0,43,44,5,2,0,0,44,46,3,6,3,0,45,41,1,0,0,0,45,
43,1,0,0,0,46,5,1,0,0,0,47,48,5,23,0,0,48,49,5,3,0,0,49,50,3,20,10,0,50,
7,1,0,0,0,51,52,5,1,0,0,52,53,5,23,0,0,53,54,5,3,0,0,54,55,3,10,5,0,55,9,
1,0,0,0,56,58,5,4,0,0,57,59,3,12,6,0,58,57,1,0,0,0,58,59,1,0,0,0,59,60,1,
0,0,0,60,61,5,5,0,0,61,62,5,6,0,0,62,63,3,18,9,0,63,11,1,0,0,0,64,69,5,23,
0,0,65,66,5,7,0,0,66,68,5,23,0,0,67,65,1,0,0,0,68,71,1,0,0,0,69,67,1,0,0,
0,69,70,1,0,0,0,70,13,1,0,0,0,71,69,1,0,0,0,72,73,3,20,10,0,73,15,1,0,0,
0,74,75,5,8,0,0,75,76,5,4,0,0,76,77,3,20,10,0,77,78,5,5,0,0,78,17,1,0,0,
0,79,83,5,9,0,0,80,82,3,2,1,0,81,80,1,0,0,0,82,85,1,0,0,0,83,81,1,0,0,0,
83,84,1,0,0,0,84,86,1,0,0,0,85,83,1,0,0,0,86,87,5,10,0,0,87,19,1,0,0,0,88,
89,6,10,-1,0,89,90,5,4,0,0,90,91,3,20,10,0,91,92,5,5,0,0,92,102,1,0,0,0,
93,94,7,0,0,0,94,102,3,20,10,7,95,102,5,23,0,0,96,102,5,24,0,0,97,102,5,
25,0,0,98,102,3,24,12,0,99,102,3,26,13,0,100,102,3,22,11,0,101,88,1,0,0,
0,101,93,1,0,0,0,101,95,1,0,0,0,101,96,1,0,0,0,101,97,1,0,0,0,101,98,1,0,
0,0,101,99,1,0,0,0,101,100,1,0,0,0,102,114,1,0,0,0,103,104,10,10,0,0,104,
105,7,1,0,0,105,113,3,20,10,11,106,107,10,9,0,0,107,108,7,0,0,0,108,113,
3,20,10,10,109,110,10,8,0,0,110,111,7,2,0,0,111,113,3,20,10,9,112,103,1,
0,0,0,112,106,1,0,0,0,112,109,1,0,0,0,113,116,1,0,0,0,114,112,1,0,0,0,114,
115,1,0,0,0,115,21,1,0,0,0,116,114,1,0,0,0,117,118,5,1,0,0,118,119,5,23,
0,0,119,120,5,3,0,0,120,121,3,10,5,0,121,23,1,0,0,0,122,131,5,21,0,0,123,
128,3,20,10,0,124,125,5,7,0,0,125,127,3,20,10,0,126,124,1,0,0,0,127,130,
1,0,0,0,128,126,1,0,0,0,128,129,1,0,0,0,129,132,1,0,0,0,130,128,1,0,0,0,
131,123,1,0,0,0,131,132,1,0,0,0,132,133,1,0,0,0,133,134,5,22,0,0,134,25,
1,0,0,0,135,136,5,23,0,0,136,145,5,4,0,0,137,142,3,20,10,0,138,139,5,7,0,
0,139,141,3,20,10,0,140,138,1,0,0,0,141,144,1,0,0,0,142,140,1,0,0,0,142,
143,1,0,0,0,143,146,1,0,0,0,144,142,1,0,0,0,145,137,1,0,0,0,145,146,1,0,
0,0,146,147,1,0,0,0,147,148,5,5,0,0,148,27,1,0,0,0,13,31,39,45,58,69,83,
101,112,114,128,131,142,145];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class JavaScriptParser extends antlr4.Parser {

    static grammarFileName = "JavaScript.g4";
    static literalNames = [ null, "'let'", "'const'", "'='", "'('", "')'", 
                            "'=>'", "','", "'print'", "'{'", "'}'", "'*'", 
                            "'/'", "'%'", "'+'", "'-'", "'<'", "'>'", "'<='", 
                            "'>='", "'=='", "'['", "']'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, "IDENTIFIER", 
                             "NUMBER", "STRING_LITERAL", "WS" ];
    static ruleNames = [ "program", "statement", "declaration", "variableAssignment", 
                         "functionDeclaration", "functionExpression", "formalParameters", 
                         "expressionStatement", "printStatement", "blockStatement", 
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
    	case 10:
    	    		return this.expression_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 10);
    		case 1:
    			return this.precpred(this._ctx, 9);
    		case 2:
    			return this.precpred(this._ctx, 8);
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
	        this.state = 31;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 60867350) !== 0)) {
	            this.state = 28;
	            this.statement();
	            this.state = 33;
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
	        this.state = 39;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 34;
	            this.declaration();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 35;
	            this.functionDeclaration();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 36;
	            this.expressionStatement();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 37;
	            this.printStatement();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 38;
	            this.blockStatement();
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
	        this.state = 45;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 41;
	            this.match(JavaScriptParser.T__0);
	            this.state = 42;
	            this.variableAssignment();
	            break;
	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 43;
	            this.match(JavaScriptParser.T__1);
	            this.state = 44;
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
	        this.state = 47;
	        this.match(JavaScriptParser.IDENTIFIER);
	        this.state = 48;
	        this.match(JavaScriptParser.T__2);
	        this.state = 49;
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
	        this.state = 51;
	        this.match(JavaScriptParser.T__0);
	        this.state = 52;
	        this.match(JavaScriptParser.IDENTIFIER);
	        this.state = 53;
	        this.match(JavaScriptParser.T__2);
	        this.state = 54;
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
	        this.state = 56;
	        this.match(JavaScriptParser.T__3);
	        this.state = 58;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===23) {
	            this.state = 57;
	            this.formalParameters();
	        }

	        this.state = 60;
	        this.match(JavaScriptParser.T__4);
	        this.state = 61;
	        this.match(JavaScriptParser.T__5);
	        this.state = 62;
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
	        this.state = 64;
	        this.match(JavaScriptParser.IDENTIFIER);
	        this.state = 69;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===7) {
	            this.state = 65;
	            this.match(JavaScriptParser.T__6);
	            this.state = 66;
	            this.match(JavaScriptParser.IDENTIFIER);
	            this.state = 71;
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
	        this.state = 72;
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
	        this.state = 74;
	        this.match(JavaScriptParser.T__7);
	        this.state = 75;
	        this.match(JavaScriptParser.T__3);
	        this.state = 76;
	        this.expression(0);
	        this.state = 77;
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
	        this.state = 79;
	        this.match(JavaScriptParser.T__8);
	        this.state = 83;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 60867350) !== 0)) {
	            this.state = 80;
	            this.statement();
	            this.state = 85;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 86;
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


	expression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExpressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 20;
	    this.enterRecursionRule(localctx, 20, JavaScriptParser.RULE_expression, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 101;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ParensContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 89;
	            this.match(JavaScriptParser.T__3);
	            this.state = 90;
	            this.expression(0);
	            this.state = 91;
	            this.match(JavaScriptParser.T__4);
	            break;

	        case 2:
	            localctx = new UnaryExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 93;
	            _la = this._input.LA(1);
	            if(!(_la===14 || _la===15)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 94;
	            this.expression(7);
	            break;

	        case 3:
	            localctx = new IdentifierExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 95;
	            this.match(JavaScriptParser.IDENTIFIER);
	            break;

	        case 4:
	            localctx = new NumberExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 96;
	            this.match(JavaScriptParser.NUMBER);
	            break;

	        case 5:
	            localctx = new StringExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 97;
	            this.match(JavaScriptParser.STRING_LITERAL);
	            break;

	        case 6:
	            localctx = new ListExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 98;
	            this.listExpression();
	            break;

	        case 7:
	            localctx = new CallExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 99;
	            this.callExpression();
	            break;

	        case 8:
	            localctx = new LambdaExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 100;
	            this.lambdaExpression();
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 114;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 112;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new MultiplicativeExprContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, JavaScriptParser.RULE_expression);
	                    this.state = 103;
	                    if (!( this.precpred(this._ctx, 10))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
	                    }
	                    this.state = 104;
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 14336) !== 0))) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 105;
	                    this.expression(11);
	                    break;

	                case 2:
	                    localctx = new AdditiveExprContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, JavaScriptParser.RULE_expression);
	                    this.state = 106;
	                    if (!( this.precpred(this._ctx, 9))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
	                    }
	                    this.state = 107;
	                    _la = this._input.LA(1);
	                    if(!(_la===14 || _la===15)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 108;
	                    this.expression(10);
	                    break;

	                case 3:
	                    localctx = new CompareExprContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, JavaScriptParser.RULE_expression);
	                    this.state = 109;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }
	                    this.state = 110;
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 2031616) !== 0))) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 111;
	                    this.expression(9);
	                    break;

	                } 
	            }
	            this.state = 116;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,8,this._ctx);
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
	    this.enterRule(localctx, 22, JavaScriptParser.RULE_lambdaExpression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 117;
	        this.match(JavaScriptParser.T__0);
	        this.state = 118;
	        this.match(JavaScriptParser.IDENTIFIER);
	        this.state = 119;
	        this.match(JavaScriptParser.T__2);
	        this.state = 120;
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
	    this.enterRule(localctx, 24, JavaScriptParser.RULE_listExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 122;
	        this.match(JavaScriptParser.T__20);
	        this.state = 131;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 60866578) !== 0)) {
	            this.state = 123;
	            this.expression(0);
	            this.state = 128;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===7) {
	                this.state = 124;
	                this.match(JavaScriptParser.T__6);
	                this.state = 125;
	                this.expression(0);
	                this.state = 130;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 133;
	        this.match(JavaScriptParser.T__21);
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
	    this.enterRule(localctx, 26, JavaScriptParser.RULE_callExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 135;
	        this.match(JavaScriptParser.IDENTIFIER);
	        this.state = 136;
	        this.match(JavaScriptParser.T__3);
	        this.state = 145;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 60866578) !== 0)) {
	            this.state = 137;
	            this.expression(0);
	            this.state = 142;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===7) {
	                this.state = 138;
	                this.match(JavaScriptParser.T__6);
	                this.state = 139;
	                this.expression(0);
	                this.state = 144;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 147;
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
JavaScriptParser.IDENTIFIER = 23;
JavaScriptParser.NUMBER = 24;
JavaScriptParser.STRING_LITERAL = 25;
JavaScriptParser.WS = 26;

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
JavaScriptParser.RULE_expression = 10;
JavaScriptParser.RULE_lambdaExpression = 11;
JavaScriptParser.RULE_listExpression = 12;
JavaScriptParser.RULE_callExpression = 13;

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
JavaScriptParser.ExpressionContext = ExpressionContext; 
JavaScriptParser.LambdaExpressionContext = LambdaExpressionContext; 
JavaScriptParser.ListExpressionContext = ListExpressionContext; 
JavaScriptParser.CallExpressionContext = CallExpressionContext; 
