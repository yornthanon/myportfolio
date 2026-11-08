// Telegram contact form backend
// Set these env vars before running:
//   TELEGRAM_BOT_TOKEN=your_bot_token
//   TELEGRAM_CHAT_ID=your_chat_id
//   PORT=3001 (optional)

require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

if (!BOT_TOKEN || !CHAT_ID) {
  console.warn(
    "[telegram-contact] TELEGRAM_BOT_TOKEN and/or TELEGRAM_CHAT_ID not set. " +
      "Contact form will fail until configured.",
  );
}

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({ ok: false, error: "Missing required fields" });
    }

    if (!BOT_TOKEN || !CHAT_ID) {
      return res.status(500).json({ ok: false, error: "Server not configured for Telegram" });
    }

    const text =
      `*New contact form submission*\n\n` +
      `*Name:* ${escapeMarkdown(name)}\n` +
      `*Email:* ${escapeMarkdown(email)}\n\n` +
      `*Message:*\n${escapeMarkdown(message)}`;

    const tgRes = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text,
          parse_mode: "Markdown",
          disable_web_page_preview: true,
        }),
      },
    );

    const tgData = await tgRes.json();

    if (!tgRes.ok || !tgData.ok) {
      console.error("[telegram-contact] Telegram API error:", tgData);
      return res.status(502).json({ ok: false, error: "Failed to send via Telegram" });
    }

    return res.json({ ok: true });
  } catch (err) {
    console.error("[telegram-contact] Unexpected error:", err);
    return res.status(500).json({ ok: false, error: "Internal server error" });
  }
});

function escapeMarkdown(text) {
  return String(text).replace(/([_*[\]()~`>#+\-=|{}.!])/g, "\\$1");
}

app.listen(PORT, () => {
  console.log(`[telegram-contact] server listening on http://localhost:${PORT}`);
});
