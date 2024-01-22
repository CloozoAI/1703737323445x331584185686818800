import Chatbot from "https://cdn.jsdelivr.net/gh/Capson/widget@v116/dist/web.js"
    Chatbot.init({
        chatflowid: "1b7ad6e5-8361-4020-86a8-a2e9cbe4a7df",
        apiHost: "https://codecloozo-production.up.railway.app",
        chatflowConfig: {
          predefinedQuestions: [],
          qdrantCollection:"Balakk"
        },
 theme: {
            button: {
                backgroundColor: "#1a1a1a",
                right: 20,
                bottom: 20,
                size: "medium",
                iconColor: "white",
                customIconSrc: "https://img.icons8.com/glyph-neue/64/FFFFFF/chat.png",
            },
 chatWindow: {
                welcomeMessage: "Hello! How can I assist you?",
                backgroundColor: "#ffffff",
                height: 700,
                width: 400,
                fontSize: 16,
                poweredByTextColor: "#303235",
                botMessage: {
                    backgroundColor: "#f7f8ff",
                    textColor: "#303235",
                    showAvatar: false,
                    avatarSrc: "https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/parroticon.png",
                },
                userMessage: {
                    backgroundColor: "#3B81F6",
                    textColor: "#ffffff",
                    showAvatar: false,
                    avatarSrc: "https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/usericon.png",
                },
                textInput: {
                    placeholder: "Type your question",
                    backgroundColor: "#ffffff",
                    textColor: "#303235",
                    sendButtonColor: "#3B81F6",
                }
            }
        }
    })