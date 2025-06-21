import colors from 'colors';
import app from './server'; 

const port = process.env.PORT || 4000; 

app.listen(port, () => {
    console.log(colors.magenta.bold("running server:") , port);
})