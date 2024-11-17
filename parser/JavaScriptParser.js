// Generated from ./grammar/JavaScript.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import JavaScriptVisitor from './JavaScriptVisitor.js';

const serializedATN = [4,1,32,269,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,1,0,5,0,48,8,0,10,0,12,0,51,9,0,1,0,1,0,1,1,
1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,68,8,1,1,2,1,2,1,2,1,
2,3,2,74,8,2,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,6,
1,6,3,6,92,8,6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,5,7,101,8,7,10,7,12,7,104,9,7,
1,8,1,8,1,9,1,9,1,9,1,9,1,9,5,9,113,8,9,10,9,12,9,116,9,9,3,9,118,8,9,1,
9,1,9,1,10,1,10,1,10,1,10,1,10,5,10,127,8,10,10,10,12,10,130,9,10,3,10,132,
8,10,1,10,1,10,1,11,1,11,5,11,138,8,11,10,11,12,11,141,9,11,1,11,1,11,1,
12,1,12,5,12,147,8,12,10,12,12,12,150,9,12,1,12,1,12,1,13,1,13,5,13,156,
8,13,10,13,12,13,159,9,13,1,13,1,13,1,14,1,14,5,14,165,8,14,10,14,12,14,
168,9,14,1,14,1,14,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,16,1,16,
1,16,1,16,1,16,1,16,1,16,1,17,1,17,1,17,1,17,1,17,1,17,1,18,1,18,1,18,1,
18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,3,18,209,8,18,
1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,5,18,220,8,18,10,18,12,18,223,
9,18,1,19,1,19,1,19,1,19,1,19,1,20,1,20,1,20,1,20,5,20,234,8,20,10,20,12,
20,237,9,20,3,20,239,8,20,1,20,1,20,1,21,1,21,1,21,1,21,3,21,247,8,21,1,
21,5,21,250,8,21,10,21,12,21,253,9,21,1,21,1,21,1,22,1,22,1,22,1,22,1,22,
5,22,262,8,22,10,22,12,22,265,9,22,1,22,1,22,1,22,0,1,36,23,0,2,4,6,8,10,
12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,0,3,1,0,20,21,1,0,17,
19,1,0,22,26,286,0,49,1,0,0,0,2,67,1,0,0,0,4,73,1,0,0,0,6,75,1,0,0,0,8,79,
1,0,0,0,10,84,1,0,0,0,12,89,1,0,0,0,14,97,1,0,0,0,16,105,1,0,0,0,18,107,
1,0,0,0,20,121,1,0,0,0,22,135,1,0,0,0,24,144,1,0,0,0,26,153,1,0,0,0,28,162,
1,0,0,0,30,171,1,0,0,0,32,180,1,0,0,0,34,187,1,0,0,0,36,208,1,0,0,0,38,224,
1,0,0,0,40,229,1,0,0,0,42,242,1,0,0,0,44,256,1,0,0,0,46,48,3,2,1,0,47,46,
1,0,0,0,48,51,1,0,0,0,49,47,1,0,0,0,49,50,1,0,0,0,50,52,1,0,0,0,51,49,1,
0,0,0,52,53,5,0,0,1,53,1,1,0,0,0,54,68,3,4,2,0,55,68,3,8,4,0,56,68,3,16,
8,0,57,68,3,18,9,0,58,68,3,22,11,0,59,68,3,24,12,0,60,68,3,28,14,0,61,68,
3,30,15,0,62,68,3,32,16,0,63,68,3,20,10,0,64,68,3,34,17,0,65,68,3,10,5,0,
66,68,3,44,22,0,67,54,1,0,0,0,67,55,1,0,0,0,67,56,1,0,0,0,67,57,1,0,0,0,
67,58,1,0,0,0,67,59,1,0,0,0,67,60,1,0,0,0,67,61,1,0,0,0,67,62,1,0,0,0,67,
63,1,0,0,0,67,64,1,0,0,0,67,65,1,0,0,0,67,66,1,0,0,0,68,3,1,0,0,0,69,70,
5,1,0,0,70,74,3,6,3,0,71,72,5,2,0,0,72,74,3,6,3,0,73,69,1,0,0,0,73,71,1,
0,0,0,74,5,1,0,0,0,75,76,5,29,0,0,76,77,5,3,0,0,77,78,3,36,18,0,78,7,1,0,
0,0,79,80,5,1,0,0,80,81,5,29,0,0,81,82,5,3,0,0,82,83,3,12,6,0,83,9,1,0,0,
0,84,85,5,1,0,0,85,86,3,22,11,0,86,87,5,4,0,0,87,88,3,22,11,0,88,11,1,0,
0,0,89,91,5,5,0,0,90,92,3,14,7,0,91,90,1,0,0,0,91,92,1,0,0,0,92,93,1,0,0,
0,93,94,5,6,0,0,94,95,5,7,0,0,95,96,3,22,11,0,96,13,1,0,0,0,97,102,5,29,
0,0,98,99,5,8,0,0,99,101,5,29,0,0,100,98,1,0,0,0,101,104,1,0,0,0,102,100,
1,0,0,0,102,103,1,0,0,0,103,15,1,0,0,0,104,102,1,0,0,0,105,106,3,36,18,0,
106,17,1,0,0,0,107,108,5,9,0,0,108,117,5,5,0,0,109,114,3,36,18,0,110,111,
5,8,0,0,111,113,3,36,18,0,112,110,1,0,0,0,113,116,1,0,0,0,114,112,1,0,0,
0,114,115,1,0,0,0,115,118,1,0,0,0,116,114,1,0,0,0,117,109,1,0,0,0,117,118,
1,0,0,0,118,119,1,0,0,0,119,120,5,6,0,0,120,19,1,0,0,0,121,122,5,10,0,0,
122,131,5,5,0,0,123,128,3,36,18,0,124,125,5,8,0,0,125,127,3,36,18,0,126,
124,1,0,0,0,127,130,1,0,0,0,128,126,1,0,0,0,128,129,1,0,0,0,129,132,1,0,
0,0,130,128,1,0,0,0,131,123,1,0,0,0,131,132,1,0,0,0,132,133,1,0,0,0,133,
134,5,6,0,0,134,21,1,0,0,0,135,139,5,11,0,0,136,138,3,2,1,0,137,136,1,0,
0,0,138,141,1,0,0,0,139,137,1,0,0,0,139,140,1,0,0,0,140,142,1,0,0,0,141,
139,1,0,0,0,142,143,5,12,0,0,143,23,1,0,0,0,144,148,5,11,0,0,145,147,3,2,
1,0,146,145,1,0,0,0,147,150,1,0,0,0,148,146,1,0,0,0,148,149,1,0,0,0,149,
151,1,0,0,0,150,148,1,0,0,0,151,152,5,12,0,0,152,25,1,0,0,0,153,157,5,11,
0,0,154,156,3,2,1,0,155,154,1,0,0,0,156,159,1,0,0,0,157,155,1,0,0,0,157,
158,1,0,0,0,158,160,1,0,0,0,159,157,1,0,0,0,160,161,5,12,0,0,161,27,1,0,
0,0,162,166,5,11,0,0,163,165,3,2,1,0,164,163,1,0,0,0,165,168,1,0,0,0,166,
164,1,0,0,0,166,167,1,0,0,0,167,169,1,0,0,0,168,166,1,0,0,0,169,170,5,12,
0,0,170,29,1,0,0,0,171,172,5,13,0,0,172,173,5,5,0,0,173,174,3,36,18,0,174,
175,5,6,0,0,175,176,5,14,0,0,176,177,3,24,12,0,177,178,5,15,0,0,178,179,
3,28,14,0,179,31,1,0,0,0,180,181,5,13,0,0,181,182,5,5,0,0,182,183,3,36,18,
0,183,184,5,6,0,0,184,185,5,14,0,0,185,186,3,26,13,0,186,33,1,0,0,0,187,
188,5,16,0,0,188,189,5,5,0,0,189,190,3,36,18,0,190,191,5,6,0,0,191,192,3,
26,13,0,192,35,1,0,0,0,193,194,6,18,-1,0,194,195,5,5,0,0,195,196,3,36,18,
0,196,197,5,6,0,0,197,209,1,0,0,0,198,199,7,0,0,0,199,209,3,36,18,9,200,
209,5,29,0,0,201,209,5,30,0,0,202,209,5,31,0,0,203,209,3,40,20,0,204,209,
3,42,21,0,205,209,3,38,19,0,206,209,3,6,3,0,207,209,3,44,22,0,208,193,1,
0,0,0,208,198,1,0,0,0,208,200,1,0,0,0,208,201,1,0,0,0,208,202,1,0,0,0,208,
203,1,0,0,0,208,204,1,0,0,0,208,205,1,0,0,0,208,206,1,0,0,0,208,207,1,0,
0,0,209,221,1,0,0,0,210,211,10,12,0,0,211,212,7,1,0,0,212,220,3,36,18,13,
213,214,10,11,0,0,214,215,7,0,0,0,215,220,3,36,18,12,216,217,10,10,0,0,217,
218,7,2,0,0,218,220,3,36,18,11,219,210,1,0,0,0,219,213,1,0,0,0,219,216,1,
0,0,0,220,223,1,0,0,0,221,219,1,0,0,0,221,222,1,0,0,0,222,37,1,0,0,0,223,
221,1,0,0,0,224,225,5,1,0,0,225,226,5,29,0,0,226,227,5,3,0,0,227,228,3,12,
6,0,228,39,1,0,0,0,229,238,5,27,0,0,230,235,3,36,18,0,231,232,5,8,0,0,232,
234,3,36,18,0,233,231,1,0,0,0,234,237,1,0,0,0,235,233,1,0,0,0,235,236,1,
0,0,0,236,239,1,0,0,0,237,235,1,0,0,0,238,230,1,0,0,0,238,239,1,0,0,0,239,
240,1,0,0,0,240,241,5,28,0,0,241,41,1,0,0,0,242,243,5,29,0,0,243,244,5,5,
0,0,244,251,3,36,18,0,245,247,5,8,0,0,246,245,1,0,0,0,246,247,1,0,0,0,247,
248,1,0,0,0,248,250,3,36,18,0,249,246,1,0,0,0,250,253,1,0,0,0,251,249,1,
0,0,0,251,252,1,0,0,0,252,254,1,0,0,0,253,251,1,0,0,0,254,255,5,6,0,0,255,
43,1,0,0,0,256,257,5,29,0,0,257,258,5,27,0,0,258,263,3,36,18,0,259,260,5,
8,0,0,260,262,3,36,18,0,261,259,1,0,0,0,262,265,1,0,0,0,263,261,1,0,0,0,
263,264,1,0,0,0,264,266,1,0,0,0,265,263,1,0,0,0,266,267,5,28,0,0,267,45,
1,0,0,0,21,49,67,73,91,102,114,117,128,131,139,148,157,166,208,219,221,235,
238,246,251,263];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class JavaScriptParser extends antlr4.Parser {

    static grammarFileName = "JavaScript.g4";
    static literalNames = [ null, "'let'", "'const'", "'='", "'in'", "'('", 
                            "')'", "'=>'", "','", "'print'", "'return'", 
                            "'{'", "'}'", "'if'", "'then'", "'else'", "'while'", 
                            "'*'", "'/'", "'%'", "'+'", "'-'", "'<'", "'>'", 
                            "'<='", "'>='", "'=='", "'['", "']'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, "IDENTIFIER", 
                             "NUMBER", "STRING_LITERAL", "WS" ];
    static ruleNames = [ "program", "statement", "declaration", "variableAssignment", 
                         "functionDeclaration", "functionLet", "functionExpression", 
                         "formalParameters", "expressionStatement", "printStatement", 
                         "returnStatement", "blockStatement", "ifBlockStatement", 
                         "ifThenBlockStatement", "elseBlockStatement", "ifThenElseStatement", 
                         "ifThenStatement", "whileStatement", "expression", 
                         "lambdaExpression", "listExpression", "callExpression", 
                         "callList" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = JavaScriptParser.ruleNames;
        this.literalNames = JavaScriptParser.literalNames;
        this.symbolicNames = JavaScriptParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 18:
    	    		return this.expression_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 12);
    		case 1:
    			return this.precpred(this._ctx, 11);
    		case 2:
    			return this.precpred(this._ctx, 10);
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
	        this.state = 49;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 3895537190) !== 0)) {
	            this.state = 46;
	            this.statement();
	            this.state = 51;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 52;
	        this.match(JavaScriptParser.EOF);
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
	        this.state = 67;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 54;
	            this.declaration();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 55;
	            this.functionDeclaration();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 56;
	            this.expressionStatement();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 57;
	            this.printStatement();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 58;
	            this.blockStatement();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 59;
	            this.ifBlockStatement();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 60;
	            this.elseBlockStatement();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 61;
	            this.ifThenElseStatement();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 62;
	            this.ifThenStatement();
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 63;
	            this.returnStatement();
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 64;
	            this.whileStatement();
	            break;

	        case 12:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 65;
	            this.functionLet();
	            break;

	        case 13:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 66;
	            this.callList();
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
	        this.state = 73;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 69;
	            this.match(JavaScriptParser.T__0);
	            this.state = 70;
	            this.variableAssignment();
	            break;
	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 71;
	            this.match(JavaScriptParser.T__1);
	            this.state = 72;
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
	        this.state = 75;
	        this.match(JavaScriptParser.IDENTIFIER);
	        this.state = 76;
	        this.match(JavaScriptParser.T__2);
	        this.state = 77;
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
	        this.state = 79;
	        this.match(JavaScriptParser.T__0);
	        this.state = 80;
	        this.match(JavaScriptParser.IDENTIFIER);
	        this.state = 81;
	        this.match(JavaScriptParser.T__2);
	        this.state = 82;
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



	functionLet() {
	    let localctx = new FunctionLetContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, JavaScriptParser.RULE_functionLet);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 84;
	        this.match(JavaScriptParser.T__0);
	        this.state = 85;
	        this.blockStatement();
	        this.state = 86;
	        this.match(JavaScriptParser.T__3);
	        this.state = 87;
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



	functionExpression() {
	    let localctx = new FunctionExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, JavaScriptParser.RULE_functionExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 89;
	        this.match(JavaScriptParser.T__4);
	        this.state = 91;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===29) {
	            this.state = 90;
	            this.formalParameters();
	        }

	        this.state = 93;
	        this.match(JavaScriptParser.T__5);
	        this.state = 94;
	        this.match(JavaScriptParser.T__6);
	        this.state = 95;
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
	    this.enterRule(localctx, 14, JavaScriptParser.RULE_formalParameters);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 97;
	        this.match(JavaScriptParser.IDENTIFIER);
	        this.state = 102;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===8) {
	            this.state = 98;
	            this.match(JavaScriptParser.T__7);
	            this.state = 99;
	            this.match(JavaScriptParser.IDENTIFIER);
	            this.state = 104;
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
	    this.enterRule(localctx, 16, JavaScriptParser.RULE_expressionStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 105;
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
	    this.enterRule(localctx, 18, JavaScriptParser.RULE_printStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 107;
	        this.match(JavaScriptParser.T__8);
	        this.state = 108;
	        this.match(JavaScriptParser.T__4);
	        this.state = 117;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 3895459874) !== 0)) {
	            this.state = 109;
	            this.expression(0);
	            this.state = 114;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===8) {
	                this.state = 110;
	                this.match(JavaScriptParser.T__7);
	                this.state = 111;
	                this.expression(0);
	                this.state = 116;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 119;
	        this.match(JavaScriptParser.T__5);
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



	returnStatement() {
	    let localctx = new ReturnStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, JavaScriptParser.RULE_returnStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 121;
	        this.match(JavaScriptParser.T__9);
	        this.state = 122;
	        this.match(JavaScriptParser.T__4);
	        this.state = 131;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 3895459874) !== 0)) {
	            this.state = 123;
	            this.expression(0);
	            this.state = 128;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===8) {
	                this.state = 124;
	                this.match(JavaScriptParser.T__7);
	                this.state = 125;
	                this.expression(0);
	                this.state = 130;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 133;
	        this.match(JavaScriptParser.T__5);
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
	    this.enterRule(localctx, 22, JavaScriptParser.RULE_blockStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 135;
	        this.match(JavaScriptParser.T__10);
	        this.state = 139;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 3895537190) !== 0)) {
	            this.state = 136;
	            this.statement();
	            this.state = 141;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 142;
	        this.match(JavaScriptParser.T__11);
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
	    this.enterRule(localctx, 24, JavaScriptParser.RULE_ifBlockStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 144;
	        this.match(JavaScriptParser.T__10);
	        this.state = 148;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 3895537190) !== 0)) {
	            this.state = 145;
	            this.statement();
	            this.state = 150;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 151;
	        this.match(JavaScriptParser.T__11);
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
	    this.enterRule(localctx, 26, JavaScriptParser.RULE_ifThenBlockStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 153;
	        this.match(JavaScriptParser.T__10);
	        this.state = 157;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 3895537190) !== 0)) {
	            this.state = 154;
	            this.statement();
	            this.state = 159;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 160;
	        this.match(JavaScriptParser.T__11);
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
	    this.enterRule(localctx, 28, JavaScriptParser.RULE_elseBlockStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 162;
	        this.match(JavaScriptParser.T__10);
	        this.state = 166;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 3895537190) !== 0)) {
	            this.state = 163;
	            this.statement();
	            this.state = 168;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 169;
	        this.match(JavaScriptParser.T__11);
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
	    this.enterRule(localctx, 30, JavaScriptParser.RULE_ifThenElseStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 171;
	        this.match(JavaScriptParser.T__12);
	        this.state = 172;
	        this.match(JavaScriptParser.T__4);
	        this.state = 173;
	        this.expression(0);
	        this.state = 174;
	        this.match(JavaScriptParser.T__5);
	        this.state = 175;
	        this.match(JavaScriptParser.T__13);
	        this.state = 176;
	        this.ifBlockStatement();
	        this.state = 177;
	        this.match(JavaScriptParser.T__14);
	        this.state = 178;
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
	    this.enterRule(localctx, 32, JavaScriptParser.RULE_ifThenStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 180;
	        this.match(JavaScriptParser.T__12);
	        this.state = 181;
	        this.match(JavaScriptParser.T__4);
	        this.state = 182;
	        this.expression(0);
	        this.state = 183;
	        this.match(JavaScriptParser.T__5);
	        this.state = 184;
	        this.match(JavaScriptParser.T__13);
	        this.state = 185;
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
	    this.enterRule(localctx, 34, JavaScriptParser.RULE_whileStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 187;
	        this.match(JavaScriptParser.T__15);
	        this.state = 188;
	        this.match(JavaScriptParser.T__4);
	        this.state = 189;
	        this.expression(0);
	        this.state = 190;
	        this.match(JavaScriptParser.T__5);
	        this.state = 191;
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


	expression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExpressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 36;
	    this.enterRecursionRule(localctx, 36, JavaScriptParser.RULE_expression, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 208;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ParensContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 194;
	            this.match(JavaScriptParser.T__4);
	            this.state = 195;
	            this.expression(0);
	            this.state = 196;
	            this.match(JavaScriptParser.T__5);
	            break;

	        case 2:
	            localctx = new UnaryExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 198;
	            _la = this._input.LA(1);
	            if(!(_la===20 || _la===21)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 199;
	            this.expression(9);
	            break;

	        case 3:
	            localctx = new IdentifierExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 200;
	            this.match(JavaScriptParser.IDENTIFIER);
	            break;

	        case 4:
	            localctx = new NumberExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 201;
	            this.match(JavaScriptParser.NUMBER);
	            break;

	        case 5:
	            localctx = new StringExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 202;
	            this.match(JavaScriptParser.STRING_LITERAL);
	            break;

	        case 6:
	            localctx = new ListExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 203;
	            this.listExpression();
	            break;

	        case 7:
	            localctx = new CallExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 204;
	            this.callExpression();
	            break;

	        case 8:
	            localctx = new LambdaExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 205;
	            this.lambdaExpression();
	            break;

	        case 9:
	            localctx = new VariableAssigContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 206;
	            this.variableAssignment();
	            break;

	        case 10:
	            localctx = new CallLisContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 207;
	            this.callList();
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 221;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,15,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 219;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new MultiplicativeExprContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, JavaScriptParser.RULE_expression);
	                    this.state = 210;
	                    if (!( this.precpred(this._ctx, 12))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
	                    }
	                    this.state = 211;
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 917504) !== 0))) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 212;
	                    this.expression(13);
	                    break;

	                case 2:
	                    localctx = new AdditiveExprContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, JavaScriptParser.RULE_expression);
	                    this.state = 213;
	                    if (!( this.precpred(this._ctx, 11))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
	                    }
	                    this.state = 214;
	                    _la = this._input.LA(1);
	                    if(!(_la===20 || _la===21)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 215;
	                    this.expression(12);
	                    break;

	                case 3:
	                    localctx = new CompareExprContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, JavaScriptParser.RULE_expression);
	                    this.state = 216;
	                    if (!( this.precpred(this._ctx, 10))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
	                    }
	                    this.state = 217;
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 130023424) !== 0))) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 218;
	                    this.expression(11);
	                    break;

	                } 
	            }
	            this.state = 223;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,15,this._ctx);
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
	    this.enterRule(localctx, 38, JavaScriptParser.RULE_lambdaExpression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 224;
	        this.match(JavaScriptParser.T__0);
	        this.state = 225;
	        this.match(JavaScriptParser.IDENTIFIER);
	        this.state = 226;
	        this.match(JavaScriptParser.T__2);
	        this.state = 227;
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
	    this.enterRule(localctx, 40, JavaScriptParser.RULE_listExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 229;
	        this.match(JavaScriptParser.T__26);
	        this.state = 238;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 3895459874) !== 0)) {
	            this.state = 230;
	            this.expression(0);
	            this.state = 235;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===8) {
	                this.state = 231;
	                this.match(JavaScriptParser.T__7);
	                this.state = 232;
	                this.expression(0);
	                this.state = 237;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 240;
	        this.match(JavaScriptParser.T__27);
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
	    this.enterRule(localctx, 42, JavaScriptParser.RULE_callExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 242;
	        this.match(JavaScriptParser.IDENTIFIER);
	        this.state = 243;
	        this.match(JavaScriptParser.T__4);

	        this.state = 244;
	        this.expression(0);
	        this.state = 251;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 3895460130) !== 0)) {
	            this.state = 246;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===8) {
	                this.state = 245;
	                this.match(JavaScriptParser.T__7);
	            }

	            this.state = 248;
	            this.expression(0);
	            this.state = 253;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 254;
	        this.match(JavaScriptParser.T__5);
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



	callList() {
	    let localctx = new CallListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, JavaScriptParser.RULE_callList);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 256;
	        this.match(JavaScriptParser.IDENTIFIER);
	        this.state = 257;
	        this.match(JavaScriptParser.T__26);

	        this.state = 258;
	        this.expression(0);
	        this.state = 263;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===8) {
	            this.state = 259;
	            this.match(JavaScriptParser.T__7);
	            this.state = 260;
	            this.expression(0);
	            this.state = 265;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 266;
	        this.match(JavaScriptParser.T__27);
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
JavaScriptParser.T__26 = 27;
JavaScriptParser.T__27 = 28;
JavaScriptParser.IDENTIFIER = 29;
JavaScriptParser.NUMBER = 30;
JavaScriptParser.STRING_LITERAL = 31;
JavaScriptParser.WS = 32;

JavaScriptParser.RULE_program = 0;
JavaScriptParser.RULE_statement = 1;
JavaScriptParser.RULE_declaration = 2;
JavaScriptParser.RULE_variableAssignment = 3;
JavaScriptParser.RULE_functionDeclaration = 4;
JavaScriptParser.RULE_functionLet = 5;
JavaScriptParser.RULE_functionExpression = 6;
JavaScriptParser.RULE_formalParameters = 7;
JavaScriptParser.RULE_expressionStatement = 8;
JavaScriptParser.RULE_printStatement = 9;
JavaScriptParser.RULE_returnStatement = 10;
JavaScriptParser.RULE_blockStatement = 11;
JavaScriptParser.RULE_ifBlockStatement = 12;
JavaScriptParser.RULE_ifThenBlockStatement = 13;
JavaScriptParser.RULE_elseBlockStatement = 14;
JavaScriptParser.RULE_ifThenElseStatement = 15;
JavaScriptParser.RULE_ifThenStatement = 16;
JavaScriptParser.RULE_whileStatement = 17;
JavaScriptParser.RULE_expression = 18;
JavaScriptParser.RULE_lambdaExpression = 19;
JavaScriptParser.RULE_listExpression = 20;
JavaScriptParser.RULE_callExpression = 21;
JavaScriptParser.RULE_callList = 22;

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

	EOF() {
	    return this.getToken(JavaScriptParser.EOF, 0);
	};

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

	returnStatement() {
	    return this.getTypedRuleContext(ReturnStatementContext,0);
	};

	whileStatement() {
	    return this.getTypedRuleContext(WhileStatementContext,0);
	};

	functionLet() {
	    return this.getTypedRuleContext(FunctionLetContext,0);
	};

	callList() {
	    return this.getTypedRuleContext(CallListContext,0);
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



class FunctionLetContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavaScriptParser.RULE_functionLet;
    }

	blockStatement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(BlockStatementContext);
	    } else {
	        return this.getTypedRuleContext(BlockStatementContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof JavaScriptVisitor ) {
	        return visitor.visitFunctionLet(this);
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
	        return visitor.visitPrintStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ReturnStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavaScriptParser.RULE_returnStatement;
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
	        return visitor.visitReturnStatement(this);
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

	ifThenBlockStatement() {
	    return this.getTypedRuleContext(IfThenBlockStatementContext,0);
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

class CallLisContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	callList() {
	    return this.getTypedRuleContext(CallListContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof JavaScriptVisitor ) {
	        return visitor.visitCallLis(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JavaScriptParser.CallLisContext = CallLisContext;

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



class CallListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JavaScriptParser.RULE_callList;
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
	        return visitor.visitCallList(this);
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
JavaScriptParser.FunctionLetContext = FunctionLetContext; 
JavaScriptParser.FunctionExpressionContext = FunctionExpressionContext; 
JavaScriptParser.FormalParametersContext = FormalParametersContext; 
JavaScriptParser.ExpressionStatementContext = ExpressionStatementContext; 
JavaScriptParser.PrintStatementContext = PrintStatementContext; 
JavaScriptParser.ReturnStatementContext = ReturnStatementContext; 
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
JavaScriptParser.CallListContext = CallListContext; 
