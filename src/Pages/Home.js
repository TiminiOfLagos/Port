import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { personalDetails } from "../Details";

function Home() {
  const { name, tagline, profile } = personalDetails;
  const h11 = useRef();
  const h12 = useRef();
  const h13 = useRef();
  const myimageref = useRef();
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(
      h11.current,
      {
        x: "-100%",
        delay: 0.8,
        opacity: 0,
        duration: 2,
        ease: "Power3.easeOut",
      },
      "<"
    )
      .from(
        h12.current,
        {
          x: "-100%",
          delay: 0.5,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        h13.current,
        {
          x: "-100%",
          delay: 0.1,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        myimageref.current,
        {
          x: "200%",
          delay: 0.5,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      );
  }, []);

  return (
    <main className="container mx-auto max-width section md:flex justify-between items-center">
      <div className=" w-[50%] md: w-[100%]">
        <h1
          ref={h11}
          className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
          Hi,👋<br></br>
        </h1>
        <h1
          ref={h12}
          className="text-2xl bg-clip-text bg-blue-400 text-transparent md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
          <span className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">My name is</span> {name}
        </h1>
        <p classname= " mt-2"
          ref={h13}
          className=" text-base text-dark-heading dark:text-light-heading md:text-1xl xl:leading-tight font-normal"
        >
          {tagline}
        </p>
      </div>
      <div className=" w-[50%] md:mt-2 w-[100%]">
        <img ref={myimageref} className=" h-80 rounded-lg md:ml-auto " src={profile} alt="Tosin" />
      </div>
    </main>
  );
}

export default Home;
