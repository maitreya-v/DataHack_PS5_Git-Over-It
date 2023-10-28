import React from "react";
import Nft2 from "assets/img/nfts/Nft2.png";
import Nft1 from "assets/img/nfts/Nft1.png";
import Nft3 from "assets/img/nfts/Nft3.png";
import Nft4 from "assets/img/nfts/Nft4.png";
import Nft5 from "assets/img/nfts/Nft5.png";
import Nft6 from "assets/img/nfts/Nft6.png";

import { FaEthereum } from "react-icons/fa";
import Card from "components/card";
import { Button } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import { useApp } from "context/app-context";
import Sidebar from "components/sidebar";
import { ListItem, UnorderedList } from "@chakra-ui/react";

const CompanyDetails = () => {
  const location = useLocation();
  const [open, setOpen] = React.useState(true);
  const [currentRoute, setCurrentRoute] = React.useState("Main Dashboard");

  const { setKey, key, keyHis, setKeyHis } = useApp();

  React.useEffect(() => {
    window.addEventListener("resize", () =>
      window.innerWidth < 1200 ? setOpen(false) : setOpen(true)
    );
  }, []);
  const navigate = useNavigate();
  const HistoryData = [
    {
      image: Nft1,
      companyName: "Company A",
      jobRole: "Web Developer",
      location: "New York",
      stipend: "$4000/month",
      id: 1,
    },
    {
      image: Nft2,
      companyName: "Company B",
      jobRole: "Graphic Designer",
      location: "Los Angeles",
      stipend: "$2500/month",
      id: 2,
    },
    {
      image: Nft3,
      companyName: "Company C",
      jobRole: "Product Manager",
      location: "San Francisco",
      stipend: "$6000/month",
      id: 3,
    },
    {
      image: Nft4,
      companyName: "Company D",
      jobRole: "Data Analyst",
      location: "Chicago",
      stipend: "$3500/month",
      id: 4,
    },
    {
      image: Nft5,
      companyName: "Company E",
      jobRole: "Marketing Specialist",
      location: "Houston",
      stipend: "$3000/month",
      id: 5,
    },
    {
      image: Nft6,
      companyName: "Company F",
      jobRole: "Software Engineer",
      location: "Seattle",
      stipend: "$5000/month",
      id: 6,
    },
  ];
  console.log(keyHis);
  console.log(HistoryData);

  const selectedObject = HistoryData.find((object) => object.id === keyHis);
  console.log(selectedObject);

  const items = [
    "Lorem ipsum dolor sit amet",
    "Consectetur adipiscing elit",
    "Integer molestie lorem at massa",
    "Facilisis in pretium nisl aliquet",
    "lorenmmm",
  ];
  return (
    <>
      <Sidebar open={open} onClose={() => setOpen(false)} />
      {/* <Navbar /> */}
      <div className="h-full w-full bg-lightPrimary dark:!bg-navy-900">
        <main
          className={`mx-[12px] h-full flex-none transition-all md:pr-2 xl:ml-[313px]`}
        >
          <div className="pt-5s mx-auto mb-auto h-full min-h-[84vh] p-2 md:pr-2">
            <Card extra={"mt-3 !z-5 overflow-hidden"}>
              {/* {selectedObject.map((data, index) => ( */}
              <div className="flex h-full w-full items-start justify-between bg-white px-3 py-[20px] hover:shadow-2xl dark:!bg-navy-800 dark:shadow-none dark:hover:!bg-navy-700">
                <div className="flex items-center gap-3">
                  <div className="flex h-16 w-16 items-center justify-center">
                    <img
                      className="h-full w-full rounded-xl"
                      src={selectedObject.image}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col">
                    <h5 className="text-base font-bold text-navy-700 dark:text-white">
                      {" "}
                      {selectedObject.companyName}
                    </h5>
                    <p className="mt-1 text-sm font-normal text-gray-600">
                      {" "}
                      {selectedObject.jobRole}{" "}
                    </p>
                  </div>
                </div>

                <div className="mt-1 items-center justify-center text-navy-700 dark:text-white">
                  {/* <div>
              <FaEthereum />
            </div> */}
                  <div className="ml-1 flex items-center text-sm font-bold text-navy-700 dark:text-white">
                    {/* <p> {} </p> */}
                    {selectedObject.stipend}
                  </div>
                  <div className="ml-2 flex items-center text-sm font-normal text-gray-600 dark:text-white">
                    <p>{selectedObject.location}</p>
                    {/* <p className="ml-1">ago</p> */}
                  </div>
                </div>
              </div>
              <h3 className="ml-5 text-base font-bold text-navy-800 dark:text-white">
                Requirements:
              </h3>
              <UnorderedList className="mb-5">
                {items.map((item, index) => (
                  <ListItem key={index} sx={{ m: 1 }}>
                    {item}
                  </ListItem>
                ))}
                <Button className="mt-4">Test Fit</Button>
              </UnorderedList>

              {/* ))} */}
            </Card>
          </div>
        </main>
      </div>
    </>
  );
};

export default CompanyDetails;
