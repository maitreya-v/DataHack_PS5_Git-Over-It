import React, { useCallback } from "react";
import InputField from "components/fields/InputField";
import { FcGoogle } from "react-icons/fc";
import Checkbox from "components/checkbox";
import { useState } from "react";
import axios from "axios";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { Button, useDisclosure } from "@chakra-ui/react";
import { useDropzone } from "react-dropzone";
import { Box, Progress } from "@chakra-ui/react";

export default function SignIn() {
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
  const defaultValue = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
    phone_no: "",
  };
  const [user, setUser] = useState(defaultValue);

  const onValueChange = (e) => {
    console.log(e.target.name, e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    console.log("handleSubmit");
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/accounts/register/",
        user,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("email", response.data.email);
      console.log(response.data.token);
      console.log(response.data);
      onOpen();
    } catch (error) {
      if (error.response) {
        console.error("Server error status:", error.response.status);
        console.error("Server error data:", error.response.data);
      } else {
        console.error("Network error:", error.message);
      }
    }
  };

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    console.log(e.target.files);
    setSelectedFile(e.target.files[0]);
  };
  const handleResume = (e) => {
    const formData = new FormData();
    formData.append("file", selectedFile);

    fetch(
      "https://a1c5-2409-40c0-7c-3581-9126-78d3-40f0-21ae.ngrok-free.app/resume_parse",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error uploading file:", error);
      });
  };
  return (
    <div className="16 mt- mb-4 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start">
      {/* Sign in section */}
      <div className="mt-[5vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
        <h4 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
          Sign In
        </h4>
        {/* <p className="ml-1 text-base text-gray-600 mb-9">
          Enter your email and password to sign in!
        </p> */}
        <div className="mb-6 flex h-[50px] w-full items-center justify-center gap-2 rounded-xl bg-lightPrimary hover:cursor-pointer dark:bg-navy-800">
          <div className="rounded-full text-xl">
            <FcGoogle />
          </div>
          <h5 className="text-sm font-medium text-navy-700 dark:text-white">
            Sign In with Google
          </h5>
        </div>
        <div className="mb-6 flex items-center gap-3">
          <div className="h-px w-full bg-gray-200 dark:bg-navy-700" />
          <p className="text-base text-gray-600 dark:text-white"> or </p>
          <div className="h-px w-full bg-gray-200 dark:bg-navy-700" />
        </div>
        {/* Name */}
        <label class="mb-2 block text-sm font-bold text-gray-700" for="name">
          Name
        </label>
        <input
          name="name"
          onChange={(e) => onValueChange(e)}
          value={user.name}
          className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
          id="name"
          type="text"
          placeholder="jane"
          required
        />

        {/* Name */}
        <label
          class="mb-2 block text-sm font-bold text-gray-700"
          for="phone_no"
        >
          Phone Number
        </label>
        <input
          name="phone_no"
          onChange={(e) => onValueChange(e)}
          value={user.phone_no}
          className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
          id="phone_no"
          type="number"
        />

        {/* Email */}
        <label class="mb-2 block text-sm font-bold text-gray-700" for="email">
          Email
        </label>
        <input
          name="email"
          onChange={(e) => onValueChange(e)}
          value={user.email}
          className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
          id="email"
          type="email"
          placeholder="xyz@gmail.com"
          required
        />

        {/* Password */}
        <label
          class="mb-2 block text-sm font-bold text-gray-700"
          for="password"
        >
          Password
        </label>
        <input
          name="password"
          onChange={(e) => onValueChange(e)}
          value={user.password}
          className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
          id="password"
          type="password"
          required
        />

        {/* Confirm Password */}
        <label
          class="mb-2 block text-sm font-bold text-gray-700"
          for="confirm_password"
        >
          Confirm password
        </label>
        <input
          name="confirm_password"
          onChange={(e) => onValueChange(e)}
          value={user.confirm_password}
          className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
          id="confirm_password"
          type="password"
          required
        />

        {/* Checkbox */}
        <div className="mb-4 flex items-center justify-between px-2">
          <div className="flex items-center">
            <Checkbox />
            <p className="ml-2 text-sm font-medium text-navy-700 dark:text-white">
              Keep me logged In
            </p>
          </div>
          <a
            className="text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
            href=" "
          >
            Forgot Password?
          </a>
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
        >
          Sign In
        </button>
        {/* <Button onClick={onOpen}>Open Modal</Button> */}
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Resume</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <div>
                <label
                  class="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                  for="grid-first-name"
                >
                  URL
                </label>
                <input
                  class="mb-3 block w-full appearance-none rounded border py-3 px-4 leading-tight text-gray-700 focus:outline-none "
                  id="grid-first-name"
                  type="text"
                  placeholder="project title"
                ></input>
                <div className="mb-6 flex items-center gap-3">
                  <div className="h-px w-full bg-gray-200 dark:bg-navy-700" />
                  <p className="text-base text-gray-600 dark:text-white">
                    {" "}
                    or{" "}
                  </p>
                  <div className="h-px w-full bg-gray-200 dark:bg-navy-700" />
                </div>

                <label
                  class="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                  for="grid-first-name"
                >
                  Upload Files
                </label>
                {/* <div {...getRootProps()}>
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
                    <Button
                      onClick={handleUpload}
                      colorScheme="teal"
                      sx={{ mb: 2 }}
                    >
                      Submit
                    </Button>
                    {uploadProgress > 0 && (
                      <Progress
                        value={uploadProgress}
                        size="md"
                        colorScheme="teal"
                      />
                    )}
                  </div>
                )} */}
                <input
                  class="mb-3 block w-full appearance-none rounded border py-3 px-4 leading-tight text-gray-700 focus:outline-none "
                  id="grid-first-name"
                  type="file"
                  placeholder="upload file"
                  onClick={handleFileChange}
                ></input>
              </div>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant="ghost" onClick={handleResume}>
                Upload Resume
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <div className="mt-4">
          <span className="text-sm font-medium text-navy-700 dark:text-gray-600">
            Not registered yet?
          </span>
          <a
            href=" "
            className="ml-1 text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
          >
            Create an account
          </a>
        </div>
      </div>
    </div>
  );
}
