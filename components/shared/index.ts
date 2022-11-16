import dynamic from "next/dynamic";

export * from "./Button";
export * from "./InputField";

export const Modal = dynamic(() => import("./Modal"), {
  ssr: false,
});
