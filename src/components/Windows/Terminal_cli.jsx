import React from "react";
import MacWindows from "./MacWindows";
import TerminalLib from "react-console-emulator";
import "./cli.scss";

const Terminal = TerminalLib.default || TerminalLib;

const Terminal_cli = () => {

  const commands = {
    help: {
      description: "Show commands",
      fn: () =>
        `
🟢 AVAILABLE COMMANDS

🔵 about     → About me
🟡 skills    → My skills
🟣 projects  → My projects
🔴 contact   → Contact info
🟢 echo      → Print text
⚪ clear     → Clear terminal
      `,
    },

    about: {
      description: "About me",
      fn: () =>
        `
🔵 ABOUT ME

👋 Hi, I'm Prashasti
💻 Frontend Developer (React)
🎨 I love UI/UX and clean design
      `,
    },

    skills: {
      description: "Skills",
      fn: () =>
        `
🟡 SKILLS

⚡ React
⚡ JavaScript
⚡ HTML / CSS / SCSS
⚡ Responsive UI
      `,
    },

    projects: {
      description: "Projects",
      fn: () =>
        `
🟣 PROJECTS

🚀 Mac OS UI Clone
🚀 React Terminal App
🚀 Food Ordering Website
      `,
    },

    contact: {
      description: "Contact",
      fn: () =>
        `
🔴 CONTACT

📧 prashastijaiswal@example.com
🔗 github.com/prashastijaiswal
      `,
    },

    echo: {
      description: "Echo text",
      fn: (...args) =>
        args.length
          ? `🟢 ${args.join(" ")}`
          : "⚠️ Usage: echo <text>",
    },
     resume: {
      description: "Resume details",
      fn: () =>
        "You can view/download my resume from the portfolio 📄",
    },
     date: {
      description: "Show current date",
      fn: () => new Date().toString(),
    },


    clear: {
      description: "Clear terminal",
      fn: () => "",
    },
  };

return (
  <MacWindows>
    <div className="cli-window">
      <div className="terminal-wrapper">
        <Terminal
          commands={commands}
          noDefaults
          welcomeMessage={`👋 Welcome to Prashasti's Portfolio Terminal

Type "help" to explore commands 🚀`}
          promptLabel="prashastijaiswal:~$"
          promptLabelStyle={{
            color: "#00ff88",
            fontWeight: "bold",
            textShadow: "0 0 8px #00ff88",
          }}
        />
      </div>
    </div>
  </MacWindows>
);
};

export default Terminal_cli;