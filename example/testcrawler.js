var Crawler = require("../");
var crawler = new Crawler("http://127.0.0.1:3000/");

crawler.on("crawlstart", function() {
    console.log("Crawl starting");
});

crawler.on("fetchstart", function(queueItem) {
    console.log("fetchStart", queueItem);
});

crawler.on("fetchcomplete", function(queueItem) {
    console.log("fetchcomplete", queueItem);
});

crawler.on("complete", function() {
    console.log("Finished!");
});

crawler.start();
