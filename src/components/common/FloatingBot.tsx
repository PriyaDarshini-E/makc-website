import { useState, useEffect, useRef } from "react";
import { Bot, X, Sparkles, Send, RotateCcw } from "lucide-react";
import { API_BASE_URL } from "@/config/constants";

const BOT_QUOTES = [
  "Hey there! Looking to make your home smarter? 🏠✨",
  "Automate your lights and save up to 15% on electricity bills! 💡🔋",
  "Security you can control from anywhere. MAKc has you covered! 🛡️📱",
  "Struggling with weak Wi-Fi? Our smart networking solutions fix dead zones! 🌐⚡",
  "Create the perfect movie night vibe with smart ambient lighting! 🎬🍿",
  "Control curtains, gates, lights, and AC all from one single tap! 📱🛋️",
  "Worried about leaks or fires? Smart sensors alert you instantly! 🚨🔥",
  "Get hands-free control of your home with Alexa or Google Assistant. 🗣️🎙️",
  "Schedule your geyser to turn on before you wake up! ☕🛀",
  "Need a custom automation setup? Reach out to us via Call or WhatsApp! 📞💬",
  "Welcome to MAKc! We turn ordinary homes into futuristic living spaces. 🚀🌌",
  "Did you know? Smart locks let you generate temporary PINs for visitors! 🔑🚪",
  "We design network infrastructures that can handle all your smart devices at once! 📶💪"
];

interface BotAction {
  name: string;
  text: string;
  value: string;
  type: string;
}

interface Message {
  id: string;
  sender: "user" | "bot";
  text?: string;
  actions?: BotAction[];
  timestamp: Date;
  isError?: boolean;
}

