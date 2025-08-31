import fastify from "./src/app.js";
import config from "./src/config/config.js";


const startServer = async () => {
  try {
    const port = config.port;
    await fastify.listen({ port: port }, (error, address) => {
      if (error) {
        fastify.log.error(error);
        process.exit(1);
      }
      fastify.log.info(`Server Listening on ${address}`);
    });
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};

startServer();
