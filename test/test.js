const lib = require("../lib");

const backpulse = new lib("hello");

backpulse.fetchContact(contact => {
    console.log(contact);
});