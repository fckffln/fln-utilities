/**
 *
 *************************************************
 *                                               *
 *                 define types                  *
 *                                               *
 *************************************************
 *
 * Finds primitive and not quite types
 *
 * Usage:
 *
 * You can find type
 * > defineType('word');
 * // returns 'string'
 *
 * > defineType([0,3,5]);
 * // returns 'array'
 *
 * > defineType({'foo' : 'bar'});
 * // returns 'object'
 *
 * > class fln {};
 * > defineType(new fln());
 * // returns 'class'
 *
 * Or you can find class name
 * > class fln {};
 * > defineType(new fln(), {classnames: true});
 * // returns 'fln'
 *
 * Also you can find more than one type
 * > defineTypes(['word', [5,3], 5])
 * // returns ['string', 'array', 'number']
 *
 **/

export { defineTypeArray } from "./defineTypes";
export { defineTypes } from "./defineTypes";
export { defineType } from "./defineType";
