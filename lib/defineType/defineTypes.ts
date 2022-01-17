import { defineType } from "./defineType";

export function defineTypes(...args: any[]): string[] {
  const arrayTypes = [];
  args.forEach(arg => {
    arrayTypes.push(defineType(arg));
  })
  return arrayTypes;
}
