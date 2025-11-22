import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Loader2 } from 'lucide-react';
import { sendMessageStream } from '../services/openaiService';

interface Message {
  role: 'user' | 'model';
  text: string;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Hi! I'm Hassan's AI Assistant. Ask me anything about his skills, experience, or projects." }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setLoading(true);

    // Placeholder for streaming content
    setMessages(prev => [...prev, { role: 'model', text: '' }]);
    const messageIndex = messages.length + 1; // Index of the new model message

    try {
      const stream = sendMessageStream(userMessage);
      let fullText = '';
      
      for await (const chunk of stream) {
        fullText += chunk;
        setMessages(prev => {
          const newMessages = [...prev];
          // Update the last message (which is the model's placeholder)
          newMessages[newMessages.length - 1] = { role: 'model', text: fullText };
          return newMessages;
        });
      }
    } catch (error) {
      console.error("Chat error", error);
      setMessages(prev => {
          const newMessages = [...prev];
          newMessages[newMessages.length - 1] = { role: 'model', text: "Sorry, I couldn't connect to the AI brain right now." };
          return newMessages;
        });
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center justify-center w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-2xl transition-transform hover:scale-110 animate-bounce-slow"
          aria-label="Open Chat"
        >
          <MessageCircle size={28} />
        </button>
      )}

      {isOpen && (
        <div className="flex flex-col w-[90vw] sm:w-[400px] h-[500px] bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden animate-fade-in-up">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-slate-800 border-b border-slate-700">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="font-semibold text-white">AI Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-900">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex items-start space-x-2 ${msg.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'model' ? 'bg-blue-600' : 'bg-slate-700'}`}>
                  {msg.role === 'model' ? <Bot size={16} className="text-white" /> : <User size={16} className="text-white" />}
                </div>
                <div className={`px-4 py-2 rounded-2xl text-sm max-w-[80%] ${msg.role === 'model' ? 'bg-slate-800 text-slate-200 rounded-tl-none border border-slate-700' : 'bg-blue-600 text-white rounded-tr-none'}`}>
                  {msg.text}
                  {loading && idx === messages.length - 1 && msg.text.length === 0 && (
                     <Loader2 className="w-4 h-4 animate-spin" />
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-slate-800 border-t border-slate-700">
            <div className="flex items-center space-x-2 bg-slate-900 rounded-full border border-slate-700 px-4 py-2 focus-within:border-blue-500 transition-colors">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about my projects..."
                className="flex-1 bg-transparent text-white placeholder-slate-500 focus:outline-none text-sm"
              />
              <button
                onClick={handleSend}
                disabled={loading || !input.trim()}
                className="text-blue-500 hover:text-blue-400 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
