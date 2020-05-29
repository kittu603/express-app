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
app.use('/',express.static('public'))

// lll'y path after /images telling to look for static in images dir
app.use('/images', express.static('images'))

//get request if /data is trigerred, 'get' is getting data

//json method is same as send.

app.get('/data', (req,res) => 
    
    res.json(data)
  )

// post request, 'Post' is actually sending data to the server.


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