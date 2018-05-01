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

/**
 * Answered restored chat
 */
export interface VisitorRestoredActiveChat extends VisitorRestoredChat {
    /**
     * Chat status
     */
    status: "active";
    /**
     * Answered agent id
     */
    agentId: number;
    /**
     * Agent first name
     */
    agentFirstName: string;
    /**
     * Agent last name
     */
    agentLastName: string;
    /**
     * Array of chat messages
     */
    messages: Array<{
        /**
         * Message date in UTC string formate
         */
        date: string;
        /**
         * Message
         */
        message: string;
        /**
         * Message type
         */
        type: "agent" | "visitor";
    }>;
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
