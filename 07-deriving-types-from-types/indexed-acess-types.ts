// Understanding Indexed Access Types
const appUser = {
    name: 'Ian',
    age: 35,
    permissions: [{id: 'p1', title: 'Admin', description: 'Admin access'}],
}

//
type AppUser = {
    name: string;
    age: number;
    permissions: {
        id: string;
        title: string;
        description: string
    }[]
};

type Perms = AppUser['permissions'];
type Perm = Perms[number];

type Names = string[];
type Name = Names[number];
