import React from "react";

const Verification = () => {
  const email = "jndfvn@gmail.com";
  return (
    <div className="py-[4%] px-[2%]">
      <div className="flex justify-center">
        <h1 className="text-2xl font-bold">Please verify your email...</h1>
      </div>
      <div className="flex justify-center">
        <div className="relative flex justify-center m-2 h-28 w-28">
          <svg
            className="relative h-24"
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 47.5 47.5"
            viewBox="0 0 47.5 47.5"
            id="email"
          >
            <defs>
              <clipPath id="a">
                <path d="M0 38h38V0H0v38Z"></path>
              </clipPath>
            </defs>
            <g clip-path="url(#a)" transform="matrix(1.25 0 0 -1.25 0 47.5)">
              <path
                fill="#ccd6dd"
                d="M0 0a4 4 0 0 0-4-4h-28a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4V0Z"
                transform="translate(37 10)"
              ></path>
              <path
                fill="#99aab5"
                d="m0 0-11.313-11.313c-.027-.028-.037-.063-.06-.091a3.987 3.987 0 0 1 1.384-1.384c.029.023.063.033.09.059L1.415-1.414A1 1 0 0 1 0 0"
                transform="translate(12.95 19.364)"
              ></path>
              <path
                fill="#99aab5"
                d="M0 0c-.021.028-.033.063-.06.09l-11.312 11.314a1 1 0 1 1-1.415-1.414L-1.474-1.324c.027-.027.062-.037.09-.06A3.97 3.97 0 0 1 0 0"
                transform="translate(36.423 7.96)"
              ></path>
              <path
                fill="#99aab5"
                d="M0 0h-28a4 4 0 0 1-4-4v-1.03l14.528-14.495a4.88 4.88 0 0 1 6.884 0L4-5.009V-4a4 4 0 0 1-4 4"
                transform="translate(33 32)"
              ></path>
              <path
                fill="#e1e8ed"
                d="M0 0h-28a3.992 3.992 0 0 1-3.595-2.275l14.766-14.767a4 4 0 0 1 5.657 0L3.595-2.275A3.991 3.991 0 0 1 0 0"
                transform="translate(33 32)"
              ></path>
            </g>
          </svg>
          <svg
            className="bg-pink-500 h-8 w-8 p-[2px] rounded-full top-2 right-0 absolute border-4 border-white a"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="#ffffff"
            stroke="#ffffff"
            strokeWidth="1"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-[80%] sm:w-[90%] md:w-[50%] ">
          <div className="flex justify-center">
            <p className="text-center text-gray-500  font-semibold">
              Please verify your email address. We have sent a confirmation
              email to:
            </p>
          </div>
          <div className="flex justify-center">
            <p className="text-center text-black font-bold m-4 ">{email}</p>
          </div>
          <div className="flex justify-center m-2">
            <p className="text-center text-gray-500 font-semibold">
              click on the confirmation link in that email to begin using
              Dribbble.
            </p>
          </div>

          <div className="flex justify-center  m-2">
            <p className="text-center text-gray-500 font-semibold">
              Didn't receive the email?Check your Spam folder,it may have been
              caught by a filter.if you still don't see it,click
              <span className=" text-pink-600 font-bold">
                resend the confirmation email
              </span>
            </p>
          </div>
          <div className="flex justify-center m-2">
            <p className="text-center text-gray-600 font-semibold">
              Wrong email address?
              <span className=" text-pink-500  font-bold">Change it.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verification;
