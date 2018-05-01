import { ActionDescriptor, Req, ServerRealtimeAction } from "../../../common/realtimeAction";
import {
    DIRECT_REPLY_CHAT,
    INVITE_TO_CHAT,
    PRESENCE_CHAT,
    REALTIME_CHAT_ENDED,
    REALTIME_CHAT_UPDATED,
    REALTIME_CREATE_CHAT,
    REALTIME_POSTSCRIPTUM_ADDED,
    REALTIME_VISITOR_PRESENCE,
    UPDATE_CHAT,
} from "../../constants/communication";
import { CancellationType, ChatCommunicationInfo, ChatStatus, ChatUpdateType } from "./interfaces";

/**
 * New chat payload
 */
export type CreateChatServerAction = ServerRealtimeAction<typeof REALTIME_CREATE_CHAT, {
    /**
     * Chat info
     */
    chat: ChatCommunicationInfo;
    /**
     * Invited type. If re-ringing it will be "agent", for new chats it will be "visitor"
     */
    invitedBy: "agent" | "visitor";
    /**
     * Inviter id, string for visitor, number for agent
     */
    inviterId: number | string;
}>;

/**
 * Invite other agent(s) to chat
 */
export type InviteToChatAction = ActionDescriptor<typeof INVITE_TO_CHAT,
    {
        /**
         * Chat uuid
         */
        uuid: string;
        /**
         * Agent ids or "all" to notifiy all agent in the team
         */
        agentIds: number[] | "all";
    }, {}>;

/**
 * Send presence action to the chat
 */
export type PresenceChatAction = ActionDescriptor<typeof PRESENCE_CHAT,
    {
        /**
         * Chat uuid
         */
        uuid: string;
        /**
         * Presence type
         */
        type: "enter" | "leave";
    }, {}>;

/**
 * Chat ended
 */
export type EndChatServerAction = ServerRealtimeAction<typeof REALTIME_CHAT_ENDED,
    {
        /**
         * Chat UUID
         */
        id: string;
        /**
         * Team id
         */
        teamId: number;
        /**
         * End reason
         */
        reason: CancellationType;
        /**
         * Chat status before the end action
         */
        chatStatus: ChatStatus;
        /**
         * Cancel sender type
         */
        senderType: "visitor" | "agent" | "server";
        /**
         * Agent id for senderType === "agent"
         */
        senderId: number | null;
    }>;

/**
 * Action to update chat room: new message or typing indicator
 */
export type UpdateChatAction = ActionDescriptor<typeof UPDATE_CHAT,
    {
        /**
         * Chat uuid
         */
        id: string;
        /**
         * Chat update type
         */
        type: ChatUpdateType;

        /**
         * Chat message. Could be omitted for typing type
         */
        message?: string;

        /**
         * Typing indicator
         */
        typing?: boolean;
    }, {}>;

export type UpdateChatServerAction = ServerRealtimeAction<typeof REALTIME_CHAT_UPDATED, UpdateChatAction[Req] &
    {
        /**
         * Team id which chat belongs to
         */
        teamId: number;
        /**
         * User type for update action
         */
        userType: "visitor" | "agent";
        /**
         * User id. Number for agents, string for visitor
         */
        userId: number | string;

        /**
         * Action date in UTC string format
         */
        date: string;
    }>;

/**
 * Direct chat replying without pre-authentication
 */
export type DirectChatReplyAction = ActionDescriptor<typeof DIRECT_REPLY_CHAT,
    {
        /**
         * Chat uuid
         */
        uuid: string;
        /**
         * Chat message
         */
        message: string;
        /**
         * Auth token
         */
        token: string;
    }, {}>;

export type AddPostscriptumMessageServerAction = ServerRealtimeAction<typeof REALTIME_POSTSCRIPTUM_ADDED,
    {
        /**
         * Communication uuid
         */
        uuid: string;
        /**
         * Postscriptum message
         */
        message: string;
        /**
         * Urgent message
         */
        urgent: boolean;
        /**
         * User name to display in the message body
         */
        name?: string | null;
        /**
         * User email to display in the message body
         */
        email?: string | null;
        /**
         * User phone to display in the message body
         */
        phone?: string | null;
    }>;

/**
 * Visitor presence action. For now only being sent when visitor disconnects without chat ending
 */
export type VisitorPresenceChatServerAction = ServerRealtimeAction<typeof REALTIME_VISITOR_PRESENCE,
    {
        /**
         * Chat uuid
         */
        uuid: string;
        /**
         * Presence type
         */
        type: "disconnect" | "reconnect";
        /**
         * Timeout to disconnect the chat
         */
        timeout?: number;
    }>;

/**
 * All communication actions
 */
export type CommunicationActions =
    UpdateChatAction |
    DirectChatReplyAction |
    InviteToChatAction |
    PresenceChatAction;

export type CommunicationServerActions =
    CreateChatServerAction |
    EndChatServerAction |
    UpdateChatServerAction |
    AddPostscriptumMessageServerAction |
    VisitorPresenceChatServerAction;
