import {main} from './src/compiler.mjs'
const args = process.argv.slice(2);

if (args.length < 1) {
  console.error("Por favor, proporciona el nombre del archivo a ejecutar.");
  process.exit(1); 
}

const fileName = args[0]; // Primer argumento: nombre del archivo
//const fileName = "subhilera";
// Llama a la función principal

main()