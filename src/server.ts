import mongoose from "mongoose";
import config from "./config/index";
import app from "./app";

async function bootstrap() {

    try {
        await mongoose.connect(config.database_url as string);
        console.log('Database Connection Successful');

        app.listen(config.port, () => {
            console.log(`Application is listening on port ${config.port}`)
        })

    } catch (error) {
        console.log('DB Connection Failed: ', error);
    }

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

bootstrap();