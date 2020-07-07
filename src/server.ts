import app from './app';
import { appEnv } from './utils/env';
import { logger } from './utils/logger';
import { sequelize } from './config/sequelize';

logger.info(`Server environment: ${appEnv.envType}`, appEnv);

// ===== Running server =====
sequelize.sync().then(() => {
  const { port } = appEnv;
  app.listen(port, () => {
    logger.info(`Server running at ${port}`);
  });
});
