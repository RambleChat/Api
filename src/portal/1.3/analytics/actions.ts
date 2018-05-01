import { ActionDescriptor } from "../../../common/realtimeAction";
import { GET_ANALYTICS } from "../../constants/analytics";

export type GetAnalyticsAction = ActionDescriptor<typeof GET_ANALYTICS,
    {
        /**
         * Team id. Omitting it will fetch for all teams
         */
        teamId?: number;
        /**
         * Days to fetch
         */
        days: number;
    }, {
        /**
         * Each key is teamId. Object keys in JS are always strings
         */
        [key: string]: {
            /**
             * Total number of chats
             */
            totalChats: number;
            /**
             * Total number of messages
             */
            totalMessages: number;
            /**
             * Total number of answered chats
             */
            totalAnsweredChats: number;
            /**
             * Total number of missed chats
             */
            totalMissedChats: number;
            /**
             * Total page views
             */
            totalPageViews: number;
            /**
             * Chat graph for period. Each key is day of metric and value is object of metric
             */
            chatGraph: {
                [key: string]: {
                    /**
                     * Total chats
                     */
                    total: number;
                    /**
                     * Missed chats
                     */
                    missed: number;
                    /**
                     * Answered chats
                     */
                    answered: number;
                },
            };
        };

    }>;

/**
 * Common type for all analytics realtime actions
 */
export type AnalyticsActions = GetAnalyticsAction;
