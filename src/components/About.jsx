import React from "react";
import img14 from "../assets/img14.png";
import Button from "../layouts/Button";

const About = () => {
  return (
    <div className=" min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5">
      <img src={img14} alt="About" />

      <div className=" space-y-4 lg:pt-14">
        <h1 className=" font-semibold text-4xl text-center md:text-start"> Why Choose Us</h1>
        <p>
          The concept of Palmshore was drawn from Ahlan Foodpreneurs, the idea
          was to create an authentic Arabian Non-Veg restaurant specialized in
          Barbecues, Seafood, Tandoor and lip-smacking kebabs with great taste,
          grand ambience and unmatched services to provide you a memorable
          dining experience
          </p> 
          <p> Arabian Barbecues, Yemani Mandi and Seafood
          Verities are the unique attractions of the menu. The concept of
          ‘Palmshore' was established in 2008 with strong focus and commitment
          towards quality, exceptional service and warm hospitality, employs a
          team of highly skilled & experienced chefs and supported by a strong
          management team different levels to ensure it meets the standards.
          </p>

          <p>With due emphasis laid on quality, service & hygiene, Palmshore is
          committed to Food Safety & Standards and strictly implements FSSAI :
          2006 across the chain of restaurants and is periodically audited.
        </p>
        <div className=" flex justify-center lg:justify-start">
            <Button title="Learn More" />
        </div>
      </div>
    </div>
  );
};

export default About;
