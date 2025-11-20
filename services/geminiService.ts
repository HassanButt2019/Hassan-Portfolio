import { GoogleGenAI, Chat } from "@google/genai";
import { SYSTEM_INSTRUCTION } from '../constants';

let chatSession: Chat | null = null;

export const initializeChat = async () => {
  if (!process.env.API_KEY) {
    console.warn("API_KEY not found in environment variables. Chat features will be disabled or mocked.");
    return null;
  }

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });
    return chatSession;
  } catch (error) {
    console.error("Failed to initialize Gemini chat:", error);
    return null;
  }
};

export const sendMessageStream = async function* (message: string) {
  if (!chatSession) {
    // Attempt to re-initialize if null (lazy load)
    const session = await initializeChat();
    if (!session) {
       // Mock response for demo purposes if no API key
       const mockResponse = "I'm currently running in demo mode because the API Key is missing. Hassan is a great engineer though! Please configure the API_KEY to chat with me for real.";
       const words = mockResponse.split(" ");
       for (const word of words) {
         yield word + " ";
         await new Promise(r => setTimeout(r, 50));
       }
       return;
    }
  }

  if (chatSession) {
    try {
      const result = await chatSession.sendMessageStream({ message });
      for await (const chunk of result) {
        if (chunk.text) {
          yield chunk.text;
        }
      }
    } catch (e) {
      console.error("Error sending message to Gemini:", e);
      yield "Sorry, I encountered an error processing your request. Please try again later.";
    }
  }
};
