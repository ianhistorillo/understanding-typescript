type StringArray = string[];
// type ElementType<T extends any[]> = T[number];

// type Example1 = ElementType<StringArray>

// const text = 'hello';

// type Example2 = ElementType<typeof text>;

// Allows you to dynamically determine each types of any value
let string = 'a';
type GetElementType<T> = T extends any[] ? T[number] : never;
type Example1 = GetElementType<StringArray>;
type Example2 = GetElementType<typeof string>;

type FullnamePerson = { firstName: string; lastName: string };
type FullNameOrNothing<T> = T extends FullnamePerson ? string : never;

function getFullName<T extends object>(person: T): FullNameOrNothing<T> {
    if (
        'firstName' in person && 
        'lastName' in person && 
        person.firstName && 
        person.lastName
    ) {
        return `${person.firstName} ${person.lastName}` as FullNameOrNothing<T>;
    }
    throw new Error ('No first name and / or last name found')
}

const name1 = getFullName({});
const name2 = getFullName({firstName: 'Ian', lastName: 'Historillo'})