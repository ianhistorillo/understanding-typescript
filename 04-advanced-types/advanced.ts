
// Index Types
type DataStore = {
    [prop: string]: number | boolean;
};

// Revisiting Record Type
let someOBj: Record<string, number | boolean>;

let store: DataStore = {};

// ..

store.id = 5;
store.isOpen = false;
// store.name = 'Max';


// Constant Types

let roles = ['admin', 'guest', 'editor'] as const;
// roles.push('max');
const firstRole = roles[0];

// "satisfies" Keyword
const dataEntries = {
    entry1: 0.51,
    entry2: -1.23
} satisfies Record<string, number>;

// ...

dataEntries.entry3