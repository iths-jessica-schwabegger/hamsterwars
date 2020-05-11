const { Router } = require("express");
const router = new Router();
const { auth, db } = require("./../firebase");
const fs = require("fs");


//serva alla bilder /assets

router.get("/", async (req, res) => {
    let images = [];

    let snapShot = await db.collection("hamsters").get();

    snapShot.forEach(doc => {
        images.push(doc.data().imgName);
    })
    
    console.log(images);

    //hämtar en bild, behöver alla...
    // let number = 1;
    // let hamsterImages = [];
    // for(let obj of images) {
    //     let src = fs.createReadStream(`./hamsters/hamster-${number}.jpg`);
    //     number++;
    //     src.pipe(hamsterImages);

    // }
    // res.send(hamsterImages);




    
})


//serva en vald bild /assets/filnamn




module.exports = router;