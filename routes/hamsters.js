const { Router } = require("express");
const router = new Router();
const { db } = require("./../firebase");


//funkar. Hämtar random hamster.
router.get("/random", async (req, res) => {

    let hamsters = [];
    let snapShot = await db.collection("hamsters").get();
    
    snapShot.forEach(doc => {
        hamsters.push(doc.data());
    })
    let random = Math.floor(Math.random() * hamsters.length);
    res.send( hamsters[random] );

});

//funkar. Hämtar alla hamsters i hela världen
router.get("/", async (req, res) => {

    let hamsters = [];
    let snapShot = await db.collection("hamsters").get();
    
    snapShot.forEach(doc => {
        hamsters.push(doc.data());
    })
    res.send( {hamsters: hamsters} );

});

//funkar. Hämtar hamster med specifikt ID
router.get("/:id", async (req, res) => {
    let hamster;
    let snapShot =  await db.collection("hamsters").where("id", "==", parseInt(req.params.id)).get();

    snapShot.forEach(doc => {
        hamster = doc.data();
    })

    res.send({hamster: hamster});

});


//funkar. Uppdaterar wins/defeats/games i databasen vid en PUT
router.put("/:id/results", async (req, res) => {
    try {
    //leta reda på hamster med ID :id
    let snapShot =  await db.collection("hamsters").where("id", "==", parseInt(req.params.id)).get();
    
     //loopa igenom resultatet
    snapShot.forEach(doc => {
        let hamster = doc.data(); //Få ut info på firestore obj. (data)
        
         //uppdatera egenskaperna
        if(parseInt(req.body.wins) > 0 ) {
            hamster.wins++;
        }
        if(parseInt(req.body.defeats) > 0 ) {
            hamster.defeats++;
        }
        hamster.games += 1;
        
         //skriv in den nya uppdaterade hamstern i db
        db.collection("hamsters").doc(doc.id).set(hamster)
        .then(res.send({ msg: "hamster updated!"}))
        .catch(err => {throw err;});
    })
    }

    catch(err) {
        console.error(err)
        res.send(500).send(err);
    }

});

module.exports = router;