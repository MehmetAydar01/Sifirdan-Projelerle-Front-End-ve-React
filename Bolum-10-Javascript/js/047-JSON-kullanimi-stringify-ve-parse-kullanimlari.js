// JSON Kullanimi

const info = `
{
  "user": "username",
  "info": 1234234,
  "arr": [{ "i": 1, "k": 2 }],
  "isActive": true
}
`;
console.log(typeof info);
console.log(info);

const parsedInfo = JSON.parse(info);
console.log(typeof parsedInfo);
console.log(parsedInfo);

const stringifyInfo = JSON.stringify(info);
console.log(typeof stringifyInfo);
console.log(stringifyInfo);
