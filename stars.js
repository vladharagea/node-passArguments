module.exports.printHeaders = (starNum, strThing) => {
    if (starNum === undefined || strThing === undefined) {
        console.log(`********** \nHi!\n**********`);
    } else {
        console.log('*'.repeat(starNum));
        console.log(`${strThing}!`);
        console.log('*'.repeat(starNum));
    };
};