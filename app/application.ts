import fastify, { FastifyInstance } from 'fastify';
import { IncomingMessage, Server, ServerResponse } from 'http';
import { server } from 'typescript';
import userRoutes from './route/user.route';

const server: FastifyInstance<
    Server,
    IncomingMessage,
    ServerResponse
> = fastify ({
    logger: true
});

function build() {
    server.register(userRoutes, { prefix: 'v1'});
    return server;
}

export default build;
