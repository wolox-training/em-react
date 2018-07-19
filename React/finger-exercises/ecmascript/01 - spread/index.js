import { isArray } from './utils';

export function min(...args) {
  if (!args.length) return undefined;
  const array = isArray(args[0]) ? args[0] : args;
  return Math.min(...array);
}

export function copy(obj) {
  return isArray(obj) ? [...obj] : { ...obj };
}

export function reverseMerge(...args) {
  const output = [];
  const reverseArgs = args.reverse();
  reverseArgs.forEach(arg => { output.push(...arg); });
  return (output);
}

export function filterAttribs(obj) {
  const { a, b, ...z } = obj;
  return z;
}
