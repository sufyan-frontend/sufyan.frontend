/**
 * Per-app privacy policies, rendered by src/app/privacy/[slug]/page.tsx.
 * Each entry's slug is its public URL (/privacy/<slug>) and is linked from the
 * app's store listing, so never rename a slug once it has shipped.
 */

export interface PrivacySection {
  title: string;
  content: string[];
}

export interface AppPrivacyPolicy {
  slug: string;
  /** App name as used in headings, e.g. "Game Night". */
  name: string;
  /** What the footer says the policy covers. Defaults to "<name> app". */
  subject?: string;
  /** Month shown under the heading, e.g. "September 2026". */
  updated: string;
  /** Back link. Defaults to the apps index. */
  back?: { href: string; label: string };
  description: string;
  intro: string;
  sections: PrivacySection[];
}

export const privacyPolicies: AppPrivacyPolicy[] = [
  {
    slug: "alif-bay",
    name: "Alif Bay",
    updated: "September 2026",
    description:
      "What the Alif Bay Arabic alphabet app for children does and does not collect. It has no internet access and asks for no permissions, so nothing can leave the tablet.",
    intro:
      "Alif Bay teaches young children the 28 letters of the Arabic alphabet on Fire tablets and Android. It collects nothing, sends nothing and has no account, and it does not ask for a single Android permission. This page sets out exactly what the app can and cannot do.",
    sections: [
      {
        title: "What Alif Bay Collects",
        content: [
          "Nothing. Alif Bay has no accounts, no sign-in, no analytics, no advertising, no crash reporting and no tracking of any kind. It never asks a child or a parent for a name, age, email, photo, voice or location.",
          "The app does not request the INTERNET permission. It has no technical ability to send anything anywhere, and it works with the tablet fully offline.",
        ],
      },
      {
        title: "What Stays On The Tablet",
        content: [
          "To show a child's progress, the app remembers which letters have been opened and how many stars have been earned in the matching game. It also remembers two settings: the colour theme and the voice.",
          "That is the complete list. There are no names, ages, device identifiers or timestamps. The data lives in the app's own private storage, is excluded from Android and Amazon backups and device transfer, and is deleted when the app is uninstalled. The Settings screen also has a button that resets the progress.",
        ],
      },
      {
        title: "Permissions In Full",
        content: [
          "None. The app declares no Android permissions: not internet, storage, camera, microphone, contacts, location or phone. The recordings, pictures and font are bundled inside the app.",
        ],
      },
      {
        title: "Children",
        content: [
          "Alif Bay is made for young children and follows Amazon's Child-Directed App Policy and the US Children's Online Privacy Protection Act (COPPA). Because it collects no personal information at all, there is nothing to disclose, consent to, review or delete.",
          "The app contains no advertising, no in-app purchases, no chat, no web browser and no links out of the app, so a child cannot be sent anywhere or asked to buy anything. Resetting progress is behind a simple parental gate.",
        ],
      },
      {
        title: "Changes",
        content: [
          "If a future version of Alif Bay ever collects anything, this page will be updated before that version is released, and the change will be described plainly here.",
        ],
      },
      {
        title: "Contact",
        content: [
          "For any privacy question about Alif Bay, email sufyantechsolutions@gmail.com with the subject line: Alif Bay Privacy.",
        ],
      },
    ],
  },
  {
    slug: "chompy-fish",
    name: "Chompy Fish",
    updated: "October 2026",
    description:
      "What the Chompy Fish ocean game for children does and does not collect. It has no internet access and asks for no permissions, so nothing can leave the tablet or TV.",
    intro:
      "Chompy Fish is an ocean action game for children on Fire tablets, Fire TV and Android: swim, eat smaller fish, grow and beat the bosses. It collects nothing, sends nothing and has no account, and it does not ask for a single Android permission. This page sets out exactly what the app can and cannot do.",
    sections: [
      {
        title: "What Chompy Fish Collects",
        content: [
          "Nothing. Chompy Fish has no accounts, no sign-in, no analytics, no advertising, no crash reporting and no tracking of any kind. It never asks a child or a parent for a name, age, email, photo, voice or location.",
          "The app does not request the INTERNET permission. It has no technical ability to send anything anywhere, and it plays fully offline.",
        ],
      },
      {
        title: "What Stays On The Device",
        content: [
          "To remember a child's progress, the app keeps a few things in its own private storage: the levels won and the stars earned on each, the pearls collected, which fish friends have been unlocked and which one is chosen, a count of fish eaten, and the settings (music, sound effects, voice and gentle mode).",
          "That is the complete list. There are no names, ages, device identifiers or timestamps. The data is excluded from Android and Amazon backups and device transfer, other apps cannot read it, and it is deleted when the app is uninstalled. The Settings screen also has a Reset button, which asks before it clears anything.",
        ],
      },
      {
        title: "Permissions In Full",
        content: [
          "None. The app declares no Android permissions: not internet, storage, camera, microphone, contacts, location, phone or vibration. Every fish, sea, sound and tune is made by the app itself or bundled inside it.",
        ],
      },
      {
        title: "Payments",
        content: [
          "Chompy Fish is a paid app sold through the Amazon Appstore. Amazon handles the purchase. The app contains no in-app purchases and never sees any payment details. Fish friends are unlocked with pearls found while playing, never with money.",
        ],
      },
      {
        title: "Children",
        content: [
          "Chompy Fish is made for children and follows Amazon's Child-Directed App Policy and the US Children's Online Privacy Protection Act (COPPA). Because it collects no personal information at all, there is nothing to disclose, consent to, review or delete.",
          "The app contains no advertising, no in-app purchases, no chat, no online play, no web browser and no links out of the app, so a child cannot be sent anywhere or asked to buy anything.",
        ],
      },
      {
        title: "Changes",
        content: [
          "If a future version of Chompy Fish ever collects anything, this page will be updated before that version is released, and the change will be described plainly here.",
        ],
      },
      {
        title: "Contact",
        content: [
          "For any privacy question about Chompy Fish, email sufyantechsolutions@gmail.com with the subject line: Chompy Fish Privacy.",
        ],
      },
    ],
  },
  {
    slug: "cubit-3d",
    name: "Cubit 3D",
    updated: "October 2026",
    description:
      "What the Cubit 3D volume and material calculator does and does not collect. It has no internet access and asks for no permissions, so nothing can leave the device unless you share a result yourself.",
    intro:
      "Cubit 3D is a volume and material calculator for Fire tablets and Android: type the sizes of a slab, a post hole, a pile, a trench, some stairs or a tank, see the shape in 3D, and get the volume, weight, bags and cost. It collects nothing, sends nothing and has no account, and it does not ask for a single Android permission. This page sets out exactly what the app can and cannot do.",
    sections: [
      {
        title: "What Cubit 3D Collects",
        content: [
          "Nothing. Cubit 3D has no accounts, no sign-in, no analytics, no advertising, no crash reporting and no tracking of any kind. It never asks for a name, email, photo or location.",
          "The app does not request the INTERNET permission. It has no technical ability to send anything anywhere, and it works fully offline.",
        ],
      },
      {
        title: "What Stays On The Device",
        content: [
          "So that your work is still there next time, the app keeps in its own private storage: the sizes and units you typed for each shape, the liquid levels of the tanks, the quantity, the materials, bag sizes and waste allowance you chose, any prices you entered, and your settings (metric or imperial, currency and language).",
          "If you tap Save, it also keeps that calculation under the name you give it, with its figures, so the saved list can show a project total.",
          "That is the complete list. There are no device identifiers and no location. The data is excluded from Android and Amazon backups and from device-to-device transfer, other apps cannot read it, and it is deleted when the app is uninstalled. You can delete any saved calculation in the app at any time.",
        ],
      },
      {
        title: "Sharing",
        content: [
          "The Share buttons hand a plain-text summary of a calculation (or of your saved list) to Android's own share menu. Nothing is sent unless you tap Share and then choose an app, such as email or a messenger, yourself. What happens to the text after that is up to the app you picked.",
        ],
      },
      {
        title: "Permissions In Full",
        content: [
          "None. The app declares no Android permissions: not internet, storage, camera, microphone, contacts, location or phone. The 3D models are drawn by the app itself, and nothing is ever downloaded.",
        ],
      },
      {
        title: "Payments",
        content: [
          "Cubit 3D is a paid app sold through the Amazon Appstore. Amazon handles the purchase. The app contains no in-app purchases and never sees any payment details.",
        ],
      },
      {
        title: "Children",
        content: [
          "Cubit 3D is a general-audience tool and is not directed at children. Because it collects no personal information at all, there is nothing to disclose, consent to, review or delete.",
        ],
      },
      {
        title: "Changes",
        content: [
          "If a future version of Cubit 3D ever collects anything, this page will be updated before that version is released, and the change will be described plainly here.",
        ],
      },
      {
        title: "Contact",
        content: [
          "For any privacy question about Cubit 3D, email sufyantechsolutions@gmail.com with the subject line: Cubit 3D Privacy.",
        ],
      },
    ],
  },
  {
    slug: "drawpad",
    name: "DrawPad",
    subject: "DrawPad Android app",
    updated: "September 2026",
    back: { href: "/apps/drawpad", label: "Back to DrawPad" },
    description:
      "What the DrawPad Android app does and does not collect. Nothing leaves your phone.",
    intro:
      "DrawPad is an offline drawing app for Android. It collects nothing, sends nothing and has no account. This page sets out exactly what the app can and cannot do, including why it asks for the permissions it asks for.",
    sections: [
      {
        title: "What DrawPad Collects",
        content: [
          "Nothing. DrawPad has no accounts, no sign-in, no analytics, no advertising and no crash reporting. It does not ask for your name, email, phone number or location, and it has no way to send anything anywhere.",
          "The app does not request the INTERNET permission at all, so it cannot transmit data even if it wanted to.",
        ],
      },
      {
        title: "Your Drawings",
        content: [
          "Everything you draw stays in the app's memory on your own phone. Drawings are not uploaded, backed up or shared.",
          "When you tap Save, DrawPad writes a PNG into Pictures/DrawPad in your own gallery. That file belongs to you and DrawPad never reads it back or sends it anywhere.",
        ],
      },
      {
        title: "Photos You Add",
        content: [
          "If you use the Image button, Android's own picker asks you to choose one photo. DrawPad receives only the photo you picked, uses it on the canvas, and nothing else. It cannot browse your gallery and it never copies your photos anywhere.",
        ],
      },
      {
        title: "Display Over Other Apps",
        content: [
          'To draw on the screen, DrawPad needs Android’s "Display over other apps" permission. This permission only lets the app place its own transparent canvas on top of the screen. It does not let DrawPad see, read or capture what is underneath.',
        ],
      },
      {
        title: "The Accessibility Service",
        content: [
          "DrawPad includes an optional accessibility service, and it exists for exactly one technical reason: only an accessibility service is allowed to place a window above the status bar and the notification shade. Without it the drawing disappears whenever the shade is pulled down.",
          'The service is declared with canRetrieveWindowContent="false". It cannot read the text, contents or structure of any screen, and it does not. It receives no window content, performs no actions on your behalf, and sends nothing anywhere.',
          "It also lets the volume keys act as shortcuts while the overlay is running. It never records what you type.",
          "The service is entirely optional. DrawPad works without it; you simply cannot draw over the notification shade.",
        ],
      },
      {
        title: "Permissions In Full",
        content: [
          "SYSTEM_ALERT_WINDOW — to place the drawing canvas over the screen.",
          "FOREGROUND_SERVICE, FOREGROUND_SERVICE_SPECIAL_USE and POST_NOTIFICATIONS — to show the ongoing notification Android requires while the overlay is running, so you can always stop it.",
          "WRITE_EXTERNAL_STORAGE, on Android 9 and below only — to save a PNG into your gallery. On Android 10 and above no storage permission is used at all.",
          "That is the complete list. In particular DrawPad does not request INTERNET, camera, microphone, contacts, location or phone permissions.",
          "The optional accessibility service is bound by Android itself through BIND_ACCESSIBILITY_SERVICE; it is enabled only if you turn it on in Settings, and can be turned off there at any time.",
        ],
      },
      {
        title: "Children",
        content: [
          "DrawPad collects no data from anyone, including children, and contains no advertising or external links.",
        ],
      },
      {
        title: "Changes",
        content: [
          "If a future version of DrawPad ever collects anything, this page will be updated before that version is released, and the change will be described plainly here.",
        ],
      },
      {
        title: "Contact",
        content: [
          "For any privacy question about DrawPad, email sufyantechsolutions@gmail.com with the subject line: DrawPad Privacy.",
        ],
      },
    ],
  },
  {
    slug: "game-night",
    name: "Game Night",
    updated: "September 2026",
    back: { href: "/apps/game-night", label: "Back to Game Night" },
    description:
      "What the Game Night app does and does not collect. It asks for no permissions at all, so nothing can leave your TV or tablet.",
    intro:
      "Game Night is an offline collection of board, card, party and arcade games for Fire TV, Fire tablets and Android. It collects nothing, sends nothing and has no account — it does not ask for a single Android permission. This page sets out exactly what the app can and cannot do.",
    sections: [
      {
        title: "What Game Night Collects",
        content: [
          "Nothing. Game Night has no accounts, no sign-in, no analytics, no advertising, no crash reporting and no tracking of any kind. It never asks for your name, email, phone number or location.",
          "The app does not request the INTERNET permission. It has no technical ability to send anything anywhere, and every game works with the device fully offline.",
        ],
      },
      {
        title: "What Stays On Your Device",
        content: [
          "To pick up where you left off, the app remembers a few settings in its own private storage on the device: the scoreboard names and scores, how many dice and wheel slices you use, the timer length, whether a game is played against the computer, the number of players, best scores in the arcade games, and whether the music is on.",
          "Scoreboard names are whatever you type in, such as \"Player 1\" or a family member's first name. They are used only to show the scoreboard on screen and are never sent anywhere.",
          "This data is not included in Android's cloud backup, and uninstalling the app deletes all of it.",
        ],
      },
      {
        title: "Permissions In Full",
        content: [
          "None. The released APK requests no Android permissions whatsoever — not internet, storage, camera, microphone, contacts, location or phone.",
          "The sound effects are generated on the device, and the background music is a file bundled inside the app. Neither needs a permission.",
        ],
      },
      {
        title: "Children",
        content: [
          "Game Night is made for families to play together, and it collects no data from anyone, including children. It contains no advertising, no in-app purchases, no chat, no sharing with other players online and no links out of the app.",
        ],
      },
      {
        title: "Changes",
        content: [
          "If a future version of Game Night ever collects anything, this page will be updated before that version is released, and the change will be described plainly here.",
        ],
      },
      {
        title: "Contact",
        content: [
          "For any privacy question about Game Night, email sufyantechsolutions@gmail.com with the subject line: Game Night Privacy.",
        ],
      },
    ],
  },
  {
    slug: "hearth",
    name: "Hearth",
    updated: "September 2026",
    description:
      "What the Hearth recipe app does and does not collect. No account, no ads, no tracking; your recipes stay on your device, and it only goes online to import a recipe you ask for.",
    intro:
      "Hearth is a recipe keeper, meal planner and shopping list for Fire tablets. It has no account, no ads and no tracking, and collects nothing. Your recipes stay on the device, and the app only goes online to import a recipe from a web page you choose. This page sets out exactly what the app can and cannot do.",
    sections: [
      {
        title: "What Hearth Collects",
        content: [
          "Nothing. Hearth has no accounts, no sign-in, no analytics, no advertising, no crash reporting and no tracking of any kind. It never asks for your name, email, phone number or location, and the developer never receives any data from it.",
        ],
      },
      {
        title: "What Stays On Your Device",
        content: [
          "Your recipes, the photos you add, your meal plan, your shopping list and your settings (measurements, theme, text size, keep-screen-on) are kept in the app's own private storage on the device.",
          "Other apps cannot read it, it is not included in Android's cloud backup, and uninstalling the app deletes all of it. The only copies that ever leave the device are the backup files, recipes and shopping lists you choose to save or share yourself, through the system file screen or share sheet.",
        ],
      },
      {
        title: "Importing Recipes From The Web",
        content: [
          "Hearth goes online only when you ask it to import a recipe: you paste a web address, or share a page to Hearth from your browser. The app then downloads that one page, reads the recipe from it and downloads the recipe's photo. It connects directly to that website; nothing passes through any server of the developer's.",
          "Like any browser, this request reaches the website you chose, which can see your device's IP address. Hearth sends no cookies, no identifiers and nothing about you or your other recipes. If you never use Import, Hearth never goes online.",
        ],
      },
      {
        title: "Permissions In Full",
        content: [
          "INTERNET, used only for importing a recipe from a web address you give it, as described above.",
          "No other permissions: not storage, camera, microphone, contacts, location or phone. Photos are chosen through the system photo picker or taken with the system camera app, which hand the app only the one picture you pick.",
        ],
      },
      {
        title: "Payments",
        content: [
          "Hearth is a paid app sold through the Amazon Appstore. Amazon handles the purchase; the app contains no in-app purchases and never sees any payment details.",
        ],
      },
      {
        title: "Children",
        content: [
          "Hearth is a kitchen tool for all ages and collects no data from anyone, including children. It contains no advertising, no in-app purchases, no chat and no social features.",
        ],
      },
      {
        title: "Pictures",
        content: [
          "The photos of the 24 starter recipes are CC0 or public-domain images, stored inside the app.",
        ],
      },
      {
        title: "Changes",
        content: [
          "If a future version of Hearth ever collects anything, this page will be updated before that version is released, and the change will be described plainly here.",
        ],
      },
      {
        title: "Contact",
        content: [
          "For any privacy question about Hearth, email sufyantechsolutions@gmail.com with the subject line: Hearth Privacy.",
        ],
      },
    ],
  },
  {
    slug: "invoice-maker",
    name: "Invoice Maker",
    updated: "September 2026",
    description:
      "What Invoice Maker does with your business data. Everything stays on your device, the app has no internet access, and a document or backup only leaves when you share it.",
    intro:
      "Invoice Maker makes invoices, receipts and estimates on Fire tablets and Android. Your business data stays on the device, the app has no internet access, and a document or backup only leaves the device when you share it yourself. This page sets out exactly what the app can and cannot do.",
    sections: [
      {
        title: "What Invoice Maker Collects",
        content: [
          "Nothing. Invoice Maker has no accounts, no sign-in, no analytics, no advertising, no crash reporting and no tracking of any kind. The developer never receives any of your data.",
          "The app does not request the INTERNET permission. It has no technical ability to send anything anywhere, and it works fully offline.",
        ],
      },
      {
        title: "Your Business Data",
        content: [
          "Everything you type into the app stays on your device: your business name, address, tax number, logo and signature; your customers' names and contact details; your products, prices and tax rates; and every invoice, receipt, estimate and payment you record.",
          "It is stored in the app's private storage, where other apps cannot read it, and it is deleted when the app is uninstalled or when you choose Delete all data in Settings.",
          "If you have switched on your device's own backup (for example Android device backup), the operating system may include the app's data in that backup. That is controlled by your device settings, not by Invoice Maker.",
        ],
      },
      {
        title: "Customer Details You Enter",
        content: [
          "You may type in details about your own customers so they appear on your documents. You are responsible for having their permission to keep those details. Invoice Maker only stores them on your device and never sends them anywhere.",
        ],
      },
      {
        title: "When Something Leaves The Device",
        content: [
          "Only when you choose to. Share hands a PDF, or a backup file, to the app you pick (for example email, WhatsApp or Google Drive), and from then on that app's own privacy policy applies. Save PDF and Save a backup file write to a folder you choose. Print sends the document to your printer through the system print service.",
          "A backup file contains all of your business data, including customers and documents, in readable form. Keep it somewhere private.",
          "Invoice Maker never shares anything on its own.",
        ],
      },
      {
        title: "Files You Open",
        content: [
          "When you choose a logo, a signature image or a backup file to restore, the app reads it through the system file picker, which grants access to that one file only. Images are copied into the app's private storage; the original file is never changed.",
        ],
      },
      {
        title: "Payments",
        content: [
          "Invoice Maker is a paid app sold through the Amazon Appstore. Amazon handles the purchase; the app contains no in-app purchases and never sees any payment details. Payments you record inside the app are just notes about what your customers paid you.",
        ],
      },
      {
        title: "Permissions In Full",
        content: [
          "None that reach outside the app. The only permission in the app is one Android adds for its own internal use. There is no internet, storage, camera, contacts, location or phone permission.",
        ],
      },
      {
        title: "Children",
        content: [
          "Invoice Maker is a business tool for a general audience and is not directed at children. It collects no personal information from anyone.",
        ],
      },
      {
        title: "Changes",
        content: [
          "If a future version of Invoice Maker ever collects anything, this page will be updated before that version is released, and the change will be described plainly here.",
        ],
      },
      {
        title: "Contact",
        content: [
          "For any privacy question about Invoice Maker, email sufyantechsolutions@gmail.com with the subject line: Invoice Maker Privacy.",
        ],
      },
    ],
  },
  {
    slug: "iron-arena",
    name: "Iron Arena 3D",
    updated: "October 2026",
    description:
      "What the Iron Arena 3D robot shooter does and does not collect. It has no internet access and asks only to vibrate, so nothing can leave your tablet.",
    intro:
      "Iron Arena 3D is an offline 3D robot shooter for Fire tablets and Android. It has no internet access and collects nothing. Its only permission is a short vibration when you are hit. Your levels, stars and settings stay on the device. This page sets out exactly what the app can and cannot do.",
    sections: [
      {
        title: "What Iron Arena 3D Collects",
        content: [
          "Nothing. Iron Arena 3D has no accounts, no sign-in, no analytics, no advertising, no crash reporting and no tracking of any kind. It never asks for your name, email, phone number or location, and the developer never receives any data from it.",
          "The app does not request the INTERNET permission. It has no technical ability to send anything anywhere, and it plays fully offline.",
        ],
      },
      {
        title: "What Stays On Your Device",
        content: [
          "To remember your progress, the app keeps a few things in its own private storage on the device: the highest campaign level you have reached, the stars earned on each level, the rewards you have unlocked, your best Endless score and wave, and your settings (look sensitivity, auto mode, aim assist, sound, vibration and graphics quality).",
          "None of this identifies you, and other apps cannot read it. If you have turned on your device's own backup, Android may include it in that backup so your progress can come back on a new device. Uninstalling the app deletes all of it.",
        ],
      },
      {
        title: "Permissions In Full",
        content: [
          "One: VIBRATE, for a short buzz when you take a hit. It can be switched off in Settings. The app requests no other permission: not internet, storage, camera, microphone, contacts, location or phone.",
          "Every sound, model and arena is generated by the app on the device. None of this needs a permission.",
        ],
      },
      {
        title: "Payments",
        content: [
          "Iron Arena 3D is a paid app sold through the Amazon Appstore. Amazon handles the purchase. The app contains no in-app purchases and never sees any payment details. Weapons, powers and rewards are earned by playing and cannot be bought.",
        ],
      },
      {
        title: "Children",
        content: [
          "Iron Arena 3D is an action game in which the player shoots robots and drones; it has no human characters and no blood. It collects no data from anyone, including children, and contains no advertising, no in-app purchases, no chat, no online play and no links out of the app.",
        ],
      },
      {
        title: "Changes",
        content: [
          "If a future version of Iron Arena 3D ever collects anything, this page will be updated before that version is released, and the change will be described plainly here.",
        ],
      },
      {
        title: "Contact",
        content: [
          "For any privacy question about Iron Arena 3D, email sufyantechsolutions@gmail.com with the subject line: Iron Arena 3D Privacy.",
        ],
      },
    ],
  },
  {
    slug: "jade-mahjong",
    name: "Jade Mahjong",
    updated: "September 2026",
    description:
      "What the Jade Mahjong app does and does not collect. It asks for no permissions and has no internet access, so nothing can leave your TV or tablet.",
    intro:
      "Jade Mahjong is a Mahjong solitaire game for Fire TV and Fire tablets. It asks for no permissions at all, has no internet access, and collects nothing. Your progress stays on the device. This page sets out exactly what the app can and cannot do.",
    sections: [
      {
        title: "What Jade Mahjong Collects",
        content: [
          "Nothing. Jade Mahjong has no accounts, no sign-in, no analytics, no advertising, no crash reporting and no tracking of any kind. It never asks for your name, email, phone number or location, and the developer never receives any data from it.",
          "The app does not request the INTERNET permission. It has no technical ability to send anything anywhere, and it plays fully offline.",
        ],
      },
      {
        title: "What Stays On Your Device",
        content: [
          "To remember your progress, the app keeps a few things in its own private storage on the device: the stars earned on each level, best times and scores, your statistics, the Daily Challenge days you have completed, the game in progress, and your settings (table theme, music, sound effects, timer and tile shading).",
          "None of this identifies you. Other apps cannot read it, it is not included in Android's cloud backup, and uninstalling the app deletes all of it. Reset all progress in Settings deletes it too.",
        ],
      },
      {
        title: "Permissions In Full",
        content: [
          "None. The released app requests no Android permissions whatsoever: not internet, storage, camera, microphone, contacts, location or phone.",
          "The music and sound effects are files bundled inside the app, and the boards are built on the device. None of this needs a permission.",
        ],
      },
      {
        title: "Payments",
        content: [
          "Jade Mahjong is a paid app sold through the Amazon Appstore. Amazon handles the purchase; the app contains no in-app purchases and never sees any payment details.",
        ],
      },
      {
        title: "Children",
        content: [
          "Jade Mahjong is suitable for all ages and collects no data from anyone, including children. It contains no advertising, no in-app purchases, no chat, no online play and no links out of the app.",
        ],
      },
      {
        title: "Changes",
        content: [
          "If a future version of Jade Mahjong ever collects anything, this page will be updated before that version is released, and the change will be described plainly here.",
        ],
      },
      {
        title: "Contact",
        content: [
          "For any privacy question about Jade Mahjong, email sufyantechsolutions@gmail.com with the subject line: Jade Mahjong Privacy.",
        ],
      },
    ],
  },
  {
    slug: "jelly-jewels",
    name: "Jelly Jewels",
    updated: "October 2026",
    description:
      "What the Jelly Jewels app does and does not collect. It asks for no permissions and has no internet access, so nothing can leave your TV or tablet.",
    intro:
      "Jelly Jewels is a match-3 puzzle game for Fire TV and Fire tablets. It asks for no permissions at all, has no internet access, and collects nothing. Your progress stays on the device. This page sets out exactly what the app can and cannot do.",
    sections: [
      {
        title: "What Jelly Jewels Collects",
        content: [
          "Nothing. Jelly Jewels has no accounts, no sign-in, no analytics, no advertising, no crash reporting and no tracking of any kind. It never asks for your name, email, phone number or location, and the developer never receives any data from it.",
          "The app does not request the INTERNET permission. It has no technical ability to send anything anywhere, and it plays fully offline.",
        ],
      },
      {
        title: "What Stays On Your Device",
        content: [
          "To remember your journey, the app keeps a few things in its own private storage on the device: the levels you have won with their stars and best scores, the coins and helpers (Hammer, Free Swap, Shuffle and the start-of-level helpers) you have earned, your daily gift streak, which tips you have already seen, a few totals of levels won and lost, and your settings (music, sound effects, voice and hints).",
          "None of this identifies you. Other apps cannot read it, it is not included in Android's cloud backup, and uninstalling the app deletes all of it. Start Over in Settings deletes it too.",
        ],
      },
      {
        title: "Permissions In Full",
        content: [
          "None. The released app requests no Android permissions whatsoever: not internet, storage, camera, microphone, contacts, location or phone.",
          "The music, the sound effects, the voice and all 200 levels are bundled inside the app, and every jewel and screen is drawn on the device. None of this needs a permission.",
        ],
      },
      {
        title: "Payments",
        content: [
          "Jelly Jewels is a paid app sold through the Amazon Appstore. Amazon handles the purchase; the app contains no in-app purchases and never sees any payment details. Coins and helpers are earned by playing and can never be bought with money.",
        ],
      },
      {
        title: "Children",
        content: [
          "Jelly Jewels is suitable for all ages and collects no data from anyone, including children. It contains no advertising, no in-app purchases, no gambling, no chat, no online play and no links out of the app.",
        ],
      },
      {
        title: "Changes",
        content: [
          "If a future version of Jelly Jewels ever collects anything, this page will be updated before that version is released, and the change will be described plainly here.",
        ],
      },
      {
        title: "Contact",
        content: [
          "For any privacy question about Jelly Jewels, email sufyantechsolutions@gmail.com with the subject line: Jelly Jewels Privacy.",
        ],
      },
    ],
  },
  {
    slug: "jewel-caravan",
    name: "Jewel Caravan",
    updated: "September 2026",
    description:
      "What the Jewel Caravan app does and does not collect. It asks for no permissions and has no internet access, so nothing can leave your TV or tablet.",
    intro:
      "Jewel Caravan is a match-3 puzzle game for Fire TV and Fire tablets. It asks for no permissions at all, has no internet access, and collects nothing. Your progress stays on the device. This page sets out exactly what the app can and cannot do.",
    sections: [
      {
        title: "What Jewel Caravan Collects",
        content: [
          "Nothing. Jewel Caravan has no accounts, no sign-in, no analytics, no advertising, no crash reporting and no tracking of any kind. It never asks for your name, email, phone number or location, and the developer never receives any data from it.",
          "The app does not request the INTERNET permission. It has no technical ability to send anything anywhere, and it plays fully offline.",
        ],
      },
      {
        title: "What Stays On Your Device",
        content: [
          "To remember your journey, the app keeps a few things in its own private storage on the device: the levels you have won with their stars and best scores, the Hammers and Shuffles you have earned, your Daily Puzzle days and streak, your best Zen Garden score, a few lifetime totals (gems matched, special gems made, best cascade), and your settings (music, sound effects, idle hints and calm effects).",
          "None of this identifies you. Other apps cannot read it, it is not included in Android's cloud backup, and uninstalling the app deletes all of it. Reset progress in Settings deletes it too.",
        ],
      },
      {
        title: "Permissions In Full",
        content: [
          "None. The released app requests no Android permissions whatsoever: not internet, storage, camera, microphone, contacts, location or phone.",
          "The music, the sound effects and all 150 levels are bundled inside the app, and every gem and screen is drawn on the device. None of this needs a permission.",
        ],
      },
      {
        title: "Payments",
        content: [
          "Jewel Caravan is a paid app sold through the Amazon Appstore. Amazon handles the purchase; the app contains no in-app purchases and never sees any payment details. The Hammer and Shuffle boosters are earned by playing and can never be bought.",
        ],
      },
      {
        title: "Children",
        content: [
          "Jewel Caravan is suitable for all ages and collects no data from anyone, including children. It contains no advertising, no in-app purchases, no gambling, no chat, no online play and no links out of the app.",
        ],
      },
      {
        title: "Changes",
        content: [
          "If a future version of Jewel Caravan ever collects anything, this page will be updated before that version is released, and the change will be described plainly here.",
        ],
      },
      {
        title: "Contact",
        content: [
          "For any privacy question about Jewel Caravan, email sufyantechsolutions@gmail.com with the subject line: Jewel Caravan Privacy.",
        ],
      },
    ],
  },
  {
    slug: "little-learners",
    name: "Little Learners",
    updated: "October 2026",
    description:
      "What the Little Learners app (English, Urdu, math and games for children) does and does not collect. It has no internet access, no ads and no in-app purchases, so nothing can leave the device.",
    intro:
      "Little Learners teaches children aged 3 to 7 English, Urdu and math on Fire tablets, Fire TV and Android. It collects nothing, sends nothing and has no account, ads or in-app purchases. This page sets out exactly what the app can and cannot do.",
    sections: [
      {
        title: "What Little Learners Collects",
        content: [
          "Nothing. Little Learners has no accounts, no sign-in, no analytics, no advertising, no crash reporting and no tracking of any kind. It never asks a child for a name, age, email, photo, voice or location.",
          "The app does not request the INTERNET permission. It has no technical ability to send anything anywhere, and it works fully offline on Fire tablets, Fire TV and Android devices.",
        ],
      },
      {
        title: "What Stays On The Device",
        content: [
          "To show progress and rewards, the app remembers for each child: the stars earned in each activity (which also feed the parents' progress report), which letter, word and tracing cards have been seen, the number level reached in the math games, the stickers placed in the sticker book, and the hat, glasses and perch colour chosen for Mitthu the parrot.",
          "For the family it remembers the child profiles, the settings a parent chose (languages, music, voice and the daily play-time limit) and the minutes played today. A profile has a cartoon monster picture and, only if a parent types one in the parents' area, a first name or nickname.",
          "That is the complete list. There are no device identifiers and no history of when or where the app was used. The data lives in the app's own private storage, is excluded from Android and Amazon backups and device transfer, and is deleted when the app is uninstalled. A parent can remove a child's profile, with all its stars and stickers, at any time in the parents' area.",
        ],
      },
      {
        title: "Permissions In Full",
        content: [
          "None that a user is asked for. The app declares no Android permissions: not internet, storage, camera, microphone, contacts, location or phone. Every voice recording, picture, sound and font is bundled inside the app.",
        ],
      },
      {
        title: "Children",
        content: [
          "Little Learners is made for children aged 3 to 7 and follows Amazon's Child-Directed App Policy and the US Children's Online Privacy Protection Act (COPPA). Because it collects no personal information and sends nothing off the device, there is nothing to disclose, consent to, review or delete.",
          "The app is bought once and contains no advertising, no in-app purchases, no subscriptions, no chat, no web browser and no links out of the app, so a child cannot be sent anywhere or asked to buy anything. The parents' area is behind a parental gate.",
        ],
      },
      {
        title: "Changes",
        content: [
          "If a future version of Little Learners ever collects anything, this page will be updated before that version is released, and the change will be described plainly here.",
        ],
      },
      {
        title: "Contact",
        content: [
          "For any privacy question about Little Learners, email sufyantechsolutions@gmail.com with the subject line: Little Learners Privacy.",
        ],
      },
    ],
  },
  {
    slug: "masterpiece-jigsaw",
    name: "Masterpiece Jigsaw",
    updated: "September 2026",
    description:
      "What the Masterpiece Jigsaw app does and does not collect. It asks for no permissions and has no internet access, so nothing can leave your TV or tablet.",
    intro:
      "Masterpiece Jigsaw is a collection of jigsaw puzzles of great art and nature photographs for Fire TV and Fire tablets. It asks for no permissions at all, has no internet access, and collects nothing. Your finished pictures and puzzles in progress stay on the device. This page sets out exactly what the app can and cannot do.",
    sections: [
      {
        title: "What Masterpiece Jigsaw Collects",
        content: [
          "Nothing. Masterpiece Jigsaw has no accounts, no sign-in, no analytics, no advertising, no crash reporting and no tracking of any kind. It never asks for your name, email, phone number or location, and the developer never receives any data from it.",
          "The app does not request the INTERNET permission. It has no technical ability to send anything anywhere, and it plays fully offline.",
        ],
      },
      {
        title: "What Stays On Your Device",
        content: [
          "To remember your progress, the app keeps a few things in its own private storage on the device: which pictures you have finished, with your best time for each size, the puzzles you have started and where each piece is, and your settings (ghost picture, easy snapping, timer, slideshow speed, music and sound effects).",
          "None of this identifies you. Other apps cannot read it, it is not included in Android's cloud backup, and uninstalling the app deletes all of it. Reset progress in Settings deletes your finished pictures and puzzles in progress too.",
        ],
      },
      {
        title: "Permissions In Full",
        content: [
          "None. The released app requests no Android permissions whatsoever: not internet, storage, camera, microphone, contacts, location or phone.",
          "The pictures, the music and the sound effects are files bundled inside the app, and every jigsaw piece is cut and drawn on the device. None of this needs a permission.",
        ],
      },
      {
        title: "Payments",
        content: [
          "Masterpiece Jigsaw is a paid app sold through the Amazon Appstore. Amazon handles the purchase; the app contains no in-app purchases and never sees any payment details.",
        ],
      },
      {
        title: "Children",
        content: [
          "Masterpiece Jigsaw is suitable for all ages and collects no data from anyone, including children. It contains no advertising, no in-app purchases, no chat, no online play and no links out of the app.",
        ],
      },
      {
        title: "Pictures",
        content: [
          "The artworks come from the Open Access collections of The Metropolitan Museum of Art and The Cleveland Museum of Art (CC0), and the photographs from NASA and the US National Park Service (public domain). They are stored inside the app; nothing is downloaded while you play.",
        ],
      },
      {
        title: "Changes",
        content: [
          "If a future version of Masterpiece Jigsaw ever collects anything, this page will be updated before that version is released, and the change will be described plainly here.",
        ],
      },
      {
        title: "Contact",
        content: [
          "For any privacy question about Masterpiece Jigsaw, email sufyantechsolutions@gmail.com with the subject line: Masterpiece Jigsaw Privacy.",
        ],
      },
    ],
  },
  {
    slug: "moonling",
    name: "Moonling",
    updated: "September 2026",
    description:
      "What the Moonling baby tracker does and does not collect. No account, no ads, no tracking and no internet access; your baby's log stays on your device.",
    intro:
      "Moonling is a baby tracker for feeding, sleep and diapers on Fire tablets. It has no account, no ads, no tracking and no internet access, and collects nothing. Your baby's log stays on the device. This page sets out exactly what the app can and cannot do.",
    sections: [
      {
        title: "What Moonling Collects",
        content: [
          "Nothing. Moonling has no accounts, no sign-in, no analytics, no advertising, no crash reporting and no tracking of any kind. The developer never receives any data from it.",
          "The app has no internet permission at all, so it cannot send anything anywhere, even if it wanted to.",
        ],
      },
      {
        title: "What Stays On Your Device",
        content: [
          "Your baby's name, birthday and the log you keep (feeds, sleep, diapers, pumping, foods, growth measurements, health notes and notes), and your settings (units, clock, night mode, reminder), are kept in the app's own private storage on the device.",
          "Other apps cannot read it, it is not included in Android's cloud backup, and uninstalling the app deletes all of it. The only copies that ever leave the device are the PDF reports, spreadsheets and backup files you choose to save or share yourself, through the system file screen or share sheet.",
        ],
      },
      {
        title: "Permissions In Full",
        content: [
          "Notifications (POST_NOTIFICATIONS), used only for the optional feeding reminder. It is asked for only when you turn the reminder on, and only on Android versions that require it.",
          "Run at start-up (RECEIVE_BOOT_COMPLETED), used only to set the feeding reminder again after the device restarts.",
          "No other permissions: not internet, storage, camera, microphone, contacts, location or phone.",
        ],
      },
      {
        title: "Health Information",
        content: [
          "Moonling is a diary for parents, not a medical device, and gives no medical advice. Growth percentiles are worked out on the device from the WHO Child Growth Standards. Anything you record about your baby's health stays on your device unless you share a report yourself.",
        ],
      },
      {
        title: "Payments",
        content: [
          "Moonling is a paid app sold through the Amazon Appstore. Amazon handles the purchase; the app contains no in-app purchases and never sees any payment details.",
        ],
      },
      {
        title: "Children",
        content: [
          "Moonling is an app for parents and carers, not for children to use. It collects no data from anyone, and contains no advertising, no in-app purchases, no chat and no social features.",
        ],
      },
      {
        title: "Changes",
        content: [
          "If a future version of Moonling ever collects anything, this page will be updated before that version is released, and the change will be described plainly here.",
        ],
      },
      {
        title: "Contact",
        content: [
          "For any privacy question about Moonling, email sufyantechsolutions@gmail.com with the subject line: Moonling Privacy.",
        ],
      },
    ],
  },
  {
    slug: "nonogram-gallery",
    name: "Nonogram Gallery",
    updated: "September 2026",
    description:
      "What the Nonogram Gallery app does and does not collect. It asks for no permissions and has no internet access, so nothing can leave your TV or tablet.",
    intro:
      "Nonogram Gallery is a collection of picture logic puzzles for Fire TV and Fire tablets. It asks for no permissions at all, has no internet access, and collects nothing. Your solved pictures and saved grids stay on the device. This page sets out exactly what the app can and cannot do.",
    sections: [
      {
        title: "What Nonogram Gallery Collects",
        content: [
          "Nothing. Nonogram Gallery has no accounts, no sign-in, no analytics, no advertising, no crash reporting and no tracking of any kind. It never asks for your name, email, phone number or location, and the developer never receives any data from it.",
          "The app does not request the INTERNET permission. It has no technical ability to send anything anywhere, and it plays fully offline.",
        ],
      },
      {
        title: "What Stays On Your Device",
        content: [
          "To remember your progress, the app keeps a few things in its own private storage on the device: which puzzles you have solved, with your best time and stars for each, the grids you have started, and your settings (mistake check, crossing finished lines, timer, music and sound effects).",
          "None of this identifies you. Other apps cannot read it, it is not included in Android's cloud backup, and uninstalling the app deletes all of it. Reset progress in Settings deletes your solved pictures and grids too.",
        ],
      },
      {
        title: "Permissions In Full",
        content: [
          "None. The released app requests no Android permissions whatsoever: not internet, storage, camera, microphone, contacts, location or phone.",
          "The puzzles, the pictures, the music and the sound effects are files bundled inside the app, and every grid is drawn on the device. None of this needs a permission.",
        ],
      },
      {
        title: "Payments",
        content: [
          "Nonogram Gallery is a paid app sold through the Amazon Appstore. Amazon handles the purchase; the app contains no in-app purchases and never sees any payment details.",
        ],
      },
      {
        title: "Children",
        content: [
          "Nonogram Gallery is suitable for all ages and collects no data from anyone, including children. It contains no advertising, no in-app purchases, no chat, no online play and no links out of the app.",
        ],
      },
      {
        title: "Changes",
        content: [
          "If a future version of Nonogram Gallery ever collects anything, this page will be updated before that version is released, and the change will be described plainly here.",
        ],
      },
      {
        title: "Contact",
        content: [
          "For any privacy question about Nonogram Gallery, email sufyantechsolutions@gmail.com with the subject line: Nonogram Gallery Privacy.",
        ],
      },
    ],
  },
  {
    slug: "qr-studio",
    name: "QR Studio",
    subject: "QR Studio Android app",
    updated: "September 2026",
    back: { href: "/apps/qr-studio", label: "Back to QR Studio" },
    description:
      "What the QR Studio Android app does and does not collect. It has no internet permission, so nothing can leave your phone.",
    intro:
      "QR Studio is an offline QR code maker for Android. It collects nothing, sends nothing and has no account — it does not even hold the permission that would let it reach the internet. This page sets out exactly what the app can and cannot do.",
    sections: [
      {
        title: "What QR Studio Collects",
        content: [
          "Nothing. QR Studio has no accounts, no sign-in, no analytics, no advertising, no crash reporting and no tracking of any kind. It never asks for your name, email, phone number or location.",
          "The app does not request the INTERNET permission at all. It has no technical ability to send anything anywhere, and you can confirm this yourself in Android's app info screen under Permissions.",
        ],
      },
      {
        title: "What You Type Into a Code",
        content: [
          "A QR code is made from whatever you type — a link, a phone number, a Wi-Fi password, a contact card, a location. All of it is turned into a code on the phone itself, by maths running inside the app.",
          "None of it is uploaded, logged or kept anywhere outside the app. Nothing is stored between sessions except the single language you chose, which is saved so the app opens in it next time.",
          "A Wi-Fi password or a contact card placed into a code lives inside the picture that code makes. That picture stays on your phone until you choose to share or print it.",
        ],
      },
      {
        title: "Images You Save",
        content: [
          "Tapping SAVE writes a PNG into Pictures/QR Studio in your own gallery. Tapping SVG writes a vector file into Downloads. Both files belong to you; the app never reads them back and never sends them anywhere.",
          "Tapping SHARE hands the image to Android's own share sheet, and you pick the app it goes to. QR Studio does not choose a destination and does not keep a copy of what was shared.",
        ],
      },
      {
        title: "A Logo You Add",
        content: [
          "If you add a logo to the middle of a code, Android's own picker asks you to choose one picture. The app receives only that one picture, draws it into the code, and does nothing else with it. It cannot browse your gallery on its own.",
        ],
      },
      {
        title: "Permissions In Full",
        content: [
          "WRITE_EXTERNAL_STORAGE, on Android 9 and below only — to write a saved image into your gallery. On Android 10 and above no storage permission is used at all, because saving goes through Android's MediaStore.",
          "READ_EXTERNAL_STORAGE, on Android 9 and below only — so that a logo you pick from the gallery can be opened on those older versions.",
          "com.sufyan.qr.DYNAMIC_RECEIVER_NOT_EXPORTED_PERMISSION — a private, app-only permission the AndroidX libraries declare so that the app's own internal broadcasts cannot be received by other apps. It grants no access to anything on your phone.",
          "That is the complete list, checked against the released APK rather than the source. QR Studio does not request INTERNET, camera, microphone, contacts, location, phone or any other permission.",
          "The app cannot scan codes with the camera; it only creates them. That is why no camera permission is asked for.",
        ],
      },
      {
        title: "Children",
        content: [
          "QR Studio collects no data from anyone, including children, and contains no advertising, no in-app purchases and no external links.",
        ],
      },
      {
        title: "Changes",
        content: [
          "If a future version of QR Studio ever collects anything, this page will be updated before that version is released, and the change will be described plainly here.",
        ],
      },
      {
        title: "Contact",
        content: [
          "For any privacy question about QR Studio, email sufyantechsolutions@gmail.com with the subject line: QR Studio Privacy.",
        ],
      },
    ],
  },
  {
    slug: "royal-chess-3d",
    name: "Royal Chess 3D",
    updated: "October 2026",
    description:
      "What the Royal Chess 3D game does and does not collect. It has no internet access and asks for no permissions, so nothing can leave the tablet.",
    intro:
      "Royal Chess 3D is a 3D chess game for Fire tablets: play the computer on five difficulty levels, from Novice to Master, or play a friend on the same tablet. It collects nothing, sends nothing and has no account, and it does not ask for a single Android permission. This page sets out exactly what the app can and cannot do.",
    sections: [
      {
        title: "What Royal Chess 3D Collects",
        content: [
          "Nothing. Royal Chess 3D has no accounts, no sign-in, no analytics, no advertising, no crash reporting and no tracking of any kind. It never asks for a name, age, email, photo, voice or location.",
          "The app does not request the INTERNET permission. It has no technical ability to send anything anywhere, and it plays fully offline.",
        ],
      },
      {
        title: "What Stays On The Device",
        content: [
          "To remember your games and preferences, the app keeps a few things in its own private storage: the game in progress (the moves played, the difficulty and the colour you chose) so you can continue it later, your wins, losses and draws at each difficulty level with your current and best winning streak, the number of two-player games played, the difficulty and colour you last picked, and your settings (board and piece set, sound, legal-move highlights, board coordinates, graphics quality, animation speed and whether the board turns in two-player mode).",
          "That is the complete list. There are no names, device identifiers or timestamps. A finished game is removed from storage. The data is excluded from Android and Amazon backups and from device-to-device transfer, other apps cannot read it, and it is deleted when the app is uninstalled. The Statistics screen also has a Reset button, which asks before it clears anything.",
        ],
      },
      {
        title: "Permissions In Full",
        content: [
          "None. The app declares no Android permissions: not internet, storage, camera, microphone, contacts, location, phone or vibration. The boards, pieces and sound effects are made by the app itself, the textures and fonts are bundled inside it, and nothing is ever downloaded.",
          "The game is drawn with Android's built-in WebView, which only loads the files packaged inside the app. There is no web browser and there are no links out of the app.",
        ],
      },
      {
        title: "Payments",
        content: [
          "Royal Chess 3D is a paid app sold through the Amazon Appstore. Amazon handles the purchase. The app contains no in-app purchases and never sees any payment details.",
        ],
      },
      {
        title: "Children",
        content: [
          "Royal Chess 3D is a general-audience game that is suitable for all ages, and it is not directed at children. Because it collects no personal information at all, there is nothing to disclose, consent to, review or delete.",
          "The app contains no advertising, no in-app purchases, no chat, no online play, no web browser and no links out of the app.",
        ],
      },
      {
        title: "Changes",
        content: [
          "If a future version of Royal Chess 3D ever collects anything, this page will be updated before that version is released, and the change will be described plainly here.",
        ],
      },
      {
        title: "Contact",
        content: [
          "For any privacy question about Royal Chess 3D, email sufyantechsolutions@gmail.com with the subject line: Royal Chess 3D Privacy.",
        ],
      },
    ],
  },
  {
    slug: "scan-studio",
    name: "Scan Studio",
    updated: "September 2026",
    description:
      "What the Scan Studio document scanner does and does not collect. It asks for no permissions and has no internet access; your scans stay on your device unless you share them.",
    intro:
      "Scan Studio is a PDF document scanner for Fire tablets. It asks for no permissions at all, has no internet access, and collects nothing. Your scans and your signature stay on the device until you choose to share or save a PDF. This page sets out exactly what the app can and cannot do.",
    sections: [
      {
        title: "What Scan Studio Collects",
        content: [
          "Nothing. Scan Studio has no accounts, no sign-in, no analytics, no advertising, no crash reporting and no tracking of any kind. It never asks for your name, email, phone number or location, and the developer never receives any data from it.",
          "The app does not request the INTERNET permission. It has no technical ability to send anything anywhere, and it works fully offline.",
        ],
      },
      {
        title: "Your Scans And Your Signature",
        content: [
          "The photos you scan, the finished pages, your documents' names and the signature you draw are stored only in the app's own private storage on your device. Other apps cannot read them.",
          "They are not uploaded anywhere and are excluded from Android's cloud backup. Deleting a document removes its pages; deleting the signature in Settings removes it; uninstalling the app deletes everything.",
        ],
      },
      {
        title: "When A Document Leaves Your Device",
        content: [
          "Only when you choose to. Share PDF hands the file to the app you pick in the Android share sheet (for example email, a messaging app or a cloud drive), and Save PDF writes it to the place you pick. From then on, that app or place handles the file under its own privacy policy.",
          "Scan Studio itself never sends a document anywhere on its own.",
        ],
      },
      {
        title: "Permissions In Full",
        content: [
          "None. The released app requests no Android permissions whatsoever: not internet, storage, camera, microphone, contacts, location or phone.",
          "To take a photo, Scan Studio opens your device's own camera app, which already holds the camera permission; the photo comes back to Scan Studio only. Photos from your gallery are opened through the system photo picker, which gives the app only the pictures you choose.",
        ],
      },
      {
        title: "Payments",
        content: [
          "Scan Studio is a paid app sold through the Amazon Appstore. Amazon handles the purchase; the app contains no in-app purchases or subscriptions and never sees any payment details.",
        ],
      },
      {
        title: "Children",
        content: [
          "Scan Studio is a productivity tool meant for teenagers and adults. It collects no data from anyone, including children, and contains no advertising, no chat and no links out of the app.",
        ],
      },
      {
        title: "Changes",
        content: [
          "If a future version of Scan Studio ever collects anything, this page will be updated before that version is released, and the change will be described plainly here.",
        ],
      },
      {
        title: "Contact",
        content: [
          "For any privacy question about Scan Studio, email sufyantechsolutions@gmail.com with the subject line: Scan Studio Privacy.",
        ],
      },
    ],
  },
  {
    slug: "solitaire-royale",
    name: "Solitaire Royale",
    updated: "September 2026",
    description:
      "What the Solitaire Royale app does and does not collect. It asks for no permissions and has no internet access, so nothing can leave your TV or tablet.",
    intro:
      "Solitaire Royale is a collection of five solitaire card games for Fire TV and Fire tablets. It asks for no permissions at all, has no internet access, and collects nothing. Your games and statistics stay on the device. This page sets out exactly what the app can and cannot do.",
    sections: [
      {
        title: "What Solitaire Royale Collects",
        content: [
          "Nothing. Solitaire Royale has no accounts, no sign-in, no analytics, no advertising, no crash reporting and no tracking of any kind. It never asks for your name, email, phone number or location, and the developer never receives any data from it.",
          "The app does not request the INTERNET permission. It has no technical ability to send anything anywhere, and it plays fully offline.",
        ],
      },
      {
        title: "What Stays On Your Device",
        content: [
          "To remember your games, the app keeps a few things in its own private storage on the device: your statistics for each game (games played and won, best times, best scores and streaks), the Daily Challenge days you have won, the games in progress, and your settings (card back, table colour, four-colour suits, winnable deals, automatic finish, timer, music and sound effects).",
          "None of this identifies you. Other apps cannot read it, it is not included in Android's cloud backup, and uninstalling the app deletes all of it. Reset statistics in Settings deletes the statistics too.",
        ],
      },
      {
        title: "Permissions In Full",
        content: [
          "None. The released app requests no Android permissions whatsoever: not internet, storage, camera, microphone, contacts, location or phone.",
          "The music, the sound effects and the list of winnable deals are files bundled inside the app, and every card is drawn on the device. None of this needs a permission.",
        ],
      },
      {
        title: "Payments",
        content: [
          "Solitaire Royale is a paid app sold through the Amazon Appstore. Amazon handles the purchase; the app contains no in-app purchases and never sees any payment details.",
        ],
      },
      {
        title: "Children",
        content: [
          "Solitaire Royale is suitable for all ages and collects no data from anyone, including children. It contains no advertising, no in-app purchases, no gambling, no chat, no online play and no links out of the app.",
        ],
      },
      {
        title: "Changes",
        content: [
          "If a future version of Solitaire Royale ever collects anything, this page will be updated before that version is released, and the change will be described plainly here.",
        ],
      },
      {
        title: "Contact",
        content: [
          "For any privacy question about Solitaire Royale, email sufyantechsolutions@gmail.com with the subject line: Solitaire Royale Privacy.",
        ],
      },
    ],
  },
  {
    slug: "starblaze",
    name: "Starblaze",
    updated: "October 2026",
    description:
      "What the Starblaze arcade space shooter does and does not collect. It has no internet access and asks for no permissions, so nothing can leave the tablet or TV.",
    intro:
      "Starblaze is an arcade space shooter for Fire tablets, Fire TV and Android: fly a starfighter through 48 missions in six sectors, collect crystals, upgrade your ship and beat the bosses. It collects nothing, sends nothing and has no account, and it does not ask for a single Android permission. This page sets out exactly what the app can and cannot do.",
    sections: [
      {
        title: "What Starblaze Collects",
        content: [
          "Nothing. Starblaze has no accounts, no sign-in, no analytics, no advertising, no crash reporting and no tracking of any kind. It never asks a player for a name, age, email, photo, voice or location.",
          "The app does not request the INTERNET permission. It has no technical ability to send anything anywhere, and it plays fully offline.",
        ],
      },
      {
        title: "What Stays On The Device",
        content: [
          "To remember a player's progress, the app keeps a few things in its own private storage: the missions won with the stars and best score on each, the crystals collected, which ships have been bought and which one is flying, the hangar upgrade levels, the best Endless score and wave, a few totals (missions won, enemies destroyed, bosses beaten), and the settings (music, sound effects, voice, difficulty, touch speed and screen shake).",
          "That is the complete list. There are no names, ages, device identifiers or timestamps. The data is excluded from Android and Amazon backups and from device-to-device transfer, other apps cannot read it, and it is deleted when the app is uninstalled. The Settings screen also has a Reset button, which asks before it clears anything.",
        ],
      },
      {
        title: "Permissions In Full",
        content: [
          "None. The app declares no Android permissions: not internet, storage, camera, microphone, contacts, location, phone or vibration. Every ship, sound, tune and voice line is made by the app itself or bundled inside it.",
        ],
      },
      {
        title: "Payments",
        content: [
          "Starblaze is a paid app sold through the Amazon Appstore. Amazon handles the purchase. The app contains no in-app purchases and never sees any payment details. Ships and upgrades are bought with crystals collected while playing, never with money.",
        ],
      },
      {
        title: "Children",
        content: [
          "Starblaze is made for players of all ages, children included. Because it collects no personal information at all, it is consistent with the US Children's Online Privacy Protection Act (COPPA): there is nothing to disclose, consent to, review or delete.",
          "The app contains no advertising, no in-app purchases, no chat, no online play, no web browser and no links out of the app, so a child cannot be sent anywhere or asked to buy anything.",
        ],
      },
      {
        title: "Changes",
        content: [
          "If a future version of Starblaze ever collects anything, this page will be updated before that version is released, and the change will be described plainly here.",
        ],
      },
      {
        title: "Contact",
        content: [
          "For any privacy question about Starblaze, email sufyantechsolutions@gmail.com with the subject line: Starblaze Privacy.",
        ],
      },
    ],
  },
  {
    slug: "starbright-kids",
    name: "Starbright Kids",
    updated: "September 2026",
    description:
      "What the Starbright Kids learning app (English, Math and toddler games) does and does not collect. It has no internet access, no ads and no in-app purchases, so nothing can leave the device.",
    intro:
      "Starbright Kids teaches children aged 2 to 7 English, math and early skills on Fire tablets, Fire TV and Android. It collects nothing, sends nothing and has no account, ads or in-app purchases. This page sets out exactly what the app can and cannot do.",
    sections: [
      {
        title: "What Starbright Kids Collects",
        content: [
          "Nothing. Starbright Kids has no accounts, no sign-in, no analytics, no advertising, no crash reporting and no tracking of any kind. It never asks a child for a name, age, email, photo, voice or location.",
          "The app does not request the INTERNET permission. It has no technical ability to send anything anywhere, and it works fully offline on Fire tablets, Fire TV and Android devices.",
        ],
      },
      {
        title: "What Stays On The Device",
        content: [
          "To show progress and rewards, the app remembers for each child: the stars earned in each activity, how many times each activity was played and how many tries it took (for the parents' progress report), the number level reached in the math games, the sticker book, and the chosen animal friend, hat and glasses.",
          "For the family it remembers the child profiles, the settings a parent chose (music, voice and the daily play-time limit) and the minutes played today. A profile has a picture and, only if a parent types one in the parents' area, a first name or nickname.",
          "That is the complete list. There are no device identifiers and no history of when or where the app was used. The data lives in the app's own private storage, is excluded from Android and Amazon backups and device transfer, and is deleted when the app is uninstalled. A parent can remove a child's profile, with all its stars and stickers, at any time in the parents' area.",
        ],
      },
      {
        title: "Permissions In Full",
        content: [
          "None that a user is asked for. The app declares no Android permissions: not internet, storage, camera, microphone, contacts, location or phone. Every voice recording, picture, sound and font is bundled inside the app.",
        ],
      },
      {
        title: "Children",
        content: [
          "Starbright Kids is made for children aged 2 to 7 and follows Amazon's Child-Directed App Policy and the US Children's Online Privacy Protection Act (COPPA). Because it collects no personal information and sends nothing off the device, there is nothing to disclose, consent to, review or delete.",
          "The app is bought once and contains no advertising, no in-app purchases, no subscriptions, no chat, no web browser and no links out of the app, so a child cannot be sent anywhere or asked to buy anything. The parents' area is behind a parental gate.",
        ],
      },
      {
        title: "Changes",
        content: [
          "If a future version of Starbright Kids ever collects anything, this page will be updated before that version is released, and the change will be described plainly here.",
        ],
      },
      {
        title: "Contact",
        content: [
          "For any privacy question about Starbright Kids, email sufyantechsolutions@gmail.com with the subject line: Starbright Kids Privacy.",
        ],
      },
    ],
  },
  {
    slug: "timber-blocks",
    name: "Timber Blocks",
    updated: "September 2026",
    description:
      "What the Timber Blocks app does and does not collect. It has no internet access and asks only to vibrate, so nothing can leave your TV or tablet.",
    intro:
      "Timber Blocks is a wooden block puzzle for Fire TV and Fire tablets. It has no internet access and collects nothing; its only permission is a short vibration when lines clear. Your scores, stars and saved games stay on the device. This page sets out exactly what the app can and cannot do.",
    sections: [
      {
        title: "What Timber Blocks Collects",
        content: [
          "Nothing. Timber Blocks has no accounts, no sign-in, no analytics, no advertising, no crash reporting and no tracking of any kind. It never asks for your name, email, phone number or location, and the developer never receives any data from it.",
          "The app does not request the INTERNET permission. It has no technical ability to send anything anywhere, and it plays fully offline.",
        ],
      },
      {
        title: "What Stays On Your Device",
        content: [
          "To remember your progress, the app keeps a few things in its own private storage on the device: the game in progress in each mode, your best Classic score, the stars you have earned in Adventure, which Daily puzzles you have solved, your boosters, trophies and play statistics, the theme you chose, and your settings (music, sound effects, vibration, showing clears ahead).",
          "None of this identifies you. Other apps cannot read it, it is not included in Android's cloud backup, and uninstalling the app deletes all of it. Reset progress in Settings deletes it too.",
        ],
      },
      {
        title: "Permissions In Full",
        content: [
          "One: VIBRATE, so a phone or tablet can give a short buzz when lines clear. It can be switched off in Settings, and a TV simply has nothing to buzz. The app requests no other permission: not internet, storage, camera, microphone, contacts, location or phone.",
          "The levels, the music and the sound effects are files bundled inside the app, and every board is drawn on the device. None of this needs a permission.",
        ],
      },
      {
        title: "Payments",
        content: [
          "Timber Blocks is a paid app sold through the Amazon Appstore. Amazon handles the purchase; the app contains no in-app purchases and never sees any payment details. Boosters are earned by playing and cannot be bought.",
        ],
      },
      {
        title: "Children",
        content: [
          "Timber Blocks is suitable for all ages and collects no data from anyone, including children. It contains no advertising, no in-app purchases, no chat, no online play and no links out of the app.",
        ],
      },
      {
        title: "Changes",
        content: [
          "If a future version of Timber Blocks ever collects anything, this page will be updated before that version is released, and the change will be described plainly here.",
        ],
      },
      {
        title: "Contact",
        content: [
          "For any privacy question about Timber Blocks, email sufyantechsolutions@gmail.com with the subject line: Timber Blocks Privacy.",
        ],
      },
    ],
  },
  {
    slug: "topple-cannon",
    name: "Topple Cannon",
    updated: "October 2026",
    description:
      "What the Topple Cannon knock-down game does and does not collect. It has no internet access and asks for no permissions, so nothing can leave the tablet or TV.",
    intro:
      "Topple Cannon is a 3D cannon game for children and families on Fire tablets, Fire TV and Android: tap to fire and knock every crate off the platform. It collects nothing, sends nothing and has no account, and it does not ask for a single Android permission. This page sets out exactly what the app can and cannot do.",
    sections: [
      {
        title: "What Topple Cannon Collects",
        content: [
          "Nothing. Topple Cannon has no accounts, no sign-in, no analytics, no advertising, no crash reporting and no tracking of any kind. It never asks a child or a parent for a name, age, email, photo, voice or location.",
          "The app does not request the INTERNET permission. It has no technical ability to send anything anywhere, and it plays fully offline.",
        ],
      },
      {
        title: "What Stays On The Device",
        content: [
          "To remember a player's progress, the app keeps a few things in its own private storage: the furthest level reached, the stars earned on each level, the coins collected, which cannons and balls have been unlocked and which ones are chosen, whether the first-shot hint has been shown, and the settings (music, sounds and easy mode).",
          "That is the complete list. There are no names, ages, device identifiers or timestamps. The data is excluded from Android and Amazon backups, other apps cannot read it, and it is deleted when the app is uninstalled. The Settings screen also has a Reset button, which asks before it clears anything.",
        ],
      },
      {
        title: "Permissions In Full",
        content: [
          "None. The app declares no Android permissions: not internet, storage, camera, microphone, contacts, location, phone or vibration. Every model, picture, sound and tune is made by the app itself or bundled inside it.",
        ],
      },
      {
        title: "Payments",
        content: [
          "Topple Cannon is a paid app sold through the Amazon Appstore. Amazon handles the purchase. The app contains no in-app purchases and never sees any payment details. Cannons and balls are unlocked with coins earned while playing, never with money.",
        ],
      },
      {
        title: "Children",
        content: [
          "Topple Cannon is made for children and families and follows Amazon's Child-Directed App Policy and the US Children's Online Privacy Protection Act (COPPA). Because it collects no personal information at all, there is nothing to disclose, consent to, review or delete.",
          "The app contains no advertising, no in-app purchases, no chat, no online play, no web browser and no links out of the app, so a child cannot be sent anywhere or asked to buy anything.",
        ],
      },
      {
        title: "Changes",
        content: [
          "If a future version of Topple Cannon ever collects anything, this page will be updated before that version is released, and the change will be described plainly here.",
        ],
      },
      {
        title: "Contact",
        content: [
          "For any privacy question about Topple Cannon, email sufyantechsolutions@gmail.com with the subject line: Topple Cannon Privacy.",
        ],
      },
    ],
  },
  {
    slug: "voice-studio",
    name: "Voice Studio",
    updated: "September 2026",
    description:
      "What the Voice Studio voice changer does with your recordings. Everything is processed on the device, the app has no internet access, and a clip only leaves when you share it.",
    intro:
      "Voice Studio changes your voice on Fire tablets and Android. Your recordings are processed on the device, the app has no internet access, and a clip only leaves the device when you share it yourself. This page sets out exactly what the app can and cannot do.",
    sections: [
      {
        title: "What Voice Studio Collects",
        content: [
          "Nothing. Voice Studio has no accounts, no sign-in, no analytics, no advertising, no crash reporting and no tracking of any kind. It never asks for a name, email, age or location.",
          "The app does not request the INTERNET permission. It has no technical ability to send anything anywhere, and it works fully offline.",
        ],
      },
      {
        title: "Your Recordings",
        content: [
          "The microphone is used only while you are recording, after you tap the record button, and only while the app is on screen. Recording stops as soon as the app leaves the screen.",
          "Every voice effect is applied on the device itself. Recordings are never uploaded, analysed by a server, or used to train anything.",
          "Clips you save are kept in the app's own storage on the device. They are excluded from Android and Amazon cloud backups, and they are deleted when the app is uninstalled. You can delete any clip at any time from My clips.",
        ],
      },
      {
        title: "When A Clip Leaves The Device",
        content: [
          "Only when you choose to. Tapping Share hands the clip to the app you pick (for example email or a messaging app), and from then on that app's own privacy policy applies. Save to Music folder copies the clip to the device's shared Music/Voice Studio folder, where other apps on the same device can see it.",
          "Voice Studio never shares anything on its own.",
        ],
      },
      {
        title: "Audio Files You Open",
        content: [
          "If you open an existing audio file, the app reads it through the system file picker, which grants access to that one file only. The file is read once to apply a voice and is never changed or copied anywhere else.",
        ],
      },
      {
        title: "Permissions In Full",
        content: [
          "Microphone (RECORD_AUDIO): to record your voice, only while you are recording.",
          "Storage (WRITE_EXTERNAL_STORAGE), on Android 9 and older only: used solely for Save to Music folder. Newer versions of Android need no storage permission for this.",
          "There are no other permissions: not internet, camera, contacts, location or phone.",
        ],
      },
      {
        title: "Settings Kept On The Device",
        content: [
          "The app remembers the voice you last chose, whether background-noise clean-up is on, and any custom voices you create (their names and slider positions). These stay in the app's private storage and are removed when the app is uninstalled.",
        ],
      },
      {
        title: "Children",
        content: [
          "Voice Studio is a general-audience app and is not directed at children. It collects no personal information from anyone, so there is nothing to disclose, review or delete.",
        ],
      },
      {
        title: "Changes",
        content: [
          "If a future version of Voice Studio ever collects anything, this page will be updated before that version is released, and the change will be described plainly here.",
        ],
      },
      {
        title: "Contact",
        content: [
          "For any privacy question about Voice Studio, email sufyantechsolutions@gmail.com with the subject line: Voice Studio Privacy.",
        ],
      },
    ],
  },
  {
    slug: "word-search-treasury",
    name: "Word Search Treasury",
    updated: "September 2026",
    description:
      "What the Word Search Treasury app does and does not collect. It asks for no permissions and has no internet access, so nothing can leave your TV or tablet.",
    intro:
      "Word Search Treasury is a word search puzzle game for Fire TV and Fire tablets. It asks for no permissions at all, has no internet access, and collects nothing. Your progress stays on the device. This page sets out exactly what the app can and cannot do.",
    sections: [
      {
        title: "What Word Search Treasury Collects",
        content: [
          "Nothing. Word Search Treasury has no accounts, no sign-in, no analytics, no advertising, no crash reporting and no tracking of any kind. It never asks for your name, email, phone number or location, and the developer never receives any data from it.",
          "The app does not request the INTERNET permission. It has no technical ability to send anything anywhere, and it plays fully offline.",
        ],
      },
      {
        title: "What Stays On Your Device",
        content: [
          "To remember your progress, the app keeps a few things in its own private storage on the device: the puzzles you have solved with their stars and best times, the words found so far in a puzzle you have not finished, the hints you have earned, your Daily Puzzle days and streak, a few lifetime totals (words found, puzzles solved, mystery words found), and your settings (music, sound effects, letter ticks and the clock).",
          "None of this identifies you. Other apps cannot read it, it is not included in Android's cloud backup, and uninstalling the app deletes all of it. Reset progress in Settings deletes it too.",
        ],
      },
      {
        title: "Permissions In Full",
        content: [
          "None. The released app requests no Android permissions whatsoever: not internet, storage, camera, microphone, contacts, location or phone.",
          "The word lists, the theme pictures, the music and the sound effects are bundled inside the app, and every puzzle is built on the device. None of this needs a permission.",
        ],
      },
      {
        title: "Payments",
        content: [
          "Word Search Treasury is a paid app sold through the Amazon Appstore. Amazon handles the purchase; the app contains no in-app purchases and never sees any payment details. Hints are earned by solving puzzles and can never be bought.",
        ],
      },
      {
        title: "Children",
        content: [
          "Word Search Treasury is suitable for all ages and collects no data from anyone, including children. It contains no advertising, no in-app purchases, no gambling, no chat, no online play and no links out of the app.",
        ],
      },
      {
        title: "Changes",
        content: [
          "If a future version of Word Search Treasury ever collects anything, this page will be updated before that version is released, and the change will be described plainly here.",
        ],
      },
      {
        title: "Contact",
        content: [
          "For any privacy question about Word Search Treasury, email sufyantechsolutions@gmail.com with the subject line: Word Search Treasury Privacy.",
        ],
      },
    ],
  },
  {
    slug: "tidy-pdf",
    name: "Tidy PDF",
    subject: "Tidy PDF app for Windows",
    updated: "October 2026",
    description:
      "What the Tidy PDF Windows app does with your files. Every task runs on your own PC, nothing is uploaded, and there is no account, analytics or advertising.",
    intro:
      "Tidy PDF merges, splits, compresses, converts and signs PDF files on Windows PCs. It works fully offline: your documents are processed on your own computer and are never uploaded anywhere. This page sets out exactly what the app can and cannot do.",
    sections: [
      {
        title: "What Tidy PDF Collects",
        content: [
          "Nothing. Tidy PDF has no accounts, no sign-in, no analytics, no advertising, no crash reporting and no tracking of any kind. The developer never receives your documents or any information about you.",
          "The app contains no code that sends your files or your data over the internet. Every task runs on your PC, and the app works with no internet connection at all.",
        ],
      },
      {
        title: "Your Documents",
        content: [
          "Tidy PDF only opens the files you choose or drop into its window. It reads them and saves each result as a new file, next to the original or in a folder you pick in Settings. Your original files are never changed or overwritten.",
          "While a task runs, the result is written to a temporary file in the same folder. That file is deleted as soon as the task finishes or is cancelled.",
        ],
      },
      {
        title: "What Stays On Your PC",
        content: [
          "Tidy PDF remembers a few settings: light or dark mode, where to save results, whether Tidy PDF Pro is unlocked, and, in the free version, how many tasks you have done today.",
          "It also keeps a small log of errors to help fix problems. The log can contain file names and folder paths. It never leaves your PC unless you choose to send it to us, and Settings has a button that opens its folder.",
          "All of this is stored in the app's own folder on your PC and is removed when you uninstall Tidy PDF.",
        ],
      },
      {
        title: "Purchases",
        content: [
          "Tidy PDF Pro is an optional in-app purchase sold through the Microsoft Store. Microsoft handles the payment and your Microsoft account; Tidy PDF never sees any payment or account details.",
          "To check whether Pro is unlocked, the app asks the Microsoft Store on your PC. That exchange is between your PC and Microsoft and is covered by the Microsoft Privacy Statement.",
        ],
      },
      {
        title: "Children",
        content: [
          "Tidy PDF is a productivity tool for a general audience and is not directed at children. It collects no personal information from anyone.",
        ],
      },
      {
        title: "Changes",
        content: [
          "If a future version of Tidy PDF ever collects anything, this page will be updated before that version is released, and the change will be described plainly here.",
        ],
      },
      {
        title: "Contact",
        content: [
          "For any privacy question about Tidy PDF, email sufyantechsolutions@gmail.com with the subject line: Tidy PDF Privacy.",
        ],
      },
    ],
  },
  {
    slug: "splash-pals",
    name: "Splash Pals",
    updated: "October 2026",
    description:
      "What the Splash Pals coloring book for children does and does not collect. It has no internet access; the camera is used only on the tablet, to turn a drawing into a page or to pick a color, and nothing leaves the device.",
    intro:
      "Splash Pals is a coloring book for children on Fire tablets and Android: tap a shape to fill it with color, earn stars and collect animal pals. It collects nothing, sends nothing and has no account. It can use the camera, but only on the tablet itself and only when a child chooses Magic Camera or Color Catcher. This page sets out exactly what the app can and cannot do.",
    sections: [
      {
        title: "What Splash Pals Collects",
        content: [
          "Nothing. Splash Pals has no accounts, no sign-in, no analytics, no advertising, no crash reporting and no tracking of any kind. It never asks a child or a parent for a name, age, email, voice or location.",
          "The app does not request the INTERNET permission. It has no technical ability to send anything anywhere, and it works fully offline.",
        ],
      },
      {
        title: "The Camera",
        content: [
          "Magic Camera takes a photo of a drawing on paper and turns it into black lines that the child can color in. The photo is processed on the tablet; only the finished line drawing is kept, as a page in the app's own storage. The photo itself is not saved and is never sent anywhere.",
          "Color Catcher shows the camera picture and reads the color in the middle of it, so the child can paint with that color. Only the color value is kept. No picture is saved.",
          "Android asks for the camera permission the first time either feature is used. Everything else in the app works without it, and the permission can be turned off at any time in the tablet's settings.",
        ],
      },
      {
        title: "What Stays On The Device",
        content: [
          "The app keeps these things in its own private storage: the pictures a child finishes, unfinished pictures so they can be continued later, pages made with Magic Camera, the stars earned, the best result for each page, which pals have been unlocked and which one is chosen, colors caught with Color Catcher, the date of the last daily gift, and the settings (music, sounds, spoken praise and little hands mode).",
          "That is the complete list. There are no names, ages, device identifiers or location. The data is excluded from Android and Amazon backups, other apps cannot read it, and it is deleted when the app is uninstalled. The grown-ups screen also has a Start again button, which asks before it clears anything.",
        ],
      },
      {
        title: "Saving And Sharing Pictures",
        content: [
          "A finished picture or its certificate can be saved to the tablet's Photos, in a Splash Pals album, so it can be printed or kept. This happens only when someone taps Save.",
          "Sharing a picture opens Android's own share menu, and only after a grown-up answers a sum question. Splash Pals itself never sends a picture anywhere; whatever app the grown-up picks in the share menu handles it under its own policy.",
        ],
      },
      {
        title: "Permissions In Full",
        content: [
          "Camera: for Magic Camera and Color Catcher only, as described above.",
          "Storage: only on Android 9 and older, to save a picture to Photos when Save is tapped. Newer systems need no permission for that.",
          "No other permissions: not internet, microphone, contacts, location or phone.",
        ],
      },
      {
        title: "Payments",
        content: [
          "Splash Pals is a paid app sold through the Amazon Appstore. Amazon handles the purchase. The app contains no in-app purchases and never sees any payment details. Pals are unlocked with stars earned by coloring, never with money.",
        ],
      },
      {
        title: "Children",
        content: [
          "Splash Pals is made for children and follows Amazon's Child-Directed App Policy and the US Children's Online Privacy Protection Act (COPPA). Because it collects no personal information at all, there is nothing to disclose, consent to, review or delete.",
          "The app contains no advertising, no in-app purchases, no chat, no online play, no web browser and no links out of the app, so a child cannot be sent anywhere or asked to buy anything.",
        ],
      },
      {
        title: "Changes",
        content: [
          "If a future version of Splash Pals ever collects anything, this page will be updated before that version is released, and the change will be described plainly here.",
        ],
      },
      {
        title: "Contact",
        content: [
          "For any privacy question about Splash Pals, email sufyantechsolutions@gmail.com with the subject line: Splash Pals Privacy.",
        ],
      },
    ],
  },
  {
    slug: "clayframe",
    name: "Clayframe",
    updated: "October 2026",
    description:
      "What the Clayframe stop motion studio does and does not collect. It has no internet access; the camera and microphone are used only on the tablet, and movies leave the device only when you export or share them.",
    intro:
      "Clayframe is a stop motion studio for Fire tablets and Android: take a picture, move your model a little, take another, then add titles, music and sound and play it back as a movie. It collects nothing, sends nothing and has no account. It uses the camera, and the microphone if you record a voiceover, but only on the tablet itself. This page sets out exactly what the app can and cannot do.",
    sections: [
      {
        title: "What Clayframe Collects",
        content: [
          "Nothing. Clayframe has no accounts, no sign-in, no analytics, no advertising, no crash reporting and no tracking of any kind. It never asks for a name, age, email or location.",
          "The app does not request the INTERNET permission. It has no technical ability to send anything anywhere, and it works fully offline.",
        ],
      },
      {
        title: "The Camera",
        content: [
          "The camera screen shows the live picture so you can set up each shot. A picture is kept only when you press the shutter (or a volume key, a selfie remote or the timer does). Each picture is saved in the app's own private storage as part of your movie.",
          "Android asks for the camera permission the first time you open the camera. It can be turned off at any time in the tablet's settings; your saved movies stay and can still be edited and played.",
        ],
      },
      {
        title: "The Microphone",
        content: [
          "The microphone is used only to record a voiceover, and only while you are recording one. The recording is saved inside that movie in the app's private storage. Android asks for the microphone permission the first time you tap Record; everything else in the app works without it.",
        ],
      },
      {
        title: "Photos You Add",
        content: [
          "You can add pictures from the tablet to a movie, or pick a photo as a green-screen background. Clayframe opens Android's own file picker and can read only the files you choose there. A copy of each chosen picture is stored with the movie; the original is left untouched.",
        ],
      },
      {
        title: "What Stays On The Device",
        content: [
          "The app keeps these things in its own private storage: your movies (their pictures, small preview copies, title cards, voiceover recordings, background photos and the movie settings such as speed, look, music and sound effects) and the app settings (default speed and shape, picture quality, ghost strength, grid, which camera to use, shutter sound, volume-key shutter and whether the tips card was closed).",
          "That is the complete list. There are no names, device identifiers or location. Movies are excluded from Android and Amazon backups, other apps cannot read them, and they are deleted when you delete the movie or uninstall the app.",
        ],
      },
      {
        title: "Exporting And Sharing",
        content: [
          "Export saves a finished movie as an MP4 video or a GIF in the tablet's gallery, in a Clayframe folder, so you can watch or keep it. This happens only when you tap Make movie.",
          "Share opens Android's own share menu. Clayframe itself never sends a movie anywhere; whatever app you pick in the share menu handles it under its own policy.",
        ],
      },
      {
        title: "Permissions In Full",
        content: [
          "Camera: to take the pictures for your movie, as described above.",
          "Microphone: to record a voiceover, only when you tap Record.",
          "Storage: only on Android 9 and older, to save an exported movie to the gallery. Newer systems need no permission for that.",
          "No other permissions: not internet, contacts, location or phone.",
        ],
      },
      {
        title: "Payments",
        content: [
          "Clayframe is a paid app sold through the Amazon Appstore. Amazon handles the purchase. The app contains no in-app purchases, no subscriptions and no advertising, and it never sees any payment details.",
        ],
      },
      {
        title: "Children",
        content: [
          "Clayframe is a creative tool for all ages, and many families make movies with it together. Because it collects no personal information at all, there is nothing to disclose, consent to, review or delete. It contains no chat, no online play, no web browser and no links out of the app.",
        ],
      },
      {
        title: "Changes",
        content: [
          "If a future version of Clayframe ever collects anything, this page will be updated before that version is released, and the change will be described plainly here.",
        ],
      },
      {
        title: "Contact",
        content: [
          "For any privacy question about Clayframe, email sufyantechsolutions@gmail.com with the subject line: Clayframe Privacy.",
        ],
      },
    ],
  },
  {
    slug: "brushwave",
    name: "Brushwave",
    updated: "October 2026",
    description:
      "What the Brushwave drawing app does and does not collect. It has no internet access; drawings and photos stay on your device, and the photo cut-out runs on the device itself.",
    intro:
      "Brushwave is an offline drawing app for Fire tablets and Android: mirror and kaleidoscope drawing, ten brushes, shapes and text, a Photo Studio with an on-device background remover, and PNG and SVG export. It collects nothing, sends nothing and has no account. This page sets out exactly what the app can and cannot do, including why it asks for the permissions it asks for.",
    sections: [
      {
        title: "What Brushwave Collects",
        content: [
          "Nothing. Brushwave has no accounts, no sign-in, no analytics, no advertising and no crash reporting. It does not ask for your name, email, phone number or location.",
          "The app does not request the INTERNET permission at all, so it has no technical ability to send anything anywhere, and it works fully offline.",
        ],
      },
      {
        title: "Your Drawings",
        content: [
          "Drawings are saved automatically in the app's own private storage, so My drawings can reopen them. Other apps cannot read them, and they are deleted when you delete a drawing or uninstall the app.",
          "If your device's own backup is switched on, Android may include the app's files in that backup, under your device account's settings. Brushwave itself never uploads anything.",
          "When you tap Save, Brushwave writes a PNG into Pictures/Brushwave in your gallery; Save as SVG writes a vector file into Download/Brushwave. Those files belong to you and the app never sends them anywhere.",
        ],
      },
      {
        title: "Photos And The Background Remover",
        content: [
          "When you add a photo, Android's own picker asks you to choose it. Brushwave receives only the photo you picked; it cannot browse your gallery.",
          "Remove background works out the main subject of the photo with a small neural network (U2-Net) that is built into the app and runs on the device. The photo is never uploaded: there is no server and no internet connection involved. The cut-out, crop, effects and new background are kept with your drawing in the app's private storage.",
        ],
      },
      {
        title: "Sharing",
        content: [
          "Share opens Android's own share menu with a picture of your drawing. Brushwave never sends anything itself; whatever app you pick in the share menu handles the picture under its own policy.",
        ],
      },
      {
        title: "Display Over Other Apps",
        content: [
          'To let you draw on top of other apps, Brushwave asks for Android\'s "Display over other apps" permission when you first use that feature. It only lets the app place its own transparent canvas over the screen. It does not let Brushwave see, read or capture what is underneath.',
        ],
      },
      {
        title: "The Optional Accessibility Service",
        content: [
          "Brushwave includes an optional accessibility service for one technical reason: only an accessibility service may place a window above the status bar and the notification shade, so the on-screen drawing does not disappear when the shade is pulled down.",
          'The service is declared with canRetrieveWindowContent="false". It cannot read the text, contents or structure of any screen, and it does not. It performs no actions on your behalf and sends nothing anywhere. It also lets the volume keys act as shortcuts while drawing on the screen; it never records what you type.',
          "It is off unless you switch it on in Settings, and can be switched off there at any time. Everything else works without it.",
        ],
      },
      {
        title: "Permissions In Full",
        content: [
          "SYSTEM_ALERT_WINDOW: to place the drawing canvas over the screen, only when you use Draw on screen.",
          "FOREGROUND_SERVICE, FOREGROUND_SERVICE_SPECIAL_USE and POST_NOTIFICATIONS: to show the ongoing notification Android requires while the on-screen canvas is running, so you can always stop it.",
          "WRITE_EXTERNAL_STORAGE, on Android 9 and older only: to save a picture into your gallery. Newer systems need no storage permission for that.",
          "That is the complete list. Brushwave does not request internet, camera, microphone, contacts, location or phone permissions. The optional accessibility service is bound by Android itself through BIND_ACCESSIBILITY_SERVICE.",
        ],
      },
      {
        title: "Payments",
        content: [
          "Brushwave is a paid app sold through the Amazon Appstore. Amazon handles the purchase. The app contains no in-app purchases, no subscriptions and no advertising, and it never sees any payment details.",
        ],
      },
      {
        title: "Children",
        content: [
          "Brushwave is a drawing tool for all ages. It collects no personal information from anyone, including children, and contains no advertising, chat, web browser or links out of the app.",
        ],
      },
      {
        title: "Changes",
        content: [
          "If a future version of Brushwave ever collects anything, this page will be updated before that version is released, and the change will be described plainly here.",
        ],
      },
      {
        title: "Contact",
        content: [
          "For any privacy question about Brushwave, email sufyantechsolutions@gmail.com with the subject line: Brushwave Privacy.",
        ],
      },
    ],
  },
  {
    slug: "lumen",
    name: "Lumen Calculator",
    updated: "October 2026",
    description:
      "What the Lumen Calculator app does and does not collect. It has no internet access and asks for no permissions; your calculations and history stay on your device.",
    intro:
      "Lumen is an offline calculator for Fire tablets and Android: a scientific calculator with history, graphing, 18 unit converters, a programmer mode and 15 everyday tools. It collects nothing, sends nothing and has no account, and it does not ask for a single Android permission. This page sets out exactly what the app can and cannot do.",
    sections: [
      {
        title: "What Lumen Collects",
        content: [
          "Nothing. Lumen has no accounts, no sign-in, no analytics, no advertising, no crash reporting and no tracking of any kind. It does not ask for your name, email, phone number or location.",
          "The app does not request the INTERNET permission, so it has no technical ability to send anything anywhere, and it works fully offline.",
        ],
      },
      {
        title: "What Stays On Your Device",
        content: [
          "Lumen keeps your last 500 calculations in its history so you can look back at them, plus the functions you graph, the memory value and your settings (theme, number format, angle unit and so on). All of it is stored in the app's own private storage, which other apps cannot read.",
          'You can switch off "Save calculations" in Settings and clear the history at any time. Everything is deleted when you uninstall the app.',
          "If your device's own backup is switched on, Android may include the app's settings and history in that backup, under your device account's settings. Lumen itself never uploads anything.",
        ],
      },
      {
        title: "Copy And Share",
        content: [
          "Copy puts a result on your device's clipboard, where you can paste it into another app. Share opens Android's own share menu with the sum and its answer as text. Lumen never sends anything itself; whatever app you pick in the share menu handles the text under its own policy.",
        ],
      },
      {
        title: "Permissions",
        content: [
          "None. Lumen does not request internet, storage, camera, microphone, contacts, location or phone permissions. The optional key vibration uses Android's standard touch feedback, which needs no permission.",
        ],
      },
      {
        title: "Payments",
        content: [
          "Lumen is a paid app sold through the Amazon Appstore. Amazon handles the purchase. The app contains no in-app purchases, no subscriptions and no advertising, and it never sees any payment details.",
        ],
      },
      {
        title: "Children",
        content: [
          "Lumen is a calculator for a general audience. It collects no personal information from anyone, including children, and contains no advertising, chat, web browser or links out of the app.",
        ],
      },
      {
        title: "Changes",
        content: [
          "If a future version of Lumen ever collects anything, this page will be updated before that version is released, and the change will be described plainly here.",
        ],
      },
      {
        title: "Contact",
        content: [
          "For any privacy question about Lumen, email sufyantechsolutions@gmail.com with the subject line: Lumen Privacy.",
        ],
      },
    ],
  },
  {
    slug: "drift-off",
    name: "Drift Off",
    updated: "October 2026",
    description:
      "What the Drift Off sleep timer for Fire TV does and does not collect. It has no internet access; your timer, bedtime and settings stay on your Fire TV.",
    intro:
      "Drift Off is an offline sleep timer for Fire TV: it pauses what is playing at the time you choose, shows a goodnight screen, plays gentle sleep sounds it makes itself, and can stop a kids' TV at bedtime. It collects nothing, sends nothing and has no account. This page sets out exactly what the app can and cannot do, including why it asks for the permissions it asks for.",
    sections: [
      {
        title: "What Drift Off Collects",
        content: [
          "Nothing. Drift Off has no accounts, no sign-in, no analytics, no advertising, no crash reporting and no tracking of any kind. It does not ask for your name, email, phone number or location.",
          "The app does not request the INTERNET permission, so it has no technical ability to send anything anywhere, and it works fully offline. The sleep sounds are generated on the Fire TV itself; nothing is streamed.",
        ],
      },
      {
        title: "What Stays On Your Fire TV",
        content: [
          "Drift Off keeps the time your current timer ends, the timer length you used last, your bedtime settings (time, nights, wake-up time) and your choices for how the night ends. If you turn on the bedtime lock, it also keeps the four-arrow grown-up code you chose. All of it is stored in the app's own private storage, which other apps cannot read, and it is deleted when you uninstall the app.",
          "If your device's own backup is switched on, Android may include these settings in that backup, under your device account's settings. Drift Off itself never uploads anything.",
        ],
      },
      {
        title: "Other Apps And Your Viewing",
        content: [
          "To stop your show when the timer ends, Drift Off sends the same pause command the remote's pause button sends, and briefly takes over the sound, which tells the playing app to pause. It does not see which app is playing, what you are watching or for how long, and it keeps no record of your viewing.",
        ],
      },
      {
        title: "Permissions In Full",
        content: [
          "RECEIVE_BOOT_COMPLETED: to set your timer and bedtime again after the Fire TV restarts.",
          "SCHEDULE_EXACT_ALARM: so the timer ends on the minute you chose.",
          "USE_FULL_SCREEN_INTENT: on newer Fire TV software, the goodnight screen can only come to the front through a full-screen notification. It is used for nothing else.",
          "FOREGROUND_SERVICE, FOREGROUND_SERVICE_MEDIA_PLAYBACK and FOREGROUND_SERVICE_SPECIAL_USE: to keep a sleep sound playing, or to fade the volume over the last minutes of the timer, while another app is on screen.",
          "That is the complete list. Drift Off does not request internet, storage, camera, microphone, contacts, location or phone permissions.",
        ],
      },
      {
        title: "Payments",
        content: [
          "Drift Off is a paid app sold through the Amazon Appstore. Amazon handles the purchase. The app contains no in-app purchases, no subscriptions and no advertising, and it never sees any payment details.",
        ],
      },
      {
        title: "Children",
        content: [
          "Drift Off is set up by grown-ups; its bedtime feature helps parents end TV time at night. It collects no personal information from anyone, including children, and contains no advertising, chat, web browser or links out of the app.",
        ],
      },
      {
        title: "Changes",
        content: [
          "If a future version of Drift Off ever collects anything, this page will be updated before that version is released, and the change will be described plainly here.",
        ],
      },
      {
        title: "Contact",
        content: [
          "For any privacy question about Drift Off, email sufyantechsolutions@gmail.com with the subject line: Drift Off Privacy.",
        ],
      },
    ],
  },
  {
    slug: "vigil",
    name: "Vigil",
    updated: "October 2026",
    description:
      "What the Vigil IP camera viewer for Fire TV does and does not collect. It connects only to the cameras you add, over your home network; no cloud, no account.",
    intro:
      "Vigil shows your own security cameras (RTSP and ONVIF cameras and recorders) live on your Fire TV. It talks to the cameras directly over your home network. There is no Vigil server, no cloud and no account, and nothing about you or your cameras is collected. This page sets out exactly what the app can and cannot do, including why it asks for the permissions it asks for.",
    sections: [
      {
        title: "What Vigil Collects",
        content: [
          "Nothing. Vigil has no accounts, no sign-in, no analytics, no advertising, no crash reporting and no tracking of any kind. It does not ask for your name, email, phone number or location.",
          "There is no Vigil server. The app never sends your camera pictures, addresses or logins anywhere; the developer cannot see them.",
        ],
      },
      {
        title: "Your Cameras And Their Video",
        content: [
          "The video goes straight from your camera to your Fire TV over your home network. Vigil shows it on screen and does not record, store or upload it.",
          "For each camera you add, Vigil keeps its name, brand, network address, stream address and login (username and password) in the app's own private storage on the Fire TV, so it can connect again. Other apps cannot read it, and it is deleted when you delete the camera or uninstall the app.",
          "Vigil's own data is excluded from Android backups, so your camera logins are not copied to any backup account.",
        ],
      },
      {
        title: "Finding Cameras On Your Network",
        content: [
          "\"Find cameras\" sends a standard ONVIF hello message on your home network and lists the cameras that answer. When you choose one and type its login, Vigil asks that camera, and only that camera, for its stream addresses. Nothing is sent outside your home network.",
        ],
      },
      {
        title: "Adding A Camera From Your Phone",
        content: [
          "While the \"Use your phone\" screen is open, the Fire TV serves a small web page on your home network at a random address shown in the QR code. The camera details you type on your phone go directly to your Fire TV. The page stops the moment you leave that screen, and nothing passes through the internet.",
        ],
      },
      {
        title: "Permissions In Full",
        content: [
          "INTERNET and ACCESS_NETWORK_STATE: to receive the video from your cameras on the home network and to ask ONVIF cameras for their stream addresses. Vigil contacts nothing on the internet.",
          "ACCESS_WIFI_STATE and CHANGE_WIFI_MULTICAST_STATE: \"Find cameras\" sends the ONVIF hello by Wi-Fi multicast, which some Fire TVs only let through when an app asks for it.",
          "That is the complete list. Vigil does not request storage, camera, microphone, contacts, location or phone permissions.",
        ],
      },
      {
        title: "Payments",
        content: [
          "Vigil is a paid app sold through the Amazon Appstore. Amazon handles the purchase. The app contains no in-app purchases, no subscriptions and no advertising, and it never sees any payment details.",
        ],
      },
      {
        title: "Children",
        content: [
          "Vigil is a home-security tool for a general audience. It collects no personal information from anyone, including children, and contains no advertising, chat, web browser or links out of the app.",
        ],
      },
      {
        title: "Changes",
        content: [
          "If a future version of Vigil ever collects anything, this page will be updated before that version is released, and the change will be described plainly here.",
        ],
      },
      {
        title: "Contact",
        content: [
          "For any privacy question about Vigil, email sufyantechsolutions@gmail.com with the subject line: Vigil Privacy.",
        ],
      },
    ],
  },
  {
    slug: "mantel",
    name: "Mantel",
    updated: "October 2026",
    description:
      "What Mantel, the clock and weather app for Fire TV, does and does not collect. It asks the internet for one thing only: the weather forecast for the city you choose.",
    intro:
      "Mantel turns your Fire TV into a clock, with twelve clock faces, the weather, world clocks and a timer. It has no account and no Mantel server, and it collects nothing about you. The only time it uses the internet is to fetch the weather forecast for the city you pick, from the Norwegian Meteorological Institute (MET Norway). This page sets out exactly what that involves.",
    sections: [
      {
        title: "What Mantel Collects",
        content: [
          "Nothing. Mantel has no accounts, no sign-in, no analytics, no advertising, no crash reporting and no tracking of any kind. It does not ask for your name, email, phone number or location.",
          "There is no Mantel server, so the developer never receives anything from the app.",
        ],
      },
      {
        title: "The Weather Forecast",
        content: [
          "To show the weather, Mantel asks MET Norway's public forecast service (api.met.no) for the forecast at the city you chose. The request contains that city's map position, taken from the list of cities built into the app and rounded to about a kilometre, together with the app's name, which MET Norway asks every app to send.",
          "This is the city's position, not yours: Mantel never reads the Fire TV's location. As with any request on the internet, MET Norway can see the internet address it comes from; its own terms cover that. Mantel asks again when the forecast runs out (about every half hour), when you choose another city or when you press \"Update the weather now\". Turning off \"Show the weather\" stops the requests altogether.",
          "Weather data: MET Norway, under the Creative Commons 4.0 BY International licence.",
        ],
      },
      {
        title: "Your First City",
        content: [
          "On first start Mantel suggests the biggest city in your Fire TV's time zone, worked out from the time-zone setting alone. You can change it at any time in the menu.",
        ],
      },
      {
        title: "Settings Kept On The Fire TV",
        content: [
          "Your choices (clock face, colour, weather city, world-clock cities, timer, chime, night hours and the like) and the last forecast are kept in the app's own private storage on the Fire TV, so the clock looks the same tomorrow and can show the weather while the internet is down. Other apps cannot read them, and they are deleted when you uninstall Mantel.",
        ],
      },
      {
        title: "Permissions In Full",
        content: [
          "INTERNET: to fetch the weather forecast described above, and for nothing else.",
          "That is the complete list. Mantel does not request storage, camera, microphone, contacts, location or phone permissions. It keeps the TV screen on while the clock is showing, which needs no permission.",
        ],
      },
      {
        title: "Payments",
        content: [
          "Mantel is a paid app sold through the Amazon Appstore. Amazon handles the purchase. The app contains no in-app purchases, no subscriptions and no advertising, and it never sees any payment details.",
        ],
      },
      {
        title: "Children",
        content: [
          "Mantel is a clock for a general audience. It collects no personal information from anyone, including children, and contains no advertising, chat, web browser or links out of the app.",
        ],
      },
      {
        title: "Changes",
        content: [
          "If a future version of Mantel ever collects anything, this page will be updated before that version is released, and the change will be described plainly here.",
        ],
      },
      {
        title: "Contact",
        content: [
          "For any privacy question about Mantel, email sufyantechsolutions@gmail.com with the subject line: Mantel Privacy.",
        ],
      },
    ],
  },
  {
    slug: "arena-scoreboard",
    name: "Arena Scoreboard",
    updated: "October 2026",
    description:
      "What Arena Scoreboard, the scoreboard and score keeper for Fire TV, does and does not collect. It works entirely on your TV and your home network; no account, no cloud.",
    intro:
      "Arena Scoreboard turns your Fire TV into a scoreboard for basketball, football, soccer, baseball, hockey, volleyball, pickleball, tennis, table tennis, badminton, cornhole, darts and any other game. Everything happens on the TV itself. There is no Arena Scoreboard server, no account and no cloud, and nothing about you is collected. This page sets out exactly what the app can and cannot do, including how the phone remote works.",
    sections: [
      {
        title: "What Arena Scoreboard Collects",
        content: [
          "Nothing. Arena Scoreboard has no accounts, no sign-in, no analytics, no advertising, no crash reporting and no tracking of any kind. It does not ask for your name, email, phone number or location.",
          "There is no Arena Scoreboard server, so the developer never receives anything from the app.",
        ],
      },
      {
        title: "Games And Settings On The Fire TV",
        content: [
          "The game in progress (team names, colours, scores, clocks and the sport's options), the options you used last for each sport, and your display choices are kept in the app's own private storage on the Fire TV, so a game survives a restart or a power cut. Other apps cannot read them, and they are deleted when you uninstall the app.",
          "Team and player names are whatever you type. They are shown only on your own TV and on phones you connect as a remote, and are never sent anywhere else.",
        ],
      },
      {
        title: "The Phone Remote",
        content: [
          "When you open \"Phone remote\", the Fire TV serves a small score page on your home network, at an address with a random code that is shown in the QR code. A phone on the same Wi-Fi that opens it sees the scoreboard and can press its buttons; the phone and the TV talk directly over your home network, and nothing passes through the internet.",
          "The page keeps working while the app is open, so a phone that scanned the code can stay connected during the game. It stops when you leave the app. Anyone you give the address to, on your own network, can score; there is nothing else they can see or change.",
        ],
      },
      {
        title: "Permissions In Full",
        content: [
          "INTERNET: only so the Fire TV can serve the phone remote page on your home network, as described above. The app contacts nothing on the internet.",
          "That is the complete list. Arena Scoreboard does not request storage, camera, microphone, contacts, location or phone permissions. It keeps the TV screen on while it is open, which needs no permission.",
        ],
      },
      {
        title: "Payments",
        content: [
          "Arena Scoreboard is a paid app sold through the Amazon Appstore. Amazon handles the purchase. The app contains no in-app purchases, no subscriptions and no advertising, and it never sees any payment details.",
        ],
      },
      {
        title: "Children",
        content: [
          "Arena Scoreboard is a scorekeeping tool for a general audience. It collects no personal information from anyone, including children, and contains no advertising, chat, web browser or links out of the app.",
        ],
      },
      {
        title: "Changes",
        content: [
          "If a future version of Arena Scoreboard ever collects anything, this page will be updated before that version is released, and the change will be described plainly here.",
        ],
      },
      {
        title: "Contact",
        content: [
          "For any privacy question about Arena Scoreboard, email sufyantechsolutions@gmail.com with the subject line: Arena Scoreboard Privacy.",
        ],
      },
    ],
  },
  {
    slug: "countdown-studio",
    name: "Countdown Studio",
    updated: "October 2026",
    description:
      "What Countdown Studio, the countdown and stage timer app for Fire TV, does and does not collect. It works entirely on your TV; no account, no cloud, no internet needed.",
    intro:
      "Countdown Studio shows countdowns to Christmas, New Year, birthdays and any date you choose on your Fire TV, and includes a stage timer, a visual timer and a stopwatch. Everything happens on the TV itself. There is no Countdown Studio server, no account and no cloud, and nothing about you is collected. This page sets out exactly what the app can and cannot do, including how the stage timer's phone remote works.",
    sections: [
      {
        title: "What Countdown Studio Collects",
        content: [
          "Nothing. Countdown Studio has no accounts, no sign-in, no analytics, no advertising, no crash reporting and no tracking of any kind. It does not ask for your name, email, phone number or location.",
          "There is no Countdown Studio server, so the developer never receives anything from the app, and the app needs no internet connection.",
        ],
      },
      {
        title: "Your Countdowns And Timers",
        content: [
          "The countdowns you add (their names, dates, times and scenes), the timer and stopwatch settings, and the messages you put on the screen are kept in the app's own private storage on the Fire TV, so they are still there after a restart. Other apps cannot read them, and they are deleted when you uninstall the app.",
          "Holiday dates are worked out on the TV itself from the TV's date and time zone.",
        ],
      },
      {
        title: "The Stage Timer's Phone Remote",
        content: [
          "When you open \"Phone remote\" on the stage timer, the Fire TV serves a small page on your home network, at an address with a random code that is shown in the QR code. A phone on the same Wi-Fi that opens it can start, pause and change the timer and put a message on the screen; the phone and the TV talk directly over your home network, and nothing passes through the internet.",
          "The page keeps working while the app is open and stops when you leave the app. Anyone you give the address to, on your own network, can control the timer; there is nothing else they can see or change.",
        ],
      },
      {
        title: "Permissions In Full",
        content: [
          "INTERNET: only so the Fire TV can serve the phone remote page on your home network, as described above. The app contacts nothing on the internet.",
          "That is the complete list. Countdown Studio does not request storage, camera, microphone, contacts, location or phone permissions. It keeps the TV screen on while it is open, which needs no permission.",
        ],
      },
      {
        title: "Payments",
        content: [
          "Countdown Studio is a paid app sold through the Amazon Appstore. Amazon handles the purchase. The app contains no in-app purchases, no subscriptions and no advertising, and it never sees any payment details.",
        ],
      },
      {
        title: "Children",
        content: [
          "Countdown Studio is for a general audience. It collects no personal information from anyone, including children, and contains no advertising, chat, web browser or links out of the app.",
        ],
      },
      {
        title: "Changes",
        content: [
          "If a future version of Countdown Studio ever collects anything, this page will be updated before that version is released, and the change will be described plainly here.",
        ],
      },
      {
        title: "Contact",
        content: [
          "For any privacy question about Countdown Studio, email sufyantechsolutions@gmail.com with the subject line: Countdown Studio Privacy.",
        ],
      },
    ],
  },
  {
    slug: "frameside",
    name: "Frameside",
    updated: "October 2026",
    description:
      "What Frameside, the photo frame and slideshow app for Fire TV, does and does not collect. Your photos go from your phone to your TV over your own Wi-Fi and stay on the TV; no account, no cloud.",
    intro:
      "Frameside turns your Fire TV into a digital photo frame. You send photos from your phone to the TV over your home Wi-Fi, and the TV shows them as a slideshow. There is no Frameside server, no account and no cloud: your photos are never uploaded to the internet, and nothing about you is collected. This page sets out exactly what the app does with your photos.",
    sections: [
      {
        title: "What Frameside Collects",
        content: [
          "Nothing. Frameside has no accounts, no sign-in, no analytics, no advertising, no crash reporting and no tracking of any kind. It does not ask for your name, email, phone number or location.",
          "There is no Frameside server, so the developer never receives anything from the app, and never sees your photos.",
        ],
      },
      {
        title: "How Photos Reach The TV",
        content: [
          "When you open \"Add photos from your phone\", the Fire TV serves a small page on your home network, at an address with a random code that is shown in the QR code. A phone on the same Wi-Fi that opens it can choose photos and send them; they travel directly from the phone to the TV over your home network and never pass through the internet.",
          "Before sending, the page on your phone turns each photo the right way up and shrinks it to TV size. The page stops when you leave the app. Anyone you give the address to, on your own network, can send photos to your TV and see small previews of the latest ones; nothing else can be seen or changed.",
        ],
      },
      {
        title: "Your Photos On The TV",
        content: [
          "Your photos, their small previews and the album names are kept in the app's own private storage on the Fire TV. Other apps cannot read them, and they are excluded from Android backups. You can delete any photo, any album, or all of them in the app, and everything is deleted when you uninstall it.",
          "Frameside keeps only the picture itself at TV size, not the original file; details such as where a photo was taken are not stored.",
        ],
      },
      {
        title: "The Built-In Galleries",
        content: [
          "The Nature and Art pictures that come with the app are public-domain images from the US National Park Service, The Metropolitan Museum of Art and the Cleveland Museum of Art, stored inside the app. Showing them involves no internet connection.",
        ],
      },
      {
        title: "Permissions In Full",
        content: [
          "INTERNET: only so the Fire TV can serve the page your phone uses to send photos, on your home network, as described above. The app contacts nothing on the internet.",
          "That is the complete list. Frameside does not request storage, camera, microphone, contacts, location or phone permissions. It keeps the TV screen on while it is open, which needs no permission.",
        ],
      },
      {
        title: "Payments",
        content: [
          "Frameside is a paid app sold through the Amazon Appstore. Amazon handles the purchase. The app contains no in-app purchases, no subscriptions and no advertising, and it never sees any payment details.",
        ],
      },
      {
        title: "Children",
        content: [
          "Frameside is for a general audience. It collects no personal information from anyone, including children, and contains no advertising, chat, web browser or links out of the app.",
        ],
      },
      {
        title: "Changes",
        content: [
          "If a future version of Frameside ever collects anything, this page will be updated before that version is released, and the change will be described plainly here.",
        ],
      },
      {
        title: "Contact",
        content: [
          "For any privacy question about Frameside, email sufyantechsolutions@gmail.com with the subject line: Frameside Privacy.",
        ],
      },
    ],
  },
  {
    slug: "minaret",
    name: "Minaret",
    updated: "October 2026",
    description:
      "What Minaret, the prayer times and masjid display app for Fire TV, does and does not collect. Prayer times are calculated on the TV; no account, no location tracking, nothing sent to the internet.",
    intro:
      "Minaret shows prayer times on your Fire TV, at home or in a masjid. It works out every time on the TV itself from the position of the sun, for a city you choose by hand. There is no Minaret server, no account and no cloud, and nothing about you is collected. This page sets out exactly what the app keeps and why.",
    sections: [
      {
        title: "What Minaret Collects",
        content: [
          "Nothing. Minaret has no accounts, no sign-in, no analytics, no advertising, no crash reporting and no tracking of any kind. It does not ask for your name, email, phone number or location.",
          "There is no Minaret server, so the developer never receives anything from the app.",
        ],
      },
      {
        title: "Your Place And The Prayer Times",
        content: [
          "Minaret does not use the TV's location. On first start it suggests the biggest city in the TV's time zone; you confirm it, pick another from the list of cities built into the app, or type coordinates. The city, the calculation method and your other settings are kept only on the TV.",
          "The prayer times, the Hijri date and the Qibla direction are calculated on the TV. No internet connection is used for any of them.",
        ],
      },
      {
        title: "Setting Up From Your Phone",
        content: [
          "When you open \"Set up from your phone\", the Fire TV serves a small page on your home network, at an address with a random code that is shown in the QR code. A phone on the same Wi-Fi that opens it can change the masjid's name, iqamah and Jumu'ah times and notices, send an adhan recording, and view the month's timetable. Everything travels directly between the phone and the TV over your home network and never passes through the internet.",
          "The page stops when you leave the app. Anyone you give the address to, on your own network, can make these changes; nothing else on the TV can be seen or changed.",
        ],
      },
      {
        title: "Adhan Recordings And Notices",
        content: [
          "An adhan recording you send is stored in the app's own private storage on the Fire TV and played only on that TV. So are the masjid name and notices you type. Other apps cannot read them, and they are excluded from Android backups. You can remove a recording in the app, and everything is deleted when you uninstall it.",
        ],
      },
      {
        title: "Permissions In Full",
        content: [
          "INTERNET: only so the Fire TV can serve the page your phone uses to set it up, on your home network, as described above. The app contacts nothing on the internet.",
          "That is the complete list. Minaret does not request location, storage, camera, microphone, contacts or phone permissions. It keeps the TV screen on while it is open, which needs no permission.",
        ],
      },
      {
        title: "Payments",
        content: [
          "Minaret is a paid app sold through the Amazon Appstore. Amazon handles the purchase. The app contains no in-app purchases, no subscriptions and no advertising, and it never sees any payment details.",
        ],
      },
      {
        title: "Children",
        content: [
          "Minaret is for a general audience. It collects no personal information from anyone, including children, and contains no advertising, chat, web browser or links out of the app.",
        ],
      },
      {
        title: "Changes",
        content: [
          "If a future version of Minaret ever collects anything, this page will be updated before that version is released, and the change will be described plainly here.",
        ],
      },
      {
        title: "Contact",
        content: [
          "For any privacy question about Minaret, email sufyantechsolutions@gmail.com with the subject line: Minaret Privacy.",
        ],
      },
    ],
  },
  {
    slug: "device-vitals",
    name: "Device Vitals",
    updated: "October 2026",
    description:
      "What Device Vitals, the battery health, storage and cleaner app, does and does not collect. It has no internet permission: everything it reads stays on your device.",
    intro:
      "Device Vitals checks your battery's health, shows what fills your storage, and helps you clean out junk files. To do that it reads information about your device, its files and its apps, but it has no permission to use the internet at all, so nothing it reads can ever leave your device. There is no account, no server and no advertising. This page sets out exactly what the app reads and why.",
    sections: [
      {
        title: "What Device Vitals Collects",
        content: [
          "Nothing. Device Vitals has no accounts, no sign-in, no analytics, no advertising, no crash reporting and no tracking of any kind. It does not ask for your name, email, phone number or location.",
          "The app does not even request Android's internet permission, so it cannot send anything anywhere. The developer never receives any information from it.",
        ],
      },
      {
        title: "Battery Readings",
        content: [
          "The app reads the battery's level, charging current, voltage, temperature and the capacity figures Android reports. If you turn on the optional battery monitor, it keeps a log of these readings and of each charge, so it can measure how much your battery holds and ring the charge and heat alarms you set.",
          "This log is kept in the app's own private storage on your device, covers recent days only, and is deleted when you uninstall the app. The monitor shows a notification while it runs and can be turned off at any time.",
        ],
      },
      {
        title: "Your Files",
        content: [
          "With your permission (All files access on Android 11 and newer, storage access on older versions), the app looks through shared storage to sort files by kind, find large files, duplicates and junk such as temporary files, logs, thumbnails and leftover installers. It reads names, sizes and dates, and compares the content of same-sized files only to find exact duplicates.",
          "Nothing is deleted unless you choose it and confirm. Your files are never copied, uploaded or shared by the app.",
        ],
      },
      {
        title: "Your Apps",
        content: [
          "With your permission (Usage access), the app reads how much space each installed app uses, its cache, and when you last opened it, so it can show which apps use the most space and how much cache can be cleared. It lists your installed apps for the same reason. From the app list you can open Android's own app info or uninstall screens.",
          "Clearing app caches is done by Android itself, after it asks you to confirm.",
        ],
      },
      {
        title: "Permissions In Full",
        content: [
          "All files access / storage: to find and remove junk, large files and duplicates you choose. Usage access and the list of installed apps: to show app sizes and caches. Uninstall request: to open Android's uninstall dialog for an app you pick.",
          "Foreground service, notifications, start at boot, vibration and battery-optimisation exemption: only for the optional battery monitor and its alarms. That is the complete list; there is no internet, camera, microphone, contacts or location permission.",
        ],
      },
      {
        title: "Payments",
        content: [
          "Device Vitals is a paid app sold through the Amazon Appstore. Amazon handles the purchase. The app contains no in-app purchases, no subscriptions and no advertising, and it never sees any payment details.",
        ],
      },
      {
        title: "Children",
        content: [
          "Device Vitals is for a general audience. It collects no personal information from anyone, including children, and contains no advertising, chat, web browser or links out of the app.",
        ],
      },
      {
        title: "Changes",
        content: [
          "If a future version of Device Vitals ever collects anything, this page will be updated before that version is released, and the change will be described plainly here.",
        ],
      },
      {
        title: "Contact",
        content: [
          "For any privacy question about Device Vitals, email sufyantechsolutions@gmail.com with the subject line: Device Vitals Privacy.",
        ],
      },
    ],
  },
  {
    slug: "brisk",
    name: "Brisk",
    updated: "October 2026",
    description:
      "What Brisk, the QR code scanner and QR code maker, does and does not collect. It has no internet permission: codes are read on your device and your history stays there.",
    intro:
      "Brisk reads QR codes and barcodes with your camera or from your pictures, and makes QR codes of your own. It does all of this on your device. Brisk has no permission to use the internet, no account and no advertising, so nothing it reads can be sent anywhere. This page sets out exactly what the app touches and why.",
    sections: [
      {
        title: "What Brisk Collects",
        content: [
          "Nothing. Brisk has no accounts, no sign-in, no analytics, no advertising, no crash reporting and no tracking of any kind. It does not ask for your name, email, phone number or location.",
          "The app does not request Android's internet permission, so it cannot send anything anywhere. The developer never receives any information from it.",
        ],
      },
      {
        title: "The Camera",
        content: [
          "With your permission, Brisk uses the camera only to look for codes in the live picture. The picture is read in memory, frame by frame, and thrown away at once. Nothing is recorded, saved or shared. You can refuse the camera and still scan pictures from your gallery.",
        ],
      },
      {
        title: "Pictures You Choose",
        content: [
          "When you pick a picture to scan, or share one to Brisk, the app reads that one picture to find codes in it. When you add your own logo to a QR code you make, that picture is used to draw the code. Brisk keeps no copy of either picture.",
          "QR codes you save are written to your gallery in Pictures/Brisk; codes you share go only to the app you choose.",
        ],
      },
      {
        title: "Your History",
        content: [
          "The codes you scan or make are kept in a history in the app's own private storage on your device, so you can find them again. You can delete any of them, clear it all, or turn history off in Settings, and everything is deleted when you uninstall the app. If you export your history, the spreadsheet goes only where you send it.",
        ],
      },
      {
        title: "Links And Actions",
        content: [
          "Brisk checks links for warning signs on your device, without contacting any server. A link, a map, a search, a phone call, a message or a payment is only handed to the matching app on your device when you tap its button. What that app does is covered by its own privacy policy.",
        ],
      },
      {
        title: "Permissions In Full",
        content: [
          "CAMERA: to read codes, as described above. VIBRATE: a short buzz when a code is read. WRITE_EXTERNAL_STORAGE, on Android 9 and older only: to save a QR code you made to your gallery.",
          "That is the complete list. Brisk does not request internet, location, contacts, microphone or phone permissions; adding a contact or an event opens your own contacts or calendar app for you to confirm.",
        ],
      },
      {
        title: "Payments",
        content: [
          "Brisk is a paid app sold through the Amazon Appstore. Amazon handles the purchase. The app contains no in-app purchases, no subscriptions and no advertising, and it never sees any payment details. Payment QR codes you scan are only displayed; paying happens in your own bank or wallet app.",
        ],
      },
      {
        title: "Children",
        content: [
          "Brisk is for a general audience. It collects no personal information from anyone, including children, and contains no advertising or chat.",
        ],
      },
      {
        title: "Changes",
        content: [
          "If a future version of Brisk ever collects anything, this page will be updated before that version is released, and the change will be described plainly here.",
        ],
      },
      {
        title: "Contact",
        content: [
          "For any privacy question about Brisk, email sufyantechsolutions@gmail.com with the subject line: Brisk Privacy.",
        ],
      },
    ],
  },
  {
    slug: "hush-diary",
    name: "Hush Diary",
    updated: "October 2026",
    description:
      "What Hush Diary, the private diary with a lock, does and does not collect. It has no internet permission: your entries and photos are encrypted and stay on your device.",
    intro:
      "Hush Diary is a private diary. Everything you write, every mood you record and every photo you add stays on your device, encrypted, and the app has no permission to use the internet. There is no account, no advertising and no analytics. This page sets out exactly what the app touches and why.",
    sections: [
      {
        title: "What Hush Diary Collects",
        content: [
          "Nothing. Hush Diary has no accounts, no sign-in, no analytics, no advertising, no crash reporting and no tracking of any kind. The developer never receives your entries, your moods, your photos or anything else from the app.",
          "The app does not request Android's internet permission, so it cannot send anything anywhere.",
        ],
      },
      {
        title: "Your Diary",
        content: [
          "Your entries, with their titles, text, moods, weather, activities, tags and dates, are stored only in the app's own private storage on your device. They are encrypted with AES-256.",
          "The first name you may give for the greeting, and your settings, are stored on your device only.",
          "Everything is deleted when you uninstall the app. Hush Diary is excluded from Android's cloud backup, so your diary is never copied to any online backup without you knowing; only a backup file you make yourself leaves the app.",
        ],
      },
      {
        title: "The Lock",
        content: [
          "If you set a PIN or password, your diary's key is kept only in a form locked by that PIN or password, and by a recovery code that is shown to you once and can be viewed again only while the diary is open. Neither your PIN, your password nor your recovery code is stored in readable form or sent anywhere.",
          "Nobody, including the developer, can open your diary without your PIN, password or recovery code. If you lose all of them, the diary cannot be recovered.",
          "When \"Hide in recent apps\" is on, the app also blocks screenshots of itself.",
        ],
      },
      {
        title: "Photos",
        content: [
          "When you add a photo to an entry, you choose it from your gallery. Hush Diary makes its own resized copy, encrypts it and keeps it in its private storage. Your original photo is not changed, and the app reads no other pictures.",
        ],
      },
      {
        title: "Backups, Exports And Sharing",
        content: [
          "A backup is one file, locked with a password you choose when you make it, saved to the place you pick. A PDF or text export is not locked, so anyone who has the file can read it. Sharing an entry as text hands it only to the app you choose. What happens to a file or text after that is up to you and that app.",
        ],
      },
      {
        title: "Notifications",
        content: [
          "If you turn on the daily reminder, the app shows a notification at the time you choose. It never contains anything from your diary. POST_NOTIFICATIONS and RECEIVE_BOOT_COMPLETED are used only for this reminder.",
        ],
      },
      {
        title: "Permissions In Full",
        content: [
          "POST_NOTIFICATIONS: the optional daily reminder. RECEIVE_BOOT_COMPLETED: to set the reminder again after a restart.",
          "That is the complete list. Hush Diary does not request internet, camera, microphone, location, contacts or storage permissions; photos are picked through the system's own picker.",
        ],
      },
      {
        title: "Payments",
        content: [
          "Hush Diary is a paid app sold through the Amazon Appstore. Amazon handles the purchase. The app contains no in-app purchases, no subscriptions and no advertising, and it never sees any payment details.",
        ],
      },
      {
        title: "Children",
        content: [
          "Hush Diary is for a general audience and is not directed at children under 13. It collects no personal information from anyone, and contains no advertising, chat or social features.",
        ],
      },
      {
        title: "Changes",
        content: [
          "If a future version of Hush Diary ever collects anything, this page will be updated before that version is released, and the change will be described plainly here.",
        ],
      },
      {
        title: "Contact",
        content: [
          "For any privacy question about Hush Diary, email sufyantechsolutions@gmail.com with the subject line: Hush Diary Privacy.",
        ],
      },
    ],
  },
];

export function getPrivacyPolicy(slug: string): AppPrivacyPolicy | undefined {
  return privacyPolicies.find(p => p.slug === slug);
}
