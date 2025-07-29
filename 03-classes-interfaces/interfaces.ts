// interface and type can used both
// catch: The advantage of using interface are for declaration merging. Like extending the types.
interface Authenticatable {
  email: string;
  password: string;

  login(): void;
  logout(): void;
}

// Creating new interface and extends the original interface
interface AuthenticatableAdmin extends Authenticatable {
  role: "admin" | "superadmin";
}

// interface Authenticatable {
//   role: string;
// }

class AuthenticatableUser implements Authenticatable {
  constructor(
    public userName: string,
    public email: string,
    public password: string
  ) {}
  login() {
    //..
  }
  logout() {
    //..
  }
}

//..

function authenticate(user: Authenticatable) {
  user.login();
}

let user: Authenticatable;

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
