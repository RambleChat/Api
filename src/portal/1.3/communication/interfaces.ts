export type SocialProfileType = "facebook" | "googleplus" | "instagram" | "twitter";
export type ChatUpdateType = "message" | "typing";
export type CancellationType = "request" | "timeout" | "leave";
export type ChatStatus = "missed" | "answered" | "active" | "incoming";

export interface LocationData {
    city: string | null;
    country: string | null;
    countryCode: string | null;
    continent: string | null;
    postal: string | null;
    state: string | null;
    location: {
        lat: number;
        lng: number;
        accuracy: number;
    } | null;
}
export interface SystemData {
    user: {
        providedName: string | null;
        providedEmail: string | null;
    };
    browser: {
        name: string | null;
        major: string | null;
        version: string | null;
    };
    os: {
        name: string | null;
        version: string | null;
    };
    device: {
        name: string | null;
        model: string | null;
        vendor: string | null;
    };
    variables: { [key: string]: string | number | undefined };
    page: {
        domain: string | null;
        page: string | null;
    };
}
export interface FullContactData {
    demographics?: {
        name: string | null;
        age: string | null;
        gender: string | null;
        avatar: string | null;
    };
    business?: {
        title: string | null;
        organization: string | null;
        bio: string | null;
        website: string | null;
        linkedin: string | null;
    };
    social?: {
        twitter: string | null;
        facebook: string | null;
    };
    locations?: Array<{
        name: string;
        country: string | null;
        region: string | null;
        city: string | null;
    }>;
    education?: Array<{
        name: string;
        degree: string | null;
        start: number | null;
        end: number | null;
    }>;
    topics?: string[];
}

/**
 * Additional communication data resolved by various data providers
 */
export interface CommunicationData {
    fullContact?: FullContactData;
    ipLocation?: LocationData;
    system?: SystemData;
}

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
    agentId: number | null;
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
    data: CommunicationData;
    /**
     * Notified flag
     */
    notified: boolean;
    /**
     * Archived flag
     */
    archived: boolean;
    /**
     * Agent ids who participating in the communication
     */
    agents: Array<{
        /**
         * Agent id
         */
        id: number;
        /**
         * Participation type
         */
        type: "view" | "join";
        /**
         * Date in ISO format
         */
        date: string;
    }>;
    /**
     * Communication note
     */
    note: CommunicationNote | null;
}

export interface ChatCommunicationInfo extends CommonCommunicationInfo {
    /**
     * Chat status
     */
    status: ChatStatus;
    /**
     * Active agents ids if chat is active
     */
    activeAgents: number[] | null;
    /**
     * Answered time if answered
     */
    answeredTime: string | null;
    /**
     * End time if ended
     */
    endTime: string | null;
    /**
     * Chat messages
     */
    entries: Array<ChatMessageInfo | ChatPresenceInfo>;
    /**
     * Additional message attached to chat
     */
    postscriptumMessage: string | null;
    /**
     * Urgent flag for the postscriptum message
     */
    postscriptumMessageUrgent: boolean | null;
    /**
     * User email in the postscriptum message
     */
    postscriptumMessageEmail: string | null;
    /**
     * User name in the postscriptum message
     */
    postscriptumMessageName: string | null;
    /**
     * User phone in the postscriptum message
     */
    postscriptumMessagePhone: string | null;
}
