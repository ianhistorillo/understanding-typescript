// import _ from 'lodash';

// const numbers = [1, 2, 3, 4, 5];

// // split that into multiple arrays1

// const chunkedArr = _.chunk(numbers, 2);
import fs from 'node:fs';

import { z } from 'zod';

const dataSchema = z.object( {
    title: z.string(),
    id: z.number(),
    values: z.array(z.union([z.string(), z.number()]))
});

type Data = z.infer<typeof dataSchema>;

function output(data: Data) {
    console.log(data);
}

const content = JSON.parse(fs.readFileSync('data.json').toString());

const parseData = dataSchema.parse(content);
output(parseData);
