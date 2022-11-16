import { clsx } from "shared/helpers";

interface Props {
  children?: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  variant?: "outlined" | "solid";
}

export const Button: React.FC<Props> = ({
  children,
  className,
  onClick,
  variant = "solid",
}) => {
  return (
    <button
      className={clsx(
        "px-4 py-2 rounded",
        variant === "solid" &&
          "font-bold text-white bg-black hover:bg-primaryHover",
        variant === "outlined" &&
          "bg-transparent text-black font-semibold hover:text-white border-2 border-black hover:border-transparent hover:bg-primaryHover",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
