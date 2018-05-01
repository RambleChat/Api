import { ApiErrorInterface, RealtimeErrorInterface } from "../../../common/Errors";
import { ActionDescriptor, ServerRealtimeAction } from "../../../common/realtimeAction";
import {
    LOGIN,
    LOGOUT,
    REALTIME_TOKEN_UPDATE,
    REALTIME_TOKEN_UPDATE_FAILED,
    RESET_PASSWORD,
    RESET_PASSWORD_EMAIL_SEND,
    SIGNUP,
    VALIDATE_EMAIL,
} from "../../constants/auth";
import { ChatCommunicationInfo } from "../communication/interfaces";
import { UserInviteInfo } from "../invite";
import { PartialTeamInfo } from "../team";
import { BasicUserInformation } from "../user";
import { FullUserInformation } from "../user/interfaces";

export type SignupAction = ActionDescriptor<typeof SIGNUP,
    {
        /**
         * User first name
         */
        firstName: string;
        /**
         * User last name
         */
        lastName: string;
        /**
         * User email
         */
        email: string;
        /**
         * User password
         */
        password: string;
        /**
         * Team name
         */
        team?: string;
        /**
         * Custom team code
         */
        teamCode?: string;
        /**
         * Invite code
         */
        inviteCode?: string;

    }, {
        /**
         * Generated token for new registered user
         */
        token: string;
    }>;

export type LoginAction = ActionDescriptor<typeof LOGIN,
    {
        /**
         * JWT token
         */
        token: string;
        /**
         * Don't perform syncing and return only basic user info
         */
        noSync?: boolean;
    } | {
        /**
         * Email
         */
        email: string;
        /**
         * Password
         */
        password: string;
        /**
         * Don't perform syncing and return only basic user info
         */
        noSync?: boolean;

    },
    {
        /**
         * New user token
         */
        token: string;
        /**
         * User information with settings
         */
        user: FullUserInformation;
        /**
         * User teams
         */
        teams: PartialTeamInfo[];
        /**
         * Other users (team members, invite members, etc...)
         */
        members: BasicUserInformation[];
        /**
         * User invites
         */
        invites: UserInviteInfo[];
        /**
         * Incoming chats
         */
        incomingChats: ChatCommunicationInfo[];
        /**
         * Total non notified chats for all teams
         */
        totalNonNotifiedChats: number;
    }>;

/**
 * Used by REALTIME_TOKEN_UPDATE notification
 */
export type TokenUpdateServerAction = ServerRealtimeAction<typeof REALTIME_TOKEN_UPDATE,
    {
        /**
         * New token
         */
        token: string;
    }>;
export type TokenUpdateFailedServerAction = ServerRealtimeAction<typeof REALTIME_TOKEN_UPDATE_FAILED, ApiErrorInterface | RealtimeErrorInterface>;

export type ValidateEmailAction = ActionDescriptor<typeof VALIDATE_EMAIL,
    {
        /**
         * Email to validate
         */
        email: string;
    }, {}>;

export type LogoutAction = ActionDescriptor<typeof LOGOUT, {}, {}>;

/**
 * Send the email to reset the password
 */
export type SendEmailForPasswordResetAction = ActionDescriptor<typeof RESET_PASSWORD_EMAIL_SEND,
    {
        /**
         * Email to send the password reset
         */
        email: string;
    }, void>;

/**
 * Reset password payload
 */
export type ResetPasswordAction = ActionDescriptor<typeof RESET_PASSWORD,
    {
        /**
         * User email
         */
        email: string;
        /**
         * Reset code
         */
        code: string;
        /**
         * New password
         */
        password: string;
    }, void>;

export type AuthActions =
    SignupAction |
    LoginAction |
    ValidateEmailAction |
    LogoutAction |
    SendEmailForPasswordResetAction |
    ResetPasswordAction;

export type AuthServerActions =
    TokenUpdateServerAction |
    TokenUpdateFailedServerAction;
