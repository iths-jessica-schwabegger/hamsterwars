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


//dokumentation vid POST: 
//{
//	"contestants": [{"id": 7}, {"id": 5}]
//}
router.post("/", async (req, res) => {
    try {    

        let hamsters = [];
        //Hämtar alla hamster-objekt
        let snapShot = await db.collection("hamsters").get();

        snapShot.forEach(doc => {
            hamsters.push(doc.data());
        })

        let contestants = []
        //Loopar igenom hamsterobj-array och jämför ID med id:t som är POSTat i postman
        for(let obj of hamsters) {
            for(let hamster of req.body.contestants) {

                if(obj.id === hamster.id) {
                    contestants.push(obj);
                }
            }
        }
        //Lägger in datum och objekt med rätt ID i objekt.
        let gameObj = {
            timeStamp: Date(),
            contestants: contestants
            //winner: 
        }
            //Lägger in objekt i firestore.
            await db.collection("games").doc().set(gameObj)
            res.send({ msg: "New game created!"});
    }
    catch(err) {
        console.error(err)
        res.send(500).send(err);
    }
})


module.exports = router;