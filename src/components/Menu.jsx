import React from "react";
import MenuCard from "../layouts/MenuCard";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpg";
import img8 from "../assets/img8.jpg";
import img9 from "../assets/img9.jpg";
import img10 from "../assets/img10.jpg";
import img11 from "../assets/img11.jpg";
import img13 from "../assets/img13.jpg";

const Menu = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className=" text-4xl font-semibold text-center pt-24 pb-10">
        Our Signature
      </h1>

      <div className=" flex flex-wrap gap-8 justify-center">
        <MenuCard img={img1} title="Chicken BBQ " price="₹420" />
        <MenuCard img={img2} title="Prawn BBQ " price="₹370" />
        <MenuCard img={img3} title="Chicken Tikka Kebab " price="₹310" />
        <MenuCard img={img4} title="Afghani BBQ Tikka" price="₹360" />
        <MenuCard img={img5} title="Alfaham Chicken" price="₹450" />
        <MenuCard img={img6} title="Stick Chicken  " price="₹280" />
        <MenuCard img={img7} title="Yemani Chicken Mandi  " price="₹320" />
        <MenuCard img={img8} title="Boneless Chicken Biriyani  " price="₹290" />
        <MenuCard img={img9} title="Laham Mandi " price="₹440" />
        <MenuCard img={img10} title="Chicken Sheek Kebab " price="₹350" />
        <MenuCard img={img11} title="Sea Food Platter" price="₹1699" />
        <MenuCard img={img13} title="Mutton Phal " price="₹499" />
      </div>
    </div>
  );
};

export default Menu;
