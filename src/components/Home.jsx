import React from "react";
import Button from "../layouts/Button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className=" min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url('./assets/hero.jpg')] bg-cover bg-no-repeat">
      <div className=" w-full lg:-2/3 space-y-5">
        <h1 className="text-testColor font-semibold text-6xl">
          Infusing Your Dining Experience With Arabian Traditions
        </h1><br />
        <p className="text-testColor ">
          The concept of Cafe De Arabica was drawn from Ahlan Foodpreneurs, the
          idea was to create an authentic Arabian <br /> Non-Veg restaurant specialized
          in Barbecues, Seafood, Tandoor and lip-smacking kebabs with great
          taste, grand <br /> ambience and unmatched services to provide you a
          memorable dining experience. Arabian Barbecues, Yemani Mandi <br /> and Seafood Verities are the unique
          attractions of the menu.The concept of ‘Palmshore' was established in
          2008 with <br /> strong focus and commitment towards quality, exceptional
          service and warm hospitality, employs a team of highly <br /> skilled &
          experienced chefs and supported by a strong management team different
          levels to ensure it meets the standards.
        </p>
        <div className="lg:pl-44 font-semibold text-backgroundColor">
          <Button title="Order Now" />
          
        </div>
        
      </div>
      
    </div>
    
  );
};

export default Home;
