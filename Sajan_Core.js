import Chatbot from "https://cdn.jsdelivr.net/gh/Capson/widget@v116/dist/web.js"
    Chatbot.init({
        chatflowid: "1b7ad6e5-8361-4020-86a8-a2e9cbe4a7df",
        apiHost: "https://codecloozo-production.up.railway.app",
        chatflowConfig: {
          predefinedQuestions: [],
          qdrantCollection:””
        },
 theme: {
            button: {
                backgroundColor: "#1A1A1A",
                right: 20,
                bottom: 20,
                size: "medium",
                iconColor: "white",
                customIconSrc: "https://img.icons8.com/glyph-neue/64/FFFFFF/chat.png",
            }
              
}
    })