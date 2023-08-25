
const express = require('express')
const app = express()
const port = 3000
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const methorOverride = require('method-override');




const imagesRouter = require('../routers/images')
const indexRouter = require('../routers/index')



app.set('view engine', 'ejs');
app.set('views',__dirname,'/views');
app.set('layout','views/layouts/layout');
app.use(expressLayouts);
app.use('/',indexRouter)
app.use('/images',imagesRouter)



app.listen(port, () =>{
    console.log(`Example App listening on port ${port}`)
})
