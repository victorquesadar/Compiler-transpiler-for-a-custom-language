import fs from 'fs';
import path from 'path';
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
let generatedCode =[];
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
        generatedCode.push('$FUN $' + String(identy.value));
        insideFunction++;
    } else {
        generatedCode.push('RET');
        generatedCode.push('$END $' + String(existingIdentifier.value));
        insideFunction--;
    }

}



/**
 * Maneja nodos de tipo NUMBER.
 * @param {Node} node - Nodo actual.
 */
function handleNumber(node) {
    generatedCode.push(node.value);
}

// Otros manejadores siguen el mismo patrón...

/**
 * Maneja la impresión de un nodo.
 * @param {Object} node - Nodo que contiene la instrucción de impresión.
 */
function handlePrint(node) {
    generatedCode.push('PRN');
    if (node.value && node.value.children) {
        node.value.children.forEach(printPostOrder);
    }
}

/**
 * Maneja la instrucción de retorno.
 * @param {Object} node - Nodo que contiene la instrucción de retorno.
 */
function handleReturn(node) {
    generatedCode.push('RET');
    if (node.value && node.value.children) {
        node.value.children.forEach(printPostOrder);
    }
}

/**
 * Maneja una lista de llamadas.
 * @param {Object} node - Nodo que contiene la lista de llamadas.
 */
function handleCallList(node) {
    generatedCode.push('LTK');
    if (node.value && node.value.children) {
        node.value.children.forEach(printPostOrder);
    }
}

/**
 * Maneja un identificador.
 * @param {Object} node - Nodo que contiene el identificador.
 */
function handleIdentifier(node) {
    for (let i = variableCount.length - 1; i >= 0; i--) {
        const existingIdentifier = variableCount[i].variableList.find(ident => ident.label === node.value.name);
        if (existingIdentifier && insideFunction>0) {
            generatedCode.push("BLD " +String(Math.abs(i-(variableCount.length-1)))+' ' +String(existingIdentifier.value));
            return;
        }else if(existingIdentifier && insideFunction == 0){
            generatedCode.push("BLD 0 " +String(existingIdentifier.value));
            return;
        }
    }
    //generatedCode.push("BLD", frameCount, existingIdentifier.value);
    //const existingIdentifier = variableCount[0].variableList.find(ident => ident.label === node.value.name);
   
}

/**
 * Maneja un parámetro.
 * @param {Object} node - Nodo que contiene el parámetro.
 */
function handleParameter(node) {
    
    if (!variableCount[frameCount]) {
        variableCount[frameCount] = { variableList: [] };
    }  
    const existingIdentifier = variableCount[frameCount].variableList.find(ident => ident.label === node.value.name) !== undefined;
    if (!existingIdentifier) {
        for (let i = 0; i < node.value; i++) {
            const identy = new Identifier(node.children[i], variable);
            variableCount[frameCount].variableList.push(identy);
            variable++;
            generatedCode.push('BST 0 ' +String(identy.value));    
        }
    } else {
        console.error('Error: node.name is undefined');
    }

}

/**
 * Maneja una declaración de variable (let).
 * @param {Object} node - Nodo que contiene la declaración de variable.
 */
function handleLet(node) {
    if (!variableCount[0]) {
        variableCount[0] = { variableList: [] };
    }
    const existingIdentifier = variableCount[insideFunction].variableList.find(ident => ident.label === node.value.name) !== undefined;
    if (!existingIdentifier) {
        const identy = new Identifier(node.value.name, variable);
        variableCount[insideFunction].variableList.push(identy);
        variable++;
        generatedCode.push('BST 0 '  +String(identy.value));
    } else {
        console.error('Error: node.name is undefined');
    }
}

/**
 * Maneja una llamada a función.
 * @param {Object} node - Nodo que contiene la llamada a función.
 */
function handleCall(node) {
    let existingIdentifier = variableCount.find(ident => ident.label === node.value.name);
    if (existingIdentifier) {
        generatedCode.push("LDF $" + String(existingIdentifier.value));
        generatedCode.push("APP");
    } else {
        console.error('Error: node.name is undefined');
    }
}

/**
 * Maneja un valor entero.
 * @param {Object} node - Nodo que contiene el valor entero.
 */
function handleInt(node) {
    generatedCode.push('LDV '+String( node.value));
}

/**
 * Maneja un valor de cadena.
 * @param {Object} node - Nodo que contiene el valor de cadena.
 */
function handleStr(node) {
    generatedCode.push('LDV '+String(node.value));
}

/**
 * Maneja una lista.
 * @param {Object} node - Nodo que contiene la lista.
 */
function handleList(node) {
    generatedCode.push('LDV '+String( node.value));
}

/**
 * Maneja la comparación de un nodo.
 * @param {Object} node - Nodo que contiene la comparación.
 */
function handleCompare(node) {
    if (node.isIf) {
        generatedCode.push(node.value);
        generatedCode.push('BF '+String( node.weight));
    }
}

/**
 * Maneja una declaración de bloque.
 * @param {Object} node - Nodo que contiene la declaración de bloque.
 */
function handleBlockStatement(node) {
    generatedCode.push('BT '+String( node.weight));
}

/**
 * Maneja un bucle while.
 * @param {Object} node - Nodo que contiene el bucle while.
 */
function handleWhile(node) {
    generatedCode.push('BR ', '-' + String(node.value));
}

/**
 * Maneja una operación binaria.
 * @param {Object} node - Nodo que contiene la operación binaria.
 */
function handleBinaryOper(node) {
    generatedCode.push(node.value);
}

/**
 * Maneja el final de la ejecución.
 * @param {Object} node - Nodo que indica el final de la ejecución.
 */
function handleEnd(node) {
    generatedCode.push('HLT');
}


/**
 * Guarda el código generado en un archivo en una ubicación específica.
 * 
 * @param {string} directory - El directorio donde se almacenará el archivo.
 * @param {string} filename - El nombre del archivo donde se guardará el código.
 * @param {string[]} lines - Un arreglo de líneas de código a guardar.
 */


export function writeToFile(directory, filename) {
    const filePath = path.join(directory, filename);

    try {
        if (!fs.existsSync(directory)) {
            fs.mkdirSync(directory, { recursive: true }); // Crear el directorio si no existe
        }
        fs.writeFileSync(filePath, generatedCode.join('\n'), 'utf8');
        console.log(`Archivo guardado exitosamente en: ${filePath}`);
    } catch (error) {
        console.error(`Error al guardar el archivo: ${error.message}`);
    }
}



export { printPostOrder };
