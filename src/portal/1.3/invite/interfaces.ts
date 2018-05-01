/**
 * User invite information
 */
export interface UserInviteInfo {
    /**
     * Invite code
     */
    code: string;
    /**
     * Linked team to this invite
     */
    teamId: number;
    /**
     * Team name
     */
    teamName: string;
}
