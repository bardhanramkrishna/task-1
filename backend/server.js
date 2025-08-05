const express=require('express');
const app=express();
const PORT=5000 || process.env.PORT
const dotenv=require('dotenv');
const cors=require('cors');
const mongoose=require('mongoose');

dotenv.config()
app.use(cors());
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("database connected sucessfully")
})
.catch((err)=>{
    console.log(err);
})

//schema
const ApplicantSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    phone:{type:String},
    message:{type:String,required:true},
    createdAt:{type:Date,default:Date.now}
});
const Applicant=mongoose.model('Applicant',ApplicantSchema);


app.post('/api/applicants',async(req,res)=>{
    try{
        const {name,email,phone,message}=req.body;
         if (!name || !email || !message) {
            return res.status(400).json({ message: 'Missing required fields: name, email, and message.' });
        }
        const newApplicant=new Applicant({name,email,phone,message});
        await newApplicant.save();
        res.status(201).json({message:'application submitted succesfully',Applicant:newApplicant})
    }
    catch(error) {
        console.log("error submitted sucessfully",error);
        res.status(500).json({message:'error occurs',error:error.message})
    }
})

app.get('/api/applicants', async (req, res) => {
    try {
        const applicants = await Applicant.find().sort({ createdAt: -1 });
        res.status(200).json(applicants);
    } catch (error) {
        console.error('Error fetching applicants:', error);
        res.status(500).json({ message: 'Error fetching applicants', error: error.message });
    }
});

app.listen(PORT,()=>{
    console.log("succesfully created");
})