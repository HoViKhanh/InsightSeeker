import { type ClassValue, clsx } from "clsx"
import { Message } from "ai/react";
import { twMerge } from "tailwind-merge"
import { JSONValue } from "ai";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function formattedSourceText (inputText: string) {
  return inputText
      .replace(/\n+/g, " ") // Replace multiple consecutive new lines with a single space
      .replace(/(\w) - (\w)/g, "$1$2") // Join hyphenated words together
      .replace(/\s+/g, " ") // Replace multiple consecutive spaces with a single space
}

export const initialMessages: Message[] = [
  {
    role: "assistant",
    id: "0",
    content:
    "Hi! I am your paper reading pal. I am happy to help you with your questions about the paper that you've provided"
  },
];

export function scrollToEnd(containerRef: React.RefObject<HTMLElement>){
  if (containerRef.current){
    const lastMessage = containerRef.current.lastElementChild;
    if(lastMessage){
      const scrollOptions: ScrollIntoViewOptions = {
        behavior: "smooth",
        block: "end"
      }
      lastMessage.scrollIntoView(scrollOptions);
    }
  }
}


export const getSources = (data: JSONValue[], role: string, index: number): string[]  => {
  if (role === "assistant" && index >= 2 && (index - 2) % 2 === 0) {
    const sourcesIndex = (index - 2) / 2; 

    if (data[sourcesIndex]) {
      try {
        // Assuming data[sourcesIndex] is already a JSON object
        const sourcesData = data[sourcesIndex] as { sources: string[] };

        if (Array.isArray(sourcesData.sources)) {
          return sourcesData.sources; // Return sourcesData as a string[]
        } else {
          console.error('Invalid or missing "sources" property in the data:', sourcesData);
        }
      } catch (error) {
        console.error('Error accessing sources:', error);
      }
    }
  }
  return [];
};