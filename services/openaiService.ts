import OpenAI from 'openai';
import { SYSTEM_INSTRUCTION } from '../constants';

let openai: OpenAI | null = null;

export const initializeChat = async () => {
  console.log(process.env.OPENAI_API_KEY);
  if (!process.env.OPENAI_API_KEY) {
    console.warn("OPENAI_API_KEY not found in environment variables. Chat features will be disabled or mocked.");
    return null;
  }

  try {
    openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
      dangerouslyAllowBrowser: true // Note: In production, API calls should be made from backend
    });
    return openai;
  } catch (error) {
    console.error("Failed to initialize OpenAI:", error);
    return null;
  }
};

export const sendMessageStream = async function* (message: string) {
  if (!openai) {
    // Attempt to re-initialize if null (lazy load)
    const client = await initializeChat();
    if (!client) {
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

  if (openai) {
    try {
      const stream = await openai.chat.completions.create({
        model: 'gpt-4o-mini', // Using GPT-4o mini for cost efficiency
        messages: [
          {
            role: 'system',
            content: SYSTEM_INSTRUCTION
          },
          {
            role: 'user',
            content: message
          }
        ],
        stream: true,
        max_tokens: 500,
        temperature: 0.7
      });

      for await (const chunk of stream) {
        const content = chunk.choices[0]?.delta?.content;
        if (content) {
          yield content;
        }
      }
    } catch (e) {
      console.error("Error sending message to OpenAI:", e);
      yield "Sorry, I encountered an error processing your request. Please try again later.";
    }
  }
};
