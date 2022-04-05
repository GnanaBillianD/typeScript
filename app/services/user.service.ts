import models from '../models';
import { UserCreationAttributes } from '../types';

const { User } = models;

function create(attributes: UserCreationAttributes) {
    return User.create(attributes);
}

export {create};
