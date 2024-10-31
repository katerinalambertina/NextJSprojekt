// app/components/Home.tsx

"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen">
      {/* Úvodní video na pozadí */}
      <div className="relative w-full h-screen">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/Video/VideoRun.mp4" // Nahraďte správnou cestou k videu
          autoPlay
          loop
          muted
        ></video>

        {/* Overlay pro tmavý efekt na videu */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Text uprostřed viewportu */}
        <main className="relative z-10 flex items-center justify-center text-center text-white h-full">
          <h1 className="text-4xl md:text-6xl font-bold px-4">
            Vítejte na naší stránce!
          </h1>
        </main>
      </div>

      {/* Footer */}
      <footer className="relative z-10 bg-gray-800 text-white py-6 flex items-center justify-center gap-6">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Naučte se více
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Příklady
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Navštivte nextjs.org →
        </a>
      </footer>
    </div>
  );
}
