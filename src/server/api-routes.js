/* becodeorg/trouvkach
 *
 * /src/server/api-routes.js
 *
 * coded by Lionel Franco, Cynthia Martiny & Florent Bruyers
 * started at 06/09/2019
 */

const mongo = require("mongodb").MongoClient;
//const ObjectID = require("mongodb").ObjectID;
const router = require("express").Router();
//const url = "mongodb://dev:dev@mongo:27017/admin";
const url =
    "mongodb+srv://dev:dev@cluster0-hu2iq.mongodb.net/test?retryWrites=true&w=majority";

async function installationMongo(term) {
    // const items = await term.find({}).toArray();
    // for (const [i, element] of items.entries()) {
    //     element.location = {
    //         type: "Point",
    //         coordinates: [element.longitude, element.latitude],
    //     };
    //     console.log(element);
    //     console.log(i);
    //     term.updateOne({_id: element._id}, {$set: element});
    // }

    await term.createIndex({location: "2dsphere"});
}

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
            terminals
                .aggregate([
                    {
                        $lookup: {
                            from: "banks",
                            localField: "bank",
                            foreignField: "_id",
                            as: "bankDetails",
                        },
                    },
                ])
                .toArray((_err, items) => {
                    res.json(items);
                });
        });

        router.get("/terminals/:long/:lat", (req, res) => {
            console.log(req.params.long, req.params.lat);
            terminals
                .aggregate([
                    {
                        $geoNear: {
                            near: {
                                type: "Point",
                                coordinates: [
                                    parseFloat(req.params.long),
                                    parseFloat(req.params.lat),
                                ],
                            },
                            distanceField: "dist.calculated",
                            maxDistance: 2000,
                        },
                    },
                ])
                .toArray((_err, items) => {
                    res.json(items);
                });
        });

        router.get("/test/", (req, res) => {
            installationMongo(terminals).then(() => {
                res.json("ok");
            });
        });
        router.get("/update/:id", req => {
            const deleted = new Date();
            console.log(req.params.id);
            console.log(deleted.toISOString());
            terminals.updateOne(
                {_id: req.params.id},
                {
                    $set: {deleted_at: deleted.toISOString()},
                },
                {},
                (_err, res) => {
                    console.error(err);
                    console.log(res);
                },
            );
        });
    },
);

module.exports = router;
