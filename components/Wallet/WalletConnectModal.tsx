import { useWeb3React } from "@web3-react/core";
import { Button, Modal } from "components/shared";
import { connectorsByName } from "connectors";

interface Props {
  open: boolean;
  onClose: () => void;
}

export const WalletConnectModal = ({ open, onClose }: Props) => {
  const { activate, deactivate } = useWeb3React();

  const handleConnect = async () => {
    if (activate) {
      await activate(connectorsByName.Injected);
    } else {
      deactivate();
    }
    onClose();
  };

  return (
    <Modal modalId="wallect-connect-modal" open={open} onClose={onClose}>
      <div className="p-4 text-center bg-white rounded-lg">
        <h3 className="text-xl font-bold text-start">Wallet Connect</h3>
        <p className="my-4 text-lg text-gray-500">
          Wallet not connected. Please click the "Connect" button below.
        </p>
        <div className="grid grid-flow-col grid-rows-1 gap-4">
          <Button onClick={handleConnect}>Connect</Button>
          <Button onClick={onClose} variant="outlined">
            Cancel
          </Button>
        </div>
      </div>
    </Modal>
  );
};
