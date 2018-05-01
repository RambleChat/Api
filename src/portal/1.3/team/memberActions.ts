import { ActionDescriptor } from "../../../common/realtimeAction";
import {
    CHANGE_TEAM_MEMBER_ROLE,
    DELETE_TEAM_MEMBER,
} from "../../constants/team";
import { TeamRole } from "./interfaces";

export type DeleteTeamMemberAction = ActionDescriptor<typeof DELETE_TEAM_MEMBER,
    {
        /**
         * Team id
         */
        teamId: number;
        /**
         * User id
         */
        userId: number;
    }, {}>;

export type ChangeTeamMemberRoleAction = ActionDescriptor<typeof CHANGE_TEAM_MEMBER_ROLE,
    {
        /**
         * Team id
         */
        teamId: number;
        /**
         * User id
         */
        userId: number;
        /**
         * New user role
         */
        role: TeamRole;

    }, {}>;

export type TeamMemberActions =
    DeleteTeamMemberAction |
    ChangeTeamMemberRoleAction;
