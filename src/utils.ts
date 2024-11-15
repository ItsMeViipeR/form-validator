export const isGoodEmail = (email: string): boolean => {
  const emailRegex = /^[\w-\.]+(\+[\w-]+)?@([\w-]+\.)+[\w-]{2,4}$/g;
  return emailRegex.test(email);
};
