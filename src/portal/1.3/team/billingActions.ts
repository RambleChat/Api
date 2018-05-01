import { ActionDescriptor } from "../../../common/realtimeAction";
import { CHANGE_BILLING_INFO, CHANGE_PREMIUM, GET_BILLING_HISTORY } from "../../constants";

/**
 * Assign new credit card to the team
 */
export type ChangeBillingInformationAction = ActionDescriptor<typeof CHANGE_BILLING_INFO,
    {
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

    }, {}>;

/**
 * Change premium status for team. This may trigger payment from credit card
 */
export type ChangePremiumAction = ActionDescriptor<typeof CHANGE_PREMIUM,
    {
        /**
         * Team id
         */
        teamId: number;
        /**
         * True if subscribing for premium, false if unsubscribing
         */
        premium: boolean;

    }, {}>;

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

export type GetBillingHistoryAction = ActionDescriptor<typeof GET_BILLING_HISTORY,
    {
        /**
         * Team id
         */
        teamId: number;

    }, BillingHistory[]>;

export type TeamBillingActions =
    ChangeBillingInformationAction |
    ChangePremiumAction |
    GetBillingHistoryAction;
