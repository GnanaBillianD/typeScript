import * as dotenv from 'dotenv';

dotenv.config({ path: `${__dirname}/../.env` });

import application from './application';

const PORT = process.env.PORT || 3000;

const fastify = application();

const start = async () => {
  try {
    await fastify.listen(PORT, '0.0.0.0');
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};
start();
