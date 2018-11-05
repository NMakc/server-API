const express = require('express');
const router = express.Router();
const axios=require('axios');
///////////////////////////
// router.get("/",(req,res,next)=>{
//     //res.send('Работает')
// res.render('go');
// });
//////////////////////////////////
router.get('/', (req, res, next)=> {
    axios.get('http://jsonplaceholder.typicode.com/posts')

    .then((response)=> {
        let goArray=[];
        response.data.map ((posts)=>{
            goArray.push(posts);
                    // console.log(response);
         });
        res.render('go',{
            posts:goArray
        })
    })
      .catch( (err)=> {
        console.log(err);
      });

});


module.exports=router;











