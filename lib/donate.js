exports.donate = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2, grupch3) => {
	return `*MENU DONASI ${BotName}*
  
Hi, *${id.split("@s.whatsapp.net")[0]}* 👋️
Mau donasi? ✨

         ───
📆 *${tampilTanggal}*
⏱️ *${tampilWaktu}*
         ───
         
╭───「 *Silahkan donasi dibawah ini* 」

├≽️⚜ *PULSA*: 0878-4811-5476
├≽️⚜ *PULSA*: 0878-4811-5476
├≽️⚜ *PULSA*: 0878-4811-5476

├───≽️「 *ABOUT* 」
 
 
├≽️Follow akun instagram admin ${kreasi.editing_official}
 
├───≽️「 *INFORMASI COVID-19 TERBARU!* 」
 
├≽️📊 POSITIF: *${corohelp.confirmed.value}*
├≽️📉 SEMBUH: *${corohelp.recovered.value}*
├≽️📈 MENINGGAL: *${corohelp.deaths.value}*
├≽️🗂️ UPDATE: *${corohelp.lastUpdate}*
 
├≽️💫 _TETAP JAGA KESEHATAN DAN SELALU PAKAI MASKER!_
 
├≽️☎️ WA : *${087848115476}*
 
├≽️📌 *Gunakan dengan bijak* ‼️
├≽️📌 *Bot ini berjalan ${kapanbotaktif}* ‼️


├≽️💥 *Group WhatsApp* ; ${https://chat.whatsapp.com/DSId5QFJwHT9M6sFRMEKuq}
├≽️💥 *YouTube* : ${Nggak ada}
├≽️💥 *Instagram* : ${kreasi.editing_official}
 
 
├≽️   📍*MADE BY ${BotName}*📍
╰ ───`
}
