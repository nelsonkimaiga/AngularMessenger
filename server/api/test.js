
"use strict";

exports.registerRoute = function (app) {
    app.get("/api/string/:text", function (req, res) {
        res.writeHead(200, {
            "Content-Type": "application/json"
        });
        res.write(JSON.stringify({original: req.params.text, reverted: req.params.text.reverse()}));
        res.end();
    });
};
