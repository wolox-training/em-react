export const emailOK = val => (/^[\w.-]+@[\w]+\.[\w]+$/g.test(val) ? undefined : 'Not a valid email.');

export const minLength = val => (val && val.length > 8 ? undefined : 'At least 8 characters');
