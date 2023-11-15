import DesktopFooter from "./DesktopFooter";
import DesktopNavBar from "./DesktopNavBar";
import MobileTabBar from "./MobileTabBar";

const Layout = (props) => {
  const { navSwitcherHandler, children, selectedTab } = props;

  return (
    <>
      <DesktopNavBar />
      <section className="relative overflow-hidden w-full">
        <main className="relative w-full h-full overflow-auto scrollbar-hide mt-7 pb-28">
          {children}
        </main>
        
      </section>
      <MobileTabBar
          navSwitcherHandler={navSwitcherHandler}
          selectedTab={selectedTab}
        />
        <DesktopFooter />
    </>
  );
};

export default Layout;
