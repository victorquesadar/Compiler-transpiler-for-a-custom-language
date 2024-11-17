/**
 * @file
 * Este archivo contiene la implementación de una función para recorrer un árbol de sintaxis abstracta (AST) en postorden
 * y ejecutar acciones basadas en los nodos. Además, se incluye la definición de una clase para manejar identificadores.
 *
 * @version 1.0.0
 * @author 
 * - Nombre del Autor 1 Victor Quesada Rodriguez
 * - Nombre del Autor 2 Esteban Mojica
 * - Nombre del Autor 3 Pablo Alvarez
 * @date Última modificación: 2024-11-14
 */

/**
 * Representa un identificador en el árbol de variables.
 */
class Identifier {
    /**
     * @param {string} label - El nombre del identificador.
     * @param {number|null} [value=null] - El valor asociado al identificador.
     */
    constructor(label, value = null) {
        this.label = label;
        this.value = value;
        /**
         * @type {Identifier[]} Lista de variables asociadas.
         */
        this.variableList = [];
    }
}

/** 
 * @typedef {Object} Node 
 * @property {string} type - El tipo de nodo (e.g., 'FUNCTION_DECLARATION', 'NUMBER').
 * @property {Object} [value] - Información adicional del nodo.
 * @property {Node[]} [children] - Hijos del nodo en el árbol de sintaxis.
 * @property {boolean} [isIf] - Si el nodo representa una condición `if`.
 * @property {number} [weight] - Peso o metadatos adicionales del nodo.
 */

let frameCount = 0;
let variable = 0;
/**
 * @type {Identifier[]} Lista de variables globales.
 */
let variableCount = [];
let ifCount = 0;
let insideFunction = 0;

/**
 * Recorre un árbol de sintaxis abstracta (AST) en postorden y ejecuta las acciones correspondientes según el tipo de nodo.
 * 
 * @param {Node|Node[]} node - Nodo o lista de nodos a procesar.
 * @throws {Error} Si se encuentra un nodo con información incompleta o incorrecta.
 */

function printPostOrder(node) {
    

    if (!node) { return; }
    
    if(node.type === 'FUNCTION_DECLARATION'){
        handleFunctionDeclaration(node);
    }
    // Si el nodo es un arreglo, recorre cada elemento recursivamente
    if (Array.isArray(node)) {
        node.forEach(printPostOrder);
        return;
    }

    /**
     * Mapeo de tipos de nodos a funciones manejadoras.
     * @type {Object<string, Function>}
     */
    const handlers = {
        'FUNCTION_DECLARATION': handleFunctionDeclaration,
        'NUMBER': handleNumber,
        'PRINT': handlePrint,
        'IDENTIFIER': handleIdentifier,
        'LET': handleLet,
        'CALL': handleCall,
        'INT': handleInt,
        'STR': handleStr,
        'LIST': handleList,
        'CALL_LIST': handleCallList,
        'COMPARE': handleCompare,
        'blockStatement': handleBlockStatement,
        'BINARY_OPER': handleBinaryOper,
        'WHILE': handleWhile,
        'PARAMETER': handleParameter,
        'RETURN': handleReturn,
        'END': handleEnd
    };


    // Procesar hijos recursivamente
    if (node.children && node.children.length > 0) {
        node.children.forEach(printPostOrder);
    }

    // Llamar al manejador correspondiente, si existe
    if (handlers[node.type]) {
        handlers[node.type](node);
    }


}

/**
 * Maneja nodos de tipo FUNCTION_DECLARATION.
 * @param {Node} node - Nodo actual.
 */
function handleFunctionDeclaration(node) {
    let existingIdentifier = variableCount.find(ident => ident.label === node.value.name);
    if (!existingIdentifier) {
        frameCount++;
        const identy = new Identifier(node.value.name, frameCount);
        variableCount.push(identy);
        console.log('$FUN', '$' + String(identy.value));
        insideFunction++;
    } else {
        console.log('RET');
        console.log('$END', '$' + String(existingIdentifier.value));
        insideFunction--;
    }

}



/**
 * Maneja nodos de tipo NUMBER.
 * @param {Node} node - Nodo actual.
 */
function handleNumber(node) {
    console.log(node.value);
}

// Otros manejadores siguen el mismo patrón...

function handlePrint(node) {
    console.log('PRN');
    if (node.value && node.value.children) {
        node.value.children.forEach(printPostOrder);
    }
}

function handleReturn(node) {
    console.log('RET');
    if (node.value && node.value.children) {
        node.value.children.forEach(printPostOrder);
    }
}

function handleCallList(node) {
    console.log('LTK');
    if (node.value && node.value.children) {
        node.value.children.forEach(printPostOrder);
    }
}

function handleIdentifier(node) {
    for (let i = variableCount.length - 1; i >= 0; i--) {
        const existingIdentifier = variableCount[i].variableList.find(ident => ident.label === node.value.name);
        if (existingIdentifier && insideFunction>0) {
            console.log("BLD",Math.abs(i-(variableCount.length-1)), String(existingIdentifier.value));
            return;
        }else if(existingIdentifier && insideFunction == 0){
            console.log("BLD",0, String(existingIdentifier.value));
            return;
        }
    }
    //console.log("BLD", frameCount, existingIdentifier.value);
    //const existingIdentifier = variableCount[0].variableList.find(ident => ident.label === node.value.name);
   
}

function handleParameter(node) {
    
    if (!variableCount[0]) {
        variableCount[0] = { variableList: [] };
    }  
    const existingIdentifier = variableCount[0].variableList.find(ident => ident.label === node.value.name) !== undefined;
    if (!existingIdentifier) {
        for (let i = 0; i < node.value; i++) {
            const identy = new Identifier(variable[i], variable);
            variableCount[0].variableList.push(identy);
            variable++;
            console.log('BST', 0, identy.value);    
        }
    } else {
        console.error('Error: node.name is undefined');
    }

}

function handleLet(node) {
    if (!variableCount[0]) {
        variableCount[0] = { variableList: [] };
    }
    const existingIdentifier = variableCount[insideFunction].variableList.find(ident => ident.label === node.value.name) !== undefined;
    if (!existingIdentifier) {
        const identy = new Identifier(node.value.name, variable);
        variableCount[insideFunction].variableList.push(identy);
        variable++;
        console.log('BST', 0, identy.value);
    } else {
        console.error('Error: node.name is undefined');
    }
}

function handleCall(node) {
    let existingIdentifier = variableCount.find(ident => ident.label === node.value.name);
    if (existingIdentifier) {
        console.log("LDF", '$' + String(existingIdentifier.value));
        console.log("APP");
    } else {
        console.error('Error: node.name is undefined');
    }
}

function handleInt(node) {
    console.log('LDV', node.value);
}

function handleStr(node) {
    console.log('LDV', node.value);
}

function handleList(node) {
    console.log('LDV', node.value);
}

function handleCompare(node) {
    if (node.isIf) {
        console.log(node.value);
        console.log('BF', node.weight);
    }
}

function handleBlockStatement(node) {
    console.log('BT', node.weight);
}

function handleWhile(node) {
    console.log('BR', '-' + String(node.value));
}
function handleBinaryOper(node) {
    console.log(node.value);
}
function handleEnd(node) {
    console.log('HLT');
}

export { printPostOrder };
