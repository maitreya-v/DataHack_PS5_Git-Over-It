import React, { useState } from "react";
import axios from "axios";
import Nft2 from "assets/img/nfts/Nft2.png";
import Nft1 from "assets/img/nfts/Nft1.png";
import Nft3 from "assets/img/nfts/Nft3.png";
import Nft4 from "assets/img/nfts/Nft4.png";
import Nft5 from "assets/img/nfts/Nft5.png";
import Nft6 from "assets/img/nfts/Nft6.png";
import Swal from "sweetalert2";

import { FaEthereum } from "react-icons/fa";
import Card from "components/card";
import { Button } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import { useApp } from "context/app-context";
import Sidebar from "components/sidebar";
import { ListItem, UnorderedList } from "@chakra-ui/react";
import jobData from "../tables/variables/job_data.json";

// function getRandomColor() {
//   const r = Math.floor(Math.random() * 256);
//   const g = Math.floor(Math.random() * 256);
//   const b = Math.floor(Math.random() * 256);
//   return `rgb(${r}, ${g}, ${b})`;
// }

const CompanyDetails = () => {
  const location = useLocation();
  const [open, setOpen] = React.useState(true);
  const [currentRoute, setCurrentRoute] = React.useState("Main Dashboard");
  const [resources, setResources] = useState({});
  const [recommend, setRecommend] = useState({});
  const [testMatch, setTestMatch] = useState({});

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

  const selectedObject = jobData.find((object) => object.id === keyHis);
  console.log(selectedObject);

  const items = [
    "Lorem ipsum dolor sit amet",
    "Consectetur adipiscing elit",
    "Integer molestie lorem at massa",
    "Facilisis in pretium nisl aliquet",
    "lorenmmm",
  ];
  console.log(localStorage.getItem("skills"));
  console.log(typeof selectedObject.tags);

  const objectString = JSON.stringify(selectedObject.tags);
  console.log(objectString);

  const TestFunc = () => {
    const requestData = {
      user_tags: localStorage.getItem("skills"),
      job_tags: objectString,
    };

    // Make a POST request using Axios
    axios
      .post(
        "https://0f41-2409-40c0-7b-18d0-4590-7720-269b-bf08.ngrok-free.app/compare",
        requestData
      )
      .then((response) => {
        // Handle the response here
        console.log("POST request successful:", response.data);
        setTestMatch(response.data);
      })
      .catch((error) => {
        // Handle errors here
        console.error("Error making POST request:", error);
      });
  };

  const handleCourses = () => {
    var resources = {
      domain: localStorage.getItem("prioritySkills"),
    };
    axios
      .post(
        "https://0f41-2409-40c0-7b-18d0-4590-7720-269b-bf08.ngrok-free.app/resources",
        resources
      )
      .then((response) => {
        console.log(response);
        setResources(response.data);
        Swal.fire(response.data)
      });
  };
  
  const handleIdeas = () => {
    var resources = {
      domain: localStorage.getItem("prioritySkills"),
    };
    axios
      .post(
        "https://0f41-2409-40c0-7b-18d0-4590-7720-269b-bf08.ngrok-free.app/recommend",
        resources
      )
      .then((response) => {
        console.log(response);
        setRecommend(response.data);
        Swal.fire(response.data)
      });
  };

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
              <div className="flex h-full w-full items-start justify-between bg-white px-3 py-[20px]  dark:!bg-navy-800 dark:shadow-none dark:hover:!bg-navy-700">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-20 h-20">
                    <img
                      className="w-full h-full rounded-xl"
                      src={HistoryData[selectedObject.id % 6].image}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col">
                    <h5 className="text-base font-bold text-navy-700 dark:text-white">
                      {" "}
                      {selectedObject.company}
                    </h5>
                    <p className="mt-1 text-sm font-normal text-gray-600">
                      {" "}
                      {selectedObject.jobTitle}{" "}
                    </p>
                  </div>
                </div>

                <div className="items-center justify-center mt-1 text-navy-700 dark:text-white">
                  {/* <div>
              <FaEthereum />
            </div> */}
                  <div className="flex items-center ml-1 text-sm font-bold text-navy-700 dark:text-white">
                    {/* <p> {} </p> */}
                    Salary : {selectedObject.salary}
                  </div>
                  <div className="flex items-center ml-2 text-sm font-normal text-gray-600 dark:text-white">
                    <p>{selectedObject.location}</p>
                    {/* <p className="ml-1">ago</p> */}
                  </div>
                </div>
              </div>
              <h2 className="ml-5 text-base font-bold text-navy-800 dark:text-white">
                Description:
              </h2>
              <h3 className="mt-3 ml-5 text-base text-navy-800 dark:text-white">
                {selectedObject.description.slice(0, 800) + "..."}
              </h3>
              <h3 className="mt-2 mb-2 ml-5 text-base font-bold text-navy-800 dark:text-white">
                Requirements:
              </h3>
              <UnorderedList
                className="grid grid-cols-3 gap-4 mb-5"
                sx={{ listStyleType: "none" }}
              >
                {selectedObject.tags.map((item, index) => (
                  <div
                    className="flex items-center justify-center px-2 py-1 text-sm font-semibold text-white bg-green-500 rounded"
                    style={{ backgroundColor: "rgba(59, 130, 246, 0.5)" }}
                  >
                    <ListItem key={index} sx={{ m: 1 }}>
                      {item}
                    </ListItem>
                  </div>
                ))}

                <Button className="mt-4" onClick={TestFunc}>
                  Test Fit
                </Button>
              </UnorderedList>
              {testMatch.sim}
              <br/>
              {testMatch.tags[0]}
              <br/>
              {testMatch.tags[1]}
              <br/>
              {testMatch.tags[2]}
              <br/>
              {testMatch.tags[3]}
              <br/>
              {testMatch.tags[4]}
              <br/>
              {testMatch.tags[5]}

              <Button onClick={handleIdeas}>Project Ideas</Button>
              <Button onClick={handleCourses}>Courses</Button>
              {/* {resources?.data ?? "No data available"}
              {recommend?.data ?? "No data available"} */}
            </Card>
          </div>
        </main>
      </div>
    </>
  );
};

export default CompanyDetails;
