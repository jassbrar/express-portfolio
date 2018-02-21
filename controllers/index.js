let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', {
      title: 'Jaspreet Singh Brar',
      message: 'Web design and Development'
  });
});

//         get/about page
router.get('/about', (req, res, next) =>
    {
      res.render('about',{
        title: 'About Page',
          message:'About me '
      });
    });

//    get/project page
router.get('/projects', (req,res,next)=>{
  res.render('projects',{
    title:'Projects I have worked',
      message: 'I know its  just a begining!'

  });
});

//    get/contact page
router.get('/contact', (req,res,next)=>{
    res.render('contact',{
        title:'Lets Chat',
        message: 'Hello, I am Jaspreet. Nice to meet u!'

    });
});

//    get/services page
router.get('/services', (req,res,next)=>{
    res.render('services',{
        title:'Need Help?',
        message: 'Hello, I am Jaspreet. Nice to meet u!'

    });
});



module.exports = router;
