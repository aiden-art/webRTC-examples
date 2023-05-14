import Image from "next/image";
import NextLink from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2 className="text-center">从零打造音视频直播系统</h2>
      <ul>
        <li>
          <NextLink href="/getUserMedia">
            原来通过浏览器访问摄像头这么容易
          </NextLink>
        </li>
        <li></li>
      </ul>
    </main>
  );
}
