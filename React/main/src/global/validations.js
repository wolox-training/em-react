export const emailOK = val => (/^[\w.-]+@[\w]+\.[\w]+$/g.test(val) ? undefined : 'Not a valid email.');

export const minLength = val => (val && val.length > 8 ? undefined : 'At least 8 characters');

export const isIcon = val => (val && val.length < 3 ? undefined : 'No more than two characters.');

export const maxLength = val => (val && val.length < 26 ? undefined : 'Use a shorter name.');
