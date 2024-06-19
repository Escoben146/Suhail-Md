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




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_47_06_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDMsXG4gICAgICAgIDM2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMzUsXG4gICAgICAgIDQsXG4gICAgICAgIDc0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTg4LFxuICAgICAgICAxMTksXG4gICAgICAgIDU3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjM0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDk1LFxuICAgICAgICA4MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDEzMixcbiAgICAgICAgNDMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjUxLFxuICAgICAgICA5MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTYyLFxuICAgICAgICA5MixcbiAgICAgICAgOTUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxOSxcbiAgICAgICAgMyxcbiAgICAgICAgNTMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMjksXG4gICAgICAgIDIyLFxuICAgICAgICA5OCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgNzAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTEyLFxuICAgICAgICA0NyxcbiAgICAgICAgNTEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjM2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDk3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDQwLFxuICAgICAgICAzOSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTA3LFxuICAgICAgICA0MCxcbiAgICAgICAgNjksXG4gICAgICAgIDE1MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTc3LFxuICAgICAgICA3MCxcbiAgICAgICAgMTc5LFxuICAgICAgICA4NixcbiAgICAgICAgMTEwLFxuICAgICAgICA0MyxcbiAgICAgICAgODYsXG4gICAgICAgIDM2LFxuICAgICAgICAxMjksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjI1LFxuICAgICAgICA4OSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDM2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDY2LFxuICAgICAgICAxMyxcbiAgICAgICAgNzUsXG4gICAgICAgIDE4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMzFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgODQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDU5LFxuICAgICAgICAxNzksXG4gICAgICAgIDk2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDcxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDU5LFxuICAgICAgICA1NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMixcbiAgICAgICAgNjUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNzcsXG4gICAgICAgIDIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA5OSxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAzNixcbiAgICAgICAgODIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDExLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjcsXG4gICAgICAgIDkxLFxuICAgICAgICA5NyxcbiAgICAgICAgODksXG4gICAgICAgIDIxNixcbiAgICAgICAgNjcsXG4gICAgICAgIDQyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgODQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQyLFxuICAgICAgICA5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDc4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDM1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE1MixcbiAgICAgICAgOTcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTksXG4gICAgICAgIDE4NixcbiAgICAgICAgMjAxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDk4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDY0LFxuICAgICAgICAxOTksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDg2LFxuICAgICAgICAxNjksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDgxLFxuICAgICAgICA4NixcbiAgICAgICAgNDksXG4gICAgICAgIDEzLFxuICAgICAgICAzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNixcbiAgICAgICAgMjEzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDc4LFxuICAgICAgICA4OCxcbiAgICAgICAgMTY5LFxuICAgICAgICAzMCxcbiAgICAgICAgNjQsXG4gICAgICAgIDY5LFxuICAgICAgICA0NixcbiAgICAgICAgMTk3LFxuICAgICAgICAyNDksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTM5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNDIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiS1cvekR5VW50c2JlNG5WOG9Yc2hVd3kvYzdkNy9zOTRYL1kzSFcrbWlrUT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSDd4cnhqa1lUZUNEUFJ2Z3FWcnQ3QVwiLFxuICBcInBob25lSWRcIjogXCI1OWM0NzYxYy03ODFhLTQ3ZDMtYWFkYy0xMDM4NTk4ZWI1ZGZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQxLFxuICAgICAgMTA0LFxuICAgICAgODMsXG4gICAgICAxNzksXG4gICAgICAxMjAsXG4gICAgICAyMTIsXG4gICAgICAxNDIsXG4gICAgICAxMzcsXG4gICAgICAxNTYsXG4gICAgICAyMjMsXG4gICAgICAyMjUsXG4gICAgICA3LFxuICAgICAgNjAsXG4gICAgICAzMixcbiAgICAgIDE2NyxcbiAgICAgIDEzOSxcbiAgICAgIDIsXG4gICAgICAyMjcsXG4gICAgICA2OCxcbiAgICAgIDExXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDkyLFxuICAgICAgNzYsXG4gICAgICAyMDIsXG4gICAgICA4MixcbiAgICAgIDI0OSxcbiAgICAgIDI0OCxcbiAgICAgIDEwLFxuICAgICAgMzMsXG4gICAgICAxMjAsXG4gICAgICA0LFxuICAgICAgNTAsXG4gICAgICAxMjMsXG4gICAgICAxMzYsXG4gICAgICA5MSxcbiAgICAgIDEsXG4gICAgICA1NCxcbiAgICAgIDI0NCxcbiAgICAgIDIxNSxcbiAgICAgIDM1LFxuICAgICAgMTQ0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlgyV1dFRTNUXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzM1MzAwODgxMTU6MTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJlc2NvYmVuMTZcIixcbiAgICBcImxpZFwiOiBcIjIzOTgzNTc4ODg4NjAxNzoxMUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOYlcxYVFDRVBEZXk3TUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImpXWTRYUnlQTWRlNVlqdUIvRHcwNDNGUlhVZUNXanRWQmREeVBDTjczSDQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidEp5b3NzTUdsNDJXMGxOVUVWdlFvaldkaWNkaDZ3bVRHcnNiZ1F5VlRZNHl4ckFlWCthc0dMTUtTeEJyc0hIZlRYSkZSRkdRS0VYcklGTUZlZUxFQUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiN0V0M0IxWHZBMTRCY2ljeXovNlIzdGlhVWFaaXVXamx0UExqSno3dnpWL0RkbXd0eW5CbTkrTk5QTXQxMUpLTTVZSlNvNml3QTBzZWRMMlhlTlp0anc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjMzNTMwMDg4MTE1OjExQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA1NixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEyNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE4ODA4NDM1XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
