import NextLink from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen p-4">
      <h2 className="text-lg font-semibold text-center">
        Build a live streaming system from scratch
      </h2>
      <ul className="px-4 mt-6 text-sm">
        <li className="list-disc">
          <NextLink className="underline" href="/getUserMedia">
            Accessing the camera through a browser is so easy
          </NextLink>
        </li>
        <li></li>
      </ul>
    </main>
  );
}
