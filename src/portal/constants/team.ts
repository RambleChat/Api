/**
 * Get team info
 */
export const GET_TEAM = "team/GET";

/**
 * Delete team
 */
export const DELETE_TEAM = "team/DELETE_TEAM";

/**
 * Team was deleted
 */
export const REALTIME_TEAM_WAS_DELETED = "team/WAS_DELETED";

/**
 * Create team
 */
export const CREATE_TEAM = "team/CREATE_TEAM";

/**
 * Change team name
 */
export const CHANGE_TEAM_NAME = "team/CHANGE_TEAM_NAME";

/**
 * Team name was changed
 */
export const REALTIME_TEAM_NAME_CHANGED = "team/NAME_CHANGED";

/**
 * Delete team invite
 */
export const DELETE_TEAM_INVITE = "team/DELETE_INVITE";

/**
 * Delete team member
 */
export const DELETE_TEAM_MEMBER = "team/DELETE_MEMBER";

/**
 * Change member role
 */
export const CHANGE_TEAM_MEMBER_ROLE = "team/CHANGE_MEMBER_ROLE";

/**
 * Update team blacklist
 */
export const UPDATE_BLACKLIST = "team/UPDATE_BLACKLIST";

/**
 * Role was changed for user
 */
export const REALTIME_TEAM_MEMBER_ROLE_WAS_CHANGED = "team/ROLE_WAS_CHANGED";

/**
 * Leave team
 */
export const LEAVE_TEAM = "team/LEAVE";

/**
 * Create invites for team
 */
export const CREATE_TEAM_INVITES = "team/CREATE_INVITES";

/**
 * Add team code
 */
export const ADD_TEAM_CODE = "team/ADD_CODE";

/**
 * Delete team code
 */
export const DELETE_TEAM_CODE = "team/DELETE_CODE";

/**
 * Check team code availability
 */
export const CHECK_TEAM_CODE = "team/CHECK_CODE";

/**
 * Change billing information, such as billing email or used card
 */
export const CHANGE_BILLING_INFO = "team/CHANGE_BILLING_INFO";

/**
 * Change premium subscription
 */
export const CHANGE_PREMIUM = "team/CHANGE_PREMIUM";

/**
 * Retreive the billing history for the team
 */
export const GET_BILLING_HISTORY = "team/GET_BILLING_HISTORY";

/**
 * Update team settings
 */
export const UPDATE_TEAM_SETTINGS = "team/UPDATE_SETTINGS";

/**
 * Set DND for single team
 */
export const SET_TEAM_DND = "team/SET_DND";

/**
 * User accepts team invite
 */
export const REALTIME_TEAM_INVITE_WAS_ACCEPTED = "team/INVITE_WAS_ACCEPTED";

/**
 * User declined team invite
 */
export const REALTIME_TEAM_INVITE_WAS_DECLINED = "team/INVITE_WAS_DECLINED";

/**
 * Invites was created by other user in team
 * @deprecated
 */
export const REALTIME_TEAM_INVITES_CREATED_BY_MEMBER = "team/INVITES_CREATED_BY_MEMBER";

/**
 * Invite was deleted/canceled by other user in team
 * @deprecated
 */
export const REALTIME_TEAM_INVITE_WAS_CANCELED_BY_MEMBER = "team/INVITE_WAS_CANCELED_BY_MEMBER";

/**
 * Member leave team
 * @deprecated
 */
export const REALTIME_TEAM_MEMBER_LEAVE = "team/MEMBER_LEAVED";

/**
 * Member was deleted by someone in team
 * @deprecated
 */
export const REALTIME_TEAM_MEMBER_WAS_DELETED = "team/MEMBER_WAS_DELETED";

/**
 * Member role was changed. Being sent only to affected member
 * @deprecated
 */
export const REALTIME_YOUR_TEAM_ROLE_WAS_CHANGED = "team/YOUR_ROLE_WAS_CHANGED";

/**
 * Member was deleted from team. Being sent only to affected member
 * @deprecated
 */
export const REALTIME_YOU_HAS_BEEN_DELETED_FROM_TEAM = "team/YOU_HAS_BEEN_DELETED";

/**
 * New team code was added
 * @deprecated
 */
export const REALTIME_CODE_ADDED = "team/CODE_ADDED";

/**
 * team code was deleted
 * @deprecated
 */
export const REALTIME_CODE_DELETED = "team/CODE_DELETED";

/**
 * Premium subscription was changed
 * @deprecated
 */
export const REALTIME_PREMIUM_CHANGED = "team/PREMIUM_WAS_CHANGED";

/**
 * Team credit card was either deleted or new assigned
 * @deprecated
 */
export const REALTIME_BILLING_INFO_CHANGED = "team/BILLING_INFO_WAS_CHANGED";

/**
 * Team blacklist was changed
 * @deprecated
 */
export const REALTIME_BLACKLIST_CHANGED = "team/BLACKLIST_CHANGED";
