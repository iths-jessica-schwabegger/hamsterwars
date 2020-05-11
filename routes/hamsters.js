const { Router } = require("express");
const router = new Router();
const { auth, db } = require("./../firebase");


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
    res.send( hamsters );

});

//funkar. Hämtar hamster med specifikt ID
router.get("/:id", async (req, res) => {
    let hamster;
    let snapShot =  await db.collection("hamsters").where("id", "==", parseInt(req.params.id)).get();

    snapShot.forEach(doc => {
        hamster = doc.data();
    })

    res.send( hamster );

});






router.put("/:id/results", async (req, res) => {
    try {
    //leta reda på hamster med ID :id
    let snapShot =  await db.collection("hamsters").where("id", "==", parseInt(req.params.id)).orderBy("name").get();
    console.log(req.body);
    console.log(snapShot);
    
    //loopa igenom resultatet
    snapShot.forEach(doc => {
        let hamster = doc.data(); //Få ut info på firestore obj. (data)
        
        //wins
        //uppdatera egenskaperna
        hamster.wins += parseInt(req.body.wins);
        hamster.defeats += parseInt(req.body.wins);
        hamster.games += parseInt(req.body.wins);
        

        //skriv in den nya uppdaterade hamstern i db
        db.collection("hamsters").doc(doc.id).set(hamster)
        .then(res.send({ msg: "hamster updated!"}))
        .catch(err => {throw err;});
    })
    }

    catch(err) {
        console.error(err)
        res.send(500, err)
    }

});

module.exports = router;