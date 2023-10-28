import InputField from "components/fields/InputField";
import { FcGoogle } from "react-icons/fc";
import Checkbox from "components/checkbox";
import { useState } from "react";
import axios from "axios";

export default function SignIn() {
  const defaultValue = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
    phone_no:""
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
      const response = await axios.post("http://127.0.0.1:8000/accounts/register/", user, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    localStorage.setItem("token", response.data.token);
    localStorage.setItem("email", response.data.email);
    console.log(response.data.token);

    console.log(response.data);
    } catch (error) {
      if (error.response) {
        console.error("Server error status:", error.response.status);
        console.error("Server error data:", error.response.data);
      } else {
        console.error("Network error:", error.message);
      }
    }
  };
  return (
    <div className="flex items-center justify-center w-full h-full px-2 mb-4 16 mt- md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start">
      {/* Sign in section */}
      <div className="mt-[5vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
        <h4 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
          Sign In
        </h4>
        {/* <p className="ml-1 text-base text-gray-600 mb-9">
          Enter your email and password to sign in!
        </p> */}
        <div className="mb-6 flex h-[50px] w-full items-center justify-center gap-2 rounded-xl bg-lightPrimary hover:cursor-pointer dark:bg-navy-800">
          <div className="text-xl rounded-full">
            <FcGoogle />
          </div>
          <h5 className="text-sm font-medium text-navy-700 dark:text-white">
            Sign In with Google
          </h5>
        </div>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-full h-px bg-gray-200 dark:bg-navy-700" />
          <p className="text-base text-gray-600 dark:text-white"> or </p>
          <div className="w-full h-px bg-gray-200 dark:bg-navy-700" />
        </div>
        {/* Name */}
        <label class="mb-2 block text-sm font-bold text-gray-700" for="name">
          Name
        </label>
        <input
          name="name"
          onChange={(e) => onValueChange(e)}
          value={user.name}
          className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:shadow-outline focus:outline-none"
          id="name"
          type="text"
          placeholder="jane"
          required
        />

        {/* Name */}
        <label class="mb-2 block text-sm font-bold text-gray-700" for="phone_no">
          Phone Number
        </label>
        <input
          name="phone_no"
          onChange={(e) => onValueChange(e)}
          value={user.phone_no}
          className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:shadow-outline focus:outline-none"
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
          className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:shadow-outline focus:outline-none"
          id="email"
          type="email"
          placeholder="xyz@gmail.com"
          required
        />

        {/* Password */}
        <label class="mb-2 block text-sm font-bold text-gray-700" for="password">
          Password
        </label>
        <input
          name="password"
          onChange={(e) => onValueChange(e)}
          value={user.password}
          className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:shadow-outline focus:outline-none"
          id="password"
          type="password"
          required
        />

        {/* Confirm Password */}
        <label class="mb-2 block text-sm font-bold text-gray-700" for="confirm_password">
        Confirm password
        </label>
        <input
          name="confirm_password"
          onChange={(e) => onValueChange(e)}
          value={user.confirm_password}
          className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:shadow-outline focus:outline-none"
          id="confirm_password"
          type="password"
          required
        />
        
        {/* Checkbox */}
        <div className="flex items-center justify-between px-2 mb-4">
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
