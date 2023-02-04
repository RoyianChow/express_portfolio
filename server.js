const connect = require('connect');
const app = connect();


function logger(req,res,next)
{
    console.log(req.method,req.url);
    next();
}

function goodbyeworld(req,res,next)
{
    res.setHeader('Content-Type','text/plain');
    res.end('bye World');
    

}
function helloworld(req,res,next)
{
    res.setHeader('Content-Type','text/plain');
    res.end('Hello World');

}
app.use(logger);
app.use('/hello', helloworld);
app.use('/goodbyeworld',goodbyeworld);
app.listen(3000);
console.log('Server running at http://localhost:3000');
