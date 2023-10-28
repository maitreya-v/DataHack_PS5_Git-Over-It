import React from "react";
import Nft2 from "assets/img/nfts/Nft2.png";
import Nft1 from "assets/img/nfts/Nft1.png";
import Nft3 from "assets/img/nfts/Nft3.png";
import Nft4 from "assets/img/nfts/Nft4.png";
import Nft5 from "assets/img/nfts/Nft5.png";
import Nft6 from "assets/img/nfts/Nft6.png";

import { FaEthereum } from "react-icons/fa";
import Card from "components/card";

const HistoryCard = () => {
  const HistoryData = [
    {
      image: Nft1,
      companyName: "Company A",
    jobRole: "Web Developer",
    location: "New York",
    stipend: "$4000/month",
    },
    {
      image: Nft2,
      companyName: "Company B",
    jobRole: "Graphic Designer",
    location: "Los Angeles",
    stipend: "$2500/month",
    },
    {
      image: Nft3,
      companyName: "Company C",
    jobRole: "Product Manager",
    location: "San Francisco",
    stipend: "$6000/month",
    },
    {
      image: Nft4,
      companyName: "Company D",
      jobRole: "Data Analyst",
      location: "Chicago",
      stipend: "$3500/month",
    },
    {
      image: Nft5,
      companyName: "Company E",
    jobRole: "Marketing Specialist",
    location: "Houston",
    stipend: "$3000/month",
    },
    {
      image: Nft6,
      companyName: "Company F",
    jobRole: "Software Engineer",
    location: "Seattle",
    stipend: "$5000/month",
    },
  ];

  return (
    <Card extra={"mt-3 !z-5 overflow-hidden"}>
      {/* HistoryCard Header */}
      {/* <div className="flex items-center justify-between p-3 rounded-t-3xl">
        <div className="text-lg font-bold text-navy-700 dark:text-white">
          Job Opportunities
        </div>
        <button className="linear rounded-[20px] bg-lightPrimary px-4 py-2 text-base font-medium text-brand-500 transition duration-200 hover:bg-gray-100 active:bg-gray-200 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 dark:active:bg-white/20">
          See all
        </button>
      </div> */}

      {/* History CardData */}

      {HistoryData.map((data, index) => (
        <div className="flex h-full w-full items-start justify-between bg-white px-3 py-[20px] hover:shadow-2xl dark:!bg-navy-800 dark:shadow-none dark:hover:!bg-navy-700">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-16 h-16">
              <img
                className="w-full h-full rounded-xl"
                src={data.image}
                alt=""
              />
            </div>
            <div className="flex flex-col">
              <h5 className="text-base font-bold text-navy-700 dark:text-white">
                {" "}
                {data.companyName}
              </h5>
              <p className="mt-1 text-sm font-normal text-gray-600">
                {" "}
                {data.jobRole}{" "}
              </p>
            </div>
          </div>

          <div className="items-center justify-center mt-1 text-navy-700 dark:text-white">
            {/* <div>
              <FaEthereum />
            </div> */}
            <div className="flex items-center ml-1 text-sm font-bold text-navy-700 dark:text-white">
              {/* <p> {} </p> */}
              {data.stipend}
            </div>
            <div className="flex items-center ml-2 text-sm font-normal text-gray-600 dark:text-white">
              <p>{data.location}</p>
              {/* <p className="ml-1">ago</p> */}
            </div>
          </div>
        </div>
      ))}
    </Card>
  );
};

export default HistoryCard;
