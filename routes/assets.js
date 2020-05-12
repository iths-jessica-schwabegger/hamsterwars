const { Router } = require("express");
const router = new Router();
//const { db } = require("./../firebase");
const fs = require("fs");


//Servar en bild
router.get("/:imgFile", async (req, res) => {

    let src = fs.createReadStream(`./hamsters/${req.params.imgFile}`);
    src.pipe(res);
    
})



module.exports = router;