import { useEffect, useMemo, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { Button, Modal } from "components/shared";
import { formatEther } from "@ethersproject/units";

interface Props {
  open: boolean;
  onClose: () => void;
}

export const WalletDetailsModal = ({ open, onClose }: Props) => {
  const { account, chainId, deactivate, library } = useWeb3React();
  const [balance, setBalance] = useState();
  const accountAddress = useMemo(() => {
    return account
      ? `${account.substring(0, 6)}...${account.substring(account.length - 4)}`
      : "-";
  }, [account]);

  useEffect(() => {
    const getBalance = async () => {
      const balance = await library?.getBalance(account);
      setBalance(balance);
    };
    if (library) {
      getBalance();
    }
  }, [account, library, chainId]);

  const handleDisconnect = () => {
    deactivate();
    onClose();
  };
  return (
    <Modal modalId="wallect-connect-modal" open={open} onClose={onClose}>
      <div className="p-4 text-center bg-white rounded-lg">
        <h3 className="text-xl font-bold text-start">Wallet Details</h3>
        <div className="flex flex-col px-2 py-4">
          <div className="flex justify-between mb-3">
            <p className="font-semibold">Account</p>
            <p className="text-gray-700">{accountAddress}</p>
          </div>
          <div className="flex justify-between mb-3">
            <p className="font-semibold">Chain ID</p>
            <p className="text-gray-700">{chainId || "N/A"}</p>
          </div>
          <div className="flex justify-between mb-3">
            <p className="font-semibold">Balance</p>
            <p className="text-gray-700">
              {balance ? `Ξ${formatEther(balance)}` : ""}
            </p>
          </div>
        </div>
        <div className="grid grid-flow-col grid-rows-1 gap-4">
          <Button variant="danger" onClick={handleDisconnect}>
            Disconnect
          </Button>
        </div>
      </div>
    </Modal>
  );
};
