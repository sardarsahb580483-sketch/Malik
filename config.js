// config.js - ESM Version
import dotenv from 'dotenv';
dotenv.config();

const config = {
    // MongoDB Configuration (only this is from process.env)
    MONGODB_URL: process.env.MONGODB_URL || 'mongodb+srv://drkamran1871_db_user:Dtslcg7owxFWplMe@cluster0.3i7nncp.mongodb.net/?appName=Cluster0',
    
    // Fixed Database Name
    DB_NAME: process.env.DB_NAME || 'fatimamd',
    
    // Collections Configuration
    COLLECTIONS: {
        SESSIONS: 'whatsapp_sessions',
        NUMBERS: 'active_numbers',
        CONFIGS: 'bot_configs'
    },
    
    // Bot Configuration
    AUTO_VIEW_STATUS: 'true',
    AUTO_LIKE_STATUS: 'false',  // ADDED - Auto like status messages
    MENTION_REPLY: 'true',
    AUTO_RECORDING: 'false',
    AUTO_REACT: 'false',
    AUTO_TYPING: 'false',
    ALWAYS_ONLINE: 'false',
    VERSION: '12.0.0 Pʀᴇᴍɪᴜᴍ',
    DESCRIPTION: '*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝘿𝘼𝙉𝙄𝙎𝙃 𝙈𝘿 👑*',
    ANTI_DELETE_PATH: 'inbox',
    ANTI_DELETE: 'false',
    ANTI_STATUS: 'warn',
    ANTIEDIT_PATH: 'inbox',
    ANTI_EDIT: 'false',
    STICKER_NAME: '𝘿𝘼𝙉𝙄𝙎𝙃 𝙈𝘿 ⚡',
    ANTI_LINK: 'true',
    WELCOME: 'false',
    GOODBYE: 'false',
    WELCOME_MESSAGE: '╔═════════════════════════╗\n║  ⚡ *𝘿𝘼𝙉𝙄𝙎𝙃-𝙈𝘿 ᴀᴄᴛɪᴠᴀᴛᴇᴅ* ⚡ \n╚═════════════════════════╝\n\n👋 Welcome @user to the matrix!\n\n> 🚀 *Type* `.menu` *for system commands*\n> 💎 *Status: Secure & Online*\n\n*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝘿𝘼𝙉𝙄𝙎𝙃 𝙈𝘿 👑*',
    GOODBYE_MESSAGE: '╔═════════════════════════╗\n║  ⚠️ *ᴜꜱᴇʀ ᴅɪꜱᴄᴏɴɴᴇᴄᴛᴇᴅ* ⚠️ \n╚═════════════════════════╝\n\n👋 Goodbye @user!\n\n> 🥀 *Session terminated from the group.*\n\n*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝘿𝘼𝙉𝙄𝙎𝙃 𝙈𝘿 👑*',
    ADMIN_ACTION: 'false',
    MODE: 'public',
    PREFIX: '.',
    ANTI_CALL: 'false',
    REJECT_MSG: '*[ 📵 ꜱᴇᴄᴜʀɪᴛʏ ᴀʟᴇʀᴛ ] Call Rejected Automatically!*',
    READ_MESSAGE: 'false',
    AUTO_STATUS_SEEN: 'true',
    OWNER_REACT: 'false',
    OWNER_EMOJIS: ['❤️', '🔥', '👑', '⭐', '💎'],
    REACT_EMOJIS: ['😂', '❤️', '🔥', '👏', '😮', '😢', '🤣', '👍', '🎉', '🤔', '🙏', '😍', '😊', '🥰', '💕', '🤩', '✨', '😎', '🥳', '🙌'],
    LIKE_EMOJIS: ['❤️', '👍', '😮', '😎', '💀'],  // ADDED - Emojis for auto like status
    
    // Bot Identity
    BOT_NAME: '𝘿𝘼𝙉𝙄𝙎𝙃-𝙈𝘿',
    OWNER_NAME: '𝘿𝘼𝙉𝙄𝙎𝙃-𝙈𝘿',
    OWNER_NUMBER: '923256856586',
    DEV: '923256856586',
    IK_IMAGE_PATH: './lib/fatimamds.jpg',
    BOT_IMAGE: 'https://i.ibb.co/gLMqwdGj/2aa914c4df63.jpg',
    
    // Newsletter Configuration
    NEWSLETTER_JID: '120363411122212911@newsletter',
    NEWSLETTER_MESSAGE_ID: '428',  
    
    // System Configuration
    MAX_RETRIES: 3,
    OTP_EXPIRY: 300000,
    CHANNEL_LINK: 'https://whatsapp.com/channel/0029VbDtLw5DjiOm6GdWND19',
    BANNED: [],
    SUDO: ["923256856586@s.whatsapp.net"],
    
    // Default Settings Template
    DEFAULT_SETTINGS: {
        // Status & View Settings
        AUTO_VIEW_STATUS: 'true',
        AUTO_LIKE_STATUS: 'false',  // ADDED - Auto like status (disabled by default)
        MENTION_REPLY: 'true',
        AUTO_STATUS_SEEN: 'true',
        READ_MESSAGE: 'false',
        
        // Auto Actions
        AUTO_RECORDING: 'false',
        AUTO_REACT: 'false',
        AUTO_TYPING: 'false',
        ALWAYS_ONLINE: 'false',
        OWNER_REACT: 'false',
        
        // Anti Features
        ANTI_DELETE: 'false',
        ANTI_STATUS: 'warn',
        ANTI_DELETE_PATH: 'inbox',
        ANTI_EDIT: 'false',
        ANTIEDIT_PATH: 'inbox',
        ANTI_CALL: 'false',
        ANTI_LINK: 'warn',
        
        // Group Events
        WELCOME: 'false',
        GOODBYE: 'false',
        ADMIN_ACTION: 'false',
        
        // Message Templates
        WELCOME_MESSAGE: '╔═════════════════════════╗\n║  ⚡ *𝘿𝘼𝙉𝙄𝙎𝙃-𝙈𝘿 ᴀᴄᴛɪᴠᴀᴛᴇᴅ* ⚡ \n╚═════════════════════════╝\n\n👋 Welcome @user to the matrix!\n\n> 🚀 *Type* `.menu` *for system commands*\n> 💎 *Status: Secure & Online*\n\n*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝘿𝘼𝙉𝙄𝙎𝙃-𝙈𝘿*',
        GOODBYE_MESSAGE: '╔═════════════════════════╗\n║  ⚠️ *ᴜꜱᴇʀ ᴅɪꜱᴄᴏɴɴᴇᴄᴛᴇᴅ* ⚠️ \n╚═════════════════════════╝\n\n👋 Goodbye @user!\n\n> 🥀 *Session terminated from the group.*\n\n*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝘿𝘼𝙉𝙄𝙎𝙃-𝙈𝘿*',
        REJECT_MSG: '*[ 📵 ꜱᴇᴄᴜʀɪᴛʏ ᴀʟᴇʀᴛ ] Call Rejected Automatically!*',
        
        // Bot Identity
        VERSION: '12.0.0 Pʀᴇᴍɪᴜᴍ',
        OWNER_NAME: '𝘿𝘼𝙉𝙄𝙎𝙃-𝙈𝘿',
        OWNER_NUMBER: '923256856586',
        DEV: '923256856586',
        DESCRIPTION: '*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ 👑 𝘿𝘼𝙉𝙄𝙎𝙃-𝙈𝘿*',
        STICKER_NAME: '𝘿𝘼𝙉𝙄𝙎𝙃-𝙈𝘿 ⚡',
        MODE: 'public',
        PREFIX: '.',
        BOT_NAME: '𝘿𝘼𝙉𝙄𝙎𝙃-𝙈𝘿',
        BOT_IMAGE: 'https://i.ibb.co/gLMqwdGj/2aa914c4df63.jpg',
        
        REACT_EMOJIS: ['😂', '❤️', '🔥', '👏', '😮', '😢', '🤣', '👍', '🎉', '🤔', '🙏', '😍', '😊', '🥰', '💕', '🤩', '✨', '😎', '🥳', '🙌'],
        OWNER_EMOJIS: ['❤️', '🔥', '👑', '⭐', '💎'],
        LIKE_EMOJIS: ['❤️', '👍', '😮', '😎', '💀'],  // ADDED - Emojis for auto like
        
        // Lists
        BANNED: [],
        SUDO: ["923256856586@s.whatsapp.net"]
    }
};

export default config;
