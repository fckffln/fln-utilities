/**
 *
 *************************************************
 *                                               *
 *                   CSS parser                  *
 *                                               *
 *************************************************
 *
 * CSS object parser (will add over time)
 *
 * Usage:
 *
 * > const style = {color: 'white', background: 'black'};
 * > CSS.parse(style);
 * // returns 'color:white;background:black;'
 * > const styleString = CSS.parse(style);
 * > CSS.unparse(styleString);
 * // return {color: 'white', background: 'black'}
 *
 **/


export * from './css';
