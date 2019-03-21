const lib = require("../lib");

const backpulse = new lib("aureleoules");

backpulse.fetchContact(contact => {
    console.log(contact);
});

backpulse.fetchArticles(articles => {
    console.log(articles);
})