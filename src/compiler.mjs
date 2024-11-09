
import antlr4 from 'antlr4'

import JavaScriptLexer  from '../parser/JavaScriptLexer.js'
import JavaScriptParser  from '../parser/JavaScriptParser.js'

import { MyVisitor } from './parser.mjs'

import { printPostOrder } from './generator.mjs'

import CustomErrorListener from './CustomErrorListener.mjs';

import fs from 'fs'

async function compile(filename) {
	
  try{
	  
    const input = await fs.promises.readFile(filename, 'utf8')
	

    const chars = new antlr4.InputStream(input)
    const lexer = new JavaScriptLexer(chars)
    const tokens = new antlr4.CommonTokenStream(lexer)
    const parser = new JavaScriptParser(tokens)

    tokens.fill();  // Rellena todos los tokens
    console.log('Generated Tokens:');
	
    const errorListener = new CustomErrorListener();
    //parser.removeErrorListeners()
    //parser.addErrorListener(errorListener)

    parser.buildParseTrees = true
	
    const tree = parser.program()

    if (parser._syntaxErrors > 0) {
      console.error('Parsing failed due to syntax errors.')
      return;
    }

    const visitor = new MyVisitor()
	
    const ast = visitor.visit(tree)
  
    console.log('\n;;;*** Compiler Post-order starts ***\n')
    printPostOrder(ast);
	console.log('\n;;;*** Compiler Post-order ends ***\n')
  }catch (error) {
    console.error(`*** Compiler::compile Error: ${error.message} ***`)
  }
}
const default_filename = './test/input2.txt'

export function main(){
	
	let filename = process.argv[2]
	
	if (!filename) {
	  console.log(`*** Warning: No filename in commnd line given! Using ${default_filename} ***`)
	  filename = default_filename
	  try{
		compile(filename)
	  }catch (error){
		  console.error(`*** Compiler::main Error: ${error.message} ***`)
	  }
	  
	}
}
