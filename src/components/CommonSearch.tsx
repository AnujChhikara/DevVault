'use client'
import { HoverEffect } from "./ui/card-hover-effect";

export const projects = [
    {
      title: "React + Tailwind",
      description:
        "A technology company that builds economic infrastructure for the internet.",
      link: "https://stripe.com",
    },
    {
      title: "Nextjs + Tailwind",
      description:
        "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
      link: "https://netflix.com",
    },
    {
      title: "Nextjs , Tailwind with TypeScript ",
      description:
        "A multinational technology company that specializes in Internet-related services and products.",
      link: "https://google.com",
    },
    {
      title: "Express Backend",
      description:
        "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
      link: "https://meta.com",
    },
    {
      title: "Login & Register Backend",
      description:
        "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
      link: "https://amazon.com",
    },
    {
      title: "React Router",
      description:
        "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
      link: "https://microsoft.com",
    },
    {
      title: "React Router",
      description:
        "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
      link: "https://microsoft.com",
    },
    {
      title: "React Router",
      description:
        "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
      link: "https://microsoft.com",
    },
  ];

export default function CommomSearch() {
  return (
    <div className="flex flex-col justify-center items-center mt-12">
      <h2 className="text-7xl font-semibold">Most Used Code</h2>
      <div className="max-w-7xl mx-auto px-4">

      
      <HoverEffect className="w-full" items={projects} /></div>
    </div>
  );
}

