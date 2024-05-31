import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../images/logo.png";
import back from "../images/back.svg";
import detailimg1 from "../images/Details-img-1.png";
import detailimg2 from "../images/Details-img-2.png";
import detailimg3 from "../images/Details-img-3.png";

const Details = () => {
  const navigate = useNavigate();
  const onClickReturnHandler = () => navigate(`/createprofile`);
  const onClickSubmitHandler = () => {
    console.log("Submit button clicked"); // Add debugging statement
    navigate(`/verification`);
  };
  const onClickSkipHandler = () => navigate(`/verification`);
  const [details, setDetails] = useState([
    {
      img: detailimg1,
      text: "Im a designer looking to share my work",
      checked: false,
    },
    {
      img: detailimg2,
      text: "Im a designer looking to hire a designer",
      checked: false,
    },
    {
      img: detailimg3,
      text: "Im a looking for designe insperation",
      checked: false,
    },
  ]);

  const [checkedStates, setCheckedStates] = useState([false, false, false]);
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  const handleCheckboxChange = (index) => {
    const updatedCheckedStates = [...checkedStates];
    updatedCheckedStates[index] = !updatedCheckedStates[index];
    setCheckedStates(updatedCheckedStates);
    console.log(index);
    console.log(updatedCheckedStates[index]);
    console.log(updatedCheckedStates);
    console.log(checkedStates);
    const isChecked = (element) => element === true;

    const isAnyChecked = updatedCheckedStates.some(isChecked);

    console.log(isAnyChecked); // This will be true if any element of checkedStates is true

    console.log(updatedCheckedStates.some(isChecked));
    // Check if any checkbox is checked to enable the button
    setIsButtonEnabled(isAnyChecked);
    console.log(isButtonEnabled);
  };

  return (
    <div className="px-[6%]">
      <div className="px-8 flex justify-start">
        <img className="h-16 w-16 md:h-24 md:w-24" src={logo} alt="Logo" />
        <div
          className="h-7 w-7 m-[18px] pt-[8px] pl-[8px] rounded-md md:h-10 md:w-10 md:m-7 md:pt-[12px] md:pl-[12px] bg-gray-100"
          onClick={onClickReturnHandler}
        >
          <img className="h-3 w-3 md:h-4 md:w-4" src={back} alt="Back" />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold text-start">
          What brings you to Dibbble?
        </h1>
        <p className="text-center m-2 text-gray-800 font-medium">
          Select the options that best describe you. Don't worry, you can
          explore other options later.
        </p>

        {/* Checkboxes */}
        <div className="flex flex-col lg:flex-row justify-center mt-10">
          {details.map((details, index) => (
            <div key={index} className="p-[2%]">
              <div
                className={`border-2 border-gray-100 rounded-2xl my-4 mx-2 p-4 h-[240px] w-[240px] relative ${
                  checkedStates[index] ? "z-10 border-2 border-pink-600" : ""
                }`}
              >
                <div className="flex justify-center">
                  <img
                    className={`transition-transform duration-300 transform ${
                      checkedStates[index] ? "translate-y-[-80px]" : ""
                    }`}
                    src={details.img}
                    alt={`Detail ${index + 1}`}
                  />
                </div>
                <div
                  className={`p-3 flex justify-center text-md font-bold text-center transition-transform duration-300 ${
                    checkedStates[index] ? "translate-y-[-80px]" : ""
                  }`}
                >
                  <p>{details.text}</p>
                </div>

                {/* Additional details */}
                <div
                  className={`transition-opacity duration-300 opacity-0 absolute top-[120px] left-1 w-full h-full ${
                    checkedStates[index] ? "opacity-100 delay-200" : "opacity-0"
                  }`}
                >
                  <div className="flex justify-center text-sm font-mg text-center text-gray-700">
                    mnd chovadsbvjih adsmk ljdskb niadsucvn adsm, cvbudfjicn dsm
                    cnsbdchbSN CsDNcbjkSDcn SDCJSKDVcbndsjkvn
                  </div>
                </div>

                {/* Checkbox */}
                <div
                  className={`flex justify-center text-md font-bold text-center`}
                >
                  <div className="inline-flex items-center">
                    <label
                      className="flex justify-center text-md font-bold text-center"
                      htmlFor={`customStyle${index}`}
                    >
                      <input
                        type="checkbox"
                        className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-gray-900/20 bg-white transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pink-500 checked:bg-pink-500 checked:before:bg-pink-500 hover:scale-105 hover:before:opacity-0"
                        id={`customStyle${index}`}
                        onChange={() => handleCheckboxChange(index)}
                        checked={checkedStates[index]}
                      />
                      <span className="absolute text-white transition-opacity opacity-0 pointer-events-none bottom-[9px] left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3.5 w-3.5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          stroke="currentColor"
                          strokeWidth="1"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Finish button */}
        <div className="flex justify-center mb-4 mt-16 md:mt-14 ">
          <p
            className={`font-bold text-sm  text-slate-950 ${
              isButtonEnabled ? "opacity-100" : "opacity-0 "
            }
         `}
          >
            Anything else? You can select mltiple
          </p>
        </div>
        <div className="grid grid-flow-row grid-cols-1  min-w-fit max-w-fit">
          <button
            onClick={onClickSubmitHandler}
            className={`bg-pink-600 h-10 w-44 rounded-lg text-white font-bold drop-shadow-lg shadow-stone-700 ${
              isButtonEnabled ? "" : "opacity-50 pointer-events-none"
            }`}
            disabled={!isButtonEnabled}
            INAB
          >
            Finish
          </button>

          <span
            className=" text-gray-500 text-center font-bold m-2 hover:text-gray-600 hover:font-extrabold "
            onClick={onClickSkipHandler}
          >
            or skip
          </span>
        </div>
      </div>
    </div>
  );
};

export default Details;
