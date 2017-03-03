export class User {
    constructor(public email: string, 
                public password: string,
                // ? means optional
                public firstName?: string,
                public lastName?: string) {

    }
}