import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Bot, User, Sparkles, RefreshCw, FileText, Check } from 'lucide-react';
import { answerResumeQuestion } from '../services/resumeBot';

interface Message {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  sourceSection?: string;
  suggestedFollowUps?: string[];
  timestamp: string;
}

interface ResumeChatbotModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const QUICK_QUESTIONS = [
  'What is her educational background?',
  'What are her technical skills?',
  'What is her career objective?',
  'What were her scores in 12th HSC and 10th CBSE?',
  'Does she have prior internship experience?',
  'What languages does she speak?',
  'How can I contact Nirjara?'
];

export const ResumeChatbotModal: React.FC<ResumeChatbotModalProps> = ({
  isOpen,
  onClose
}) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'bot',
      text: "Hello! I am Nirjara's verified resume assistant. I answer questions exclusively using the information from her official resume — no invented claims or hallucinations.\n\nAsk me anything about her PGDM program at IMDR Pune, Commerce background, 87% HSC distinction, technical skills, or contact info.",
      sourceSection: 'Verified Resume Dossier',
      suggestedFollowUps: [
        'What is her educational background?',
        'What are her technical skills?',
        'What is her career objective?'
      ],
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = (textToSend?: string) => {
    const query = (textToSend || inputText).trim();
    if (!query) return;

    const userMessageId = `user-${Date.now()}`;
    const botMessageId = `bot-${Date.now() + 1}`;
    const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const newMessages: Message[] = [
      ...messages,
      {
        id: userMessageId,
        sender: 'user',
        text: query,
        timestamp: timeStr
      }
    ];

    setMessages(newMessages);
    if (!textToSend) setInputText('');

    // Answer with grounded intelligence
    setTimeout(() => {
      const botResult = answerResumeQuestion(query);
      setMessages((prev) => [
        ...prev,
        {
          id: botMessageId,
          sender: 'bot',
          text: botResult.answer,
          sourceSection: botResult.sourceSection,
          suggestedFollowUps: botResult.suggestedFollowUps,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    }, 250);
  };

  const handleCopyText = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const resetChat = () => {
    setMessages([
      {
        id: 'welcome-reset',
        sender: 'bot',
        text: "Chat reset. How can I assist you with Nirjara Chavan's academic records, skills, or internship candidature?",
        sourceSection: 'Verified Resume Dossier',
        suggestedFollowUps: [
          'What is her educational background?',
          'What are her technical skills?',
          'What is her career objective?'
        ],
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/40 backdrop-blur-xs">
      <div className="bg-[#FBFBF9] border border-[#E5E7DF] rounded-2xl w-full max-w-2xl h-[85vh] max-h-[720px] flex flex-col shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        {/* Modal Top Bar */}
        <div className="px-6 py-4 bg-white border-b border-[#E5E7DF] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#EDF1E8] rounded-lg text-[#4A5D3E]">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-sm text-[#1F2421]">
                  Ask My Resume
                </h3>
                <span className="text-[10px] uppercase font-semibold text-[#4A5D3E] bg-[#EDF1E8] px-2 py-0.5 rounded">
                  Grounded in Resume
                </span>
              </div>
              <p className="text-[11px] text-[#575D56]">
                Answers queries strictly based on Nirjara Chavan's uploaded PDF
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={resetChat}
              className="p-1.5 text-[#575D56] hover:text-[#1F2421] rounded-md transition-colors"
              title="Reset conversation"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-[#575D56] hover:text-[#1F2421] rounded-md transition-colors"
              title="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Chat Message Scroll Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex flex-col ${
                msg.sender === 'user' ? 'items-end' : 'items-start'
              }`}
            >
              <div
                className={`max-w-[85%] rounded-xl p-4 text-xs sm:text-sm leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-[#4A5D3E] text-white rounded-br-none shadow-2xs'
                    : 'bg-white border border-[#E5E7DF] text-[#1F2421] rounded-bl-none shadow-2xs'
                }`}
              >
                <div className="whitespace-pre-wrap">{msg.text}</div>

                {msg.sourceSection && (
                  <div className="mt-3 pt-2 border-t border-[#E5E7DF] flex items-center justify-between text-[11px] text-[#575D56]">
                    <span className="flex items-center gap-1 font-medium text-[#4A5D3E]">
                      <FileText className="w-3 h-3" />
                      <span>{msg.sourceSection}</span>
                    </span>
                    <button
                      onClick={() => handleCopyText(msg.text, msg.id)}
                      className="text-[#575D56] hover:text-[#1F2421] transition-colors"
                      title="Copy response"
                    >
                      {copiedId === msg.id ? (
                        <Check className="w-3 h-3 text-[#4A5D3E]" />
                      ) : (
                        'Copy'
                      )}
                    </button>
                  </div>
                )}
              </div>

              <span className="text-[10px] text-[#575D56] mt-1 px-1">
                {msg.timestamp}
              </span>

              {/* Suggested Follow-Ups */}
              {msg.suggestedFollowUps && msg.suggestedFollowUps.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-1.5 max-w-[85%]">
                  {msg.suggestedFollowUps.map((q, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSend(q)}
                      className="text-[11px] text-[#4A5D3E] bg-[#EDF1E8] hover:bg-[#dfe6d9] px-2.5 py-1 rounded-md transition-colors text-left"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Suggestion Chips */}
        <div className="px-6 py-2.5 bg-white/70 border-t border-[#E5E7DF] overflow-x-auto flex items-center gap-2 text-xs no-scrollbar">
          <span className="text-[11px] font-medium text-[#575D56] shrink-0">
            Suggested:
          </span>
          {QUICK_QUESTIONS.slice(0, 4).map((q, i) => (
            <button
              key={i}
              onClick={() => handleSend(q)}
              className="text-[11px] text-[#1F2421] bg-[#F4F4F0] hover:bg-[#EDF1E8] hover:text-[#4A5D3E] px-2.5 py-1 rounded-md border border-[#E5E7DF] whitespace-nowrap shrink-0 transition-colors"
            >
              {q}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="p-4 bg-white border-t border-[#E5E7DF] flex items-center gap-3"
        >
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Ask about education, marks, skills, contact..."
            className="flex-1 px-4 py-2.5 text-xs sm:text-sm bg-[#FBFBF9] border border-[#E5E7DF] rounded-lg text-[#1F2421] focus:outline-none focus:border-[#4A5D3E]"
          />
          <button
            type="submit"
            disabled={!inputText.trim()}
            className="p-2.5 bg-[#4A5D3E] hover:bg-[#38462F] disabled:opacity-40 disabled:hover:bg-[#4A5D3E] text-white rounded-lg transition-colors shrink-0"
            title="Send inquiry"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};
