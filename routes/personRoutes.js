const express = require("express");
const router = express.Router();
const person = require("./../models/persons");

router.post("/", async (req, res) => {
    try {
        
        // Assuming req.body contain person data
        const personData = req.body;

        // create a newperson document using mongoose model
        const newPerson = new person(personData);

        const saveperson = await newPerson.save();

        console.log("saved data..");
        res.status(200).send(saveperson);
    } catch (err) {
        console.log("Error in saving person");
        res.status(500).send("Error in saving person");
    }
});

// get data of person
router.get("/", async (req, res) => {
  try {
    const personData = await person.find();
    res.status(200).send(personData);
  } catch (err) {
    console.log("Error in getting person data");
    res.status(500).send("Error in getting person data");
  }
});
// search by id or work type
router.get('/:work',async (req,res)=>{
    try{
        const workType=req.params.work;  //Extract work type from url parameters
        
        if(workType == 'chef' || workType == 'manager'){
            const personData = await person.find({work:workType});  //Search for person
            res.status(200).send(personData);

        }else{
            res.status(400).send('Invalid work type');
        }
    }catch(err){
        console.log("Error in getting person data");
        res.status(500).send("Error in getting person data");
    }

});

router.put('/:id',async (req,res)=>{
    try{
        const personId=req.params.id;  //Extract person id from url
        const UpdatedpersonData=req.body;   // updated person data in body

        const response= await person.findByIdAndUpdate(personId,UpdatedpersonData,{
            new:true,  // return updated document
            runvalidators:true //Run mongoose validate
        });
        
        if(!response){
            return res.status(404).send('Person not found');
        }
        
        console.log('data updated');
        res.status(200).send(response);

    }catch(err){
        console.log("Error in updating person data");
        res.status(500).send("Error in updating person data");
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const personId = req.params.id;  // Extract person ID from URL

        // Find and remove the person by ID
        const response = await person.findOneAndDelete(personId);

        if (!response) {
            // Person not found
            return res.status(404).send('Person not found');
        }

        console.log('Data deleted');
        res.status(200).send(response);
    } catch (err) {
        console.log("Error in updating person data");
        res.status(500).send("Error in updating person data");
    }
});



module.exports=router;