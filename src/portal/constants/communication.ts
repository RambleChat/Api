/**
 * Update chat (new chat message or typing indicator) by agent
 */
export const UPDATE_CHAT = "communication/UPDATE_CHAT";

/**
 * Direct chat replying without pre-authentication
 */
export const DIRECT_REPLY_CHAT = "communication/DIRECT_REPLY_CHAT";

/**
 * Presence actions
 */
export const PRESENCE_CHAT = "communication/PRESENCE_CHAT";

/**
 * Invite other agent(s) to chat
 */
export const INVITE_TO_CHAT = "communication/INVITE_TO_CHAT";

/**
 * Create chat realtime action (for team agents)
 */
export const REALTIME_CREATE_CHAT = "communication/NEW_CHAT";

/**
 * Chat has been ended by some reason
 */
export const REALTIME_CHAT_ENDED = "communication/CHAT_ENDED";

/**
 * Chat was updated by either typing indicator or chat message
 */
export const REALTIME_CHAT_UPDATED = "communication/CHAT_UPDATED";

/**
 * Postscriptum message was added by visitor
 */
export const REALTIME_POSTSCRIPTUM_ADDED = "communication/POSTSCRIPTUM_ADDED";

/**
 * Incoming visitor presence chat action
 */
export const REALTIME_VISITOR_PRESENCE = "communication/VISITOR_PRESENCE_CHAT";

// Deprecated in 1.3

/**
 * Accept chat (agent side action)
 * @deprecated Use presence actions
 */
export const ANSWER_CHAT = "communication/ACCEPT_CHAT";

/**
 * Chat was answered
 * @deprecated Use presence actions
 */
export const REALTIME_CHAT_ANSWERED = "communication/CHAT_ANSWERED";

/**
 * Chat was ended by agent
 * @deprecated Replaced by leave presence action
 */
export const END_CHAT = "communication/END_CHAT";

/**
 * Chat has been canceled
 * @deprecated Replaced with REALTIME_CHAT_ENDED with chat end reason
 */
export const REALTIME_CHAT_CANCELED = "communication/CHAT_CANCELED";
