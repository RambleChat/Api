import { ActionDescriptor, ServerRealtimeAction } from "../../common/realtimeAction";
import {
    REALTIME_CHAT_ANSWERED,
    REALTIME_CHAT_CANCELED,
    REALTIME_CHAT_ENDED,
    REALTIME_CHAT_UPDATED,
    VISITOR_ADD_POSTSCRIPTUM,
    VISITOR_CANCEL_CHAT,
    VISITOR_CREATE_CHAT,
    VISITOR_END_CHAT,
    VISITOR_UPDATE_CHAT,
} from "../constants";

export type VisitorCreateChatAction = ActionDescriptor<typeof VISITOR_CREATE_CHAT, {
    /**
     * Team code
     */
    code?: string;
    /**
     * User (visitor) email
     */
    email?: string;
    /**
     * User (visitor) name
     */
    name?: string;
    /**
     * URL page which visitor came from. Usually this should be referrer page
     */
    page?: string;
    /**
     * Custom variables, eg, Campaign=Ramble provided in url, these will be displayed in portal for communication
     */
    customVariables?: { [key: string]: string };
}, {
    /**
     * Chat UUID
     */
    id: string;
    /**
     * Team name
     */
    teamName: string;
    /**
     * Team id
     */
    teamId: number;
}>;

/**
 * Explicit cancel chat request action
 */
export type VisitorCancelChatAction = ActionDescriptor<typeof VISITOR_CANCEL_CHAT, {
    /**
     * Chat UUID to cancel. Optional
     */
    id?: string;
}, {}>;

export type VisitorEndChatAction = ActionDescriptor<typeof VISITOR_END_CHAT, {
    /**
     * Chat uuid
     */
    id: string;
}, {}>;

/**
 * Chat update response
 */
export type VisitorUpdateChatAction = ActionDescriptor<typeof VISITOR_UPDATE_CHAT, {
    /**
     * Chat uuid
     */
    id: string;
    /**
     * Chat update type
     */
    type: "message" | "typing";

    /**
     * Chat message. Can be omitted for typing type
     */
    message?: string;

    /**
     * Typing indicator. Can be omitted for message type
     */
    typing?: boolean;

}, {}>;

export type VisitorAddPostscriptumMessageAction = ActionDescriptor<typeof VISITOR_ADD_POSTSCRIPTUM, {
    /**
     * Chat uuid
     */
    id: string;
    /**
     * Postscriptum message
     */
    message: string;
    /**
     * Mark message as urgent
     */
    urgent?: boolean;
    /**
     * User name to display in the message body
     * NOTE: This handled differently than one provided when starting chat
     */
    name?: string;
    /**
     * User email to display in the message body
     * NOTE: This handled differently than one provided when starting chat
     */
    email?: string;
    /**
     * User phone to display in the message body
     */
    phone?: string;
}, {}>;

export type VisitorChatCanceledAction = ServerRealtimeAction<typeof REALTIME_CHAT_CANCELED, {
    /**
     * Chat UUID
     */
    id: string;
    /**
     * Team id
     */
    teamId: number;
    /**
     * Cancellation reason
     */
    reason: "timeout";
}>;

export type VisitorChatAnsweredAction = ServerRealtimeAction<typeof REALTIME_CHAT_ANSWERED, {
    /**
     * Chat uuid
     */
    id: string;
    /**
     * Team id
     */
    teamId: number;
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
}>;

export type VisitorChatEndedAction = ServerRealtimeAction<typeof REALTIME_CHAT_ENDED, {
    /**
     * Chat UUID
     */
    id: string;
    /**
     * Team id
     */
    teamId: number;
}>;

export type VisitorChatUpdatedAction = ServerRealtimeAction<typeof REALTIME_CHAT_UPDATED, {
    /**
     * Chat uuid
     */
    id: string;
    /**
     * Chat update type
     */
    type: "message" | "typing";
    /**
     * Chat message. Can be omitted for typing type
     */
    message?: string;
    /**
     * Typing indicator. Can be omitted for message type
     */
    typing?: boolean;
    /**
     * Team id
     */
    teamId: number;
    /**
     * User type who updated the chat. Can be only agent
     */
    userType: "agent";
    /**
     * Agent id
     */
    userId: number;
    /**
     * Action date in UTC string format
     */
    date: string;
}>;

export type ChatActions =
    VisitorCreateChatAction |
    VisitorCancelChatAction |
    VisitorEndChatAction |
    VisitorUpdateChatAction |
    VisitorAddPostscriptumMessageAction;

export type ChatServerActions =
    VisitorChatCanceledAction |
    VisitorChatAnsweredAction |
    VisitorChatEndedAction |
    VisitorChatUpdatedAction;
