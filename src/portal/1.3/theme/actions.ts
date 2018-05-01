import { ActionDescriptor } from "../../../common";
import {
    CHANGE_CURRENT_THEME,
    DELETE_THEME,
    GET_THEMES,
    UPDATE_THEME,
    UPLOAD_IMAGE,
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

/**
 * Update existing visitor theme for the team or create new theme
 */
export type UpdateThemeAction = ActionDescriptor<typeof UPDATE_THEME,
    {
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

    }, {
        /**
         * Theme id
         */
        themeId: number;
    }>;

/**
 * Delete theme
 */
export type DeleteThemeAction = ActionDescriptor<typeof DELETE_THEME,
    {
        /**
         * Theme id
         */
        themeId: number;
    }, {}>;

/**
 * Change current theme
 */
export type ChangeCurrentThemeAction = ActionDescriptor<typeof CHANGE_CURRENT_THEME,
    {
        /**
         * Team id. Required if omitting themeId
         */
        teamId: number;
        /**
         * Theme id to make it as current theme. Omitting it will reset to default theme
         */
        themeId?: number;
    }, {}>;

/**
 * Obtain all team themes
 */
export type GetThemesAction = ActionDescriptor<typeof GET_THEMES,
    {
        /**
         * Team id
         */
        teamId: number;
    }, {
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
    }>;

/**
 * Upload new image for the team
 */
export type UploadImageAction = ActionDescriptor<typeof UPLOAD_IMAGE,
    {
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
    }, {
        /**
         * Image url
         */
        url: string;
    }>;

export type ThemeActions =
    UpdateThemeAction |
    DeleteThemeAction |
    ChangeCurrentThemeAction |
    GetThemesAction |
    UploadImageAction;
