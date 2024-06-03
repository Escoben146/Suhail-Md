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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_05_06_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICA4MSxcbiAgICAgICAgOTksXG4gICAgICAgIDQ4LFxuICAgICAgICA5NyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDk2LFxuICAgICAgICAxNSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDg0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTMzLFxuICAgICAgICA2OSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDY0LFxuICAgICAgICAxODAsXG4gICAgICAgIDEyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDM5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMzcsXG4gICAgICAgIDE1LFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNyxcbiAgICAgICAgMTA3LFxuICAgICAgICA0NSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNixcbiAgICAgICAgMTAxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxODMsXG4gICAgICAgIDI3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDQwLFxuICAgICAgICAyOCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMjksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDUwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDI4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMjA1LFxuICAgICAgICA3OSxcbiAgICAgICAgMTM4LFxuICAgICAgICA1NSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTIxLFxuICAgICAgICA3OCxcbiAgICAgICAgMTMyLFxuICAgICAgICA0OCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDI1MixcbiAgICAgICAgNjksXG4gICAgICAgIDEwMSxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjM5LFxuICAgICAgICA4NSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTU5LFxuICAgICAgICA2MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA0MSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNjksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjI1LFxuICAgICAgICA1OCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyLFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTMxLFxuICAgICAgICA3MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTMxLFxuICAgICAgICA4MixcbiAgICAgICAgMTczLFxuICAgICAgICAxNTgsXG4gICAgICAgIDc5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjUxLFxuICAgICAgICA3MSxcbiAgICAgICAgMTU4LFxuICAgICAgICA1MyxcbiAgICAgICAgMTUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDQ5LFxuICAgICAgICA1NyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDcsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NyxcbiAgICAgICAgMTM0LFxuICAgICAgICA4MixcbiAgICAgICAgMjUwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEzMixcbiAgICAgICAgODcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgOTUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjUyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDQxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDY1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDkyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDMyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDI3LFxuICAgICAgICAxNixcbiAgICAgICAgMTk5LFxuICAgICAgICAxMixcbiAgICAgICAgMTMzLFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTE3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDgzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDUsXG4gICAgICAgIDMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDU2LFxuICAgICAgICA4MixcbiAgICAgICAgMTM0LFxuICAgICAgICA4MCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDgwLFxuICAgICAgICA5MyxcbiAgICAgICAgMyxcbiAgICAgICAgNzksXG4gICAgICAgIDIzNSxcbiAgICAgICAgOTcsXG4gICAgICAgIDc1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTkxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNzIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMzIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTE0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgODQsXG4gICAgICAgIDU3LFxuICAgICAgICAxODgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgODMsXG4gICAgICAgIDI3LFxuICAgICAgICAxOCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMTksXG4gICAgICAgIDI2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDExMixcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNDgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiTDJkZWZyUXRRN0lUSVdJRWdtWDNtd1B6YVlidjNSLzh5S0ViRkdnQjhHOD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiNE5EbDN4TTFTUkdXRzAzd205ZGZHd1wiLFxuICBcInBob25lSWRcIjogXCJjNjFmOGZmNS04NmY3LTRkNmYtOTY4Ny1hYmE0NTU2YmMzMTBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjYsXG4gICAgICA3OSxcbiAgICAgIDE1LFxuICAgICAgMTY1LFxuICAgICAgMTQ2LFxuICAgICAgMjQ2LFxuICAgICAgMTMzLFxuICAgICAgMTYwLFxuICAgICAgMjA4LFxuICAgICAgNjcsXG4gICAgICAyMjksXG4gICAgICAxMDIsXG4gICAgICAxMzgsXG4gICAgICAxOTUsXG4gICAgICAyMjgsXG4gICAgICAxNDEsXG4gICAgICA5NixcbiAgICAgIDE4NSxcbiAgICAgIDIxMSxcbiAgICAgIDE3MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5OSxcbiAgICAgIDE4MSxcbiAgICAgIDIxOCxcbiAgICAgIDIxNixcbiAgICAgIDE0MyxcbiAgICAgIDI1MCxcbiAgICAgIDIzMCxcbiAgICAgIDU4LFxuICAgICAgMTAxLFxuICAgICAgMTM0LFxuICAgICAgOTQsXG4gICAgICAyNDEsXG4gICAgICA4NSxcbiAgICAgIDE0NixcbiAgICAgIDEsXG4gICAgICAzNyxcbiAgICAgIDE1MCxcbiAgICAgIDE0NixcbiAgICAgIDE0NyxcbiAgICAgIDY2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkdRWTdOU0ZNXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzM1MzAwODgxMTU6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcImVzY29iZW4xNlwiLFxuICAgIFwibGlkXCI6IFwiMjM5ODM1Nzg4ODg2MDE3OjZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTkhXMWFRQ0VOcWo4YklHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJqV1k0WFJ5UE1kZTVZanVCL0R3MDQzRlJYVWVDV2p0VkJkRHlQQ043M0g0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIi9IdDV4SnhjRzNIU1loclE3UGZvTzNWOFhwU1IrZStTY2pQNTlnZ05LRERpeW1GZUkzcVBBWkNaeStqOEhKdGlKV0NlNG9oLzdCcUpEemdFZWxDM0JRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImJsdmFKV1lHMkQvdnkya2tUUEprVTY2Y2xqQTNGVU82OXBqUUdsSUR3SVRUTzE2Tng5dFdmRTE3c3JHNjdGRlZBUXZ5emxVUGVvRmI1ZVZZT3lQMUFBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzMzUzMDA4ODExNTo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA1NixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEyNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE3MzI2MzAyXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
