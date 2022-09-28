import { Outlet } from "react-router";
import { Layout } from "@/components/layouts";

export const Root = () => {
  const menuItems = [
    { href: "/characters", name: "Personajes" },
    { href: "/episodes", name: "Episodios" },
    { href: "/locations", name: "Lugares" },
  ];
  return (
    <Layout>
      <Layout.Navbar items={menuItems} />
      <Outlet />
    </Layout>
  );
};
