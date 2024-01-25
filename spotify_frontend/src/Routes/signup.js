import { Icon } from "@iconify/react";
import TextInput from "../components/shared/TextInput";
import PasswordInput from "../components/shared/passwordInput";
import DateOfBirth from "../components/shared/dateofbirth";
import { Link } from "react-router-dom";
const SignupComponent = () => {
  return (
    <div className="w-full h-full flex flex-col items-center ">
      <div className="logo p-5 border-b border-solid border-gray-400 w-full flex justify-center ">
        <Icon icon="logos:spotify" width="140" />
      </div>
      <div className="inputRegion flex flex-col items-center justify-center w-1/3 py-10 mx-auto">
        <div className="font-semibold mb-4 text-2xl">
          Sign up for free to start listening.
        </div>
        {/* I will have an input for email and password along with a login button and forgot password link */}
        <TextInput
          className="my-6"
          label="Enter an email"
          placeholder="Enter your email"
        />
        {/* I will have an input for email and password along with a login button and forgot password link */}
        <TextInput
          className="my-6"
          label="Confirm your email"
          placeholder="Enter your email again"
        />
        {/* I will have an input for email and password along with a login button and forgot password link */}
        <TextInput
          className="my-6"
          label="What should we call you "
          placeholder="Enter a profile name"
        />

        <PasswordInput
          label="Create Password"
          placeholder="Enter a strong password"
        />

        <DateOfBirth />
        <div className=" flex items-center justify-center mt-9  w-1/3">
          <button className="bg-app-green  font-semibold px-5 p-2 bg-green-500 rounded-full">
            LOG IN
          </button>
        </div>
        <div className="border border-gray-400 w-full mt-3"></div>
        <div className=" font-semibold text-lg my-4">
          Already have an account
        </div>
        <div className="border
         border-gray-500 p-3 
         w-full rounded-full 
         font-semibold text-lg uppercase text-gray-500 text-center" ><Link to="/login">Log in instead</Link></div>
      </div>
    </div>
  );
};
export default SignupComponent;
