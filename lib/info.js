exports.info = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2, grupch3) => {
	return `*MENU ${BotName}*
  
Hi, *${id.split("@s.whatsapp.net")[0]}* 👋️
Berikut adalah info pada bot ini!✨

         ───
📆 *${tampilTanggal}*
⏱️ *${tampilWaktu}*
         ───


╭───「 *INFO BOT!* 」
   
├≽️⚜ *GITHUB*: https://github.com/mimim-creator/BOT
├≽️⚜ *AUTHOR*: _MIMIM Creator_
├≽️⚜ *DESIGNER*: _MIMIM Creator_
├≽️⚜ *YOUTUBE*: _NGGAK ADA:V_
├≽️⚜ *SCRIPT ORIGINAL BY*: ABDUL MUTTAQIN / FDCIABDUL

♻️ *JANGAN  LUPA DONASI AGAR BOT AKTIF TERUS!*
♻️ *MAU DONASI? SILAHKAN KETIK #donate*

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
├≽️💥 *YouTube* : ${nggak ada}
├≽️💥 *Instagram* : ${kreasi.editing_official}
 
 
├≽️   📍*MADE BY ${BotName}*📍
╰ ───`
}
