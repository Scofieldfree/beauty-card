"use client";

// import Image from "next/image";
import React, { useRef } from "react";
import { toPng } from "html-to-image";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Tiptap from "@/components/Tiptap";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

type CardProps = React.ComponentProps<typeof Card>;

export default function Home({ className, ...props }: CardProps) {
  const imageRef = useRef(null);
  console.log({ imageRef });
  const htmlToImageConvert = () => {
    toPng(imageRef.current, { cacheBust: false })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "beauty-card.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="p-[30px] bg-[#C8F4FC] rounded-[8px]" ref={imageRef}>
          <Card className={cn("w-[380px] rounded-[16px]", className)} {...props}>
            <CardHeader>
              <CardTitle>
                <div contenteditable>beauty card</div>
              </CardTitle>
              <CardDescription>You have 3 unread messages.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <Tiptap className="h-[100px" />
            </CardContent>
            <CardFooter>
              <Button className="w-full">Mark all as read</Button>
            </CardFooter>
          </Card>
        </div>
        <div className="w-[200px]">
          <Button onClick={htmlToImageConvert}>Export Image</Button>
        </div>
      </main>
    </div>
  );
}
