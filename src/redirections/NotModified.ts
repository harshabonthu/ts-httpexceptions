/**
 * @module redirections
 */ /** */
import {Exception} from "../Exception";

export class NotModified extends Exception {

    name: string = 'NOT_MODIFIED';

    constructor(message: string) {
        super(304, message);
    }
}