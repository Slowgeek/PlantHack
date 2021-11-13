import React from "react";
import dp from "../assets/testimonial_img-1.jpg";
const Profile = () => {
  return (
    <div className="h-screen bg-pink-100">
      {/* <div>
        <h1 className="p-12 font-medium text-2xl ">Wants to Plant More</h1>
      </div> */}
      <div className="flex md:flex-row flex-col justify-around ">
        <div className="h-full w-1/2">
          <h1 className="bg-blue-100 text-center py-2 font-medium text-2xl my-8 ml-45">
            WELCOME!
          </h1>{" "}
          <img
            className="shadow-xl mx-auto max-w-xs max-h-96 rounded-full cursor-pointer h-80 w-80"
            src={dp}
            alt="dfsd"
          />
          <div className="w-auto text-center">
            <button class="py-2 m-8 px-4 bg-pink-100 text-black font-semibold rounded-lg ">
              Monalisa Fernandes
            </button>
            <button class="py-2 m-8 px-4 bg-pink-100 text-black font-semibold rounded-lg shadow-md hover:bg-white focus:outline-none focus:ring-2 focus:ring-white-400 focus:ring-opacity-75">
            Previous Work
          </button>
            
          </div>
        </div>
        <div className="h-screen w-1/2 bg-white p-20 text-center">
          <h2 className="text-4xl text-center pb-2 bg-white -ml-20">
            UPLOAD HERE
          </h2>{" "}
          <div className="pt-6">
            <label htmlFor="loc">Location</label>
            <br />
            <input
              className={
                "w-3/4 bg-blue-100 p-2 text-primary  transition duration-150 ease-in-out mb-4"
              }
            />
          </div>
          <div className="pt-6">
            <label htmlFor="img">Upload your Image here.</label>
            <br />
            <input
              className={
                "w-3/4 bg-blue-100 p-20 text-primary  transition duration-150 ease-in-out mb-4"
              }
            />
          </div>
          <button class="py-2 m-8 px-4 bg-pink-100 text-black font-semibold rounded-lg shadow-md hover:bg-white focus:outline-none focus:ring-2 focus:ring-white-400 focus:ring-opacity-75">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
