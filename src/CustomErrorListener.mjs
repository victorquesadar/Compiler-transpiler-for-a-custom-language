/**
 * @file
 * Este archivo contiene la implementación de un listener personalizado para manejar errores de sintaxis y advertencias
 * durante el análisis del código fuente utilizando ANTLR.
 *
 * @version 1.0.0
 * @authors 
 * - Victor Quesada Rodriguez
 * - Esteban Mojica
 * - Pablo Alvarez
 * @date Última modificación: 2024-11-14
 */

import antlr4 from 'antlr4';

/**
 * Clase para manejar errores de sintaxis y advertencias durante el análisis del código fuente.
 * Extiende la clase ErrorListener de ANTLR.
 */
class CustomErrorListener extends antlr4.error.ErrorListener {
  constructor() {
    super();
  }
   /**
   * Maneja errores de sintaxis.
   * @param {Recognizer} recognizer - El reconocedor que detectó el error.
   * @param {Symbol} offendingSymbol - El símbolo que causó el error.
   * @param {number} line - La línea donde ocurrió el error.
   * @param {number} charPositionInLine - La posición del carácter en la línea donde ocurrió el error.
   * @param {string} msg - El mensaje de error.
   * @param {RecognitionException} e - La excepción de reconocimiento.
   */
  syntaxError(recognizer, offendingSymbol, line, charPositionInLine, msg, e) {
    console.error(`Syntax error at line ${line}, column ${charPositionInLine}: ${msg}`);
  }

  /**
   * Reporta ambigüedades durante el análisis.
   * @param {Recognizer} recognizer - El reconocedor que detectó la ambigüedad.
   * @param {DFA} dfa - El autómata finito determinista.
   * @param {number} startIndex - El índice de inicio de la ambigüedad.
   * @param {number} stopIndex - El índice de fin de la ambigüedad.
   * @param {boolean} exact - Si la ambigüedad es exacta.
   * @param {BitSet} ambigAlts - Las alternativas ambiguas.
   * @param {ATNConfigSet} configs - La configuración del ATN.
   */
  reportAmbiguity(recognizer, dfa, startIndex, stopIndex, exact, ambigAlts, configs) {
    console.warn(`Ambiguity at indices ${startIndex}-${stopIndex}`);
  }

    /**
   * Reporta intentos de contexto completo durante el análisis.
   * @param {Recognizer} recognizer - El reconocedor que detectó el intento.
   * @param {DFA} dfa - El autómata finito determinista.
   * @param {number} startIndex - El índice de inicio del intento.
   * @param {number} stopIndex - El índice de fin del intento.
   * @param {BitSet} conflictingAlts - Las alternativas en conflicto.
   * @param {ATNConfigSet} configs - La configuración del ATN.
   */
  reportAttemptingFullContext(recognizer, dfa, startIndex, stopIndex, conflictingAlts, configs) {
    console.warn(`Attempting full context at indices ${startIndex}-${stopIndex}`);
  }

  /**
   * Reporta sensibilidad al contexto durante el análisis.
   * @param {Recognizer} recognizer - El reconocedor que detectó la sensibilidad.
   * @param {DFA} dfa - El autómata finito determinista.
   * @param {number} startIndex - El índice de inicio de la sensibilidad.
   * @param {number} stopIndex - El índice de fin de la sensibilidad.
   * @param {number} prediction - La predicción realizada.
   * @param {ATNConfigSet} configs - La configuración del ATN.
   */
  reportContextSensitivity(recognizer, dfa, startIndex, stopIndex, prediction, configs) {
    console.warn(`Context sensitivity at indices ${startIndex}-${stopIndex}`);
  }
}

export default CustomErrorListener;
