import React, { useMemo, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import Image from "next/image";
import { Button } from "../shared";
import { MetamaskIcon } from "assets";
import { WalletConnectModal } from "./WalletConnectModal";
import { WalletDetailsModal } from "./WalletDetailsModal";

interface Props {
  loading: boolean;
}

const WalletConnect = ({ loading }: Props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleOpen = () => setShow(true);
  const { account } = useWeb3React();
  const buttonText = useMemo(() => {
    return account
      ? `${account.substring(0, 6)}...${account.substring(account.length - 4)}`
      : "Connect Wallet";
  }, [account]);

  return (
    <React.Fragment>
      <Button
        className="flex items-center"
        onClick={handleOpen}
        loading={loading}
        disabled={loading}
      >
        <div className="w-6 mr-2 sm:w-8">
          <Image src={MetamaskIcon} alt="metamask" />
        </div>
        <p className="text-xs sm:text-base">{buttonText}</p>
      </Button>
      {account ? (
        <WalletDetailsModal open={show} onClose={handleClose} />
      ) : (
        <WalletConnectModal open={show} onClose={handleClose} />
      )}
    </React.Fragment>
  );
};

export default WalletConnect;
