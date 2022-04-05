import { FastifyInstance } from 'fastify';
import { IncomingMessage, Server, ServerResponse } from 'http';
import * as UsersController from '../controllers/users.controller';

function users(
    fastify: FastifyInstance< Server, IncomingMessage, ServerResponse>,
    opts: { prefix: string},
    next: (err?: Error) => void
) {
    fastify.post('/users', UsersController.create);
    next();
}

export default users;
