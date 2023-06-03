import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
    port: process.env.PORT || 8000,
    database_url: process.env.DATABASE_URL,

    // db: {
    //     host: process.env.DB_HOST || 'localhost',
    //     port: process.env.DB_PORT || 27017,
    //     name: process.env.DB_NAME || 'test',
    //     user: process.env.DB_USER || '',
    //     password: process.env.DB_PASSWORD || '',
    // }

}


// IhruFS4RipvQHOPE
// universityAdmin