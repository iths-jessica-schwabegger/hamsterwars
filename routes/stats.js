const { Router } = require("express");
const router = new Router();
const { db } = require("./../firebase");

//Returnerar totalt antal matcher som körts.
router.get("/total", async (req, res) => {
    try {
        let snapShot = await db.collection("games").get();
        let total = [];
        
        snapShot.forEach(doc => {
            total.push(doc.data());
        })

        //ny collection?
        //await db.collection("stats").doc().set(total);
        res.send({totalGames: total.length});

    }
    catch(err) {
        res.status(500).send(err);
    }
})




module.exports = router;