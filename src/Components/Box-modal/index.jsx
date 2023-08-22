import React, { useState } from "react";
import "./style.css";
import { motion } from "framer-motion";
import {useInView} from 'react-intersection-observer'

export const BoxModal1 = ({ icons }) => {
  const [read, setRead] = useState(false);
  const [ref, inView]=useInView({
    triggerOnce:true,
    threshold:0.5,
  })

  const details =
    "Jingle Holiday Bazar.com ventured into Homestays in India in 2015, and is providing great homestay experiences to its customers as well as benefits to its hosts. If you are looking for a holiday with a difference, want to closely savour the local flavours of a place, and prefer the comforts of a homely environment,Jingle Holiday Bazar Homestays is the answer.Jingle Holiday Bazar already has over 3500 homestay properties and is expanding fast. It has a stronghold in South India and across most hill stations of North India, with these places providing unique homestay experiences to customers. Some of its most popular homestay destinations are Goa, Manali, Shimla, Coorg, Wayanad, among other places.";

  const handleRead = () => {
    setRead(!read);
  };
  return (
    <motion.div className="box" 
    ref={ref}
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: inView? 1:0, scale:inView? 1:0 }}
    transition={{ duration: 1}}
    >
      <div className="icon">{icons}</div>
      <h1>Jingle Holiday Bazar Homestays</h1>
      <h2>Book Villas, Apartmentsand Resorts</h2>
      <p>{read ? details : details.slice(0, 400)}</p>
      <button
        onClick={handleRead}
        className="btn"
        style={
          read
            ? { backgroundColor: "white", color: "black" }
            : { backgroundColor: "black", color: "white" }
        }
      >
        {read ? "read less" : "read more"}
      </button>
    </motion.div>
  );
};
