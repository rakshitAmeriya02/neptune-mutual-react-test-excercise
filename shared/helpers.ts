type className = string | boolean | undefined | null;

export const clsx = (...args: className[]) => {
  const classes = args.filter((value) => value).join(" ");
  return classes;
};
