import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.join(process.cwd(), '.env') })

export default {
  port: process.env.PORT || 8000,
  database_url: process.env.DATABASE_URL,
  default_user_password: process.env.DEFAULT_USER_PASSWORD,
}

// IhruFS4RipvQHOPE
// universityAdmin

//   db: {
//       host: process.env.DB_HOST || 'localhost',
//       port: process.env.DB_PORT || 27017,
//       name: process.env.DB_NAME || 'test',
//       user: process.env.DB_USER || '',
//       password: process.env.DB_PASSWORD || '',
//   }
