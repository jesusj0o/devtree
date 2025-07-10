import 'dotenv/config';
import colors from 'colors';
import app from './app';
import { connectDB } from './config/db';

const port = process.env.PORT || 4000;

connectDB().then(() => {
  app.listen(port, () => {
    console.log(colors.magenta.bold('running server:'), port);
  });
}).catch((error) => {
  console.log(colors.bgRed.bold(error.message));
  process.exit(1);
});
