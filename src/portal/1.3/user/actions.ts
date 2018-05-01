import { ActionDescriptor } from "../../../common/realtimeAction";
import {
    ACTIVATE_USER,
    REGISTER_FOR_PUSH_NOTIFICATIONS,
    RESEND_ACTIVATION,
    SEND_FEEDBACK,
    USER_PASSWORD_UPDATE,
    USER_UPDATE,
} from "../../constants/user";
import { FullUserInformation } from "./interfaces";

/**
 * Change user action request
 * Same as BasicUserInformation but fields may be optional
 */
export type UpdateUserAction = ActionDescriptor<typeof USER_UPDATE,
    {
        /**
         * User email
         */
        email?: string;
        /**
         * User first name
         */
        firstName?: string;
        /**
         * User last name
         */
        lastName?: string;
        /**
         * User settings
         */
        settings?: { [key: string]: string | number | boolean };
        /**
         * Global dnd flag
         */
        dnd?: boolean;
    }, Partial<FullUserInformation>>;

/**
 * Update user password request
 */
export type UpdateUserPasswordAction = ActionDescriptor<typeof USER_PASSWORD_UPDATE,
    {
        /**
         * Old password, required if user is updating the password
         */
        oldPassword: string;
        /**
         * User's new password
         */
        password: string;
    }, {}>;

/**
 * Register for push notifications request
 */
export type RegisterForPushNotificationsAction = ActionDescriptor<typeof REGISTER_FOR_PUSH_NOTIFICATIONS,
    {
        /**
         * Push token
         */
        pushToken: string;

        /**
         * Push provider
         */
        pushProvider?: string;
    }, {}>;

export type SendFeedbackAction = ActionDescriptor<typeof SEND_FEEDBACK,
    {
        /**
         * Feedback message
         */
        message: string;
    }, {}>;

export type ActivateUserAction = ActionDescriptor<typeof ACTIVATE_USER,
    {
        /**
         * Activation token
         */
        token: string;
    }, {
        activated: true;
    }>;

export type ResendActivationAction = ActionDescriptor<typeof RESEND_ACTIVATION, void, void>;

export type UserActions =
    UpdateUserAction |
    UpdateUserPasswordAction |
    RegisterForPushNotificationsAction |
    SendFeedbackAction |
    ActivateUserAction |
    ResendActivationAction;
