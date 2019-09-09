import React from "react";
import { ipad_pro_png } from "assets/images/Shop website";
const HomeMainSection = props => {
  return (
    <div className=" py-20">
      <div className="container mx-auto">
        <div className="text-center">
          <h1 className="text-4xl lg:text-6xl font-josefin font-semi-bold">
            {props.title}
          </h1>
        </div>
        <div className="flex justify-center flex-wrap lg:pt-16">
          <div className="text w-full sm:w-full lg:w-5/12 md:w-full flex flex-col items-right ">
            <div className="pt-4 pr-10 ">
              <div className="w-11/12 lg:w-2/3 ml-auto">
                <p className="font-thin text-lg md:text-2xl lg:text-3xl text-center lg:text-right">
                  {props.body}
                </p>
              </div>
            </div>
            <div className="mt-5 lg:mt-10 w-auto ">
              <div className="flex justify-end">
                <button className="ml-auto border border-1 border-black rounded-lg mr-10">
                  <span className="text-4xl p-3">Get Started</span>
                </button>
              </div>
            </div>
          </div>
          <div className="w-7/12 bg-blue-200">
            <div className="images flex">
              <img src={ipad_pro_png} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMainSection;
