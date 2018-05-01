import { ActionDescriptor, ServerRealtimeAction } from "../../../common/realtimeAction";
import {
    CREATE_TEAM_INVITES,
    DELETE_TEAM_INVITE,
    REALTIME_TEAM_INVITE_WAS_ACCEPTED,
} from "../../constants/team";
import { BasicUserInformation } from "../user";
import { TeamInviteInfo, TeamRole } from "./interfaces";

export type DeleteTeamInviteAction = ActionDescriptor<typeof DELETE_TEAM_INVITE,
    {
        /**
         * Invite code
         */
        code: string;
        /**
         * Team id
         */
        teamId: number;
        /**
         * User id which this invite belongs to, may be omitted
         */
        userId?: number;

    }, {}>;

export type CreateTeamInvitesAction = ActionDescriptor<typeof CREATE_TEAM_INVITES,
    {
        /**
         * Team id
         */
        id: number;
        /**
         * Invites array
         */
        invites: string[];
    }, {
        /**
         * Team id
         */
        id: number;
        /**
         * Array of created invites
         */
        invites: TeamInviteInfo[];
        /**
         * New members linked to invites
         */
        members: BasicUserInformation[];
    }>;

export type TeamInviteAcceptedServerAction = ServerRealtimeAction<typeof REALTIME_TEAM_INVITE_WAS_ACCEPTED,
    {
        /**
         * Team id
         */
        teamId: number;
        /**
         * Invite code
         */
        code: string;
        /**
         * User information
         */
        userInfo: BasicUserInformation;
        /**
         * Team role
         */
        role: TeamRole;
    }>;

export type TeamInviteActions =
    DeleteTeamInviteAction |
    CreateTeamInvitesAction;

export type TeamInviteServerActions =
    TeamInviteAcceptedServerAction;
