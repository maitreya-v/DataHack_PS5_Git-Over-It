import Banner from "./components/Banner";
import General from "./components/General";
// import Notification from "./components/Notification";
// import Project from "./components/Project";
// import Storage from "./components/Storage";
// import Upload from "./components/Upload";
import NFt2 from "assets/img/nfts/Nft2.png";
import NFt4 from "assets/img/nfts/Nft4.png";
import NFt3 from "assets/img/nfts/Nft3.png";
// import NFt5 from "assets/img/nfts/Nft5.png";
// import NFt6 from "assets/img/nfts/Nft6.png";
import avatar1 from "assets/img/avatars/avatar1.png";
import avatar2 from "assets/img/avatars/avatar2.png";
import avatar3 from "assets/img/avatars/avatar3.png";
import NftCard from "components/card/NftCard";

import { Button, ButtonGroup } from "@chakra-ui/react";

const ProfileOverview = () => {
  const nftData = [
    {
      bidders: [],
      title: "Abstract Colors",
      author: "Esthera Jackson",
      price: "0.91",
      image: NFt3,
    },
    {
      bidders: [avatar1, avatar2, avatar3],
      title: "ETH AI Brain",
      author: "Nick Wilson",
      price: "0.7",
      image: NFt2,
    },
    {
      bidders: [avatar1, avatar2, avatar3],
      title: "Mesh Gradients",
      author: "Will Smith",
      price: "2.91",
      image: NFt4,
    },
    {
      bidders: [avatar1, avatar2, avatar3],
      title: "Abstract Colors",
      author: "Esthera Jackson",
      price: "0.91",
      image: NFt3,
    },
    {
      bidders: [avatar1, avatar2, avatar3],
      title: "ETH AI Brain",
      author: "Nick Wilson",
      price: "0.7",
      image: NFt2,
    },
    {
      bidders: [avatar1, avatar2, avatar3],
      title: "Mesh Gradients",
      author: "Will Smith",
      price: "2.91",
      image: NFt4,
    },
    // Add more NftCard data here
  ];
  return (
    <div className="flex w-full flex-col gap-5">
      <Button variant="brand">Button</Button>
      <div className="w-ful mt-3 flex h-fit flex-col gap-5 lg:grid lg:grid-cols-12">
        <div className="col-span-4 lg:!mb-0">
          <Banner />
        </div>

        <div className="col-span-8 lg:!mb-0">
          {/* <Storage /> */}
          <General />
        </div>

        <div className="z-0 col-span-5 lg:!mb-0">{/* <Upload /> */}</div>
      </div>
      {/* all project & ... */}
      <div className="mb-4 mt-5 flex flex-col justify-between px-4 md:flex-row md:items-center">
        <h4 className="ml-1 text-2xl font-bold text-navy-700 dark:text-white">
          Your Projects
        </h4>
        <ul className="mt-4 flex items-center justify-between md:mt-0 md:justify-center md:!gap-5 2xl:!gap-12">
          <li>
            <a
              className="text-base font-medium text-brand-500 hover:text-brand-500 dark:text-white"
              href=" "
            >
              Art
            </a>
          </li>
          <li>
            <a
              className="text-base font-medium text-brand-500 hover:text-brand-500 dark:text-white"
              href=" "
            >
              Music
            </a>
          </li>
          <li>
            <a
              className="text-base font-medium text-brand-500 hover:text-brand-500 dark:text-white"
              href=" "
            >
              Collection
            </a>
          </li>
          <li>
            <a
              className="text-base font-medium text-brand-500 hover:text-brand-500 dark:text-white"
              href=" "
            >
              <a href=" ">Sports</a>
            </a>
          </li>
        </ul>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {nftData.map((data, index) => (
          <NftCard
            key={index}
            bidders={data.bidders}
            title={data.title}
            author={data.author}
            price={data.price}
            image={data.image}
          />
        ))}
      </div>
    </div>
  );
};

export default ProfileOverview;
