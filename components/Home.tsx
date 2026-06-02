"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MusicPlayer } from "./music";
import {
  anim,
  calendar,
  date,
  forCalendar,
  name,
  open1,
  open2,
  txt1,
  txt1Title,
  txt3,
  txt4,
  txt5,
  txt6,
  vazoxTox1,
} from "@/data/data";
import { motion } from "framer-motion";
import Programs from "./Program";
import { Footer } from "./footer";
import { Calendar } from "./Calendar";
import { TimeBox } from "./TimeBox";
import AttendanceGuests from "./RSVP";

export function Home() {
  const [openEnvelope, setOpenEnvelope] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (openEnvelope) {
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
  }, [openEnvelope]);

  return (
    <div
      className={` ${openEnvelope ? "" : "relative h-dvh"} tracking-[20%] text-center overflow-hidden  FontMassis text-vrayi `}
    >

      <div
        className={`${openEnvelope ? "opacity-0 -z-1" : " z-100"} FontArmDecorative absolute w-full h-dvh text-white`}
        onClick={() => setOpenEnvelope(true)}
        style={{ backgroundImage: "url('/img1.jpg')", backgroundPosition: "center", backgroundSize: "cover" }} >
        <div className="w-full h-full backdrop-blur-sm">

          <h2 className="text-3xl pt-50  font-bold text-center">
            {open1}
          </h2>

          <p className="px-5 pt-30 text-2xl ">
            {open2}
          </p>
        </div>
      </div>


      {/* music button */}
      <div>
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="fixed z-10 p-1  rounded-2xl bg-[#8a8a8a1f]  right-7 top-7 w-15  h-15 flex justify-center items-center"
        >
          <Image
            src="/icon2.png"
            alt="icon1"
            width={500}
            height={500}
            className=" w-full p-2 object-contain "
          />
        </button>

        <MusicPlayer isPlaying={isPlaying} />
      </div>

      <div className="mx-auto max-w-md ">

        <Image
          src="/first.png"
          width={500}
          height={500}
          alt="jamanak"
          className="w-full h-auto object-cover "
        />

        <motion.h2
          {...anim}
          className="text-4xl my-10 text-center"
        >
          {name[0]} և {name[1]}
        </motion.h2>

        <div className="FontArmDecorative  flex justify-center items-center gap-3 my-10 mb-20 ">
          {calendar[1].map((el: any, i: any) =>
            i != 2 ?
              <span key={el} className="p-3 h-max text-xl border border-guyn rounded-2xl text-vrayi">{el}</span> :
              <div key={el} className="relative">

                <Image
                  src="/icon4.png"
                  width={500}
                  height={500}
                  alt="jamanak"
                  className="w-[20vw] h-[20vw] md:w-[10vw] md:h-[10vw] object-contain "
                />
                <span className="absolute text-2xl text-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">{el} </span>
              </div>

          )}
        </div>

        <motion.p {...anim} className="px-5 text-2xl  my-20">
          {txt1}
        </motion.p>

        <Image
          src="/progr1.png"
          width={500}
          height={500}
          alt="jamanak"
          className="w-full h-auto object-cover "
        />
        <Calendar
          year={forCalendar[0]}
          month={forCalendar[1]}
          highlightDay={forCalendar[2]}
        />

        <Programs />

        <Image
          src="/progr2.png"
          width={500}
          height={500}
          alt="jamanak"
          className="w-full h-auto object-cover "
        />

        {/* errord mas vazox tox + nkar */}
        <div className=" mt-20 relative w-full font-bold  text-2xl text-vrayi ">
          <div className=" whitespace-nowrap animate-marquee-2  rotate-2  -translate-x-full">
            {vazoxTox1}
          </div>
          <div className=" whitespace-nowrap animate-marquee my-15  -translate-x-full">
            {vazoxTox1}
          </div>
          <div className=" whitespace-nowrap animate-marquee-2  -rotate-2 -translate-x-full">
            {vazoxTox1}
          </div>

            <Image
              src="/img2.jpg"
              width={500}
              height={500}
              alt="jamanak"
              className="w-full mt-15 object-cover "
            />
            <p className=" font-normal my-15 mt-15 text-2xl tracking-[25%] text-center ">
              {" "}
              {txt3}
            </p>

          <div className=" whitespace-nowrap animate-marquee-2  rotate-2  -translate-x-full">
            {vazoxTox1}
          </div>
          <div className=" whitespace-nowrap animate-marquee my-15  -translate-x-full">
            {vazoxTox1}
          </div>
          <div className=" whitespace-nowrap animate-marquee-2  -rotate-2 -translate-x-full">
            {vazoxTox1}
          </div>
        </div>

        <div
          className=" w-full mt-20 text-vrayi h-[40vh] font-bold content-center" style={{ backgroundImage: "url('/second.png')", backgroundPosition: "bottom", backgroundSize: "cover" }} >
          <TimeBox />

        </div>
        <AttendanceGuests />
        
        <motion.p {...anim} className=" text-2xl  my-20">
          {txt4}
        </motion.p>

      </div>
      <Footer />
    </div>
  );
}
