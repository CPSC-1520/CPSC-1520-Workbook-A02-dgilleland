// I am "loading" the JSON contents and assigning
// the value to myJson variable.
import myJson from './info.json' assert {type: 'json'};
console.log(myJson);
const conn = myJson.connectionString.connection.split(';');
const dbInfo = `In my connection strings, I have '${myJson.connectionString.name}' as the "name" by which my program will read the details of the connection.\nThe details include:\n\tServer: ${conn[0]}\n\tDatabase: ${conn[1]}\n\tAuthentication: ${conn[2].startsWith('Trusted')?'Integrated Security':'Other login credentials'}`;
console.log('Database Connection:', dbInfo);