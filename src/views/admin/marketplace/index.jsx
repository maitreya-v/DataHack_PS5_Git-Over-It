import Banner from "./components/Banner";
import NFt2 from "assets/img/nfts/Nft2.png";
import NFt4 from "assets/img/nfts/Nft4.png";
import NFt3 from "assets/img/nfts/Nft3.png";
import NFt5 from "assets/img/nfts/Nft5.png";
import NFt6 from "assets/img/nfts/Nft6.png";
import avatar1 from "assets/img/avatars/avatar1.png";
import avatar2 from "assets/img/avatars/avatar2.png";
import avatar3 from "assets/img/avatars/avatar3.png";

import tableDataTopCreators from "views/admin/marketplace/variables/tableDataTopCreators.json";
import { tableColumnsTopCreators } from "views/admin/marketplace/variables/tableColumnsTopCreators";
import HistoryCard from "./components/HistoryCard";
import TopCreatorTable from "./components/TableTopCreators";
import NftCard from "components/card/NftCard";

const Marketplace = () => {
  const nftData = [
    {
      bidders: [],
      title: "Abstract Colors",
      author: "Esthera Jackson",
      price: "0.91",
      image: NFt3,
      id: 1,
    },
    {
      bidders: [avatar1, avatar2, avatar3],
      title: "ETH AI Brain",
      author: "Nick Wilson",
      price: "0.7",
      image: NFt2,
      id: 2,
    },
    {
      bidders: [avatar1, avatar2, avatar3],
      title: "Mesh Gradients",
      author: "Will Smith",
      price: "2.91",
      image: NFt4,
      id: 3,
    },
    {
      bidders: [avatar1, avatar2, avatar3],
      title: "Abstract Colors",
      author: "Esthera Jackson",
      price: "0.91",
      image: NFt3,
      id: 4,
    },
    {
      bidders: [avatar1, avatar2, avatar3],
      title: "ETH AI Brain",
      author: "Nick Wilson",
      price: "0.7",
      image: NFt2,
      id: 5,
    },
    {
      bidders: [avatar1, avatar2, avatar3],
      title: "Mesh Gradients",
      author: "Will Smith",
      price: "2.91",
      image: NFt4,
      id: 6,
    },
    // Add more NftCard data here
  ];
  return (
    <div className="grid h-full grid-cols-1 gap-5 mt-3 xl:grid-cols-2 2xl:grid-cols-3">
      <div className="w-full col-span-1 h-fit xl:col-span-1 2xl:col-span-2">
        {/* NFt Banner */}
        {/* <Banner /> */}

        {/* NFt Header */}
        <div className="flex flex-col justify-between px-4 mt-5 mb-4 md:flex-row md:items-center">
          <h4 className="ml-1 text-2xl font-bold text-navy-700 dark:text-white">
            Trending Projects
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

        {/* NFTs trending card */}
        {/* <div className="z-20 grid grid-cols-1 gap-5 md:grid-cols-3">
          <NftCard
            bidders={[avatar1, avatar2, avatar3]}
            title="Abstract Colors"
            author="Esthera Jackson"
            price="0.91"
            image={NFt3}
          />
          <NftCard
            bidders={[avatar1, avatar2, avatar3]}
            title="ETH AI Brain"
            author="Nick Wilson"
            price="0.7"
            image={NFt2}
          />
          <NftCard
            bidders={[avatar1, avatar2, avatar3]}
            title="Mesh Gradients"
            author="Will Smith"
            price="2.91"
            image={NFt4}
          />
        </div> */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {nftData.map((data, index) => (
          <NftCard
            key={index}
            bidders={data.bidders}
            title={data.title}
            author={data.author}
            price={data.price}
            image={data.image}
            id={data.id}
          />
        ))}
      </div>

        {/* Recenlty Added setion */}
        {/* <div className="mb-5 mt-5 flex items-center justify-between px-[26px]">
          <h4 className="text-2xl font-bold text-navy-700 dark:text-white">
            Recently Added
          </h4>
        </div> */}
        {/* Recently Add NFTs */}
        {/* <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          <NftCard
            bidders={[avatar1, avatar2, avatar3]}
            title="Abstract Colors"
            author="Esthera Jackson"
            price="0.91"
            image={NFt4}
          />
          <NftCard
            bidders={[avatar1, avatar2, avatar3]}
            title="ETH AI Brain"
            author="Nick Wilson"
            price="0.7"
            image={NFt5}
          />
          <NftCard
            bidders={[avatar1, avatar2, avatar3]}
            title="Mesh Gradients"
            author="Will Smith"
            price="2.91"
            image={NFt6}
          />
        </div> */}
      </div>

      {/* right side section */}

      <div className="w-full h-full col-span-1 rounded-xl 2xl:col-span-1">
        <TopCreatorTable
          extra="mb-5"
          tableData={tableDataTopCreators}
          columnsData={tableColumnsTopCreators}
        />
        {/* <HistoryCard /> */}
      </div>
    </div>
  );
};

export default Marketplace;
