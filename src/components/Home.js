import React from "react"
import image from "../wild roadster 4.jpeg"
export default function Home() {
  return (
    <main>
      <img
        src={image}
        alt="Wild Roadster"
        className="absolute object-cover w-full h-full"
      />

      <section
        className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8"
      >
        <h1
          className="text-2xl text-red-600 font-bold cursive leading-none lg:leading-snug home-name"
        >
          Hi, I'm Wilner.
        </h1>
      </section>
    </main>
  )
}