import { Icon } from "@iconify/react";
import TextInput from "../components/shared/TextInput";
import PasswordInput from "../components/shared/passwordInput";
import { Link } from "react-router-dom";
const LoginComponent = () => {
  return (
    <div className="w-full h-full flex flex-col items-center ">
      <div className="logo p-5 border-b border-solid border-gray-400 w-full flex justify-center ">
        <Icon icon="logos:spotify" width="140" />
      </div>
      <div className="inputRegion flex flex-col items-center justify-center w-1/3 py-10">
        <div className="font-semibold mb-4">Login to Spotify</div>
        {/* I will have an input for email and password along with a login button and forgot password link */}
        <TextInput
          className="my-6"
          label="Enter email or username to login"
          placeholder="Enter email or username to login"
        />
        <PasswordInput label="Password" placeholder="Password" />
        <div className=" flex items-center justify-end mt-9  w-full">
          <div className=" bg-green-500  font-semibold px-10 p-3 rounded-full">
            LOG IN 
          </div>
        </div>
          <div className="w-full border border-gray-600 mt-10"></div>
      <div className=" font-semibold text-lg my-5">Didn't have an account  </div>
      <div className="border border-gray-500 p-3 w-full rounded-full font-semibold text-lg uppercase text-gray-500 text-center">
<Link to="/signup"> Sign Up for Spotify</Link>
       
      </div>
      </div>
    </div>
  );
};
export default LoginComponent;
