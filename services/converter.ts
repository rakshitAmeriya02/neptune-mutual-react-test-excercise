// converts value from nep to busd and busd to nep
export const convertValue = (name: string, value: string) => {
  if (value) {
    switch (name) {
      case "nep":
        return (+value * 3).toFixed(2);
      case "busd":
      default:
        return (+value / 3).toFixed(2);
    }
  }
  return value;
};
