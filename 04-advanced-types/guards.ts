/** USING TYPE GUARD VERSION */

// type FileSource = { path: string };
// const fileSource: FileSource = {
//   path: 'some/path/to/file.csv',
// };

// type DBSource = { connectionUrl: string };
// const dbSource: DBSource = {
//   connectionUrl: 'some-connection-url',
// };

// type Source = FileSource | DBSource;

// function loadData(source: Source) {
//   if ( 'path' in source ) {
//     // source.path; => use that open the file
//     return;
//   }
//   // source.connectionUrl; => to reach out to database
// }


/** ADDING TYPE 'type' GUARD PARAMETERS VERSION */
type FileSource = { type: 'file'; path: string };
const fileSource: FileSource = {
  type: 'file',
  path: 'some/path/to/file.csv',
};

type DBSource = { type: 'db', connectionUrl: string };
const dbSource: DBSource = {
  type: 'db',
  connectionUrl: 'some-connection-url',
};

type Source = FileSource | DBSource;

// outsource type guards
function isFile(source: Source) {
    return source.type === 'file';
}

function loadData(source: Source) {
  if ( source.type === 'file' ) {
    // source.path; => use that open the file
    return;
  }
  // source.connectionUrl; => to reach out to database
}


// class User {
//     constructor(public name: string) {}
  
//     join() {
//       // ...
//     }
//   }
  
//   class Admin {
//     constructor(permissions: string[]) {}
  
//     scan() {
//       // ...
//     }
//   }
  
//   const user = new User('Max');
//   const admin = new Admin(['ban', 'restore']);
  
//   type Entity = User | Admin;
  
//   function init(entity: Entity) {
//     if (entity instanceof User) {
//         entity.join();
//         return;
//     }

//     entity.scan()
//   }