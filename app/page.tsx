"use client";

import HomeLayout from "@/components/layouts/home/index";
import dynamic from "next/dynamic";

const Home = dynamic(() => import("@/components/templates/jobList"), {
  ssr: false,
});

export default function HomePage() {
  return (
    <HomeLayout>
      <Home />
    </HomeLayout>
  );
}
