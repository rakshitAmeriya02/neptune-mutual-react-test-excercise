import { useState } from "react";
import Image from "next/image";
import WalletConnect from "./Wallet";
import { MenuIcon, NeptuneMutualLogo } from "assets";
import { Modal } from "./shared";
import { useEagerConnect, useInactiveListener } from "hooks/useWalletConnect";

const HeaderBar = () => {
  const [show, setShow] = useState(false);

  // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already
  const triedEager = useEagerConnect();

  // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists
  useInactiveListener(!triedEager);

  return (
    <div className="flex items-center justify-between p-4 border-b md:p-6 border-b-borderGray">
      <div className="w-[12rem] md:w-[16rem]">
        <Image src={NeptuneMutualLogo} alt="Neptune Mutual Logo" priority />
      </div>
      <div className="hidden md:block">
        <WalletConnect loading={!triedEager} />
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
          <WalletConnect loading={!triedEager} />
        </div>
      </Modal>
    </div>
  );
};

export default HeaderBar;
