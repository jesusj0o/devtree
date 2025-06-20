import express from 'express'; 
const app = express();


//Routing 
app.get('/', (request, response) => {
    response.send("hi there btch")
});

const port = process.env.PORT || 4000; 

app.listen(port, () => {
    console.log("running server:" , port);
    
})