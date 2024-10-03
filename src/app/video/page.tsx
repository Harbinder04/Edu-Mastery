"use client";
import React, { useCallback, useState } from "react";
// import dynamic from "next/dynamic";
// const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
import Video from 'next-video';
// import getStarted from '/videos/get-started.mp4';

function page() {
  const [userStream, setUserStream] = useState<MediaStream | null>(null);

  return (
    <div>
      <div className="m-10">
          <Video src={"v1.mp4"} />
      </div>
    </div>
  );
}

export default page;