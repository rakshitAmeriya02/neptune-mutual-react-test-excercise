import HeaderBar from "./Header";

interface Props {
  children?: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col flex-1">
      <HeaderBar />
      {children}
    </div>
  );
};

export default Layout;
