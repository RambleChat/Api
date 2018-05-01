import { ServerRealtimeAction } from "../..";
import { REALTIME_VISITOR_CONNECTION } from "../constants";

export interface VisitorRestoredChat {
    /**
     * Chat UUID
     */
    id: string;
    /**
     * Start time in UTC string
     */
    startTime: string;
}

/**
 * Non answered restored chat
 */
export interface VisitorRestoredInitiatedChat extends VisitorRestoredChat {
    /**
     * Chat status
     */
    status: "initiated";
}

export interface ChatPresenceInfo {
    type: "presence";
    date: string;
    userType: "agent";
    presenceType: "enter" | "leave";
    agentId: number | null;
}

export interface ChatMessageInfo {
    type: "message";
    date: string;
    userType: "agent" | "visitor";
    message: string;
    agentId: number | null;
}

/**
 * Answered restored chat
 */
export interface VisitorRestoredActiveChat extends VisitorRestoredChat {
    /**
     * Chat status
     */
    status: "active";
    /**
     * All Participating agent info, including who leave the chat. For first answer there will be only one agent
     */
    agents: Array<{
        /**
         * Agent id
         */
        id: number;
        /**
         * Agent first name
         */
        firstName: string;
        /**
         * Agent last name
         */
        lastName: string;
    }>;
    /**
     * Array of chat messages
     */
    entries: Array<ChatPresenceInfo | ChatMessageInfo>;
}

/**
 * Action being sent immediately after socket.io connection. Contains connectionStatus along with team information and restored chat if visitor is restoring connection
 */
export type VisitorConnectionAction = ServerRealtimeAction<typeof REALTIME_VISITOR_CONNECTION, {
    /**
     * Reconnection status
     */
    connectionStatus: "new" | "restored";
    /**
     * Reconnection token
     */
    reconnectionToken: string;
    /**
     * Blacklisted emails or email domains
     */
    blacklistedEmails: string[];
    /**
     * Team name
     */
    teamName: string;
    /**
     * Team id
     */
    teamId: number;
    /**
     * Visitor theme definition
     */
    theme?: object;
    /**
     * If visitor is restoring connection and has active/pending chat, it will be returned here
     */
    chat?: VisitorRestoredInitiatedChat | VisitorRestoredActiveChat;
    /**
     * Last Server Version of API
     */
    latestApiServerVersion: number;
    /**
     * Requested Client Version of API
     */
    requestedApiVersion: number;
}>;
