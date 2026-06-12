import {
  ChatReply,
  QuickQuestion,
} from "./chatbotTypes";

export const initialBotMessage =
  "Hello 👋 Welcome to Velarro Support. How can we help you today?";

export const quickQuestions: QuickQuestion[] = [
  {
    id: 1,
    label: "Track Order",
    question: "Where is my order?",
  },

  {
    id: 2,
    label: "Cancel Order",
    question: "Can I cancel my order?",
  },

  {
    id: 3,
    label: "Refund Policy",
    question: "How can I get a refund?",
  },

  {
    id: 4,
    label: "Invoice",
    question: "How do I download my invoice?",
  },

  {
    id: 5,
    label: "Delivery Date",
    question: "When will my order be delivered?",
  },
];

export const chatbotReplies: ChatReply[] = [
  {
    keywords: [
      "track",
      "tracking",
      "where",
      "status",
      "shipment",
      "order status",
    ],

    reply:
      "Your shipment is currently in transit and is expected to arrive within the next 24–48 hours.",
  },

  {
    keywords: [
      "cancel",
      "cancelled",
      "cancel order",
    ],

    reply:
      "Unfortunately, your order has already entered processing and can no longer be cancelled.",
  },

  {
    keywords: [
      "refund",
      "return",
      "money back",
    ],

    reply:
      "Refunds are usually processed within 5–7 business days after approval.",
  },

  {
    keywords: [
      "invoice",
      "bill",
      "receipt",
    ],

    reply:
      "You can download your invoice directly from the Order Details page by clicking the 'View Invoice' button.",
  },

  {
    keywords: [
      "delivery",
      "arrive",
      "expected date",
    ],

    reply:
      "Your estimated delivery date is May 8, 2026.",
  },

  {
    keywords: [
      "payment",
      "card",
      "visa",
    ],

    reply:
      "Your order was successfully paid using Visa ending in 1234.",
  },

  {
    keywords: [
      "address",
      "shipping address",
    ],

    reply:
      "Your order will be delivered to 125 Maple St, Springfield, IL 62704.",
  },
];