"use client";

import Image from "next/image";
import { MessageSquareMore, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { initialBotMessage, quickQuestions } from "./chatbotData";

import { getBotReply } from "./chatbotUtils";

import { ChatMessage } from "./chatbotTypes";

interface ChatModalProps {
  open: boolean;
  onClose: () => void;
}

export default function ChatModal({ open, onClose }: ChatModalProps) {
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      sender: "bot",
      text: initialBotMessage,
    },
  ]);

  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const messageIdRef = useRef(1);

  const getNextMessageId = () => {
    messageIdRef.current += 1;
    return messageIdRef.current;
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, isTyping]);

  const sendMessage = () => {
    if (!message.trim()) return;

    const currentMessage = message;

    const userMessage: ChatMessage = {
      id: getNextMessageId(),
      sender: "user",
      text: currentMessage,
    };

    setMessages((prev) => [...prev, userMessage]);

    setMessage("");

    setIsTyping(true);

    setTimeout(() => {
      const botMessage: ChatMessage = {
        id: getNextMessageId(),
        sender: "bot",
        text: getBotReply(currentMessage),
      };

      setMessages((prev) => [...prev, botMessage]);

      setIsTyping(false);
    }, 1000);
  };
  const handleQuickQuestion = (question: string) => {
    const userMessage: ChatMessage = {
      id: getNextMessageId(),
      sender: "user",
      text: question,
    };

    setMessages((prev) => [...prev, userMessage]);

    setIsTyping(true);

    setTimeout(() => {
      const botMessage: ChatMessage = {
        id: getNextMessageId(),
        sender: "bot",
        text: getBotReply(question),
      };

      setMessages((prev) => [...prev, botMessage]);

      setIsTyping(false);
    }, 1000);
  };

  if (!open) return null;

  return (
<>
  {/* BACKDROP */}
  <div
    className="
      fixed
      inset-0
      bg-black/20
      backdrop-blur-[2px]
      z-50
    "
    onClick={onClose}
  />

  {/* CHAT MODAL */}
  <div
    className="
      fixed
      z-[60]

      bottom-[70px]
      right-5

      w-[95vw]
      max-w-[520px]
      h-[540px]

      bg-white
      rounded-[28px]
      shadow-xl
      p-4
    "
  >
    {/* CLOSE */}
    <div className="absolute right-4 top-4">
      <button
        onClick={onClose}
        className="
          w-8
          h-8
          rounded-full
          flex
          items-center
          justify-center
          hover:bg-neutral-100
        "
      >
        <X size={16} />
      </button>
    </div>

    {/* PRODUCT CARD */}
    <div
      className="
        border
        border-[#E8DED0]
        rounded-md
        p-2
        flex
        gap-3
        mt-6
      "
    >
      <Image
        src="/userDashboard/order.png"
        alt="product"
        width={56}
        height={56}
        className="rounded-md object-cover"
      />

      <div>
        <p
          className="
            text-[12px]
            font-medium
            text-[#8B6A2F]
          "
        >
          Velarro Limited Compendium
        </p>

        <div
          className="
            text-[11px]
            leading-[14px]
            text-[#666]
            mt-1
          "
        >
          <p>Wrapper: Corojo 99 Maduro</p>
          <p>Binder: Criollo 98</p>
          <p>Filler: Criollo + Piloto Cubano</p>
        </div>
      </div>
    </div>

    {/* QUESTION CHIP */}
    <div className="mt-3">
      <span
        className="
          inline-flex
          items-center
          px-4
          h-[34px]
          border
          border-[#D8D1C7]
          rounded-full
          text-[12px]
          text-[#5A5A5A]
        "
      >
        How can we help with this item?
      </span>
    </div>

    {/* CHAT AREA */}
    <div
      className="
        mt-4
        h-[230px]
        overflow-y-auto
        space-y-3
        pr-1
      "
    >
      {messages.map((msg) => (
        <div
          key={msg.id}
          className={`flex ${
            msg.sender === "user"
              ? "justify-end"
              : "justify-start"
          }`}
        >
          <div
            className={`px-4 py-3 text-[12px] leading-[18px] max-w-[260px] ${
              msg.sender === "user"
                ? "bg-[#B89267] text-white rounded-[12px]"
                : "bg-white border border-[#D7D0C7] text-[#444] rounded-[12px]"
            }`}
          >
            {msg.text}
          </div>
        </div>
      ))}

      {isTyping && (
        <div className="flex justify-start">
          <div
            className="
              px-4
              py-3
              text-[12px]
              border
              border-[#D7D0C7]
              rounded-[12px]
              bg-white
              text-[#666]
            "
          >
            Typing...
          </div>
        </div>
      )}

      <div ref={messagesEndRef} />
    </div>

    {/* QUICK QUESTIONS */}
    <div
      className="
        mt-3
        flex
        flex-wrap
        gap-2
      "
    >
      {quickQuestions.map((item) => (
        <button
          key={item.id}
          onClick={() =>
            handleQuickQuestion(item.question)
          }
          className="
            h-[32px]
            px-3
            rounded-full
            border
            border-[#E6E0D8]
            bg-[#FAF8F5]
            text-[#B8AEA2]
            text-[11px]
            hover:bg-[#F4EEE7]
          "
        >
          {item.label}
        </button>
      ))}
    </div>

    {/* INPUT */}
    <div
      className="
        mt-4
        flex
        gap-2
        items-center
      "
    >
      <input
        value={message}
        onChange={(e) =>
          setMessage(e.target.value)
        }
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            sendMessage();
          }
        }}
        placeholder="Type your inquiry"
        className="
          flex-1
          h-[36px]
          px-4
          border
          border-[#CFC7BC]
          rounded-full
          text-[12px]
          outline-none
        "
      />

      <button
        onClick={sendMessage}
        className="
          w-[78px]
          h-[36px]
          rounded-[8px]
          bg-[#A57A4A]
          text-white
          text-[12px]
          font-medium
        "
      >
        Send
      </button>
    </div>
  </div>

  {/* FLOATING CHAT ICON */}
  <button
    className="
      fixed
      bottom-5
      right-5
      z-[70]

      w-[44px]
      h-[44px]

      rounded-full
      bg-[#A57A4A]

      border-[3px]
      border-white

      shadow-lg

      flex
      items-center
      justify-center
    "
  >
    <MessageSquareMore
      size={18}
      className="text-white"
    />
  </button>
</>
  );
}
