exports.menu = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2, grupch3) => {
	return `
	
❉──────────❉
  Hi. *${id.split("@s.whatsapp.net")[0]}* 👋️
❉──────────❉

         ───
📆 *${tampilTanggal}*
⏱️ *${tampilWaktu}*
         ───

╔════════════════════
║ *FITUR ${BotName}*
╠════════════════════
║╭──❉ *STICKER MAKER* ❉──
║│1. *.sticker*
║╰───────────
╠════════════════════
║╭──❉ *MEDIA* ❉──
║│1. *.yt* <linkyoutube>
║│3. *.ig* <linkIg>
║│4. *.fb* <linkFb>
║│5. *.twt* <linkTweet>
║╰───────────
╠════════════════════
║╭──❉ *EDUCATION* ❉──
║│1. *.wiki* <query>Wikipedia.
║│2. *.nulis* <teks>
║│3. *.quran*
║│4. *.pantun*
║│5. *.nama* <nama kamu>
║│6. *.pasangan* <Rokhim & Amanda>
║│7. *.lirik* <nama lagu>
║╰───────────
╠════════════════════
║  *${BotName}*
╠════════════════════
║╭──❉ *INFORMATION* ❉──
║│1. *.sholat* <daerah>
║│2. *.covid*
║╰───────────
╠════════════════════
║  *${BotName}*
╠════════════════════
║╭──❉ *CONTACT* ❉──
║│1. *.creator*
║│2. *.owner*
║╰───────────
╠════════════════════
║  *${BotName}*
╠════════════════════
║╭──❉ *IMPORTANT* ❉──
║│1. *.info*
║╰───────────
╠════════════════════
║  *${BotName}*
╠════════════════════
║╭──❉ *OTHERS* ❉──
║│1. *.tts* <teks>
║│2. *.quotes*
║│3. *.donasi*
║│4. *.foto cewek*
║│5. *.foto cowok*
║│6. *.pokemon*
║│7. *.loli*
║│8. *.hentai*
║│9. *.fotoanime*
║│10. *.namaninja* <nama lu>
║│11. *.alay*  <teks>
║│12. *.say*  <teks>
║╰───────────
╠════════════════════
║  *${BotName}*
╠════════════════════
║╭──❉ *SOSMED ADMIN* ❉──
║│1. *Group WhatsApp*
║│ _${grupch1}_
║│2. *Facebook <Like>*
║│ _${grupch2}_
║│3. *Instagram <Follow>*
║│ _${instagramlu}_
║│4. *Creator ${BotName}*
║│ _${whatsapplu}_
║╰───────────
╠════════════════════
║ *MADE BY MIMIM CREATOR*
╚════════════════════`
}
