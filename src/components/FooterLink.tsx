"use client";
import React from "react";
import { LinkPreview } from "@/components/ui/link-preview";

export function FooterLink() {
    return (
        <div className="flex justify-center items-start h-[60px] flex-col px-4 mt-10">
            <div className="text-neutral-500 dark:text-neutral-400 text-base md:text-basexl max-w-3xl  text-left mb-10 border-[#F27121] border-[1px] rounded-[6px] p-2">
                <LinkPreview
                    url="https://llmmultiagent.com/"
                    className="z-99 font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
                >
                    LLM Multi Agent
                </LinkPreview>
            </div>
        </div>
    );
}
