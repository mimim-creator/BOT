exports.menu = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2, grupch3) => {
	return `*MENU ${BotName}*

Hi, *${id.split("@s.whatsapp.net")[0]}* 👋️
Berikut adalah beberapa fitur yang ada pada bot ini$✨

📆 *${tampilTanggal}*
⏱️ *${tampilWaktu}*

         ───
♻ Command / Perintah :
         ───
         
╭───「 *Menu* 」
├≽ ️$sticker
├≽️ $pantun
├≽️ $quotes
├≽️ $foto cewek/cowok
├≽️ $tts
├≽️ $say
├≽️ $quran
├≽️ $twt
├≽️ $fb
├≽️ $ig
├≽️ $ytmp3
├≽️ $yt
├≽️ $wiki
├≽️ $lirik
├≽️ $nulis
├≽️ $sholat (nama daerahmu)
├≽️ $toxic (anjing)
├≽️ $fotoanime
├≽️ $covid
├≽️ $alay
├≽️ $pokemon
├≽️ $loli
├≽️ $katabijak
├≽️ $fakta
├≽️ $hentai
├≽️ $nama
├≽️ $pasangan
├≽️ $owner
├≽️ $creator
├≽️ $cek
├≽️ #info
╰─────────

[ Keterangan ]

» $sticker Contoh: kirim gambar dengan caption $sticker
» $pantun Contoh: $pantun
» $quotes Contoh: $quotes
» $foto Contoh: $foto cowo
» $tts Contoh: $tts MIMIM ganteng (${BotName} akan mengirim link download)
» $say Contoh: $say halo MIMIM ganteng
» $quran Contoh: $quran
» $twt Contoh: $twt https://tweter.com/
» $fb Contoh: $fb https://facebook.com/Rokhim
» $ig Contoh: $ig https://instagram.com/kreasi.editing_official
» $ytmp3 Contoh: $ytmp3 https://youtu.be/
» $yt Contoh: $yt https://youtu.be/
» $wiki Contoh: $wiki Babi
» $lirik Contoh: $lirik
» $nulis Contoh: $nulis MIMIM Gans
» $fotoanime Contoh: $fotoanime
» $covid Contoh: $covid
» $nama Contoh $nama MIMIM
» $pasangan Contoh: $pasangan MIMIM & AMANDA
» #info Contoh: #info
 
 
├≽️💰 JANGAN  LUPA DONASI AGAR BOT AKTIF TERUS$
├≽️💰 MAU DONASI? SILAHKAN KETIK #donate
 
├───≽️「 *ABOUT* 」
 
 
├≽️Follow akun instagram admin ${kreasi.editing_official}
 
├───≽️「 *INFORMASI COVID-19 TERBARU$* 」
 
├≽️📊 POSITIF: *${corohelp.confirmed.value}*
├≽️📉 SEMBUH: *${corohelp.recovered.value}*
├≽️📈 MENINGGAL: *${corohelp.deaths.value}*
├≽️🗂️ UPDATE: *${corohelp.lastUpdate}*
 
├≽️💫 _TETAP JAGA KESEHATAN DAN SELALU PAKAI MASKER$_
 
├≽️☎️ WA : *${087848115476}*
 
├≽️📌 *Modifikasi By MIMIM Creator* ‼️
├≽️📌 *Kalo ada bug maklumin yah* ‼️
├≽️📌 *Bot ini berjalan ${kapanbotaktif}* ‼️


├≽️💥 *Group WhatsApp* ; ${https://chat.whatsapp.com/DSId5QFJwHT9M6sFRMEKuq}
├≽️💥 *YouTube* : ${nggak ada}
├≽️💥 *Instagram* : ${kreasi.editing_official}
 
 
├≽️   📍*MADE BY ${BotName}*📍
╰ ───`
}
