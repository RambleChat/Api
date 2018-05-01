import { ActionDescriptor, ServerRealtimeAction } from "../../../common/realtimeAction";
import { CHANGE_BILLING_INFO, CHANGE_PREMIUM, GET_BILLING_HISTORY, REALTIME_BILLING_INFO_CHANGED, REALTIME_PREMIUM_CHANGED } from "../../constants";

export interface ChangeBillingInformationRequestPayload {
    /**
     * Team id
     */
    teamId: number;
    /**
     * Billing email
     */
    billingEmail?: string;
    /**
     * Billing card token. setting to null will delete current card
     */
    cardToken?: null | string;
    /**
     * Last four digits for the card
     */
    lastFour?: string;
}

export interface ChangeBillingInformationResponsePayload { }

/**
 * Assign new credit card to the team
 */
export type ChangeBillingInformationAction = ActionDescriptor<typeof CHANGE_BILLING_INFO, ChangeBillingInformationRequestPayload, ChangeBillingInformationResponsePayload>;

export interface ChangePremiumRequestPayload {
    /**
     * Team id
     */
    teamId: number;
    /**
     * True if subscribing for premium, false if unsubscribing
     */
    premium: boolean;
}

export interface ChangePremiumResponsePayload { }

/**
 * Change premium status for team. This may trigger payment from credit card
 */
export type ChangePremiumAction = ActionDescriptor<typeof CHANGE_PREMIUM, ChangePremiumRequestPayload, ChangePremiumResponsePayload>;

export interface PremiumStatusChangedRealtimePayload {
    /**
     * Team id
     */
    teamId: number;
    /**
     * Premium status
     */
    isPremium: boolean;
    /**
     * Premium renewal enabled
     */
    renewalEnabled: boolean;
    /**
     * Premium expiration date if premium is true
     */
    premiumExpirationDate?: string;
}

/**
 * Premium status changed action
 */
export type ChangePremiumServerAction = ServerRealtimeAction<typeof REALTIME_PREMIUM_CHANGED, PremiumStatusChangedRealtimePayload>;

export interface BillingInformationChangedRealtimePayload {
    /**
     * Team id
     */
    teamId: number;
    /**
     * Billing email
     */
    billingEmail?: string;
    /**
     * Last 4 digits of new card or null if it was deleted
     */
    card?: null | string;
}

export type ChangeBillingInformationServerAction = ServerRealtimeAction<typeof REALTIME_BILLING_INFO_CHANGED, BillingInformationChangedRealtimePayload>;

export interface GetBillingHistoryRequestPayload {
    /**
     * Team id
     */
    teamId: number;
}

export interface BillingHistory {
    /**
     * Plan id
     */
    planId: string;
    /**
     * Billing date as Iso string
     */
    date: string;
    /**
     * Billing description
     */
    description: string;
    /**
     * Billing amount
     */
    amount: number;
    /**
     * True if paid
     */
    paid: boolean;
    /**
     * Source of the payment (last 4 digits)
     */
    source: string;
    /**
     * Failure if any
     */
    failure?: {
        /**
         * Failure code
         */
        code: string;
        /**
         * Failure message
         */
        message: string;
        /**
         * Failure reason
         */
        reason: string;
    };
}
export interface GetBillingHistoryResponsePayload extends Array<BillingHistory> { }

export type GetBillingHistoryAction = ActionDescriptor<typeof GET_BILLING_HISTORY, GetBillingHistoryRequestPayload, GetBillingHistoryResponsePayload>;

export type TeamBillingActions =
    ChangeBillingInformationAction |
    ChangePremiumAction |
    GetBillingHistoryAction;

export type TeamBillingServerActions =
    ChangePremiumServerAction |
    ChangeBillingInformationServerAction;
