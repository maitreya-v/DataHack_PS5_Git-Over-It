import React,{useState,useEffect} from "react";
import avatar from "assets/img/avatars/avatar11.png";
import banner from "assets/img/profile/banner.png";
import Card from "components/card";
import axios from "axios";
import { Badge,Stack } from "@chakra-ui/react"

const Banner = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    // Define an async function to make the GET request
    async function fetchData() {
      try {
        // Retrieve the token from local storage
        const token = localStorage.getItem('token');

        // Set the authorization header with the token
        const config = {
          headers: {
            Authorization: `Token ${token}`,
          },
        };

        const response = await axios.get('http://127.0.0.1:8000/accounts/user/', config);
        console.log(response.data)
        setData(response.data);
      } catch (err) {
        console.log(err);
      }
    }

    // Call the async function to make the GET request
    fetchData();
  }, []); 

  return (
    <Card extra={"items-center w-full h-full p-[16px] bg-cover"}>
      {/* Background and profile */}
      <div
        className="relative flex justify-center w-full h-32 mt-1 bg-cover rounded-xl"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 dark:!border-navy-700">
          <img className="w-full h-full rounded-full" src={avatar} alt="" />
        </div>
      </div>

      {/* Name and position */}
      <div className="flex flex-col items-center mt-16">
        <h4 className="text-xl font-bold text-navy-700 dark:text-white">
          {data.name}
        </h4>
        <div class="grid grid-cols-2 gap-4 mt-2">
          <div className="flex items-center justify-center px-2 py-1 text-xs font-semibold text-white bg-green-500 rounded">
            Content Writer
          </div>
          <div className="flex items-center justify-center px-2 py-1 text-xs font-semibold text-white bg-green-500 rounded">
            Community Manager
          </div>
          <div className="flex items-center justify-center px-2 py-1 text-xs font-semibold text-white bg-green-500 rounded">
            Product Manager
          </div>
        </div>
        {/* <p className="text-base font-normal text-gray-600">Product Manager</p> */}
        {/* <span
      className={`bg-green-500 text-white py-1 px-2 rounded text-sm font-semibold`}
    >
      Product Manager
    </span> */}
      </div>

      {/* Post followers */}
      <div className="mt-6 mb-3 flex gap-4 md:!gap-14">
        <div className="flex flex-col items-center justify-center">
          <p className="text-2xl font-bold text-navy-700 dark:text-white">17</p>
          <p className="text-sm font-normal text-gray-600">Projects</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-2xl font-bold text-navy-700 dark:text-white">
            9.7K
          </p>
          <p className="text-sm font-normal text-gray-600">Followers</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-2xl font-bold text-navy-700 dark:text-white">
            434
          </p>
          <p className="text-sm font-normal text-gray-600">Following</p>
        </div>
      </div>
    </Card>
  );
};

export default Banner;
