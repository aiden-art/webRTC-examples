"use client";
import { useEffect, useState, useRef } from "react";

const GetUserMediaPage = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const videoElRef = useRef<null | HTMLVideoElement>(null);
  const initialize = () => {
    const mediaStreamContrains: MediaStreamConstraints = {
      video: true,
      audio: true,
    };

    function gotLocalMediaStream(mediaStream: MediaProvider) {
      if (videoElRef.current) {
        videoElRef.current.srcObject = mediaStream;
      }
    }

    function handleLocalMediaStreamError(error: Error) {
      console.log("navigator.getUserMedia error: ", error);
      setErrorMsg(error.message);
    }

    navigator.mediaDevices
      .getUserMedia(mediaStreamContrains)
      .then(gotLocalMediaStream)
      .catch(handleLocalMediaStreamError);
  };

  useEffect(() => {
    initialize();
  }, []);

  return (
    <div className="px-4 text-black">
      <h1 className="py-10 text-center">Realtime communication with WebRTC</h1>
      <video className="m-auto" ref={videoElRef} autoPlay playsInline></video>
      {errorMsg && <p>connected failed: {errorMsg}</p>}
    </div>
  );
};

export default GetUserMediaPage;
