const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "233530114341";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_33_05_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxODgsXG4gICAgICAgIDE3MixcbiAgICAgICAgNDIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxODAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDM1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxOCxcbiAgICAgICAgNDIsXG4gICAgICAgIDIzNixcbiAgICAgICAgNSxcbiAgICAgICAgODEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMzUsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDc4LFxuICAgICAgICAzMyxcbiAgICAgICAgMjcsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDY2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDUsXG4gICAgICAgIDEsXG4gICAgICAgIDI2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjQ4LFxuICAgICAgICA3MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMixcbiAgICAgICAgMjksXG4gICAgICAgIDU3LFxuICAgICAgICAzMixcbiAgICAgICAgNjIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjA2LFxuICAgICAgICA0MSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNjEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDM4LFxuICAgICAgICAyNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTMxLFxuICAgICAgICAxNSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTE5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDU0LFxuICAgICAgICAxMyxcbiAgICAgICAgMjAxLFxuICAgICAgICA1MyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMzksXG4gICAgICAgIDE2NixcbiAgICAgICAgNTgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTcxLFxuICAgICAgICA3NyxcbiAgICAgICAgMjA2LFxuICAgICAgICA4NixcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ4LFxuICAgICAgICA2NCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDM2LFxuICAgICAgICAxOTksXG4gICAgICAgIDUsXG4gICAgICAgIDEyLFxuICAgICAgICA4MyxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTg2LFxuICAgICAgICA3MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMzgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNixcbiAgICAgICAgMTI1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDgwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDYwLFxuICAgICAgICAyNDksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTYxLFxuICAgICAgICA5MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDE5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMTA1LFxuICAgICAgICA4OCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTYwLFxuICAgICAgICA1MSxcbiAgICAgICAgNTMsXG4gICAgICAgIDQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTYzLFxuICAgICAgICA5NCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNDksXG4gICAgICAgIDQ0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDMwLFxuICAgICAgICA1OCxcbiAgICAgICAgMjYsXG4gICAgICAgIDY4LFxuICAgICAgICA2MyxcbiAgICAgICAgNSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA1MyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNTUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDk3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMixcbiAgICAgICAgMzIsXG4gICAgICAgIDI3LFxuICAgICAgICAyNyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDU4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTA1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk3LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAzMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjI3LFxuICAgICAgICA0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDg4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDU3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDkwLFxuICAgICAgICA0LFxuICAgICAgICA1NSxcbiAgICAgICAgMTM1LFxuICAgICAgICA4NyxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMzksXG4gICAgICAgIDg3LFxuICAgICAgICA3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTI0LFxuICAgICAgICA0NCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxODksXG4gICAgICAgIDY5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDk2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDExNixcbiAgICAgICAgMjU1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjE3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDk0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDc5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTEzLFxuICAgICAgICA0MCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyLFxuICAgICAgICAxMzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE3MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJsbXptMFB6aDZQS3BnMFEzUUZ4RnY1Sk81eUZnUjh6MytHZ284ZGlNakVNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzMzUzMDExNDM0MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0FEQzE4MkI5QTFDODRCMEM2RDBcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE2OTg5NTc5XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkd3MlhlQXo2UndpS1JsVEJKZXBySGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNzM0YmU0NGMtZGZlZi00ZTkzLTg0NGEtYzdmODgzMWJkYzJkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk2LFxuICAgICAgMjEsXG4gICAgICAyMjAsXG4gICAgICA5NyxcbiAgICAgIDEyMixcbiAgICAgIDE2NixcbiAgICAgIDY2LFxuICAgICAgMzksXG4gICAgICAxMixcbiAgICAgIDEyMyxcbiAgICAgIDUzLFxuICAgICAgMjE5LFxuICAgICAgMTU1LFxuICAgICAgOSxcbiAgICAgIDI1MyxcbiAgICAgIDE1MixcbiAgICAgIDU5LFxuICAgICAgMjM0LFxuICAgICAgMTk5LFxuICAgICAgMjA2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDUyLFxuICAgICAgMTMxLFxuICAgICAgMTUsXG4gICAgICAxODQsXG4gICAgICA2NixcbiAgICAgIDEyMyxcbiAgICAgIDExNyxcbiAgICAgIDIzMixcbiAgICAgIDI1NSxcbiAgICAgIDgxLFxuICAgICAgMjIsXG4gICAgICA0MyxcbiAgICAgIDI0MSxcbiAgICAgIDE2OSxcbiAgICAgIDE0MyxcbiAgICAgIDE5NSxcbiAgICAgIDMwLFxuICAgICAgMjIwLFxuICAgICAgMjM0LFxuICAgICAgMTAzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkNKWjNROE1TXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzM1MzAxMTQzNDE6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIuKAokp4VOKAol9fX+KAol/igKJf4oCiXCIsXG4gICAgXCJsaWRcIjogXCI3Nzc2MDgzNTkxNTc4NjoxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ043MzE3d0xFSUhkM0xJR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNVF4MkFjYUtNRVhQcGpBN3F0V1l5RnZtMGNjZ2ZFbDRhSEtMVlVnN1hGaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJSY2NsQWp0Z3dQeEEyQjUyMStKMHltbXMydURQNzNsZHh6RTA3YkZ5eWxkdEdjZ3JtTEl3bUY0UUl5MkF5SS8rMElkM0w3NFFveVc2QWpxeStvSWdpQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJWMXB1RWVLVXNvZkZ4MVdUbnV2aWxnN3hFN0psQUgrZ0ZQWkN2UDcvWGFCaW94RnZqTkpaTzVRUDR1SWtaZW9UY2ZnQXA3amVKTlJXZkF2TnJOVVJqZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzM1MzAxMTQzNDE6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgODlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmlcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNjk4OTU3MyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUU5RlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRTlGLmpzb24iOiAie1wia2V5RGF0YVwiOlwicmsrcGMwUGtTR0t3dlFteTVCVEhWTG9XN3FzbGRvZmtwcmVVbWtydGUxRT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozMDgwMDU5ODcwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMSwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTY5ODk1NzU3NDBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
