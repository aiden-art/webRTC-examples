"use client";

import NextLink from "next/link";
import { useEffect } from "react";

export default function Home() {
  const courseList = [
    {
      title: "How to Access the Camera through a Browser",
      link: "/getUserMedia",
    },
    {
      title: "How to detect media devices using WebRTC",
      link: "/mediaDevices",
    },
  ];

  useEffect(() => {
    // In order to gain access to media devices then we can get media devices detail
    navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true,
    });
  }, []);

  return (
    <main className="min-h-screen p-4 text-black">
      <h2 className="text-lg font-semibold text-center">
        Build a live streaming system from scratch
      </h2>
      <ul className="px-4 mt-6 text-sm">
        {courseList.map((item, index) => (
          <li className="list-decimal" key={index}>
            <NextLink className="underline" href={item.link}>
              {item.title}
            </NextLink>
          </li>
        ))}
      </ul>
    </main>
  );
}
