let frameCount = 0;
let variable = 0;
let variableCount = [];
let ifCount = 0;

class Identifier {
	constructor(label, value = null) {
		this.label = label;
		this.value = value;

	}
}

function printPostOrder(node) {
	if (!node) return;

	// Si el nodo es un arreglo, recorre cada elemento recursivamente
	if (Array.isArray(node)) {
		node.forEach(printPostOrder);
		return;
	}

	// Recorre primero los hijos del nodo
	if (node.children && node.children.length > 0) {
		node.children.forEach(printPostOrder);
	}

	// Imprime dependiendo del tipo de nodo
	if (node.type === 'NUMBER') {
		console.log(node.value);
	} else if (node.type === 'PRINT') {
		console.log('PRN');
		if (node.value && node.value.children) {
			node.value.children.forEach(printPostOrder);
		}
	}

	else if (node.type === 'IDENTIFIER') {

		const existingIdentifier = variableCount.find(ident => ident.label === node.value.name);
		console.log("BLD", frameCount, existingIdentifier.value);

	} else if (node.type === 'LET') {


		const existingIdentifier = variableCount.find(ident => ident.label === node.value.name);
		if (!existingIdentifier) {
			const identy = new Identifier(node.value.name, variable);
			variableCount.push(identy);
			variable++;
			console.log('BST', frameCount, identy.value);
		} else {
			console.error('Error: node.name is undefined');
		}

	} else if (node.type === 'INT') {
		console.log('LDV', node.value);

	} else if (node.type === 'STR') {
		console.log('LDV', node.value);

	} else if (node.type === 'LIST') {
		console.log('LDV', node.value);
	}
	else if (node.type === 'COMPARE') {

		if (node.isIf) {
			console.log(node.value);
			console.log('BF', node.weight);
			ifCount = 0;

		} else {
			//console.log(node.value);
		}
	}
	else if (node.type === 'blockStatement') {

		console.log('BT', node.weight);


	}
	else if (node.type === 'IF_THEN') {

		ifCount = 0;

	}
	else if (node.type === 'ADD') {
		console.log('ADD');
	} else if (node.type === 'SUB') {
		console.log('SUB');
	} else if (node.type === 'MUL') {
		console.log('MUL');
	} else if (node.type === 'DIV') {
		console.log('DIV');
	}


}

export { printPostOrder };
