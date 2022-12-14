import { Navbar, NavbarProps } from "../Navbar";

interface NavComposition {
  Navbar: React.FC<NavbarProps>;
}
interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> & NavComposition = ({
  children,
}) => {
  return <div>{children}</div>;
};

Layout.Navbar = Navbar;
