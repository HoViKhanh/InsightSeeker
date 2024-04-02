import Balancer from "react-wrap-balancer";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {Message} from "ai/react"
import ReactMarkdown from "react-markdown";
import React from "react";
import { formattedSourceText } from "@/lib/utils";


// Method to wrap the text in a span in order to pass to react components
const wrappedText = (text: string) =>
  text.split("\n").map((line, i) => (
    <span key={i}>
      {line}
      <br />
    </span>
  ));

// Extend the message type from ai/react lib
interface ChatBubbleProps extends Partial<Message> {
    sources: string[];
}

//
export function ChatBubble({
    role="assistant",
    content,
    sources,
}: ChatBubbleProps) {
    if(!content){
        return null;
    }

    const wrappedMessage = wrappedText(content);


    // Chat bubble components (using card from shadcn)

    return (
        <div>
            <Card className="mb-2 dark:border-slate-800">
                <CardHeader>
                    <CardTitle
                        className={
                            role != "assistant"
                            ? "text-amber-500 dark:text-amber-200"
                            : "text-blue-500 dark:text-blue-200"
                        }
                    >
                        {role == "assistant" ? "AI" : "You"}
                    </CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                    <Balancer>{wrappedMessage}</Balancer>
                </CardContent>
                <CardFooter>
                <CardDescription className="w-full">
                        {sources ? (
                        <Accordion type="single" collapsible className="w-full">
                            {sources.map((source, index) => (
                            <AccordionItem value={`source-${index}`} key={index} className="border-b-2 dark:border-slate-800">
                                <AccordionTrigger>{`Source ${index + 1}`}</AccordionTrigger>
                                <AccordionContent>
                                <ReactMarkdown>
                                    {formattedSourceText(source)}
                                </ReactMarkdown>
                                </AccordionContent>
                            </AccordionItem>
                            ))}
                        </Accordion>
                        ) : (
                        <></>
                        )}
                    </CardDescription>
                </CardFooter>
            </Card>
        </div>
    );
}


