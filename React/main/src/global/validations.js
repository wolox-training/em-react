export const emailOK = val => (/^[\w.-]+@[\w]+\.[\w]+$/g.test(val) ? undefined : 'Not a valid email.');

export const minLength = val => (val && val.length > 8 ? undefined : 'At least 8 characters');

export const isIcon = val => (val && val.length === 1 ? undefined : 'Icons are just one character long.');

export const maxLength = val => (val && val.length <= 25 ? undefined : 'Use a shorter name.');
