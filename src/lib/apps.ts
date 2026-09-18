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
  {
    slug: "drawpad",
    name: "DrawPad",
    tagline: "Draw straight on the screen — over any app, or on a canvas of your own",
    emoji: "🖌️",
    gradient: "from-rose-400 to-orange-500",
    summary:
      "A drawing canvas with text, pictures and pinch-zoom, plus a screen overlay that floats your marks on top of whatever is running — so you can circle, label and annotate anything on the phone.",
    longDescription:
      "DrawPad has two halves. Inside the app is a proper canvas: twelve colours, brush sizes from 1 to 80, typed text and pictures from your gallery that you can drag and pinch into place, an eraser that shows exactly what it will wipe, undo and redo, pinch to zoom and drag to pan, and Save to write a PNG into your gallery. Strokes are kept as vectors rather than pixels, so zooming in shows real detail instead of a magnified blur. The second half is the screen overlay: tap Screen and a transparent canvas covers the whole phone, so you can draw over WhatsApp, a video, a map or the home screen. A small bubble floats on top — tap it for the tools, drag it anywhere. Draw mode takes your touches; Pass mode lets every tap through to the app underneath while the marks stay floating above it.",
    version: "1.0",
    size: "6.4 MB",
    minAndroid: "Android 7 (API 24)",
    pkg: "com.sufyan.drawpad",
    apk: "/apps/drawpad.apk",
    free: true,
    offline: true,
    features: [
      "Draw on top of any app — the marks float over whatever is on screen",
      "Draw / Pass switch: keep using the phone normally with the drawing still showing",
      "Floating bubble you can drag anywhere; tap it to open or hide the tools",
      "Add text and pictures from the gallery, then drag to move and pinch to resize them",
      "Eraser with a ring showing exactly what it will wipe — it rubs out lines, words and photos alike",
      "Pinch to zoom and drag to pan — strokes stay sharp because they are vectors, not pixels",
      "12 colours, brush size 1–80, undo and redo",
      "Volume keys double as shortcuts while the overlay is up",
      "Save the drawing to Pictures/DrawPad as a PNG",
      "Optionally draw above the status bar and the pull-down notification shade",
      "Completely offline — no account, no internet, no ads",
    ],
    requirements: [
      "Android 7 or newer",
      "\"Display over other apps\" permission, for drawing on the screen",
      "Optional: DrawPad turned on in Accessibility, only if you want to draw over the notification shade too",
    ],
    install: [
      "Download the APK and open it on the phone.",
      "If Android warns \"unknown source\", allow this app to install.",
      "Open DrawPad — the canvas is ready straight away.",
    ],
    guide: [
      {
        title: "Draw in the app",
        detail:
          "Draw with one finger. Pick a colour from the row at the bottom and set the thickness with the Size slider. Two fingers pinch to zoom and drag to move around; Fit brings the whole drawing on screen and 1:1 goes back to normal. Save writes a PNG into Pictures/DrawPad.",
      },
      {
        title: "Draw on the screen itself",
        detail:
          "Tap Screen at the top. Android asks for the \"Display over other apps\" permission the first time — allow it for DrawPad. The app steps aside and a transparent canvas covers the phone, so you can draw over anything.",
      },
      {
        title: "The floating bubble",
        detail:
          "Tap the bubble to open the tool panel and tap it again to put it away; drag it to park it anywhere. The panel holds Draw/Pass, the colour, the brush size, B100 for how strong the bubble's border is, Erase, Undo, Clear and ✕ to stop.",
      },
      {
        title: "Use the phone while the drawing stays",
        detail:
          "Tap Pass. The marks stay floating on the screen but every tap goes through to the app underneath, so you can scroll, type and switch apps normally. Tap Draw to go back to drawing.",
      },
      {
        title: "Add words and pictures",
        detail:
          "Tap Text to type a word — it lands in the middle ready to be positioned. Tap Img to pick a photo from the gallery. Either one can be dragged to move and pinched to resize while Move is on; tap Brush when you are done. The eraser works on them just like it does on a line: only the part under your finger goes.",
      },
      {
        title: "Volume-key shortcuts",
        detail:
          "While the overlay is running, volume up switches between Draw and Pass and volume down opens or closes the tool panel, so you do not have to reach for the bubble. The keys go back to changing the volume as soon as the overlay is stopped. This needs DrawPad turned on in Accessibility.",
      },
      {
        title: "Draw over the notification shade",
        detail:
          "Android places app overlays underneath the status bar and the pull-down shade, so marks disappear when the shade opens. To have them on top of those as well, turn DrawPad on in Settings → Accessibility, then stop and start the overlay once.",
      },
    ],
    safety: [
      "Everything stays on the phone — nothing is uploaded and there is no account.",
      "The Accessibility option reads nothing: it does not inspect the screen or your content, it only lets the canvas sit above the status bar.",
      "In Draw mode your touches go to DrawPad, so tap Pass or ✕ whenever you want the phone back.",
    ],
    tech: ["Kotlin", "Canvas", "WindowManager overlay", "Accessibility Service", "MediaStore"],
  },
  {
    slug: "qr-studio",
    name: "QR Studio",
    tagline: "Make a QR code that actually looks good — and is checked before you save it",
    emoji: "🔳",
    gradient: "from-emerald-400 to-green-600",
    summary:
      "Turn a link, a Wi-Fi password, a phone number or a contact card into a QR code you would happily print. Colours, gradients, dot shapes, a logo in the middle and a SCAN ME frame — with every code test-scanned inside the app before you save it.",
    longDescription:
      "Most QR apps give you a black square; the pretty ones give you a code that quietly stops scanning. QR Studio does both halves. Pick what goes inside — text, a number, a link, a call, an SMS, a WhatsApp message, an e-mail, a Wi-Fi network, a contact card or a map location — and the app writes it in the exact format scanners understand, so tapping the code offers to join the network or save the contact instead of showing raw text. Then style it: eight one-tap looks, any foreground and background colour, solid, linear or radial fill, four dot shapes, four corner-eye shapes, a separate eye colour, a logo dropped in the middle and a poster frame with your own caption. After every change the app decodes its own image with the same library a scanner uses and shows SCAN TESTED or a plain warning about contrast, dim light or a logo that has grown too big. Save a PNG to the gallery, export a vector SVG for print, or share it straight to any app. It works with no internet, no account and no ads, and the whole interface speaks English, Urdu or Roman Urdu.",
    version: "1.0",
    size: "4.9 MB",
    minAndroid: "Android 7 (API 24)",
    pkg: "com.sufyan.qr",
    apk: "/apps/qr-studio.apk",
    free: true,
    offline: true,
    features: [
      "Ten content types — text, number, link, call, SMS, WhatsApp, e-mail, Wi-Fi, contact, location",
      "Eight finished looks, one tap each",
      "Any colour, with solid, gradient or radial fill",
      "Four dot shapes and four corner-eye shapes, with a separate eye colour",
      "Your logo in the middle, and a SCAN ME poster frame with your own words",
      "Every code test-scanned in the app before you save — with a warning when it would fail",
      "PNG to the gallery, SVG for print, or share straight to any app",
      "English, اردو and Roman Urdu, switchable at any time",
      "Fully offline — no internet permission, no account, no ads",
    ],
    requirements: [
      "Android 7 or newer",
      "No internet connection needed at any point",
      "About 5 MB of space",
    ],
    install: [
      "Download the APK and open it on the phone.",
      'If Android warns about an "unknown source", allow this app to install.',
      "Open QR Studio and pick your language on the first screen.",
    ],
    guide: [
      {
        title: "Choose what goes in the code",
        detail:
          "The row under the preview picks the kind of code: Text, Number, Link, Call, SMS, WhatsApp, E-mail, Wi-Fi, Contact or Location. Each one asks for the right fields — Wi-Fi asks for the network name and password, Contact asks for name, phone, e-mail and company. The code redraws as you type.",
      },
      {
        title: "Give it a look",
        detail:
          "LOOK holds eight ready combinations — Classic, Midnight, Sunset, Ocean, Mint, Poster, Royal and Print. One tap sets the colours, the shapes and the strength together, and every one of them has been checked to still scan.",
      },
      {
        title: "Tune the colours and shapes",
        detail:
          "COLOUR sets the code colour, the background, and whether the fill is solid, a gradient or radial with a second colour. SHAPE sets the corner eyes, the eye colour, the dot shape and the error-correction strength — a higher letter survives more damage but holds less text.",
      },
      {
        title: "Add a logo or a poster frame",
        detail:
          "BRAND puts a picture from your gallery in the middle of the code and adds a frame under it with your own caption, such as SCAN ME. If the logo grows big enough to break the code, the badge at the top turns into a warning before you save it.",
      },
      {
        title: "Save, export or share",
        detail:
          "SAVE writes a PNG into Pictures/QR Studio in your gallery. SVG writes a vector into Downloads, which is what a printer wants for a banner or a poster. SHARE sends the image straight to WhatsApp, e-mail or anywhere else without saving it first.",
      },
      {
        title: "Switch the language",
        detail:
          "The pill next to the title opens the language picker again. Urdu is written in its own script and the whole screen flips right to left; Roman Urdu keeps the Latin letters. Nothing you have typed is lost when you switch.",
      },
    ],
    safety: [
      "Everything happens on the phone — the app has no internet permission at all, so nothing you type can leave it.",
      "A Wi-Fi password or a contact card put into a code stays in the image on your phone until you share it yourself.",
      "The SCAN TESTED badge is a real decode of the image the app just drew, not a guess.",
    ],
    tech: ["Kotlin", "ZXing", "Canvas", "MediaStore", "SVG export"],
  },
];

export function getApp(slug: string): PortfolioApp | undefined {
  return apps.find((a) => a.slug === slug);
}
