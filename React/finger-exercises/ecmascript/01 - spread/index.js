import { isArray } from './utils';

export function min(...args) {
  if (!args.length) return undefined;
  if (args.length === 1 && !isArray(args[0])) return args[0];

  const newArgs = [];

  args.forEach(arg => {
    if (isArray(arg)) newArgs.push(...arg);
    else newArgs.push(arg);
  });

  return Math.min(...newArgs);
}

export function copy(obj) {
  const newObj = obj.constructor === Object ? { ...obj } : [...obj];
  return newObj;
}


export function reverseMerge(...args) {
  const output = [];
  const reverseArgs = args.reverse();
  reverseArgs.forEach(arg => {
    output.push(...arg);
  });
  return (output);
}

export function filterAttribs(obj) {
  const { a, b, ...z } = obj;
  return z;
}