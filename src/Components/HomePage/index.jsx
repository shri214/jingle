import React from "react";
import { Navbar } from "../Navbar";
import img1 from "../../assets/1.jpeg";
import img2 from "../../assets/2.jpg";
import img3 from "../../assets/3.jpg";
import { ImageCarousel } from "../Carousel";
import "./style.css";
import { BoxModal1 } from "../Box-modal";
import HotelRoundedIcon from "@mui/icons-material/HotelRounded";
import BungalowRoundedIcon from "@mui/icons-material/BungalowRounded";
import AirplanemodeActiveRoundedIcon from "@mui/icons-material/AirplanemodeActiveRounded";
import { CommonDiv } from "../Common";
import taj from "../../assets/Taj-mahal.jpg";
import gangtok from "../../assets/Gangtok.jpg";
import Jallianwala from "../../assets/Jallianwala-Bagh.jpg";
import p1 from "../../assets/2nd1.jpg";
import p2 from "../../assets/2nd2.jpg";
import p3 from "../../assets/2nd3.jpg";
import { ImageComp } from "../ImageCom";
import leh from '../../assets/Leh.jpg';
import solang from '../../assets/Solang-Valley.jpg';
import beach from '../../assets/beach.jpg';
import { Tourist } from "../Tourist";
import Footer from "../Footer";

export const HomePage = () => {
  const images = [img1, img2, img3];

  const details = [
    {
      h: "Our Services",
      p: "At Jingle Holiday Bazar, we are committed to ensuring that you save on every trip and every holiday booking you make with us by bringing to you the best price deals; be it flights, tours or hotels. Our unique budget",
    },
    {
      h: "POPULAR DESTINATION IN INDIA",
      p: `India is a vibrant land of startling contrasts where both the traditional and modern worlds meet.
      The world's seventh largest nation by area and the second largest in terms of population, India boasts a rich
      heritage that's the result of centuries of different cultures and religions leaving their mark`,
    },
    {
      h: "POPULAR DESTINATION INTERNATIONAL",
      p: `Mother Earth along with mankind have co-created some of the most spectacular places on this planet.
      From sprawling cities to spectacular national parks, it is hard to keep your bucket list stagnant. Keeping in mind
      iconic attractions, culture, food and ease of travel, these are the best places in the world to visit!`,
    },
    {
      h: "FEATURED TOURS IN INDIA",
      p: `India is a vibrant land of startling contrasts where both the traditional and modern worlds meet. The world's seventh
      largest tourist nation by area and the second largest in terms of population
      
      `,
    },
  ];
  const Place = [
    {
      0: Jallianwala,
      1: gangtok,
      2: taj,
      3: ["Amritsar, Punjab", "Gangtok, Sikkim", "Agra Uttar Pradesh"],
    },
    {
      0: p1,
      1: p2,
      2: p3,
      3: ["DUBAI", "SYDNEY", "SINGAPORE"],
    },
  ];

  const tours={
   1: [
      {
        img:leh,
        h: "Week At Thiksey Monastery",
        p: ` This 12-storey complex hosts over 500 monks and is considered to be one of the most beautiful Buddhist monasteries in all of Ladakh. For Ladakh sightseeing, Thiksey Gompa will enlighten you with knowledge about some of the Buddhist culture, lifestyle, scriptures, statues and even paintings.`,
        l:"WhatsApp Now More Details"
      },
      {
        img:solang,
        h:"Week At Solang Valley, Manali",
        p:`A mini valley located at about 8400 feet above sea level, Solang Nala is a short drive away from Manali. If you are looking for snow-based activities and sports, winters are the best time to visit`,
        l:"Contact",
      },
      {
        img:beach,
        h:'Week At Beach in Goa',
        p:`Goa is the smallest state in India, Goa is synonymous to many captivating things that are best showcase of a life without stress and worries. The multitude of beaches in Goa`,
        l:"Contact",
      }
    ]
  }
  return (
    <>
      <Navbar />
      <ImageCarousel images={images} interval={4000} />
      <section className="sec1">
        <CommonDiv obj={details[0]} />
        <div className="box1">
          <BoxModal1 icons={<BungalowRoundedIcon />} />
          <BoxModal1 icons={<HotelRoundedIcon />} />
          <BoxModal1 icons={<AirplanemodeActiveRoundedIcon />} />
        </div>
        <CommonDiv obj={details[1]} />
        <ImageComp obj={Place[0]} />
        <CommonDiv obj={details[2]} />
        <ImageComp obj={Place[1]} />
        <button className="all-dest">All Destination</button>
        <CommonDiv obj={details[3]} />
        <Tourist places={tours[1]}/>
      </section>
      <Footer/>
    </>
  );
};
