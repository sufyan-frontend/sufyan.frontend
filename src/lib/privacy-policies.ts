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
];

export function getPrivacyPolicy(slug: string): AppPrivacyPolicy | undefined {
  return privacyPolicies.find(p => p.slug === slug);
}
