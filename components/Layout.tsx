import { Web3ReactProvider } from "@web3-react/core";
import { getLibrary } from "connectors";
import HeaderBar from "./Header";

interface Props {
  children?: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <div className="flex flex-col flex-1">
        <HeaderBar />
        {children}
      </div>
    </Web3ReactProvider>
  );
};

export default Layout;
