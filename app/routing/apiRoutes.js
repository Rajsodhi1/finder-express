var bars = require("../data/data.js");

module.exports = function (app) {
    app.get("/api/bars", function(req, res) {
        res.json(bars);
    });

    app.post("/api/patrons", function(req, res) {
        var barMatch = {
            name: "",
            photo: "",
            matchDiff: 1000
        };
        console.log(req.body);

        var userData = req.body;
        var userScore = userData.scores;

        console.log(userScore);

        var totalDif = 0;

        for (var i = 0; i < bars.length; i++){
            console.log(bars[i]);
            totalDif = 0;

            for (var j = 0; j < bars[i].scores[j]; j++) {
                totalDif += Math.abs(parseInt(userScore[j]) - parseInt(bars[i].scores[j]));

                if (totalDif <= barMatch.matchDiff) {
                    barMatch.name = bars[i].name;
                    barMatch.photo = bars[i].photo;
                    barMatch.matchDiff = totalDif
                }
            }
        }
        patrons.push(userData);
        res.json(barMatch);
    });
}