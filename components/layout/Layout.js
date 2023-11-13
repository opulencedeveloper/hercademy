import NavBar from "../UI/NavBar";

const Layout = (props) => {
  const { navSwitcherHandler, children, selectedTab } = props;
  return (
    <section className="relative h-screen overflow-hidden max-w-[40rem] mx-auto">
      <main className="relative w-full h-full scrollbar-hide overflow-y-auto mt-7 pb-28">
        {children}
      </main>
      <NavBar
        navSwitcherHandler={navSwitcherHandler}
        selectedTab={selectedTab}
      />
    </section>
  );
};

export default Layout;
