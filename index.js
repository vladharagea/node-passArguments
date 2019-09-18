const { printHeaders } = require(`./stars`);

const starNum = process.argv.slice(2).filter(x=> !isNaN(x))[0];
const strThing = process.argv.slice(2).filter(x=> isNaN(x))[0];

printHeaders(starNum, strThing);