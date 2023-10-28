import React, { useCallback } from "react";
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
import { AddIcon } from "@chakra-ui/icons";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { Box, Input } from "@chakra-ui/react";
import { useDropzone } from "react-dropzone";
import { useDisclosure } from "@chakra-ui/hooks";
import Progress from "components/progress";

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

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [uploadedFiles, setUploadedFiles] = React.useState([]);
  const [uploadProgress, setUploadProgress] = React.useState(0);

  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the dropped files
    setUploadedFiles(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handleUpload = () => {
    // Simulate an upload process (you should replace this with your actual upload logic)
    setUploadProgress(0);

    const totalFiles = uploadedFiles.length;
    let uploadedFilesCount = 0;

    const interval = setInterval(() => {
      setUploadProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          return prevProgress;
        }

        const newProgress = prevProgress + 100 / totalFiles;
        uploadedFilesCount++;
        if (uploadedFilesCount === totalFiles) {
          clearInterval(interval);
        }

        return newProgress;
      });
    }, 500);
  };

  return (
    <div className="flex w-full flex-col gap-5">
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
        <span>
          <Button
            color="rgba(66 42 251)"
            variant="ghost"
            sx={{ p: " 0px 40px" }}
            className="ml-1  font-bold text-navy-700 dark:text-white"
            onClick={onOpen}
          >
            <AddIcon boxSize={3} />
            <h6>Add Project</h6>
          </Button>
        </span>
        <Modal isOpen={isOpen} onClose={onClose} sx={{ position: "absolute" }}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <div>
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  <Box
                    p={4}
                    borderWidth={2}
                    borderColor="gray.300"
                    borderStyle="dashed"
                    borderRadius="md"
                    textAlign="center"
                    cursor="pointer"
                  >
                    <p>Drag & Drop files here, or click to select files</p>
                  </Box>
                </div>
                {uploadedFiles.length > 0 && (
                  <div>
                    <h2>Selected Files:</h2>
                    <ul>
                      {uploadedFiles.map((file) => (
                        <li key={file.name}>{file.name}</li>
                      ))}
                    </ul>
                    <Button onClick={handleUpload} colorScheme="teal">
                      Upload
                    </Button>
                    {uploadProgress > 0 && (
                      <Progress
                        value={uploadProgress}
                        size="md"
                        colorScheme="teal"
                      />
                    )}
                  </div>
                )}
              </div>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant="ghost">Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

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
