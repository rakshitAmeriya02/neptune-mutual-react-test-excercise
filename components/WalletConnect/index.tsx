import Image from "next/image";
import React, { useState } from "react";
import { Button } from "../shared";
import { MetamaskIcon } from "assets";
import { WalletConnectModal } from "./WalletConnectModal";

const WalletConnect = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleOpen = () => setShow(true);
  return (
    <React.Fragment>
      <Button className="flex items-center" onClick={handleOpen}>
        <div className="w-8 mr-2">
          <Image src={MetamaskIcon} alt="metamask" />
        </div>
        Connect Wallet
      </Button>
      <WalletConnectModal open={show} onClose={handleClose} />
    </React.Fragment>
  );
};

export default WalletConnect;
