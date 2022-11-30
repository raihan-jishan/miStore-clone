import React, { useEffect, useState } from "react";
import NavCard from "./NavCard.js";
import "../styles/NavOptios.css";
const NavOptios = ({
  miPhones,
  redmiPhones,
  tv,
  laptop,
  fitnessAndLifeStyle,
  home,
  audio,
  accessories,
}) => {
  const [miPhoneToggle, setMiPhoneToggle] = useState(false);
  const [redmiPhoneToggle, setRedmiPhoneToggle] = useState(false);
  const [tvToggle, setTvToggle] = useState(false);
  const [laptopToggle, setLaptopToggle] = useState(false);
  const [fitnessToggle, setFitnessToggle] = useState(false);
  const [homeToggle, setHomeToggle] = useState(false);
  const [audioToggle, setAudioToggle] = useState(false);
  const [accessoriesToggle, setAccessoriesToggle] = useState(false);
  //    use Effect function
  useEffect(() => {
    if (window.location.pathname === "/#miphones") {
      return setMiPhoneToggle(true);
    }
    if (window.location.pathname === "#/redmiPhones") {
      return setRedmiPhoneToggle(true);
    }
    if (window.location.pathname === "/#tv") {
      return setTvToggle(true);
    }
    if (window.location.pathname === "/#laptop") {
      return setLaptopToggle(true);
    }
    if (window.location.pathname === "/#lifestyle") {
      return setFitnessToggle(true);
    }
    if (window.location.pathname === "/#home") {
      return setHomeToggle(true);
    }
    if (window.location.pathname === "/#audio") {
      return setAudioToggle(true);
    }
    if (window.location.pathname === "/#accessories") {
      return setAccessoriesToggle(true);
    }
  }, []);
  return (
    <div className="navOptions">
      {miPhoneToggle
        ? miPhones.map((item) => (
            <NavCard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            />
          ))
        : null}
      {/*  2 nd */}
      {redmiPhoneToggle
        ? redmiPhones.map((item) => (
            <NavCard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            />
          ))
        : null}
      {/* 3 nd */}
      {tvToggle
        ? tv.map((item) => (
            <NavCard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            />
          ))
        : null}
      {/* 4 th */}
      {laptopToggle
        ? laptop.map((item) => (
            <NavCard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            />
          ))
        : null}
      {/*  5th  */}
      {fitnessToggle
        ? fitnessAndLifeStyle.map((item) => (
            <NavCard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            />
          ))
        : null}
      {/*  6th */}
      {homeToggle
        ? home.map((item) => (
            <NavCard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            />
          ))
        : null}
      {/*  7th */}
      {audioToggle
        ? audio.map((item) => (
            <NavCard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            />
          ))
        : null}
      {/*  8th */}
      {accessoriesToggle
        ? accessories.map((item) => (
            <NavCard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            />
          ))
        : null}
    </div>
  );
};

export default NavOptios;
