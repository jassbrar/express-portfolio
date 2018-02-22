let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', {
      title: 'Jaspreet Singh Brar',
      message: 'Learner, Web Designer & Day Dreamer ',
      button: 'Find out more'
  });
});

//         get/about page
router.get('/about', (req, res, next) =>
    {
      res.render('about',{
        title: 'Learner, Web Designer & Day Dreamer',
          message:'I am game lover who loves to play games and challenge his friends for dual.I am student of Interactive media design web, who loves the world of the web and want to learn more and more and believes that learning something new each day is worth living for. Moreover believes web creation is not just coding few programming lines, its more than that. I like meeting new people and cooking(which i learned for survival)  '
      });
    });

//    get/project page
router.get('/projects', (req,res,next)=>{
  res.render('projects',{
    title:'Check out my work',
      message: 'Bootstrap Gallery which uses twitter bootstrap and icons from font awesome',
      messages: 'A long background cover photo that covers entire body and is responsive',
      messagess: 'A gallery created just by css and no use of color'
  });
});

//    get/contact page
router.get('/contact', (req,res,next)=>{
    res.render('contact',{
        title:'Jaspreet Singh Brar',
        message: 'Student of Interactive Media Design-Web,at Georgian college. Game Lover, Food lover'

    });
});

//    get/services page
router.get('/services', (req,res,next)=>{
    res.render('services',{
        title:'Need Help?',
        message: 'HTML5 is a markup language used for structuring and presenting content on the World Wide Web. It is the fifth and current major version of the HTML standard.' +
         +
        't was published in October 2014 by the World Wide Web Consortium (W3C) to improve the language with support for the latest multimedia, while keeping it both easily readable by humans and consistently understood by computers and devices such as web browsers, parsers, etc. HTML5 is intended to subsume not only HTML 4, but also XHTML 1 and DOM Level 2 HTML.' +
        '' +
        ' HTML5 includes detailed processing models to encourage more interoperable implementations; it extends, improves and rationalizes the markup available for documents, and introduces markup and application programming interfaces (APIs) for complex web applications.For the same reasons, HTML5 is also a candidate for cross-platform mobile applications, because it includes features designed with low-powered devices in mind.',
        messagetwo:'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language. Although most often used to set the visual style of web pages and user interfaces written in HTML and XHTML, the language can be applied to any XML document, including plain XML, SVG and XUL, and is applicable to rendering in speech, or on other media. Along with HTML and JavaScript, CSS is a cornerstone technology used by most websites to create visually engaging webpages, user interfaces for web applications, and user interfaces for many mobile applications.\n' +
        '\n' +
        '                            CSS is designed primarily to enable the separation of presentation and content, including aspects such as the layout, colors, and fonts. This separation can improve content accessibility, provide more flexibility and control in the specification of presentation characteristics, enable multiple HTML pages to share formatting by specifying the relevant CSS in a separate .css file, and reduce complexity and repetition in the structural content.',
        messagethree:'Bootstrap is a free and open-source front-end library for designing websites and web applications. It contains HTML- and CSS-based design templates for typography, forms, buttons, navigation and other interface components, as well as optional JavaScript extensions. Unlike many web frameworks, it concerns itself with front-end development only.\n' +
        '\n' +
        '                            Bootstrap is the second most-starred project on GitHub, with more than 121,000 stars.',
        messagefour:'JavaScript, often abbreviated as JS, is a high-level, interpreted programming language. It is a language which is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm. Alongside HTML and CSS, JavaScript is one of the three core technologies of World Wide Web content engineering. It is used to make webpages interactive and provide online programs, including video games. The majority of websites employ it, and all modern web browsers support it without the need for plug-ins by means of a built-in JavaScript engine. Each of the many JavaScript engines represent a different implementation of JavaScript, all based on the ECMAScript specification, with some engines not supporting the spec fully, and with many engines supporting additional features beyond ECMA.',
        messagefive:' A website wireframe, also known as a page schematic or screen blueprint, is a visual guide that represents the skeletal framework of a website. Wireframes are created for the purpose of arranging elements to best accomplish a particular purpose. The purpose is usually being informed by a business objective and a creative idea. The wireframe depicts the page layout or arrangement of the website’s content, including interface elements and navigational systems, and how they work together. The wireframe usually lacks typographic style, color, or graphics, since the main focus lies in functionality, behavior, and priority of content. In other words, it focuses on what a screen does, not what it looks like. Wireframes can be pencil drawings or sketches on a whiteboard, or they can be produced by means of a broad array of free or commercial software applications. Wireframes are generally created by business analysts, user experience designers, developers, visual designers, and by those with expertise in interaction design, information architecture and user research.'
    });
});



module.exports = router;
