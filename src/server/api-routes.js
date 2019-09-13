const mongo = require("mongodb").MongoClient;
const router = require("express").Router();
const url = "mongodb://dev:dev@mongo:27017/admin";

mongo.connect(
    url,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err, client) => {
        const db = client.db("trouvkash");
        const terminals = db.collection("terminals");
        const banks = db.collection("banks");

        router.get("/", (req, res) => {
            res.json({
                status: "API is working",
                message: "Welcome to TrouvKach",
            });
        });

        router.get("/banks", (req, res) => {
            banks.find().toArray((_err, items) => {
                res.json(items);
            });
        });

        router.get("/terminals", (req, res) => {
            res.send(
                terminals.find().toArray((_err2, items) => {
                    console.log(items);
                }),
            );
        });
    },
);
module.exports = router;
