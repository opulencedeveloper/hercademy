import NavBar from "../UI/NavBar";

const Layout = (props) => {
  const {navSwitcherHandler, children, selectedTab} = props;
  return (
    <><main className="relative max-w-[40rem] h-screen mx-auto scrollbar-hide overflow-y-auto pt-10 pb-20">
      {children}
    </main>
    <NavBar navSwitcherHandler={navSwitcherHandler} selectedTab={selectedTab}/>
    </>
  );
};

export default Layout;
