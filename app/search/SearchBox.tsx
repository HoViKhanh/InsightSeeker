"use client"

import React, { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AiOutlineReload, AiOutlineCopy, AiOutlineUpload, AiOutlineSend } from "react-icons/ai";

import AOS from "aos";
import "aos/dist/aos.css";

interface Message {
  id: number;
  sender: string;
  message: string;
}

const suggestionPhrases = [
  "How many days until christmas?",
  "How to screenshot on windows?",
  "How to delete instagram account?",
  "What time does mcdonald’s stop serving breakfast?",
];

const ChatBox: React.FC = () => {
  useEffect(() => {
    AOS.init({duration: 1200});
    AOS.refresh();
  }, []);

  const [messages, setMessages] = useState<Message[]>([]);
  const [suggestionsOpen, setSuggestionsOpen] = useState<boolean>(true);
  const [darkTheme, setDarkTheme] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');

  const toggleDarkTheme = () => {
    setDarkTheme(prevTheme => !prevTheme);
  };

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  const generateAIResponse = (message: string) => {
    // Create a new AI response object
    const aiResponse: Message = {
      id: messages.length,
      sender: 'AI',
      message: '' // We'll gradually add characters to this message
    };
  
    // Define the AI response text
    const responseText = 'I received your message. How can I assist you?';
  
    // Append the AI response placeholder to the messages array
    setMessages(prevMessages => [...prevMessages, aiResponse]);
  
    // Use a setTimeout to gradually add characters with a delay
    let index = 0;
    const typingEffect = () => {
      if (index < responseText.length) {
        aiResponse.message += responseText[index];
        // Update the last message in the messages array with the updated AI response
        setMessages(prevMessages => {
          const updatedMessages = [...prevMessages];
          updatedMessages[prevMessages.length - 1] = aiResponse;
          return updatedMessages;
        });
        index++;
        setTimeout(typingEffect, 20); // Adjust the delay time as needed
      }
    };
  
    // Start the typing effect
    typingEffect();
  };
  
  
  const handleSendMessage = (message: string) => {
    const newMessage: Message = {
      id: messages.length,
      sender: 'You',
      message: message
    };
  
    // Append the user's message to the messages array
    setMessages(prevMessages => [...prevMessages, newMessage]);
  
    // Generate AI response asynchronously with typing effect
    setTimeout(() => {
      generateAIResponse(message);
    }, 500); // Add a delay before generating AI response
  
    setInputValue('');
    setSuggestionsOpen(true); // Open suggestions after message sent
  };
  const handleRegenerateAIResponse = (id: number) => {
    // Logic to regenerate AI response based on message ID
  };

  const handleCopyAIResponse = (message: string) => {
    // Logic to copy AI response to clipboard
  };

  const handleFileUpload = () => {
    // Logic to handle file upload
  };

  return (
    <div className={`h-screen flex flex-col ${darkTheme ? 'dark' : ''}`}>
      <header className={`bg-white border-b border-gray-200 ${darkTheme ? 'dark:border-gray-700' : ''}`}>
        <div className="container px-4">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center space-x-4">
              <img alt="Insight Seeker Logo" className="h-14 w-14" src="/logo-retouch.png"/>
              <h1 className="text-lg font-bold tracking-tighter"><a href='/'>Insight Seeker</a></h1>
            </div>
            <button className={`text-sm font-semibold rounded-lg border ${darkTheme ? 'border-gray-700' : 'border-gray-200'} px-3 py-2 hover:bg-gray-200 focus:outline-none transition-colors`} onClick={toggleDarkTheme}>
              {darkTheme ? 'Light Theme' : 'Dark Theme'}
            </button>
          </div>
        </div>
      </header>
      <main className={`flex-1 bg-gray-100 grid place-items-center py-10 ${darkTheme ? 'dark:bg-gray-900' : ''}`}>
        <div className="container grid gap-6 px-4">
          <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 w-full">
            <div className={`grid gap-4 ${darkTheme ? 'dark:text-white' : ''}`}>
              {messages.map((msg) => (
                <div key={msg.id} className="p-4 text-center">
                  <div className="text-sm font-medium leading-none mb-1.5">{msg.sender}</div>
                  <div className="text-sm leading-snug text-gray-500 dark:text-gray-500">
                    {msg.message}
                  </div>
                  {msg.sender === 'AI' && (
                    <div className="flex justify-center mt-2">
                      <Button className="mr-2" onClick={() => handleRegenerateAIResponse(msg.id)}><AiOutlineReload /></Button>
                      <Button onClick={() => handleCopyAIResponse(msg.message)}><AiOutlineCopy /></Button>
                    </div>
                  )}
                </div>
              ))}
            </div>
            {suggestionsOpen && (
              <div className="p-4">
                <div className="grid gap-4 grid-cols-2">
                  {suggestionPhrases.map((phrase, index) => (
                    <button key={index} className={`bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700 ${darkTheme ? 'text-white' : 'text-gray-800'}`} onClick={() => handleSendMessage(phrase)}>
                      <div className="text-sm font-medium leading-none mb-1.5">Suggestion {index + 1}</div>
                      <div className="text-sm leading-snug">{phrase}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}
            <div className="p-4">
              <div className="border-t border-gray-200 dark:border-gray-700">
                <div className="flex gap-4 items-end mt-4">
                  <div className="w-full flex items-center">
                    <label htmlFor="file-upload" className={`rounded-full p-2 cursor-pointer ${darkTheme ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors mr-2`}><AiOutlineUpload /></label>
                    <input id="file-upload" type="file" className="hidden" onChange={handleFileUpload} />
                    <Input id="message" placeholder="Type your message..." value={inputValue} onChange={(e) => handleInputChange(e.target.value)} className={`${darkTheme ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}/>
                  </div>
                  <Button className={`h-10 ${inputValue ? '' : 'pointer-events-none opacity-50'}  ${darkTheme ? 'bg-gray-800 text-white' : 'bg-white text-black'}`} onClick={() => handleSendMessage(inputValue)} disabled={!inputValue}><AiOutlineSend/></Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ChatBox;
