const { Router } = require("express");
const router = new Router();
const { db } = require("./../firebase");


//returnera array med top 5 hamsterz
router.get("/top", async (req, res) => {
    let topHamsters = [];
    let snapShot = await db.collection("hamsters").orderBy("wins", "desc").limit(5).get();

    snapShot.forEach(doc => {
        topHamsters.push(doc.data());
    })
    console.log(topHamsters);
    res.send({ topHamsters: topHamsters });


})

//returnera array med bottom 5 hamsterz
router.get("/bottom", async (req, res) => {
    let bottomHamsters = [];
    let snapShot = await db.collection("hamsters").orderBy("defeats", "desc").limit(5).get();

    snapShot.forEach(doc => {
        bottomHamsters.push(doc.data());
    })
    console.log(bottomHamsters);
    res.send({ bottomHamsters: bottomHamsters });

})

module.exports = router;