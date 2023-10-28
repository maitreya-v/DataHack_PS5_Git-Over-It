import { IoHeart, IoHeartOutline } from "react-icons/io5";
import React, { useState } from "react";
import Card from "components/card";
import Navbar from "components/navbar";
import { useLocation } from "react-router-dom";
import Sidebar from "components/sidebar";
import { useApp } from "context/app-context";

import NFt2 from "assets/img/nfts/Nft2.png";
import NFt4 from "assets/img/nfts/Nft4.png";
import NFt3 from "assets/img/nfts/Nft3.png";
// import NFt5 from "assets/img/nfts/Nft5.png";
// import NFt6 from "assets/img/nfts/Nft6.png";
import avatar1 from "assets/img/avatars/avatar1.png";
import avatar2 from "assets/img/avatars/avatar2.png";
import avatar3 from "assets/img/avatars/avatar3.png";
import NftCard from "components/card/NftCard";

const ProjectDetails = ({}) => {
  const [heart, setHeart] = useState(true);
  const location = useLocation();
  const [open, setOpen] = React.useState(true);
  const [currentRoute, setCurrentRoute] = React.useState("Main Dashboard");

  React.useEffect(() => {
    window.addEventListener("resize", () =>
      window.innerWidth < 1200 ? setOpen(false) : setOpen(true)
    );
  }, []);
  //   const { nftData, setNftData } = useApp();
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

  const selectedObject = nftData.find((object) => object.id === 2);
  console.log(nftData);
  return (
    <>
      <Sidebar open={open} onClose={() => setOpen(false)} />
      {/* <Navbar /> */}
      <div className="h-full w-full bg-lightPrimary dark:!bg-navy-900">
        <main
          className={`mx-[12px] h-full flex-none transition-all md:pr-2 xl:ml-[313px]`}
        >
          <div className="pt-5s mx-auto mb-auto h-full min-h-[84vh] p-2 md:pr-2">
            <Card
              extra={`flex flex-col w-full h-full !p-4 3xl:p-![18px] bg-white ${selectedObject.extra}`}
            >
              <div className="h-full w-full">
                <div className="relative w-full">
                  <img
                    src={selectedObject.image}
                    className="mb-3 h-full w-full rounded-xl 3xl:h-full 3xl:w-full"
                    alt=""
                  />
                  <button
                    onClick={() => setHeart(!heart)}
                    className="absolute top-3 right-3 flex items-center justify-center rounded-full bg-white p-2 text-brand-500 hover:cursor-pointer"
                  >
                    <div className="flex h-full w-full items-center justify-center rounded-full text-xl hover:bg-gray-50 dark:text-navy-900">
                      {heart ? (
                        <IoHeartOutline />
                      ) : (
                        <IoHeart className="text-brand-500" />
                      )}
                    </div>
                  </button>
                </div>

                <div className="mb-3 flex items-center justify-between px-1 md:flex-col md:items-start lg:flex-row lg:justify-between xl:flex-col xl:items-start 3xl:flex-row 3xl:justify-between">
                  <div className="mb-2">
                    <p className="text-lg font-bold text-navy-700 dark:text-white">
                      {" "}
                      {selectedObject.title}{" "}
                    </p>
                    <p className="mt-1 text-sm font-medium text-gray-600 md:mt-2">
                      By {selectedObject.author}{" "}
                    </p>
                  </div>

                  <div className="flex flex-row-reverse md:mt-2 lg:mt-0">
                    <span className="z-0 ml-px inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[#E0E5F2] text-xs text-navy-700 dark:!border-navy-800 dark:bg-gray-800 dark:text-white">
                      +{selectedObject.bidders.length}
                    </span>
                    {selectedObject.bidders.map((avt, key) => (
                      <span
                        key={key}
                        className="z-10 -mr-3 h-8 w-8 rounded-full border-2 border-white dark:!border-navy-800"
                      >
                        <img
                          className="h-full w-full rounded-full object-cover"
                          src={avt}
                          alt=""
                        />
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between md:flex-col md:items-start lg:flex-row lg:justify-between xl:flex-col 2xl:items-start 3xl:flex-row 3xl:items-center 3xl:justify-between">
                  <div className="flex">
                    <p className="mb-2 text-sm font-bold text-brand-500 dark:text-white"></p>
                  </div>
                  <button
                    href=""
                    className="linear rounded-[20px] bg-brand-900 px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-brand-800 active:bg-brand-700 dark:bg-brand-400 dark:hover:bg-brand-300 dark:active:opacity-90"
                  >
                    View
                  </button>
                </div>
              </div>
            </Card>
          </div>
        </main>
      </div>
    </>
  );
};

export default ProjectDetails;
