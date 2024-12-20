"use client";

import React, { useRef, RefObject, useState } from "react";
import { toPng } from "html-to-image";

// import { Button } from "@/components/ui/button";
import Tiptap from "@/components/Tiptap";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BorderBeam } from "@/components/ui/border-beam";
// import PulsatingButton from "@/components/ui/pulsating-button";
import { RainbowButton } from "@/components/ui/rainbow-button";
// import { Slider } from "@/components/ui/slider"
// import FontFamily from '@tiptap/extension-font-family';

// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   // SelectLabel,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"

export default function BeautyCard() {
  // const [fontValue, setFontValue] = useState('')
  const imageRef = useRef<HTMLDivElement | null>(null);
  // const [sliderValue, setSliderValue] = useState([5])
  const [bgColor, setBgColor] = useState<string>("bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500")
  async function htmlToImageConvert(imageRef: RefObject<HTMLDivElement | null>) {
    const dataUrl = await toPng(imageRef.current, { cacheBust: false, pixelRatio: 2 })
    console.log({ dataUrl })
    const link = document.createElement("a");
    link.download = "beauty-card.png";
    link.href = dataUrl;
    link.click();
  };

  const changeTheme = (theme: string) => {
    setBgColor(theme)
  }

  // const handleFontChange = (value: string) => {
  //   console.log({ value })
  // }

  // const handleValueChange = (value: number[]) => {
  //   console.log({ value })
  // }

  return (
    <div className="flex flex-col justify-center items-center border-4 border-white lg:p-10 p-2 rounded-[10px]">
      {/* <div className="w-full flex flex-start">
        <div className="text-white flex justify-center items-center">Font</div>
        <Select onValueChange={(value) => handleFontChange(value)} value={fontValue}>
          <SelectTrigger className="w-[180px] m-2 ml-0 bg-black text-[#F27121]">
            <SelectValue placeholder="Select a fontfamily" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="Inter">Inter</SelectItem>
              <SelectItem value="Comic Sans MS, Comic Sans">Comic Sans</SelectItem>
              <SelectItem value="serif">Serif</SelectItem>
              <SelectItem value="monospace">Monospace</SelectItem>
              <SelectItem value="cursive">Cursive</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div> */}
      <div className="mb-3 flex flex-wrap gap-4 justify-center cursor-pointer">
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
      {/* <Slider
        defaultValue={[5]}
        value={sliderValue}
        onValueChange={handleValueChange}
        max={10}
        step={.5}
        className="w-[60%] p-2"
      /> */}
      <div className={`p-[30px] lg:w-[600px] rounded-[8px]  text-black bg-gradient-to-r  ${bgColor}`} ref={imageRef}>
        <Card className="rounded-[16px]  shadow-2xl opacity-75">
          <CardHeader>
            <CardTitle>
              <div contentEditable={true} className="p-2 pl-0">Beauty card</div>
            </CardTitle>
            <CardDescription contentEditable={true}>Quick create your image card and share it easy.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <Tiptap />
          </CardContent>
        </Card>
      </div>
      <div className="pt-[10px]">
        <RainbowButton onClick={() => htmlToImageConvert(imageRef)}>Export Image</RainbowButton>
        {/* <Button onClick={() => htmlToImageConvert(imageRef)} className="bg-indigo-500 shadow-lg shadow-indigo-500/50 hover:bg-indigo-500">
          Export Image
        </Button> */}
      </div>
      <BorderBeam size={300} duration={30} delay={3} colorFrom="#E94057" colorTo="#F27121" />
    </div >
  );
}
