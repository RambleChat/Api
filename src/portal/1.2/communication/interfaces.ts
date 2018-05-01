import { VisitorInfoInterface } from "../visitor";
export type SocialProfileType = "facebook" | "googleplus" | "instagram" | "twitter";
export type ChatUpdateType = "message" | "typing";
export type CancellationType = "request" | "timeout" | "leave";
export type ChatStatus = "missed" | "answered" | "active" | "incoming";

/**
 * Communication note
 */
export interface CommunicationNote {
    /**
     * Note text
     */
    noteText: string;
    /**
     * Created date
     */
    createdTime: string;
    /**
     * Agent id which created note
     */
    agentId: number;
}

/**
 * Chat message serialization interface
 */
export interface ChatMessageInfo {
    /**
     * Message date in UTC string
     */
    date: string;
    /**
     * Message type
     */
    type: "agent" | "visitor";
    /**
     * Message itself
     */
    message: string;
    /**
     * Agent id for agent type
     */
    agentId?: number;
}

/**
 * Common stuff for all communications
 */
export interface CommonCommunicationInfo {
    /**
     * Communication UUID
     */
    id: string;
    /**
     * Team id
     */
    teamId: number;
    /**
     * Communication started time in UTC string
     */
    startTime: string;
    /**
     * Visitor information
     */
    visitor: VisitorInfoInterface;
    /**
     * Notified flag
     */
    notified: boolean;
    /**
     * Archived flag
     */
    archived: boolean;
    /**
     * Agent id who answered or claimed the communication
     */
    agentId?: number;
    /**
     * Communication note
     */
    note?: CommunicationNote;
}

export interface ChatCommunicationInfo extends CommonCommunicationInfo {
    /**
     * Chat status
     */
    status: ChatStatus;
    /**
     * Answered time if answered
     */
    answeredTime?: string;
    /**
     * End time if ended
     */
    endTime?: string;
    /**
     * Chat messages
     */
    messages: ChatMessageInfo[];
    /**
     * Additional message attached to chat
     */
    postscriptumMessage?: string | null;
    /**
     * Urgent flag for the postscriptum message
     */
    postscriptumMessageUrgent?: boolean;
    /**
     * User email in the postscriptum message
     */
    postscriptumMessageEmail?: string | null;
    /**
     * User name in the postscriptum message
     */
    postscriptumMessageName?: string | null;
    /**
     * User phone in the postscriptum message
     */
    postscriptumMessagePhone?: string | null;
}
