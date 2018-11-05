import { Entity, model, property } from '@loopback/repository';

@model()
export class Profile extends Entity {
  @property({
    type: 'string',
    id: true
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  userId: string;

  @property({
    type: 'string',
  })
  linkTo?: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
  })
  name?: string;

  @property({
    type: 'string',
  })
  phone?: string;

  constructor(data?: Partial<Profile>) {
    super(data);
  }
}
