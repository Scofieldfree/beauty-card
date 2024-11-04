"use client";

import React, { useRef, RefObject } from "react";
import { toPng } from "html-to-image";

import { Button } from "@/components/ui/button";
import Tiptap from "@/components/Tiptap";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function BeautyCard() {
  const imageRef = useRef<HTMLDivElement| null>(null);
  async function htmlToImageConvert(imageRef: RefObject<HTMLDivElement | null>) {
    const dataUrl = await toPng(imageRef.current, { cacheBust: false })
    const link = document.createElement("a");
    link.download = "beauty-card.png";
    link.href = dataUrl;
    link.click();
  };

  return (
    <div>
      <div className="p-[30px] bg-[#C8F4FC] rounded-[8px]" ref={imageRef}>
        <Card className="w-[380px] rounded-[16px]">
          <CardHeader>
            <CardTitle>
              <div>beauty card</div>
            </CardTitle>
            <CardDescription>You have 3 unread messages.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <Tiptap />
          </CardContent>
          <CardFooter>
            <Button className="w-full">Mark all as read</Button>
          </CardFooter>
        </Card>
      </div>
      <div className="w-[200px] pt-[10px]">
        <Button onClick={() => htmlToImageConvert(imageRef)}>Export Image</Button>
      </div>
    </div>
  );
}
