"use client";
import { useEffect, useState } from "react";

const MediaDevicesPage = () => {
  const [deviceInfos, setDeviceInfos] = useState<MediaDeviceInfo[]>([]);
  const [errMsg, setErrMsg] = useState("");
  const initialize = async () => {
    // Determine if the browser supports these APIs
    if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
      setErrMsg("enumerateDevices() not supported.");
      return;
    }
    try {
      const deviceInfos = await navigator.mediaDevices.enumerateDevices();
      setDeviceInfos(deviceInfos);
    } catch (e) {
      setErrMsg((e as Error).message);
    }
  };

  useEffect(() => {
    initialize();
  }, []);
  return (
    <div>
      <h1 className="py-10 text-center">Media devices in your device</h1>
      <div className="px-10">
        {errMsg ? (
          <p className="py-4 text-center">{errMsg}</p>
        ) : (
          <ul>
            {deviceInfos.map((item) => (
              <li className="mb-4" key={item.deviceId}>
                <p className="mb-2">
                  kind: <span>{item.label}</span>
                </p>
                <p className="mb-2">
                  id: <span>{item.deviceId}</span>
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default MediaDevicesPage;
