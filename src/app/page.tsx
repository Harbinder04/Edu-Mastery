// import Image from "next/image";
import Nav from "@/components/nav";
// import hero_c from "../assets/hero_c.mp4"

export default function Home() {
  return (
    <div>
      <Nav />
    <main className={`flex min-h-screen flex-col items-center justify-between`}>
      {/* first div */}

    {/* Todo add this in div and make different component for mobile and desktop using hidden propery */}
    <video src="hero_c.mp4" loop autoPlay muted />
     <div className="absolute z-10 text-white top-56">
      <h1 className="text-6xl font-bold text-center">Welcome to the EduMastery</h1>
      <p className="text-orange-400 text-center text-2xl my-6">EduMastery: <span>Your Path to Knowledge</span></p>
      {/* <div className="h-fit w-fit">
        <img src="hero_bg_1.png" alt="Learning image of a lady"/>
      </div> */}
     </div>
      {/* second div */}
      <div className="h-[50vh] max-w-screen min-h-[10vh]">
      <div className="flex flex-col items-center mt-24 text-white">
        <h2 className="text-3xl font-bold text-center">Gain Practical Tech Skills from Experts You Can Trust
        </h2>
        <p className="text-lg text-center mt-4">JavaScript, React, and TypeScript to Node.js and Backend (Go, Git, Docker, & More)</p>
      </div>
      {/* third div */}
      <div className="flex flex-col items-center mt-6 text-white">
        <h2 className="text-4xl font-bold text-center">Our Vision</h2>
        <p className="text-xl text-center mt-4">To be the leading platform for learning and sharing knowledge</p>
      </div>
      </div>
    </main>
    </div>
  );
}
