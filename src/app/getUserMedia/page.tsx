"use client";
import { useEffect, useState } from "react";

const GetUserMediaPage = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const initialize = () => {
    const mediaStreamContrains: MediaStreamConstraints = {
      video: true,
      audio: true,
    };

    function gotLocalMediaStream(mediaStream: MediaProvider) {
      const localVideo = document.querySelector("video");
      setIsConnected(true);
      if (localVideo && localVideo.srcObject) {
        localVideo.srcObject = mediaStream;
      }
      console.log(mediaStream);
    }

    function handleLocalMediaStreamError(error: Error) {
      setIsConnected(false);
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
    <>
      <h1>Realtime communication with WebRTC</h1>
      {isConnected ? (
        <video autoPlay playsInline></video>
      ) : (
        <div> connected failed: {errorMsg}</div>
      )}
    </>
  );
};

export default GetUserMediaPage;
