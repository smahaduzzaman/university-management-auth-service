import mongoose from 'mongoose';
import config from './config/index';
import app from './app';
import { logger, errorlogger } from './shared/logger';
import { Server } from 'http';

process.on('unhandledRejection', error => {
  errorlogger.error(error);
  process.exit(1);
});

let server: Server;

async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string);
    logger.info('Database Connection Successful');

    server = app.listen(config.port, () => {
      logger.info(`Application is listening on port ${config.port}`);
    });
  } catch (error) {
    errorlogger.error('DB Connection Failed: ', error);
  }

  process.on('uncaughtException', error => {
    if (server) {
      server.close(() => {
        errorlogger.error(error);
        process.exit(1);
      });
    } else {
      process.exit(1);
    }
  });
}

bootstrap();

process.on('SIGTERM', () => {
  logger.info('SIGTERM received. Shutting down gracefully');
  if (server) {
    server.close(() => {
      logger.info('Process terminated');
    });
  }
});
