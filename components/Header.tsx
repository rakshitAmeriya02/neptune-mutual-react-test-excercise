import { useState } from "react";
import Image from "next/image";
import WalletConnect from "./WalletConnect";
import { MenuIcon, NeptuneMutualLogo } from "assets";
import { Modal } from "./shared";

const HeaderBar = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="flex justify-between p-4 md:p-6 border-b border-b-[#b0c4db] items-center">
      <div className="w-[12rem] md:w-[16rem]">
        <Image src={NeptuneMutualLogo} alt="Neptune Mutual Logo" priority />
      </div>
      <div className="hidden md:block">
        <WalletConnect />
      </div>
      <div
        className="block cursor-pointer md:hidden"
        onClick={() => setShow(true)}
      >
        <Image src={MenuIcon} alt="menu" />
      </div>
      <Modal
        open={show}
        onClose={() => setShow(false)}
        modalId="header-bar-menu"
      >
        <div className="flex justify-center">
          <WalletConnect />
        </div>
      </Modal>
    </div>
  );
};

export default HeaderBar;
