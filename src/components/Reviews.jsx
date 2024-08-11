import React from "react";
import ReviewCard from "../layouts/ReviewCard";
import img1 from "../assets/irfan.jpg";
import img2 from "../assets/danjr.jpeg";
import img3 from "../assets/prabhu.jpeg";
const Reviews = () => {
  return (
    <div className=" min-h-screen flex flex-col items-center justify-center md:px-32 px-5">
      <h1 className="text-4xl semi-bold text-center lg:pt-16 pt-24 pb-10">
        Customer's Reviews
      </h1>

      <div className=" flex flex-col md:flex-row gap-5 mt-5">
        <ReviewCard img={img1} name="Irfan's View" />
        <ReviewCard img={img2} name="Dan Jr " />
        <ReviewCard img={img3} name="Foodie Prabhu" />
      </div>
    </div>
  );
};

export default Reviews;
