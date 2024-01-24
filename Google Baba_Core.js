import Chatbot from "https://cdn.jsdelivr.net/gh/Capson/widget@v116/dist/web.js"
    Chatbot.init({
        chatflowid: "efde6ef2-c3fe-45ef-b406-ddebea1b9a09",
        apiHost: "https://codecloozo-production.up.railway.app",
        chatflowConfig: {
          predefinedQuestions: []
        },
 theme: {
            button: {
                backgroundColor: “#1A1A1A”,
                right: 20,
                bottom: 20,
                size: "medium",
                iconColor: "white",
                customIconSrc: "https://img.icons8.com/glyph-neue/64/FFFFFF/chat.png",
            },
 chatWindow: {
                welcomeMessage: "Hello! How can I assist you”?,
                backgroundColor: "#ffffff",
                height: 700,
                width: 400,
                fontSize: 16,
                poweredByTextColor: "#303235",
                botMessage: {
                    backgroundColor: "#f7f8ff",
                    textColor: "#303235",
                    showAvatar: true,
                    avatarSrc: "https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/parroticon.png",
                },
                userMessage: {
                    backgroundColor: "#3B81F6",
                    textColor: "#ffffff",
                    showAvatar: true,
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