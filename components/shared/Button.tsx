import { clsx } from "shared/helpers";
import { Spinner } from "./Spinner";

interface Props {
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  variant?: "outlined" | "solid" | "danger";
}

export const Button: React.FC<Props> = ({
  children,
  className,
  disabled,
  loading,
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
        variant === "danger" &&
          "font-bold text-white bg-red-700 hover:bg-red-500",
        className
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {loading ? <Spinner /> : children}
    </button>
  );
};
