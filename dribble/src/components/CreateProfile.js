import React from "react";
import logo from "../images/logo.png";
import { useNavigate } from "react-router-dom";

const CreateProfile = () => {
  const navigate = useNavigate();
  const onClickNextHandler = () => navigate(`/details`);
  const onClickSkipHandler = () => navigate(`/verification`);
  return (
    <div className="px-[6%]">
      <div className="px-8">
        <img className="h-16 w-16 md:h-24 md:w-24" src={logo} />
      </div>
      <div className=" flex justify-center ">
        <div>
          <div className=" max-w-fit ">
            <h1 className=" text-3xl font-bold text-start">
              Welcome! Let's create your profile
            </h1>
            <p className="text-start m-2  text-gray-800 font-medium">
              Let others get to know you about! You can do this better.
            </p>
          </div>
          <div className=" flex  justify-start w-[100%]">
            <div className="mt-[10%] w-full">
              <p className="text-xl font-bold">Add an Avatar</p>
              <div className="flex  justify-start">
                <div className="flex justify-start mt-[5%]">
                  <img
                    className=" h-32  w-32 border-gray-200 border-2 border-dashed rounded-full "
                    src={logo}
                  ></img>
                </div>
                <div className="my-10 mx-6">
                  <label
                    htmlFor="avatarInput"
                    className="bg-white py-2 px-4 mx-2 my-3  rounded-lg border-2 border-gray-200 text-black font-bold cursor-pointer"
                  >
                    Choose image
                    <input
                      type="file"
                      id="avatarInput"
                      name="avatarInput"
                      accept="image/*"
                      className="hidden"
                      required
                    />
                  </label>

                  <p className="mx-2 my-3 text-gray-400 font-bold text-sm">
                    Or choose one of our defaults
                  </p>
                </div>
              </div>
            </div>
            <div></div>
          </div>
          <div className=" flex justify-center w-[100%] my-12">
            <div className=" w-[100%]">
              <p className="text-xl font-bold">Add your Location</p>
              <input
                className=" block bg-white border-2 border-t-0 border-l-0 border-r-0 border-b-gray-200 h-8 w-[100%]  p-2 mb-6 mt-1 focus:outline-none focus:border-b-pink-500 "
                type="text"
                id="fname"
                name="fname"
                value=""
                placeholder="Enter a location"
                required
              ></input>
            </div>
          </div>
          <div className="grid grid-flow-row grid-cols-1  min-w-fit max-w-fit">
            <button className="bg-pink-600 h-10 w-44 rounded-lg text-white font-bold drop-shadow-lg   shadow-stone-700  m-2 "onClick={onClickNextHandler}>
              Next
            </button>
            <span className=" text-gray-500 text-center font-bold m-2 hover:text-gray-600 hover:font-extrabold "
            onClick={onClickSkipHandler }>or skip</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProfile;
