import Image from "next/image";
import contracttImage from "../../public/asset/images/contract-image.svg";
import addCircleIcon from "../../public/asset/icons/add-circle-icon.svg";

const WishListTab = () => {
  return (
    <section className="h-full flex flex-col items-center justify-center">
      <div className="h-[265.83px] w-[239.25px] mb-20">
        <Image src={contracttImage} className="h-full w-full" />
      </div>
      <p className="font-semibold text-[16px] mb-2">Your wishlist is empty</p>
      <p className="text-[12px] text-secondary">Create your first wishlist</p>
      <button className="flex items-center space-x-2 text-white bg-primary rounded-[8px] px-8 py-3 mt-14">
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
    </section>
  );
};

export default WishListTab;
