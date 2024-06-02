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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "233530088115";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_18_05_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDc2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDM3LFxuICAgICAgICAyOSxcbiAgICAgICAgOTMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTc3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDI4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNTYsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNjIsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTUsXG4gICAgICAgIDkwLFxuICAgICAgICA1MSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDc5LFxuICAgICAgICAxODksXG4gICAgICAgIDYwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTY1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIyNixcbiAgICAgICAgNzAsXG4gICAgICAgIDU3LFxuICAgICAgICA0LFxuICAgICAgICAxODksXG4gICAgICAgIDIxOCxcbiAgICAgICAgNjgsXG4gICAgICAgIDQxLFxuICAgICAgICA5NixcbiAgICAgICAgMTU0LFxuICAgICAgICA2NyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDI5LFxuICAgICAgICAzNCxcbiAgICAgICAgNjIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjIzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDgsXG4gICAgICAgIDYyLFxuICAgICAgICAxMjksXG4gICAgICAgIDgyLFxuICAgICAgICAyNDksXG4gICAgICAgIDE4LFxuICAgICAgICAxMCxcbiAgICAgICAgODEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjAzLFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDYyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNCxcbiAgICAgICAgMTQsXG4gICAgICAgIDUyLFxuICAgICAgICA3MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDI3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxODUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTkxLFxuICAgICAgICA5MixcbiAgICAgICAgNTYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTA1LFxuICAgICAgICA1OSxcbiAgICAgICAgMjQzLFxuICAgICAgICA1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDQ3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDY3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDYxLFxuICAgICAgICAxNCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDMyLFxuICAgICAgICA4OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgODUsXG4gICAgICAgIDk1LFxuICAgICAgICAxNCxcbiAgICAgICAgMTM2LFxuICAgICAgICA2NyxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMyxcbiAgICAgICAgNzIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDM5LFxuICAgICAgICA4OSxcbiAgICAgICAgNjQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMjksXG4gICAgICAgIDIyLFxuICAgICAgICAxODUsXG4gICAgICAgIDksXG4gICAgICAgIDMyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxODQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNTMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNjksXG4gICAgICAgIDE3MixcbiAgICAgICAgMTc1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNDgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTU5LFxuICAgICAgICA1OCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDQ0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTAxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk1LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTExXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk3LFxuICAgICAgICA0OCxcbiAgICAgICAgMjI4LFxuICAgICAgICA0NixcbiAgICAgICAgMjcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgODYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDQ3LFxuICAgICAgICAxOSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDYzLFxuICAgICAgICAxODksXG4gICAgICAgIDgxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDQ4LFxuICAgICAgICAxODQsXG4gICAgICAgIDE3LFxuICAgICAgICAyMjksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDExNixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE4LFxuICAgICAgICAzMixcbiAgICAgICAgODAsXG4gICAgICAgIDY0LFxuICAgICAgICAwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDY0LFxuICAgICAgICA0NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjQwLFxuICAgICAgICA2MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDUyLFxuICAgICAgICAxMTksXG4gICAgICAgIDE4LFxuICAgICAgICAxODIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxODMsXG4gICAgICAgIDg1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTYzLFxuICAgICAgICA0MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMixcbiAgICAgICAgMjUwLFxuICAgICAgICAxNzksXG4gICAgICAgIDExMixcbiAgICAgICAgMjI3LFxuICAgICAgICAxMjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEyOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ5RER5aHk5b09lY09nVEhTL3dMRXdlSU0rZVA1M0JoK3F1N2plMkd5SW9ZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIyek45b01BWFQxZUtCYnRwMXRkaE5nXCIsXG4gIFwicGhvbmVJZFwiOiBcImEyMjQzMTNiLTgwOWQtNGZhNi05ZDc1LWRlNDVkNzM4MTM5OFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDAsXG4gICAgICAyMDQsXG4gICAgICAyMTUsXG4gICAgICAxNjAsXG4gICAgICAxNzEsXG4gICAgICAxOSxcbiAgICAgIDI1MyxcbiAgICAgIDE4MCxcbiAgICAgIDE1OSxcbiAgICAgIDIzMyxcbiAgICAgIDIwMixcbiAgICAgIDE4NSxcbiAgICAgIDE4NSxcbiAgICAgIDI2LFxuICAgICAgMjE4LFxuICAgICAgNixcbiAgICAgIDcwLFxuICAgICAgMTI1LFxuICAgICAgMTA0LFxuICAgICAgNDlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjA5LFxuICAgICAgNzksXG4gICAgICAyMjEsXG4gICAgICAyNCxcbiAgICAgIDI3LFxuICAgICAgMTU0LFxuICAgICAgOTQsXG4gICAgICA0NyxcbiAgICAgIDIyLFxuICAgICAgMixcbiAgICAgIDEwNSxcbiAgICAgIDEzOCxcbiAgICAgIDc5LFxuICAgICAgMjUzLFxuICAgICAgNSxcbiAgICAgIDQ1LFxuICAgICAgMTc5LFxuICAgICAgMjUsXG4gICAgICA0MyxcbiAgICAgIDQ1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjdEVDFGQUM4XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzM1MzAwODgxMTU6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcImVzY29iZW4xNlwiLFxuICAgIFwibGlkXCI6IFwiMjM5ODM1Nzg4ODg2MDE3OjVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTkRXMWFRQ0VQT2QzTElHR0FjZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJqV1k0WFJ5UE1kZTVZanVCL0R3MDQzRlJYVWVDV2p0VkJkRHlQQ043M0g0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInhGRXdFUTczMThHc3VlOVBVU2JLVDhNOEdhN0xSMnh6eC81dkEvS0lUK3RPWUhJeVk4OTF5bXZiTVBjSDVqVUhYNEVqYmw0NDhkZk9BVG1rbDZIV0FRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIktWT2diYjRwRkhaR1czWmh5Uzdid3BDQXJ5akgzRERNNkJLaVo3a0RoQVB1bGl0YzI5ZzdMdzlnUkxoT3RCemhacnpLTTlzN25PQ2RJUGFOdDRBMWhBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzMzUzMDA4ODExNTo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA1NixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEyNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE2OTgxNDk1XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
