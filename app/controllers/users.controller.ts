import { FastifyError, FastifyReply, FastifyRequest } from 'fastify';
import { UserInstance } from '../models/user';
import * as UserService from '../services/user.service';
import { UserCreationAttributes } from '../types/user';

type CreateBody = { user: UserCreationAttributes };

function create(req: FastifyRequest, reply: FastifyReply) {
  const { body } = req;
  const attributes = (body as CreateBody).user;
  UserService.create(attributes)
    .then((result: UserInstance) => {
      reply.code(201).send(result);
    })
    .catch((error: FastifyError) => {
      reply.send(error);
    });
}

export { create };
