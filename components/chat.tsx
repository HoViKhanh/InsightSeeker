"use client"

import { ChatBubble } from "./chat-bubble";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Spinner } from "./ui/spinner";
import { Message, useChat } from "ai/react";
import { getSources, initialMessages , scrollToEnd} from "@/lib/utils";
import { useEffect, useRef } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

export function Chat() {

    useEffect(() => {
        AOS.init({duration: 1200});
        AOS.refresh();
    }, []);

    const {messages, input, handleInputChange, handleSubmit, isLoading, data} = 
    useChat({
        initialMessages
    });

    const containerRef = useRef<HTMLDivElement | null > (null);
    useEffect(() => {
        setTimeout(() => scrollToEnd(containerRef), 100);
    }, [messages]);

    return (
        <div className="rounded-2xl border h-[75vh] flex flex-col justify-between dark:border-slate-800" data-aos="fade-down">
            <div className="p-6 overflow-auto dark:border-slate-800" ref={containerRef}>
                {messages.map(({id, role, content}: Message, index) => (
                    <ChatBubble
                        key={id}
                        role={role}
                        content={content}
                        sources={data?.length ? getSources(data, role, index) : []}
                        data-aos="fade-left"
                        data-aos-delay="200"
                    />
                    
                ))}
            </div>

            <form onSubmit={handleSubmit} className="p-4 flex clear-both">
                <Input 
                    placeholder={"Type here to chat with AI..."}
                    value={input}
                    onChange={handleInputChange} 
                    className="mr-2"
                    data-aos="fade-up"
                    data-aos-delay="100"
                />

                <Button type="submit" className="w-24" data-aos="fade-up" data-aos-delay="100">
                    {isLoading ? <Spinner/> : "Ask"}
                </Button>
            </form>
        </div>
    );
}

