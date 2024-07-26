const express = require("express");
const router = express.Router();
const MenuItem = require('./../models/MenuItem');


// Menu
router.post("/", async (req, res) => {
    try {
        
        // Assuming req.body contain person data
        const menuData = req.body;

        // create a newperson document using mongoose model
        const newmenu = new MenuItem(menuData);

        const savemenu = await newmenu.save();

        console.log("saved data..");
        res.status(200).send(savemenu);
    } catch (err) {
        console.log("Error in saving person");
        res.status(500).send("Error in saving person");
    }
});

// get data of menu
router.get("/", async (req, res) => {
  try {
    const menuData = await MenuItem.find();
    res.status(200).send(menuData);
  } catch (err) {
    console.log("Error in getting person data");
    res.status(500).send("Error in getting person data");
  }
});


module.exports=router;