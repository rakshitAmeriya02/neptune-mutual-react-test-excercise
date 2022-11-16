import React, { useCallback, useEffect, useState } from "react";
import ReactDOM from "react-dom";

interface Props {
  baseClass?: string;
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
  modalId: string;
}

const Modal: React.FC<Props> = ({
  baseClass,
  children,
  open,
  onClose,
  modalId,
}) => {
  const [node] = useState(() => document.createElement("div"));

  const removeNode = useCallback(() => {
    const ele = document.getElementById(modalId);
    if (ele) {
      ele.remove();
    }
  }, [modalId]);

  useEffect(() => {
    if (node) {
      if (open) {
        document.body?.appendChild(node);
        node.id = modalId;
        node.classList.add("fixed");
        node.classList.add("top-0");
        node.classList.add("left-0");
        node.classList.add("h-full");
        node.classList.add("w-full");
      } else {
        removeNode();
      }
    }
    return () => removeNode();
  }, [node, open, modalId, removeNode]);

  if (!node) return <React.Fragment></React.Fragment>;

  return ReactDOM.createPortal(
    <div
      className={"h-full w-full relative" + (baseClass ? " " + baseClass : "")}
    >
      <div
        onClick={onClose}
        className="z-50 w-full h-full bg-black opacity-50"
      ></div>
      <div className="absolute translate-y-50% top-1/2 left-1/2 translate-x-50% w-full max-w-lg px-2 sm: px-auto">
        {children}
      </div>
    </div>,
    node
  );
};

export default Modal;
