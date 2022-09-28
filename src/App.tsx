import { Layout } from "@/components/layouts";

const App: React.FC = () => {
  const menuItems = [
    { href: "/", name: "Inicio" },
    { href: "/characters", name: "Personajes" },
    { href: "/episodes", name: "Episodios" },
    { href: "/locations", name: "Lugares" },
  ];
  return (
    <Layout>
      <Layout.Navbar items={menuItems} />
    </Layout>
  );
};

export default App;
