export const REALTIME_ERROR = "RealtimeError";
export const API_ERROR = "ApiError";
export const TOKEN_ERROR = "TokenError";
export const VALIDATION_ERROR = "ValidationError";

/**
 * Generic error happened while executing action handler
 *
 * @export
 * @interface RealtimeErrorInterface
 */
export interface RealtimeErrorInterface {
    /**
     * Error message
     */
    message: string;
    /**
     * Action produced error
     */
    action: string;
    /**
     * Error type
     */
    type: typeof REALTIME_ERROR;
}

/**
 * Generic error occured while executing action handler
 *
 * @export
 * @class RealtimeError
 */
export class RealtimeError extends Error implements RealtimeErrorInterface {
// export class RealtimeError implements RealtimeErrorInterface {
    /**
     * Error message
     */
    public message: string;
    /**
     * Action produced error
     */
    public action: string;
    /**
     * Error name
     */
    public name: string = REALTIME_ERROR;
    /**
     * Error type
     */
    public type: typeof REALTIME_ERROR = REALTIME_ERROR;

    /**
     * @constructor
     * @param message
     * @param action
     */
    public constructor(message: string, action: string) {
        super(message);
        Object.setPrototypeOf(this, RealtimeError.prototype);
        this.message = message;
        this.action = action;
        if (typeof (Error as any).captureStackTrace === "function") {
            (Error as any).captureStackTrace(this, this.constructor);
        } else {
            this.stack = (new Error()).stack;
        }
    }

    /**
     * Convert error to object
     */
    public toObject(): RealtimeErrorInterface {
        return {
            action: this.action,
            message: this.message,
            type: this.type,
        };
    }
}

export type APIErrors = typeof API_ERROR | typeof TOKEN_ERROR | typeof VALIDATION_ERROR;

/**
 * Error object interface
 */
export interface ApiErrorInterface {
    /**
     * HTTP Backend URL
     */
    url: string;
    /**
     * HTTP status code
     */
    code: number;
    /**
     * JSON error object
     */
    error?: {};
    /**
     * Error string type
     */
    type: APIErrors;
    /**
     * Error message
     */
    message: string;
}

/**
 * Generic API error is base for other custom errors and represent unsuccessful HTTP api status code
 */
export class ApiError extends Error implements ApiErrorInterface {
// export class ApiError implements ApiErrorInterface {
    /**
     * Error message
     */
    public message: string;
    /**
     * HTTP Backend URL
     */
    public url: string;
    /**
     * HTTP status code
     */
    public code: number;
    /**
     * JSON error object
     */
    public error?: {};
    /**
     * Error string type
     */
    public type: APIErrors = API_ERROR;
    /**
     * Error name
     */
    public name: string = API_ERROR;

    /**
     * @constructor
     */
    public constructor(message: string, url: string, code: number, error?: object) {
        super(message);
        Object.setPrototypeOf(this, ApiError.prototype);
        // super() doesn't assign message for some reason
        this.message = message;
        this.url = url;
        this.code = code;
        this.error = error;
        if (typeof (Error as any).captureStackTrace === "function") {
            (Error as any).captureStackTrace(this, this.constructor);
        } else {
            this.stack = (new Error()).stack;
        }
    }

    /**
     * Convert error to object representation
     */
    public toObject(): ApiErrorInterface {
        return {
            type: this.type,
            url: this.url,
            code: this.code,
            error: this.error,
            message: this.message,
        };
    }
}

/**
 * Token error represent status code 401 or 400 and indicates that provided token is not valid.
 * Usually app should redirect to /login after it
 */
export class TokenError extends ApiError {
    public type: typeof TOKEN_ERROR = TOKEN_ERROR;
    public name: string = TOKEN_ERROR;

    public constructor(message: string, url: string, code: number, error?: object) {
        super(message, url, code, error);
        Object.setPrototypeOf(this, TokenError.prototype);
    }
}

/**
 * Validation error represents status code 422 and contains validation errors in error property
 */
export class ValidationError extends ApiError {
    public type: typeof VALIDATION_ERROR = VALIDATION_ERROR;
    public name: string = VALIDATION_ERROR;
    public constructor(url: string, error: object) {
        super("Validation error", url, 422, error);
        Object.setPrototypeOf(this, ValidationError.prototype);
    }
}

export function isApiError(error: any): error is ApiErrorInterface {
    return (error && error.type && (error.type === API_ERROR || error.type === TOKEN_ERROR || error.type === VALIDATION_ERROR));
}

export function isRealtimeError(error: any): error is RealtimeErrorInterface {
    return (error && error.type && error.type === REALTIME_ERROR);
}

/**
 * Error factory. Needed to convert error objects from realtime client to proper error instances
 */
export function createFromObject(error?: RealtimeErrorInterface | ApiErrorInterface | Error): Error | RealtimeError | ApiError | ValidationError | TokenError {
    if (!error) {
        return new Error();
    }

    if (isRealtimeError(error)) {
        return new RealtimeError(error.message, error.action);
    }

    if (isApiError(error)) {
        switch (error.type) {
            case API_ERROR:
                return new ApiError(error.message, error.url, error.code, error.error);
            case TOKEN_ERROR:
                return new TokenError(error.message, error.url, error.code, error.error);
            case VALIDATION_ERROR:
                return new ValidationError(error.url, error.error ? error.error : {});
        }
    }

    if (error.message) {
        return new Error(error.message);
    }

    return new Error("Unknown error");
}
