import express from 'express';
import data from './data/data.json';

const app = express();
const PORT = 3000;
let name = "Krishna"

// setting static files routing, telling where to look for static files

// if someone goes to default '/', and type for an image (if present in public) dir, it will show

/*
use is a method in Express that allows you to basically add specific middleware to a path.
So let's say for example you want to have on a specific path a specific piece of code just before or after,
 you can actually do that with middleware.
*/
app.use('/', express.static('public'))    //http://localhost:3000/sample.jpg will search for public dir here

// lll'y path after /images telling to look for static in images dir
app.use('/images', express.static('images'))     //http://localhost:3000/images/dance.jpg will search for images dir here

//get request if /data is trigerred, 'get' is getting data

//json method is same as send.

app.get('/data', (req,res) => 
    
    res.send(data)

  )

  
//home page
app.get('/',(req,res) =>
    res.send("Welcome to main page  Available routes :- http://localhost:3000/data http://localhost:3000/data/<num> "),

)

// post request, 'Post' is actually sending data to the server.

// route to get each specific item from data
// gives data of each specific id which ever requested as data/2 (eg)

app.get('/data/:id', (req,res,next) =>{
    let user = Number(req.params.id);   // converting the requested id to integer
    res.send(data[user]);       //getting that instance of user from data JSON obj
    next();                    // next fucn allows to call the next function automatically to run

},  (req,res) => {
        console.log(`data  was sent!`)
}
    
)

//redirect method which redirects to another site
// various method @ http://expressjs.com/en/5x/api.html#res.redirect

app.get('/favsite', (req,res) =>{
    res.redirect('https://www.google.com/')
})

/*
f we had for example a database connected to our server, then we could do a whole bunch of commands here. 
And then respond with a success or the actual data, or whatever you need in this post command to be in your handler. 
In this case we'll simply post request with route
*/

app.post('/newitem', (req,res) =>
    res.send(`a post request with /newitem`)
)

// put request, The 'put' is basically an update. Basically if you have something that 
// you already have in your system, and you want to update it, you can do so with this particular manner.

app.put('/item',(req,res) =>
    res.send(`a put request with /item`)
)

/* delete request, 
Once you have data in your system, and you want to delete it, 
the delete command here is the way to do so. You ask for this command. 
Then you do whatever you need to do with Mungo, SQL or your local data
*/

app.delete('/item', (req,res) =>
    res.delete(`a delete request with /item`)
)


app.listen(PORT, () =>
{
    console.log(`Your server is running at port ${PORT}`),
    console.log(data)
}
);