//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUF2djlzNjBaMWZIa3RjcDRIUGc3d3pJNkhHYWl5ZnNJVThCSTcwOE1sZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ1E1QUpOT3Y0aWNCdFN6VEJuZkp5enJERFVqNmlMSmxtL2JUWWF1U01pcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjR0JVMWJnSzNhbzVFZjRFZDdyQ05rMnZKUVZCbFQxeEczcEoxc204RUZzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrakpRcnE2bjNTWXBSUWN0WVdIdWRFcy9RMU9hMkJOTklTV09BSTFjajFRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklORWRYaXlXeGVxVU93SG83Z3o0S0RhdkpIUG9qOTl0QU9tRUNCT0tsbDQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik15ckZTNVBmQXlUbC9SYm5ZbEh3M1UyRnRkdGF0U2hzMnNkc0Jqa05oVjg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUM5UVlNQnIxZ2M5MlREUDZSSFkwQXA1bVdsOUpnUjFaNFFwckZPTjdVST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiclVSR1pTbUJIay9pZG1MWjRRNUQvaVVZcnVZMDdSWndHRkxOUjF2djVqaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InN2ZUVKWWdaQzRWYlhzd1JBN2h0NGFIeEh6OXNSWHdEU28vMGRJVGlac2lBbHhoajVUT3A4UmFlVkxBY2xlTmtOQnQ1cndvL3hoV0FuN2N2QXdTU0FBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTY3LCJhZHZTZWNyZXRLZXkiOiJwcklPRVo0VzQwS2R3OFJwV0h6WVREaktubFFhYnB0TkdWbjhzUXpxMFRrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6NjEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo2MSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiItYzlUOGJQb1RQLTBELXJaTEQydURBIiwicGhvbmVJZCI6IjdmNmZkYTY0LWE1OTktNGRjNi04ZTQyLWU2M2U3ZWFmZTBiOCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvSE1tS3ZrSnhSdUNxNWV3bWJicEZlWGVFbU09In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiLzdzNGEwWm1GWWdrUDVoUjJhTzFUMlRFR3hFPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkgyNEwyRkxGIiwibWUiOnsiaWQiOiI5NDc3NDExNTUxMjozN0BzLndoYXRzYXBwLm5ldCIsImxpZCI6IjE2ODY3NjU1MjY2NzM2NDozN0BsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ012ZHRxWURFTzN2OHNZR0dCMGdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Im55S2hYMGV0YkFGQnNEeUxqdStVYURHbjBZQUpiZTB3M1Nnb2hpamN5SHM9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlpPZGthaVBMbU1QRnREV3pHRVdpM2RLVEhJOWNPU3R6SG1XQWRNV0dxbVhaRysxYlpDVVI0dnplUU9zTnh0MGhtRjJoN2I4TUJrbjFCVkxiU1pmckNBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJKM2grcjFpb2lCa0NrZlVWSXo5Uk0rWmFaM3VtZGRQRnlVN0hvdE4vREc5dko2bExTZWxNVTBaZTFVaUdSRTF6RVhFWlJNWjR1YnBxaUYxbXVZY0xEdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0Nzc0MTE1NTEyOjM3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlo4aW9WOUhyV3dCUWJBOGk0N3ZsR2d4cDlHQUNXM3RNTjBvS0lZbzNNaDcifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBSUlCUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1OTI5NTQ4MywibGFzdFByb3BIYXNoIjoiM1I5WjM5In0=",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "your account crated number",
  PASSWORD: 
    process.env.PASSWORD || "your password",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
