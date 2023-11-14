import Image from "next/image";
import contracttImage from "../../public/asset/images/contract-image.svg";
import addCircleIcon from "../../public/asset/icons/add-circle-icon.svg";
import Layout from "@/components/layout/Layout";

const WishList = () => {
  return (
    <Layout>
      <section className="h-full scrollbar-hide flex pb-20 flex-col items-center justify-center max-w-[619px] px-8 mx-auto">
        <div className="h-[180px] w-[180px] mb-20 md:h-[265.83px] md:w-[239.25px]">
          <Image src={contracttImage} className="h-full w-full" />
        </div>
        <p className="font-semibold text-[16px] mb-2 md:text-[36px]">Your wishlist is empty</p>
        <p className="text-[12px] text-secondary md:text-[24px]">Create your first wishlist</p>
        <button className="flex items-center justify-center space-x-2 text-white bg-primary rounded-[8px] px-8 py-3 mt-14 w-full">
          <div className="h-[24px] w-[24px]">
            <Image
              src={addCircleIcon}
              height={24}
              width={24}
              className="h-full w-full"
              priority
              loading="eager"
            />
          </div>
          <p className="font-semibold text-[20px]">Create a new wish</p>
        </button>
      </section>{" "}
    </Layout>
  );
};

export default WishList;
