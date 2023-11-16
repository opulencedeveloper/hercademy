import Loading from "@/components/UI/Loading";
import Layout from "@/components/layout/Layout";

import HomeTab from "@/components/tabs/HomeTab";
import { useState } from "react";

export default function Home() {
  const [showLoading, setShowLoading] = useState(true);
  
  const loadingSwitcher = () => {
    setShowLoading((prev) => !prev);
  };

  return showLoading ? (
    <Loading loadingSwitcher={loadingSwitcher} />
  ) : (
    <Layout>
      <HomeTab />
    </Layout>
  );
}
