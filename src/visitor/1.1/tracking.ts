import { ActionDescriptor } from "../..";
import { VISITOR_TRACK_VISIT } from "../constants";

/**
 * Track visitor visit action. For now it's just increasing the counter of "Links clicked" in portal
 */
export type VisitorTrackVisitAction = ActionDescriptor<typeof VISITOR_TRACK_VISIT, {
    /**
     * Visit page to track
     */
    visitPage?: string;
    /**
     * Custom variables, eg, Campaign=Ramble, these will be displayed in portal for communication
     */
    customVariables?: object;
}, void>;
