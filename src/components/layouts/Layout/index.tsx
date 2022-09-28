import React from "react";

import { ContainerLayout } from "./styles";

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
  return <ContainerLayout>{children}</ContainerLayout>;
};

Layout.Navbar = Navbar;
