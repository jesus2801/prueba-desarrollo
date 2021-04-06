const mailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

export const isEmpty = (...strings: string[]): boolean => {
  return strings.some(str => str.trim() === '');
};

export const isEmail = (email: string) => {
  return mailRegex.test(email);
};
