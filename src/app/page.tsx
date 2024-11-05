"use client"
import Link from "next/link";
import BeautyCard from "@/components/BeautyCard"
import { SparklesCore } from "@/components/ui/sparkles";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import BlurFade from "@/components/ui/blur-fade";
import AvatarCircles from "@/components/ui/avatar-circles";
// import { ClientTweetCard } from "@/components/ClientTwitterCard";
// import { FloatingDock } from "@/components/ui/floating-dock";
import {
  // IconBrandGithub,
  IconBrandX,
} from "@tabler/icons-react";

const avatarUrls = [
  "https://avatars.githubusercontent.com/u/16860528",
  "https://avatars.githubusercontent.com/u/20110627",
  "https://avatars.githubusercontent.com/u/106103625",
  "https://avatars.githubusercontent.com/u/59228569",
];

const links = [
  {
    title: "Twitter",
    icon: (
      <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },]

export default function Home() {

  return (
    <BackgroundBeamsWithCollision className="min-w-screen min-h-screen !h-full">
      <div className="flex bg-black flex-col w-full items-center overflow-y-scroll  min-h-screen lg:p-8 p-2 pb-20 gap-6 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        {/* <ClientTweetCard id="1774546840744308736" className="shadow-2xl w-[50%]" /> */}
        <div>
          {/* <FloatingDock
            mobileClassName="translate-y-20" // only for demo, remove for production
            items={links}
          /> */}

        </div>
        <BlurFade delay={0.25} inView>
          <h3 className="md:text-2xl text-3xl lg:text-5xl font-bold text-center  relative z-20 bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500">
            Beauty Card
          </h3>
        </BlurFade>
        <BlurFade delay={0.25 * 2} inView>
          <h4 className="lg:w-[600px] md:text-base text-sm lg:text-2xl font-bold text-center  relative z-20 bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500">Create and share your beautifull sourcecode image or social media image cards</h4>
        </BlurFade>

        <div className="lg:w-[40rem] w-full h-20 relative">
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
          <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
        <BeautyCard />
        <div className="w-full flex justify-center items-center">
          <Link
            href="https://x.com/scofieldfee"
            key="Twitter"
            className="mr-4 h-10 w-10 rounded-full bg-gray-50 dark:bg-neutral-900 flex items-center justify-center"
          >
            <div className="h-4 w-4"><IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" /></div>
          </Link>
          <AvatarCircles numPeople={99} avatarUrls={avatarUrls} /></div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
