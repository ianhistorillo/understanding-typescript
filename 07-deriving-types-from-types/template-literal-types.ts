// const mainUserName = 'Ian';

// const greeting = `Hi there, ${mainUserName}.`;

type ReadPermissions = 'no-read' | 'read';
type WriterPermissions = 'no-write' | 'write';

type FilePermissions = `${ReadPermissions}-${WriterPermissions}`;

type DataFile = {
    data: string;
    permissions: FilePermissions;
};

type DataFileEventNames = `${keyof DataFile}Changed`;

type DataFileEvents = {
    [Key in DataFileEventNames]: () => void; 
};



