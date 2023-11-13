import Layout from "@/components/layout/Layout";
import ExploreTab from "@/components/tabs/ExploreTab";

import HomeTab from "@/components/tabs/HomeTab";
import WishListTab from "@/components/tabs/WishListTab";
import { useState } from "react";

export default function Home() {
  const [selectedTab, setSelectedTab] = useState("Home");

  const navSwitcherHandler = (val) => {
    setSelectedTab(val);
  };
  return (
    <Layout navSwitcherHandler={navSwitcherHandler} selectedTab={selectedTab}>
      {selectedTab === "Home" && <HomeTab />}
      {selectedTab === "Explore" && <ExploreTab />}
      {selectedTab === "Wishlist" && <WishListTab />}
    </Layout>
  );
}
