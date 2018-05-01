import { ActionDescriptor, ServerRealtimeAction } from "../../../common";
import {
    CHANGE_CURRENT_THEME,
    DELETE_THEME,
    GET_THEMES,
    REALTIME_CURRENT_THEME_CHANGED,
    REALTIME_THEME_DELETED,
    REALTIME_THEME_UPDATED,
    UPDATE_THEME, UPLOAD_IMAGE,
} from "../../constants/theme";
export interface ThemeDefinition {
    /**
     * Theme id
     */
    id: number;
    /**
     * Theme name
     */
    name: string;
    /**
     * Theme definition
     */
    theme: object;
}
export interface UpdateThemeRequestPayload {
    /**
     * Theme id. If omitted, then the new theme will be created
     */
    themeId?: number;
    /**
     * Team id
     */
    teamId: number;
    /**
     * Theme name
     */
    name: string;
    /**
     * Make theme as current
     */
    makeCurrent: boolean;
    /**
     * Theme definition
     */
    theme: object;
}
export interface UpdateThemeResponsePayload {
    /**
     * Theme id
     */
    themeId: number;
}
export interface UpdateThemeRealtimePayload extends UpdateThemeRequestPayload {
    /**
     * Theme id
     */
    themeId: number;
}
/**
 * Update existing visitor theme for the team or create new theme
 */
export type UpdateThemeAction = ActionDescriptor<typeof UPDATE_THEME, UpdateThemeRequestPayload, UpdateThemeResponsePayload>;
/**
 * Theme has been created or updated by someone in the team
 */
export type UpdateThemeServerAction = ServerRealtimeAction<typeof REALTIME_THEME_UPDATED, UpdateThemeRealtimePayload>;
export interface DeleteThemeRequestPayload {
    /**
     * Theme id
     */
    themeId: number;
}
export interface DeleteThemeResponsePayload {
}
export interface DeleteThemeRealtimePayload extends DeleteThemeRequestPayload {
}
/**
 * Delete theme
 */
export type DeleteThemeAction = ActionDescriptor<typeof DELETE_THEME, DeleteThemeRequestPayload, DeleteThemeResponsePayload>;
/**
 * Theme has been deleted by someone in the team
 */
export type DeleteThemeServerAction = ServerRealtimeAction<typeof REALTIME_THEME_DELETED, DeleteThemeRealtimePayload>;
export interface ChangeCurrentThemeRequestPayload {
    /**
     * Team id. Required if omitting themeId
     */
    teamId: number;
    /**
     * Theme id to make it as current theme. Omitting it will reset to default theme
     */
    themeId?: number;
}
export interface ChangeCurrentThemeResponsePayload {
}
export interface ChangeCurrentThemeRealtimePayload extends ChangeCurrentThemeRequestPayload {
}
/**
 * Change current theme
 */
export type ChangeCurrentThemeAction = ActionDescriptor<typeof CHANGE_CURRENT_THEME, ChangeCurrentThemeRequestPayload, ChangeCurrentThemeResponsePayload>;
/**
 * Current theme was changed
 */
export type ChangeCurrentThemeServerAction = ServerRealtimeAction<typeof REALTIME_CURRENT_THEME_CHANGED, ChangeCurrentThemeRealtimePayload>;
export interface GetThemesRequestPayload {
    /**
     * Team id
     */
    teamId: number;
}
export interface GetThemesResponsePayload {
    /**
     * Team id
     */
    teamId: number;
    /**
     * Current theme id or 0 for default theme
     */
    currentThemeId: number;
    /**
     * Array of themes
     */
    themes: ThemeDefinition[];
}
/**
 * Obtain all team themes
 */
export type GetThemesAction = ActionDescriptor<typeof GET_THEMES, GetThemesRequestPayload, GetThemesResponsePayload>;
export interface UploadImageRequestPayload {
    /**
     * Team id to associate this image
     */
    teamId: number;
    /**
     * Image name
     */
    imageName: string;
    /**
     * Image content
     */
    image: Blob;
}
export interface UploadImageResponsePayload {
    /**
     * Image url
     */
    url: string;
}
/**
 * Upload new image for the team
 */
export type UploadImageAction = ActionDescriptor<typeof UPLOAD_IMAGE, UploadImageRequestPayload, UploadImageResponsePayload>;

export type ThemeActions =
    UpdateThemeAction |
    DeleteThemeAction |
    ChangeCurrentThemeAction |
    GetThemesAction |
    UploadImageAction;

export type ThemeServerActions =
    UpdateThemeServerAction |
    DeleteThemeServerAction |
    ChangeCurrentThemeServerAction;
