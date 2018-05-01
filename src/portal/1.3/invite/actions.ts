import { ActionDescriptor, ServerRealtimeAction } from "../../../common/realtimeAction";
import {
    ACCEPT_INVITE,
    DECLINE_INVITE,
    GET_INVITE_INFO,
    REALTIME_INCOMING_INVITE,
} from "../../constants/invite";
import { PartialTeamInfo } from "../team";
import { BasicUserInformation } from "../user";
import { UserInviteInfo } from "./interfaces";

export type GetInviteInfoAction = ActionDescriptor<typeof GET_INVITE_INFO,
    {
        /**
         * Invite code
         */
        code: string;
    }, {
        /**
         * Team name which invite belongs to
         */
        name: string;
    }>;

/**
 * Accept invite
 */
export type AcceptInviteAction = ActionDescriptor<typeof ACCEPT_INVITE,
    {
        /**
         * Invite code
         */
        code: string;
    }, {
        /**
         * Original invite code
         */
        code: string;
        /**
         * New Team information
         */
        team: PartialTeamInfo;
        /**
         * Other users (team members, invite members, etc...)
         */
        members: BasicUserInformation[];
        /**
         * Total non-notified chats for all teams including the invited one
         */
        totalNonNotifiedChats: number;
    }>;

/**
 * Decline invite
 */
export type DeclineInviteAction = ActionDescriptor<typeof DECLINE_INVITE,
    {
        /**
         * Invite code
         */
        code: string;
    }, {}>;

/**
 * New realtime invite
 */

export type IncomingInviteServerAction = ServerRealtimeAction<typeof REALTIME_INCOMING_INVITE, UserInviteInfo>;

/**
 * All invite actions
 */
export type InviteActions =
    GetInviteInfoAction |
    AcceptInviteAction |
    DeclineInviteAction;

export type InviteServerActionos =
    IncomingInviteServerAction;
