/* becodeorg/trouvkach
 *
 * /src/server/index.js - Server entry point
 *
 * coded by Lionel Franco, Cynthia Martiny & Florent Bruyers
 * started at 06/09/2019
 */

import express from "express";
import path from "path";
import router from "./api-routes";

const {APP_PORT} = process.env;

const app = express();

const mongo = require("mongodb").MongoClient;
//const url = "mongodb://dev:dev@mongo:27017/admin";
const url =
    "mongodb+srv://dev:dev@cluster0-hu2iq.mongodb.net/test?retryWrites=true&w=majority";

app.use(express.static(path.resolve(__dirname, "../../bin/client")));

app.get("/hello", (req, res) => {
    console.log(`ℹ️  (${req.method.toUpperCase()}) ${req.url}`);
    res.send("Hello, World!");
});

app.listen(APP_PORT, () =>
    console.log(`🚀 Server is listening on port ${APP_PORT}.`),
);

mongo.connect(
    url,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err, client) => {
        if (err) {
            throw err;
        }
        const db = client.db("trouvkash");
        const terminals = db.collection("terminals");
        const banks = db.collection("banks");

        terminals
            .find({address: "Zeelaan 67, 8670 Koksijde"})
            .toArray((_err, item1) => {
                const idBank = item1[0].bank;
                // 0 pour la place de l'Id dans la DB

                banks.find({_id: idBank}).toArray((_err2, item2) => {
                    console.log(item2[0].name);
                });
            });
    },
);

app.use("/api", router);
