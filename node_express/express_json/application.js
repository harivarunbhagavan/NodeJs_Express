//userinput validation ----------------------------------

// const express = require('express');
// const bodyParser = require('body-parser');
// const path = require('path');
// const Joi = require('joi');
// const app = express();

// app.use('/',express.static(path.join(__dirname,'express_json')));
// app.use(bodyParser.urlencoded({extended : false}));
// //app.use(bodyParser.json());


// app.get('/',(req,res)=>{
//     res.sendFile(path.join(__dirname,'','index.html'));
// });

// app.post('/',(req,res)=>{
//     console.log(req.body);
//     const schema = Joi.object().keys({
//         email : Joi.string().trim().email().required(),
//         password : Joi.string().min(5).max(10).required()
//     });
//     const validation = schema.validate(req.body); 
//     if(validation.error){  
//         res.status(400).send(validation.error.details[0].message); 
//         return ;   
//     }
//     else{
//         res.send("Successful");
//     }
    
    
//     // some database call here
//     //res.json({success : true});
   

// });

// app.listen(3000);


//user-input validation part -2 with nested arrays and validations

const { use } = require('express/lib/application');
const Joi = require('joi');

const arrayString = ['banana','bacon','cheese'];
const arrayObjects = [{example: 'example1'},{example: 'example2'},{example: 'example2'}];

const userInput = { personalInfo: {
                        streetAddress: '123987987',
                        city : 'kljlkajd',
                        state: 'fl'
                    },
                    preferences : arrayObjects};

const personalInfoSchema = Joi.object().keys({
    streetAddress : Joi.string().trim().required(),
    city : Joi.string().trim().required(),
    state: Joi.string().trim().length(2).required()
});

const preferencesSchema = Joi.array().items(Joi.object().keys({
    example: Joi.string().required()
}));

const schema = Joi.object().keys({
    personalInfo: personalInfoSchema,
    preferences : preferencesSchema
});

const validation = schema.validate(userInput)
    if(validation.error)
    console.log("Unsuccessful");
    else{
        console.log(validation);
    }

