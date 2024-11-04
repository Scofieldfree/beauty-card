"use client";

import React, { useRef, RefObject, useState } from "react";
import { toPng } from "html-to-image";

import { Button } from "@/components/ui/button";
import Tiptap from "@/components/Tiptap";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";


export default function BeautyCard() {
  const imageRef = useRef<HTMLDivElement | null>(null);
  const [bgColor, setBgColor] = useState<string>("bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500")
  async function htmlToImageConvert(imageRef: RefObject<HTMLDivElement | null>) {
    const dataUrl = await toPng(imageRef.current, { cacheBust: false })
    const link = document.createElement("a");
    link.download = "beauty-card.png";
    link.href = dataUrl;
    link.click();
  };

  const changeTheme = (theme: string) => {
    setBgColor(theme)
  }

  return (
    <div className="">
      <div className="mb-3 flex gap-6  scroll-smooth cursor-pointer">
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-[40px] h-[40px] rounded" onClick={() => changeTheme("from-indigo-500 via-purple-500 to-pink-500")}></div>
        <div className="bg-gradient-to-r from-cyan-500 to-blue-50 w-[40px] h-[40px] rounded" onClick={() => changeTheme("from-cyan-500 to-blue-50")}></div>
        <div className="bg-gradient-to-r  from-pink-500 to-orange-500 w-[40px] h-[40px] rounded" onClick={() => changeTheme("from-pink-500 to-orange-500")}></div>
        <div className="bg-gradient-to-r  from-[#8A2387] [#E94057] to-[#F27121] w-[40px] h-[40px] rounded" onClick={() => changeTheme("from-[#8A2387] [#E94057] to-[#F27121]")}></div>
        <div className="bg-gradient-to-r  from-[#302b63] to-[#24243e] w-[40px] h-[40px] rounded" onClick={() => changeTheme("from-[#302b63] to-[#24243e]")}></div>
        <div className="bg-gradient-to-r  from-[#a18cd1] to-[#fbc2eb] w-[40px] h-[40px] rounded" onClick={() => changeTheme("from-[#a18cd1] to-[#fbc2eb]")}></div>
        <div className="bg-gradient-to-r  from-[#f5f7fa] to-[#c3cfe2] w-[40px] h-[40px] rounded" onClick={() => changeTheme("from-[#f5f7fa] to-[#c3cfe2]")}></div>
        <div className="bg-gradient-to-r  from-[#eea2a2] #bbc1bf #57c6e1 #b49fda to-[#7ac5d8] w-[40px] h-[40px] rounded" onClick={() => changeTheme("from-[#eea2a2] #bbc1bf #57c6e1 #b49fda to-[#7ac5d8]")}></div>
        <div className="bg-gradient-to-r  from-[#9795f0] to-[#fbc8d4] w-[40px] h-[40px] rounded" onClick={() => changeTheme("from-[#9795f0] to-[#fbc8d4]")}></div>
        <div className="bg-gradient-to-r  from-[#fddb92] to-[#d1fdff] w-[40px] h-[40px] rounded" onClick={() => changeTheme("from-[#fddb92] to-[#d1fdff]")}></div>
      </div>
      <div className={`p-[30px] w-[420px] rounded-[8px]  text-black bg-gradient-to-r  ${bgColor}`} ref={imageRef}>
        <Card className=" rounded-[16px]  shadow-2xl opacity-75">
          <CardHeader>
            <CardTitle>
              <div contentEditable={true} className="p-2 pl-0">beauty card</div>
            </CardTitle>
            <CardDescription contentEditable={true}>You have 3 unread messages.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <Tiptap />
          </CardContent>
        </Card>
      </div>
      <div className="w-[200px] pt-[10px]">
        <Button onClick={() => htmlToImageConvert(imageRef)} className="bg-indigo-500 shadow-lg shadow-indigo-500/50 hover:bg-indigo-500">Export Image</Button>
      </div>
    </div >
  );
}
