import NavBar from "../UI/NavBar";

const Layout = (props) => {
  const {navSwitcherHandler, children, selectedTab} = props;
  return (
    <section className="relative min-h-screen w-full flex flex-col"><main className="relative max-w-[40rem] h-full mx-auto scrollbar-hide overflow-y-auto pt-10 pb-20">
      {children}
    </main>
    <NavBar navSwitcherHandler={navSwitcherHandler} selectedTab={selectedTab}/>
    </section>
  );
};

export default Layout;
