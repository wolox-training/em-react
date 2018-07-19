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

export function copy() {

}
