import { ActionDescriptor } from "../../../common/realtimeAction";
import {
    CHANGE_NOTE,
    CREATE_NOTE,
    DELETE_NOTE,
} from "../../constants/note";

export type CreateNoteAction = ActionDescriptor<typeof CREATE_NOTE,
    {
        /**
         * Communication id
         */
        communicationId: string;
        /**
         * Note text
         */
        noteText: string;
    }, {}>;

export type DeleteNoteAction = ActionDescriptor<typeof DELETE_NOTE,
    {
        /**
         * Communication id
         */
        communicationId: string;
    }, {}>;

export type ChangeNoteAction = ActionDescriptor<typeof CHANGE_NOTE,
    {
        /**
         * Communication id
         */
        communicationId: string;
        /**
         * New note text
         */
        newText: string;
    }, {}>;

export type NoteActions =
    CreateNoteAction |
    DeleteNoteAction |
    ChangeNoteAction;
