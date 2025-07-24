"use strict";
// interface Authenticatable {
//   role: string;
// }
class AuthenticatableUser {
    userName;
    email;
    password;
    constructor(userName, email, password) {
        this.userName = userName;
        this.email = email;
        this.password = password;
    }
    login() {
        //..
    }
    logout() {
        //..
    }
}
//..
function authenticate(user) {
    user.login();
}
let user;
user = {
    email: "test@example.com",
    password: "abc1",
    login() {
        //..react out to a database, check credentials, create a session
    },
    logout() {
        // clear session
    },
};
