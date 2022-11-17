import { useWeb3React } from "@web3-react/core";
import { Button, Modal, ShouldRender } from "components/shared";
import { connectorsByName, getErrorMessage } from "connectors";
import { useMemo } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
}

export const WalletConnectModal = ({ open, onClose }: Props) => {
  const { activate, error } = useWeb3React();
  const errorMessage = useMemo(() => {
    if (error) return getErrorMessage(error);
    return "";
  }, [error]);

  const handleConnect = async () => {
    await activate(connectorsByName.Injected);
    onClose();
  };

  return (
    <Modal modalId="wallect-connect-modal" open={open} onClose={onClose}>
      <div className="p-4 text-center bg-white rounded-lg">
        <h3 className="text-xl font-bold text-start">Wallet Connect</h3>
        <ShouldRender check={!error}>
          <p className="my-4 text-lg text-gray-500">
            Wallet not connected. Please click the &quot;Connect&quot; button
            below.
          </p>
        </ShouldRender>
        <ShouldRender check={errorMessage}>
          <p className="my-4 text-lg text-red-500">{errorMessage}</p>
        </ShouldRender>
        <div className="grid grid-flow-col grid-rows-1 gap-4">
          <Button disabled={Boolean(errorMessage)} onClick={handleConnect}>
            Connect
          </Button>
          <Button onClick={onClose} variant="outlined">
            Cancel
          </Button>
        </div>
      </div>
    </Modal>
  );
};
