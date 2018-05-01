import { ActionDescriptor } from "../../../common/realtimeAction";
import {
    HISTORY_GET_CHAT,
    HISTORY_GET_CHATS,
    SET_ARCHIVED_STATUS,
    SET_CLAIMED, SET_NOTIFIED,
} from "../../constants/history";
import { ChatCommunicationInfo } from "../communication/interfaces";

export type GetChatsAction = ActionDescriptor<typeof HISTORY_GET_CHATS,
    {
        /**
         * Page number
         */
        page: number;
        /**
         * Page size
         */
        pageSize: number;
        /**
         * Filter by team id
         */
        teamId?: number;
        /**
         * Start date filter
         */
        startTime?: string;
        /**
         * End date filter
         */
        endTime?: string;
        /**
         * Chat status
         */
        status: "missed" | "answered" | "active";
        /**
         * Filter by archived status
         */
        archived?: boolean;
        /**
         * Filter by notified status
         */
        notified?: boolean;
        /**
         * Include only communications with postscriptum message
         */
        withPostscriptumMessage?: true;

    }, {
        /**
         * Total number of chats
         */
        total: number;
        /**
         * Map of communication UUID -> chat info
         */
        chats: { [key: string]: ChatCommunicationInfo };
    }>;

/**
 * Get full single chat information
 */
export type GetChatFullAction = ActionDescriptor<typeof HISTORY_GET_CHAT,
    {
        /**
         * Chat UUID
         */
        id: string;
    }, ChatCommunicationInfo>;

export type SetNotifiedAction = ActionDescriptor<typeof SET_NOTIFIED,
    {
        /**
         * Array of communication uuids/teamIds to be set notified
         */
        comms: Array<{ uuid: string, teamId: number }>;

    }, {}>;

export type SetArchivedStatusAction = ActionDescriptor<typeof SET_ARCHIVED_STATUS,
    {
        comms: Array<{ uuid: string, teamId: number }>;
        archived: boolean;
        requested: "answered" | "missed";
    }, {}>;

export type SetClaimedAction = ActionDescriptor<typeof SET_CLAIMED,
    {
        uuid: string;
        teamId: number;
    }, {}>;

export type HistoryActions =
    GetChatsAction |
    GetChatFullAction |
    SetNotifiedAction |
    SetClaimedAction |
    SetArchivedStatusAction;
