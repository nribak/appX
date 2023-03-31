export class TokenError extends Error {
    constructor() {
        super('token is not valid');
    }
}
