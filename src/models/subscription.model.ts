import { Entity, model, property } from '@loopback/repository';

@model()
export class Subscription extends Entity {
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
    type: 'number',
    required: true,
  })
  type: number;

  @property({
    type: 'date',
    required: true,
  })
  date: string;

  @property({
    type: 'boolean',
    required: true,
    default: true,
  })
  isActive: boolean;

  constructor(data?: Partial<Subscription>) {
    super(data);
  }
}
