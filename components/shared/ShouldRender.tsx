import React from "react";

interface Props {
  check: boolean | string | number | unknown;
  children: React.ReactNode;
}

/* 
  This component allows the conditional rendering in a more consise and readable manner by conforming to 
  react declarative style
*/
export const ShouldRender: React.FC<Props> = ({ check, children }) => {
  const component = (children as React.ReactElement) || <React.Fragment />;
  return check ? component : <React.Fragment />;
};