export default function FloatingBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState(BOT_QUOTES[0]);
  const [isBubbleVisible, setIsBubbleVisible] = useState(false);
  const [isBouncing, setIsBouncing] = useState(false);
  const [hasBeenDismissed, setHasBeenDismissed] = useState(false);

  // Chat window state
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [initialized, setInitialized] = useState(false);
  const [userId, setUserId] = useState("");
  const userIdRef = useRef("");

  useEffect(() => {
    userIdRef.current = userId;
  }, [userId]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Initialize Session ID
  useEffect(() => {
    let sid = sessionStorage.getItem("MAKc_bot_user_id");
    if (!sid) {
      sid = "user_" + Math.random().toString(36).substring(2, 15) + "_" + Date.now();
      sessionStorage.setItem("MAKc_bot_user_id", sid);
    }
    setUserId(sid);
  }, []);

  // Auto-scroll messages to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 300);
    }
  }, [isOpen]);

  // Focus input when bot finishes typing (isTyping becomes false)
  useEffect(() => {
    if (isOpen && !isTyping) {
      inputRef.current?.focus();
    }
  }, [isTyping, isOpen]);

  // Function to show a new random quote in speech bubble
  const cycleQuote = () => {
    const currentIndex = BOT_QUOTES.indexOf(message);
    let nextIndex = currentIndex;
    while (nextIndex === currentIndex) {
      nextIndex = Math.floor(Math.random() * BOT_QUOTES.length);
    }
    setMessage(BOT_QUOTES[nextIndex]);
  };

  // Bot click handler - Toggles the main chat window
  const handleBotClick = () => {
    setIsBouncing(true);
    setTimeout(() => setIsBouncing(false), 600);

    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
      setIsBubbleVisible(false);
      setHasBeenDismissed(true);

      // Initialize API chat if not done yet
      if (!initialized && userId) {
        initChat(userId);
      }
    }
  };

  // API chat initialization
  const initChat = async (sid: string) => {
    setInitialized(true);
    setIsTyping(true);
    try {
      const res = await fetch(`${API_BASE_URL}/botman`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          driver: "web",
          userId: sid,
          message: "hi",
        }),
      });

      if (!res.ok) throw new Error("HTTP " + res.status);
      const data = await res.json();
      
      if (data && Array.isArray(data.messages)) {
        const newMsgs: Message[] = [];
        for (const m of data.messages) {
          if (m.type === "typing_indicator") continue;
          newMsgs.push({
            id: `bot-${Date.now()}-${Math.random()}`,
            sender: "bot",
            text: m.text,
            actions: m.actions,
            timestamp: new Date(),
          });
        }
        if (newMsgs.length > 0) {
          setMessages([newMsgs[0]]);
          for (let i = 1; i < newMsgs.length; i++) {
            setIsTyping(true);
            await new Promise((resolve) => setTimeout(resolve, 1200));
            if (userIdRef.current !== sid) return;
            setMessages((prev) => [...prev, newMsgs[i]]);
          }
        }
      }
    } catch (error) {
      console.error("Failed to initialize BotMan:", error);
      // Premium offline fallback layout so client never hangs or feels broken
      setMessages([
        {
          id: `bot-fallback-${Date.now()}`,
          sender: "bot",
          text: "Hello! Welcome to MAKc Smart Home Assistant. How can we help you make your living space smarter today?",
          actions: [
            { name: "Home Automation", text: "Home Automation", value: "home_automation", type: "button" },
            { name: "Lighting", text: "Lighting", value: "lighting", type: "button" },
            { name: "Advanced Security", text: "Advanced Security", value: "advanced_security", type: "button" },
            { name: "Networking", text: "Networking", value: "networking", type: "button" },
            { name: "Home Audio", text: "Home Audio", value: "home_audio", type: "button" },
            { name: "Home Electrical", text: "Home Electrical", value: "home_electrical", type: "button" }
          ],
          timestamp: new Date(),
        }
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  // Handle action button selections
  const handleActionClick = async (actionText: string, actionValue: string) => {
    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: actionText,
      timestamp: new Date(),
    };

    // Remove buttons from history to prevent double clicking
    setMessages((prev) => 
      prev.map(m => m.actions ? { ...m, actions: undefined } : m).concat(userMsg)
    );

    setIsTyping(true);
    const activeUserId = userId;
    try {
      const res = await fetch(`${API_BASE_URL}/botman`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          driver: "web",
          userId: userId,
          message: actionValue,
        }),
      });

      if (!res.ok) throw new Error("HTTP " + res.status);
      const data = await res.json();
      
      if (data && Array.isArray(data.messages)) {
        const newMsgs: Message[] = [];
        for (const m of data.messages) {
          if (m.type === "typing_indicator") continue;
          newMsgs.push({
            id: `bot-${Date.now()}-${Math.random()}`,
            sender: "bot",
            text: m.text,
            actions: m.actions,
            timestamp: new Date(),
          });
        }
        if (newMsgs.length > 0) {
          setMessages((prev) => [...prev, newMsgs[0]]);
          for (let i = 1; i < newMsgs.length; i++) {
            setIsTyping(true);
            await new Promise((resolve) => setTimeout(resolve, 1200));
            if (userIdRef.current !== activeUserId) return;
            setMessages((prev) => [...prev, newMsgs[i]]);
          }
        }
      }
    } catch (error) {
      console.error("API error on action selection:", error);
      // Local fallback workflow simulation
      setTimeout(() => {
        simulateOfflineResponse(actionValue);
      }, 1000);
    } finally {
      setIsTyping(false);
    }
  };

  // Offline mock logic for seamless UI experience even if connection drops
  const simulateOfflineResponse = (val: string) => {
    let reply = "Thanks for your input! Since our server is temporarily offline, you can reach out directly to us at +91 9999999999.";
    let actions: BotAction[] = [];

    if (["home_automation", "lighting", "advanced_security", "networking", "home_audio", "home_electrical"].includes(val)) {
      reply = `You selected: ${val.replace("_", " ")}. Please share your requirement or contact details so we can get back to you!`;
      actions = [
        { name: "Contact MAKc", text: "📞 Contact MAKc", value: "contact_MAKc", type: "button" }
      ];
    } else if (val === "contact_MAKc") {
      reply = "Please call us at +91 9999999999 or message us on WhatsApp for a custom quotation.";
    }

    setMessages((prev) => [
      ...prev,
      {
        id: `bot-fallback-${Date.now()}`,
        sender: "bot",
        text: reply,
        actions: actions.length ? actions : undefined,
        timestamp: new Date()
      }
    ]);
  };

  // Send typed message
  const handleSendMessage = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputText.trim() || isTyping) return;

    const text = inputText.trim();
    setInputText("");

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: text,
      timestamp: new Date(),
    };

    setMessages((prev) => prev.map(m => m.actions ? { ...m, actions: undefined } : m).concat(userMsg));
    setIsTyping(true);
    const activeUserId = userId;

    try {
      const res = await fetch(`${API_BASE_URL}/botman`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          driver: "web",
          userId: userId,
          message: text,
        }),
      });

      if (!res.ok) throw new Error("HTTP " + res.status);
      const data = await res.json();
      
      if (data && Array.isArray(data.messages)) {
        const newMsgs: Message[] = [];
        for (const m of data.messages) {
          if (m.type === "typing_indicator") continue;
          newMsgs.push({
            id: `bot-${Date.now()}-${Math.random()}`,
            sender: "bot",
            text: m.text,
            actions: m.actions,
            timestamp: new Date(),
          });
        }
        if (newMsgs.length > 0) {
          setMessages((prev) => [...prev, newMsgs[0]]);
          for (let i = 1; i < newMsgs.length; i++) {
            setIsTyping(true);
            await new Promise((resolve) => setTimeout(resolve, 1200));
            if (userIdRef.current !== activeUserId) return;
            setMessages((prev) => [...prev, newMsgs[i]]);
          }
        }
      }
    } catch (error) {
      console.error("API error sending message:", error);
      setMessages((prev) => [
        ...prev,
        {
          id: `bot-err-${Date.now()}`,
          sender: "bot",
          text: "I'm having trouble connecting to the server. You can contact us directly or try again later.",
          timestamp: new Date(),
          isError: true,
        }
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  // Reset conversation session
  const handleReset = () => {
    const newId = "user_" + Math.random().toString(36).substring(2, 15) + "_" + Date.now();
    sessionStorage.setItem("MAKc_bot_user_id", newId);
    setUserId(newId);
    setMessages([]);
    setInputText("");
    setInitialized(false);
    
    // Automatically trigger initial fetch on the new session
    setTimeout(() => {
      initChat(newId);
    }, 100);
  };

  // Dismiss speech bubble
  const handleDismiss = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsBubbleVisible(false);
    setHasBeenDismissed(true);
  };

  // Cycle bubble every 20 seconds when closed
  useEffect(() => {
    if (isOpen) return;

    // Show initial message after 3 seconds
    const initialTimer = setTimeout(() => {
      if (!hasBeenDismissed && !isOpen) {
        setIsBubbleVisible(true);
      }
    }, 3000);

    // Set interval to periodically change quote
    const intervalTimer = setInterval(() => {
      if (!hasBeenDismissed && !isOpen) {
        cycleQuote();
        setIsBubbleVisible(true);
      }
    }, 20000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(intervalTimer);
    };
  }, [message, hasBeenDismissed, isOpen]);

  return (
    <div className="relative flex flex-col items-end">
      {/* 1. Speech Bubble Dialog (Only visible when chat is closed) */}
      {!isOpen && (
        <div
          className={`absolute bottom-0 right-full mr-4 w-64 sm:w-72 bg-bg-surface backdrop-blur-md border border-border-main text-text-main p-4 rounded-2xl shadow-xl shadow-black/10 dark:shadow-black/40 transition-all duration-300 origin-bottom-right ${
            isBubbleVisible
              ? "scale-100 opacity-100 translate-x-0 pointer-events-auto"
              : "scale-90 opacity-0 translate-x-2 pointer-events-none"
          }`}
        >
          {/* Close Button */}
          <button
            onClick={handleDismiss}
            className="absolute top-2.5 right-2.5 p-1 rounded-full text-text-muted hover:text-text-main hover:bg-bg-main transition-colors"
            aria-label="Dismiss message"
          >
            <X className="h-3.5 w-3.5" />
          </button>

          {/* Bubble content */}
          <div className="flex gap-2.5 pr-4">
            <Sparkles className="h-4 w-4 text-violet-500 shrink-0 mt-0.5 animate-pulse" />
            <p className="text-xs sm:text-sm leading-relaxed font-medium">
              {message}
            </p>
          </div>

          {/* Small arrow pointing right toward bot button */}
          <div className="absolute bottom-4 sm:bottom-5.5 left-full w-3 h-3 bg-bg-surface border-t border-r border-border-main transform rotate-45 -translate-x-1.5" />
        </div>
      )}

      {/* 2. Interactive Chat Window (Opens when trigger clicked) */}
      {isOpen && (
        <div className="absolute bottom-0 right-full mr-4 w-[320px] sm:w-[380px] h-[480px] sm:h-[520px] bg-bg-surface border border-border-main rounded-2xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300 origin-bottom-right animate-in fade-in slide-in-from-right-4 zoom-in-95 duration-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#0a84ff] to-[#6366f1] p-4 text-white flex items-center justify-between shadow-md">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm border border-white/10 text-white font-bold">
                  <Bot className="h-5.5 w-5.5" />
                </div>
                <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-green-400 border-2 border-white animate-pulse" />
              </div>
              <div>
                <h3 className="font-semibold text-sm leading-none">MAKc Smart Assistant</h3>
                <span className="text-[10px] text-white/80 mt-1 block">Replies instantly</span>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <button
                onClick={handleReset}
                title="Restart Chat"
                className="p-1.5 rounded-lg hover:bg-white/10 text-white/90 hover:text-white transition-colors"
                aria-label="Restart conversation"
              >
                <RotateCcw className="h-4.5 w-4.5" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg hover:bg-white/10 text-white/90 hover:text-white transition-colors"
                aria-label="Close chat"
              >
                <X className="h-4.5 w-4.5" />
              </button>
            </div>
          </div>

          {/* Messages Feed */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 scrollbar-thin scrollbar-thumb-border-main scrollbar-track-transparent">
            {messages.length === 0 && !isTyping ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-4">
                <Bot className="h-10 w-10 text-text-muted mb-2 animate-bounce" />
                <p className="text-xs text-text-muted">Connecting to assistant...</p>
              </div>
            ) : (
              messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-2.5 items-start ${
                    msg.sender === "user" ? "flex-row-reverse" : ""
                  }`}
                >
                  {/* Avatar */}
                  {msg.sender === "bot" && (
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-tr from-[#0a84ff] to-[#6366f1] text-white">
                      <Bot className="h-4 w-4" />
                    </div>
                  )}

                  {/* Message Bubble */}
                  <div className="flex flex-col gap-1.5 max-w-[80%]">
                    <div
                      className={`p-3 rounded-2xl text-xs sm:text-sm leading-relaxed shadow-sm ${
                        msg.sender === "user"
                          ? "bg-gradient-to-tr from-[#0a84ff] to-[#6366f1] text-white rounded-tr-sm"
                          : msg.isError
                          ? "bg-red-500/10 border border-red-500/20 text-red-500 rounded-tl-sm"
                          : "bg-bg-main border border-border-main text-text-main rounded-tl-sm"
                      }`}
                    >
                      {msg.text}
                    </div>

                    {/* Action buttons */}
                    {msg.actions && msg.actions.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-1">
                        {msg.actions.map((act) => (
                          <button
                            key={act.value}
                            onClick={() => handleActionClick(act.text, act.value)}
                            className="bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-500 dark:text-indigo-400 border border-indigo-500/20 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 hover:scale-105 active:scale-95"
                          >
                            {act.text}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))
            )}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex gap-2.5 items-start">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-tr from-[#0a84ff] to-[#6366f1] text-white">
                  <Bot className="h-4 w-4" />
                </div>
                <div className="bg-bg-main border border-border-main p-3.5 rounded-2xl rounded-tl-sm shadow-sm flex items-center justify-center">
                  <div className="flex gap-1 items-center py-0.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#0a84ff] animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="h-1.5 w-1.5 rounded-full bg-[#0a84ff] animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="h-1.5 w-1.5 rounded-full bg-[#0a84ff] animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Footer Input Form */}
          <form
            onSubmit={handleSendMessage}
            className="p-3 bg-bg-surface border-t border-border-main flex gap-2 items-center"
          >
            <input
              ref={inputRef}
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              disabled={isTyping}
              placeholder={isTyping ? "Assistant is typing..." : "Type your message..."}
              className="flex-1 bg-bg-main text-text-main text-xs sm:text-sm border border-border-main rounded-xl px-3 py-2 focus:outline-none focus:ring-1.5 focus:ring-[#0a84ff] focus:border-transparent disabled:opacity-60 transition-all"
            />
            <button
              type="submit"
              disabled={!inputText.trim() || isTyping}
              className="h-8.5 w-8.5 flex items-center justify-center rounded-xl bg-gradient-to-tr from-[#0a84ff] to-[#6366f1] text-white shadow-md shadow-indigo-500/10 hover:shadow-indigo-500/20 active:scale-95 disabled:opacity-50 disabled:pointer-events-none transition-all"
              aria-label="Send message"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}

      <button
        onClick={handleBotClick}
        className={`group relative flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-gradient-to-tr from-[#0a84ff] to-[#6366f1] !text-white shadow-lg shadow-indigo-500/20 transition-all duration-300 hover:scale-110 hover:shadow-indigo-500/40 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-[#061121] ${
          isOpen ? "" : isBouncing ? "animate-[bounce_0.6s_ease-in-out_infinite]" : "animate-float"
        }`}
        aria-label="Ask Bot"
      >
        {/* Glow circle background */}
        <span className="absolute inset-0 -z-10 rounded-full bg-indigo-500/30 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Tooltip */}
        <span className="absolute right-14 sm:right-16 scale-0 group-hover:scale-100 bg-bg-surface text-text-main text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap shadow-md transition-all duration-200 origin-right border border-border-main pointer-events-none">
          {isOpen ? "Close Assistant" : "Ask Bot"}
        </span>

        {/* Bot Icon */}
        {isOpen ? (
          <X className="h-6 w-6 transition-transform duration-300" />
        ) : (
          <Bot className="h-6 w-6 transition-transform duration-300 group-hover:rotate-12" />
        )}
      </button>
    </div>
  );
}
