"use client"

import { useState, useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

export function Hero() {
    useEffect(() => {
        AOS.init({duration: 1200});
        AOS.refresh();
    }, []);
    return (
        <div className="relative h-full" data-aos="fade-zoom-up">
            <img
                alt="Hero"
                className="aspect-video overflow-hidden object-cover w-full h-96"
                src="/hero-image.jpg"
            />
            <div className="absolute inset-0 bg-black opacity-0 dark:opacity-35"></div>
            <img alt="RainOverlay" className="absolute inset-0 h-full w-full opacity-30" src="/rain-overlay.gif"/>
            <img alt="Fog1" className="absolute inset-0 h-full w-full animate-pulse opacity-50" src="/fog-1.png"/>
            <img alt="Fog1" className="absolute inset-0 h-full w-full animate-pulse opacity-50" src="/fog-2.png"/>

            <div className="absolute inset-0 flex flex-col items-center justify-center space-y-16 text-center">
                <div className="space-y-6" >
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl m-y-5 transition-all text-white" data-aos="fade-up">
                    Welcome to <span className="color-slide">Insight Seeker</span>
                </h1>
                <p className="mx-auto px-5 md:text-xl/relaxed max-w-6xl text-green-500 bg-slate-900 font-extralight bg-opacity-55" data-aos="fade-left" data-aos-delay="100">
                    Elevate your research with the power of AI and semantic search to unlock new insights & streamline your workflow
                </p>
                </div>
                <div>
                </div>
            </div>
        </div>
        );
    }