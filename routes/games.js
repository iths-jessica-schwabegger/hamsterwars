const { Router } = require("express");
const router = new Router();
const { db } = require("./../firebase");

//funkar. Hämtar alla games.
router.get("/", async (req, res) => {
    try {
        let games = [];
        let snapShot = await db.collection("games").get();

        snapShot.forEach(doc => {
            games.push(doc.data());
        })
        res.send({ games: games });
    }
    catch(err) {
        res.send(500).send(err);
    }

})


//	Sparar en match med formatet { timeStamp: Date, 
//  contestants: [{ hamsterobject }, { hamsterobject } ] }.
router.post("/", async (req, res) => {
    
    //in progress

    try {
        await db.collection("games").doc().set(newGame)
        .then(res.send({ msg: "New game created!"}))
        .catch(err => {throw err});
    }
    catch(err) {
        console.error(err)
        res.send(500).send(err);
    }
})


module.exports = router;