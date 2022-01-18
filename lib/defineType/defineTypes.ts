import { defineType } from "./defineType";
import {defineOptions} from "./model";

/**
 @deprecated
  - not supported since 0.0.20v.
  - use defineTypes()
 */
export function defineTypeArray(...args: any[]): string[] {
  const arrayTypes = [];
  args.forEach(arg => {
    arrayTypes.push(defineType(arg));
  })
  return arrayTypes;
}

export function defineTypes(args: any[], options?: defineOptions): string[] {
  const arrayTypes = [];
  args.forEach(arg => {
    arrayTypes.push(defineType(arg), options ? options : undefined);
  })
  return arrayTypes;
}
