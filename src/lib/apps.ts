// Android apps built by Muhammad Sufyan — showcased on /apps.
//
// To add a NEW app later: just append one object to the `apps` array below and
// drop its .apk into /public/apps/. The listing page and every guide page pick
// it up automatically — no other file needs editing.

export type AppGuideStep = { title: string; detail: string };

export type PortfolioApp = {
  slug: string;
  name: string;
  tagline: string;
  emoji: string;
  /** two tailwind color stops, e.g. "from-sky-400 to-cyan-500" */
  gradient: string;
  summary: string;
  longDescription: string;
  version: string;
  size: string;
  minAndroid: string;
  pkg: string;
  /** path under /public, e.g. "/apps/wifi-drop.apk" */
  apk: string;
  free: boolean;
  offline: boolean;
  /** set when a companion piece is needed on a PC */
  needsPc?: string;
  features: string[];
  requirements: string[];
  install: string[];
  guide: AppGuideStep[];
  safety?: string[];
  tech: string[];
};

export const apps: PortfolioApp[] = [
  {
    slug: "wifi-drop",
    name: "WiFi Drop",
    tagline: "Share files between phones and PC over Wi-Fi — no internet, no account",
    emoji: "📤",
    gradient: "from-emerald-400 to-teal-500",
    summary:
      "Send and receive files between two phones and a PC on the same Wi-Fi. Each phone runs a tiny web server, so the other device just opens its address in a browser and drops files in.",
    longDescription:
      "WiFi Drop turns a phone into a local file-drop point. It runs a small foreground web server on the phone; any other device on the same Wi-Fi — a second phone or a PC — opens that phone's address in a browser and can drag-and-drop files in or pull files out. Nothing goes over the internet, there is no sign-up, and the PC needs nothing installed. Received files are listed inside the app with Open and Share.",
    version: "1.0",
    size: "5.9 MB",
    minAndroid: "Android 7 (API 24)",
    pkg: "com.sufyan.wifidrop",
    apk: "/apps/wifi-drop.apk",
    free: true,
    offline: true,
    features: [
      "Phone ↔ phone ↔ PC file transfer on the same Wi-Fi",
      "Any browser can drop files in — nothing to install on the PC",
      "Send files straight from the app to another device's IP",
      "Received files listed with Open and Share",
      "Fully local — no internet, no account, no cloud",
      "Foreground server with a visible notification",
    ],
    requirements: [
      "Both devices on the same Wi-Fi network",
      "The PC only needs a web browser",
      "To send/receive on a phone, install the app on it",
    ],
    install: [
      "Download the APK and open it on the phone.",
      'If Android warns "unknown source", allow this app to install.',
      "Open WiFi Drop — it shows its own address (e.g. http://192.168.1.5:8080).",
    ],
    guide: [
      {
        title: "PC → Phone",
        detail:
          "On the phone open WiFi Drop and note the address it shows. On the PC open that address in a browser, then drag-and-drop files onto the page — they arrive on the phone.",
      },
      {
        title: "Phone → PC",
        detail:
          "Keep the files on the phone, open the phone's address in the PC browser, and press download next to each file.",
      },
      {
        title: "Phone → Phone",
        detail:
          "Install WiFi Drop on both phones. On the receiver note its address. On the sender tap \"File BHEJEIN\", pick files, enter the receiver's IP, and send.",
      },
    ],
    safety: [
      "Works only on your local Wi-Fi — it is not exposed to the internet.",
      "Tap \"Server band karein\" to stop it whenever you like.",
    ],
    tech: ["Kotlin", "NanoHTTPD", "OkHttp", "Foreground Service"],
  },
  {
    slug: "adb-control-center",
    name: "ADB Control Center",
    tagline: "Control other Android phones from your phone — no PC needed",
    emoji: "📱",
    gradient: "from-sky-400 to-cyan-500",
    summary:
      "Mirror and control other Android phones over Wi-Fi, straight from your phone. Live screen, touch, launch apps, key events, screenshots and file transfer — with a full ADB client built into the app, so no computer is involved.",
    longDescription:
      "ADB Control Center speaks the ADB protocol directly from Android — it generates its own RSA identity, does the CNXN/AUTH handshake with the target phone, and even pushes the scrcpy server to stream live H.264 video. From one phone you can mirror another phone's screen, tap and swipe on it, launch apps like TikTok or WhatsApp, send key events, take screenshots and move files — all over Wi-Fi with no computer in the loop.",
    version: "3.3.4",
    size: "6.4 MB",
    minAndroid: "Android 7 (API 24)",
    pkg: "com.sufyan.adbcenter",
    apk: "/apps/adb-control-center.apk",
    free: true,
    offline: true,
    features: [
      "Live H.264 screen mirroring of another phone (real scrcpy)",
      "Touch, swipe, BACK / HOME / RECENT control",
      "Launch apps remotely — TikTok, WhatsApp, Chrome and more",
      "Key events, type text, screenshots, reboot",
      "Open an app in a separate virtual display",
      "Connect by IP, or turn a USB device into Wi-Fi mode",
      "Full ADB client written in-app — no PC required",
    ],
    requirements: [
      "Both phones on the same Wi-Fi",
      "The target phone has Wireless debugging / ADB over network on",
      "One-time \"Allow debugging\" approval on the target phone",
    ],
    install: [
      "Download the APK and open it on the controlling phone.",
      'Allow install from "unknown source" if prompted.',
    ],
    guide: [
      {
        title: "Prepare the target phone",
        detail:
          "On the phone you want to control, enable Developer options → Wireless debugging (or run adb tcpip 5555 once from a PC). Note its Wi-Fi IP.",
      },
      {
        title: "Add and connect",
        detail:
          "In ADB Control Center tap Connect IP, type the target's IP, and connect. The first time, the target shows an \"Allow USB debugging?\" dialog — tick \"Always allow\" and accept. This is a one-time bind.",
      },
      {
        title: "Mirror and control",
        detail:
          "Once connected, tap Mirror to see the live screen and control it, or use the APPS / KEYS / TOOLS tabs to launch apps, send keys, take screenshots and more.",
      },
    ],
    safety: [
      "The one-time \"Always allow\" is a normal Android security step and is permanent for that device.",
      "Everything runs on your own Wi-Fi — no cloud, no account.",
    ],
    tech: ["Kotlin", "ADB protocol", "scrcpy", "MediaCodec", "RSA"],
  },
  {
    slug: "laptop-control",
    name: "Laptop Control",
    tagline: "Control your Windows laptop from your phone",
    emoji: "🖥️",
    gradient: "from-blue-400 to-indigo-500",
    summary:
      "See your Windows laptop's live screen on your phone and drive it — a real trackpad, keyboard, and plain-language commands like \"open Chrome\" or \"run ipconfig\". A tiny free agent runs on the laptop; the app connects over Wi-Fi.",
    longDescription:
      "Laptop Control pairs an Android app with a small, free Python agent on Windows. The phone shows the laptop's live screen (MJPEG), and you drive it with a proper trackpad, an on-screen keyboard, quick keys, and natural commands routed through a safe action layer. The agent is LAN-only, token-protected, and never exposes an open shell — dangerous commands ask for confirmation. A one-file installer sets the agent up and makes it auto-start.",
    version: "1.0",
    size: "6.9 MB",
    minAndroid: "Android 7 (API 24)",
    pkg: "com.laptopctl.android",
    apk: "/apps/laptop-control.apk",
    free: true,
    offline: true,
    needsPc: "Windows laptop running the free Laptop Agent (one-file installer below).",
    features: [
      "Live laptop screen on the phone",
      "Real touchpad — move, tap, right-click, two-finger scroll, drag",
      "Full keyboard + quick keys (Win, Ctrl+C/V, Alt+Tab…)",
      "Plain commands: \"Chrome kholo\", \"cmd kholo aur ipconfig run karo\"",
      "Fullscreen landscape for a big view",
      "Token auth, LAN-only, Emergency Stop",
    ],
    requirements: [
      "A Windows laptop on the same Wi-Fi",
      "The free Laptop Agent running on it (installer below)",
      "Same shared token on both sides (set once)",
    ],
    install: [
      "On the laptop, run LaptopAgent-Setup.bat — it installs and auto-starts the agent.",
      "Install this APK on the phone.",
      "Open the app → setup → tap \"LAPTOP DHOONDO\" to find the laptop, then connect.",
    ],
    guide: [
      {
        title: "Set up the laptop once",
        detail:
          "Run the one-file installer on the laptop. It installs the agent, writes the shared token, and makes it start automatically whenever the laptop turns on.",
      },
      {
        title: "Connect the phone",
        detail:
          "Open Laptop Control → setup → LAPTOP DHOONDO. It auto-finds the laptop's IP; the token is already set. Press Save.",
      },
      {
        title: "Drive it",
        detail:
          "Use the trackpad and keyboard, or type a command like \"notepad kholo\". Press EMERGENCY STOP any time to freeze all control.",
      },
    ],
    safety: [
      "The agent is LAN-only and never opens an unrestricted shell.",
      "Destructive commands (delete, shutdown…) ask for confirmation first.",
      "On public Wi-Fi, switch the agent off with the desktop \"Agent OFF\" shortcut.",
    ],
    tech: ["Kotlin", "Python", "FastAPI", "MJPEG", "Win32 SendInput"],
  },
  {
    slug: "ai-agent",
    name: "AI Agent",
    tagline: "Let an AI see your phone's screen and operate it for you",
    emoji: "🤖",
    gradient: "from-violet-400 to-fuchsia-500",
    summary:
      "An assistant that can read this phone's screen and tap, type and navigate for you — driven from a free controller on your PC. Built on Android Accessibility, with an observe → plan → act loop and a hard action allow-list.",
    longDescription:
      "AI Agent exposes a safe, watched set of actions on the phone through Android's Accessibility service — tap, swipe, type, open app, read the UI tree, screenshot. A free controller on your PC (with a plain-rules planner by default, or Ollama / Claude / OpenAI / Gemini as optional providers) sends one action at a time, re-reading the screen after each step so it never fires blindly. Everything is token-authenticated and LAN-only, with an Emergency Stop and a full action log on the phone.",
    version: "1.0",
    size: "5.9 MB",
    minAndroid: "Android 7 (API 24), best on Android 11+",
    pkg: "com.aiagent.android",
    apk: "/apps/ai-agent.apk",
    free: true,
    offline: true,
    needsPc: "Free controller (Node.js) on your PC — works with no paid API by default.",
    features: [
      "AI reads the screen and taps / types for you",
      "Observe → plan → one action → verify loop (no blind clicks)",
      "Free by default (rule-based) — Ollama / Claude / OpenAI / Gemini optional",
      "Web dashboard with live screen and command box",
      "Strict action allow-list — no arbitrary shell",
      "Emergency Stop and full action log on the phone",
    ],
    requirements: [
      "The free controller running on a PC on the same Wi-Fi",
      "Accessibility service enabled for the app (one toggle)",
      "Same shared token on both sides",
    ],
    install: [
      "Run the controller on your PC (Node.js) — it prints an address and token.",
      "Install this APK and open it.",
      "Turn on the app's Accessibility service, paste the address and token, connect.",
    ],
    guide: [
      {
        title: "Enable accessibility",
        detail:
          "Open AI Agent → Open accessibility settings → turn on \"AI Agent control\". Without this the agent can neither read nor tap.",
      },
      {
        title: "Connect to the controller",
        detail:
          "Start the controller on your PC, then in the app paste its ws:// address and token and press Connect.",
      },
      {
        title: "Give a command",
        detail:
          "In the PC dashboard type something like \"Open Settings\". The agent looks at the screen, does one step, checks the result, and continues.",
      },
    ],
    safety: [
      "Only a fixed allow-list of actions can run — there is no remote shell.",
      "LAN-only and token-protected; Emergency Stop halts everything.",
      "Every action is listed in the app, so nothing is hidden.",
    ],
    tech: ["Kotlin", "Accessibility Service", "MediaProjection", "WebSocket", "Node.js"],
  },
];

export function getApp(slug: string): PortfolioApp | undefined {
  return apps.find((a) => a.slug === slug);
}
