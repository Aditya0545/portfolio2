"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import { navItems } from "@/data";
import Loading from "./loading";

// Dynamically import all components that might use browser APIs
const Hero = dynamic(() => import("@/components/Hero"), {
  ssr: false,
  loading: () => <Loading />,
});

const Grid = dynamic(() => import("@/components/Grid"), {
  ssr: false,
  loading: () => <Loading />,
});

const RecentProjects = dynamic(() => import("@/components/RecentProjects"), {
  ssr: false,
  loading: () => <Loading />,
});

const Clients = dynamic(() => import("@/components/Clients"), {
  ssr: false,
  loading: () => <Loading />,
});

const Experience = dynamic(() => import("@/components/Experience"), {
  ssr: false,
  loading: () => <Loading />,
});

const Approach = dynamic(() => import("@/components/Approach"), {
  ssr: false,
  loading: () => <Loading />,
});

const FloatingNav = dynamic(
  () => import("@/components/ui/FloatingNavbar").then((mod) => mod.FloatingNav),
  {
    ssr: false,
    loading: () => <Loading />,
  }
);

const Footer = dynamic(() => import("@/components/Footer"), {
  ssr: false,
  loading: () => <Loading />,
});

const About = dynamic(() => import("@/components/About"), {
  ssr: false,
  loading: () => <Loading />,
});

const Timeline = dynamic(() => import("@/components/Timeline"), {
  ssr: false,
  loading: () => <Loading />,
});

const MyLearning = dynamic(() => import("@/components/MyLearning"), {
  ssr: false,
  loading: () => <Loading />,
});

const Home = () => {
  return (
    <Suspense fallback={<Loading />}>
      <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          <FloatingNav navItems={navItems} />
          <Hero />
          <About />
          <Grid />
          <RecentProjects />
          <Clients />
          <Experience />
          <Timeline />
          <MyLearning />
          <Approach />
          <Footer />
        </div>
      </main>
    </Suspense>
  );
};

export default Home;
