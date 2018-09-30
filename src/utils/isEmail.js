const re = /\S+@\S+\.\S+/;

export const isEmail = email => re.test(email);
