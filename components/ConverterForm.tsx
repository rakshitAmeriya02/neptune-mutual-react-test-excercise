import React, { useRef } from "react";
import Image from "next/image";
import { SyncIcon } from "assets";
import { convertValue } from "services";
import { InputField } from "./shared";

const ConverterForm = () => {
  const inputFieldsRef = useRef<{
    [key: string]: HTMLInputElement | null;
  }>({
    busd: null,
    nep: null,
  });

  const addToRef = (element: HTMLInputElement) => {
    if (!element) return;
    const name = element.name;
    inputFieldsRef.current[name] = element;
  };

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    if (!target) return;
    const { name, value } = target;
    const targetElement =
      name === "nep" ? inputFieldsRef.current.busd : inputFieldsRef.current.nep;
    if (targetElement) {
      targetElement.value = convertValue(name, value);
    }
  };

  return (
    <div className="flex flex-col max-w-md p-4 mx-auto bg-white rounded-md shadow-xl">
      <InputField
        ref={addToRef}
        min={0}
        name="nep"
        label="NEP"
        placeholder="0.00"
        onChange={handleChange}
        type="number"
      />
      <div className="mx-auto my-4">
        <Image src={SyncIcon} alt="sync" />
      </div>
      <InputField
        ref={addToRef}
        min={0}
        name="busd"
        label="BUSD"
        placeholder="0.00"
        onChange={handleChange}
        type="number"
      />
    </div>
  );
};

export default ConverterForm;
