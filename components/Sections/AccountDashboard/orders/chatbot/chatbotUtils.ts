import { chatbotReplies } from "./chatbotData";

export const getBotReply = (
  message: string
): string => {
  const userMessage =
    message.toLowerCase().trim();

  const matchedReply = chatbotReplies.find(
    (item) =>
      item.keywords.some((keyword) =>
        userMessage.includes(
          keyword.toLowerCase()
        )
      )
  );

  if (matchedReply) {
    return matchedReply.reply;
  }

  return (
    "Thank you for contacting Velarro Support. Our support team will get back to you shortly. Is there anything else I can help you with?"
  );
};