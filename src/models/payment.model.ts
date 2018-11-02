import {Entity, model, property} from '@loopback/repository';

@model()
export class Payment extends Entity {
  @property({
    type: 'string',
    id: true,
    required: true,
  })
  id: string;

  @property({
    type: 'string',
    required: true,
  })
  userId: string;

  @property({
    type: 'number',
    required: true,
  })
  total: number;

  @property({
    type: 'boolean',
    required: true,
  })
  paid: boolean;

  @property({
    type: 'date',
    required: true,
  })
  date: string;

  constructor(data?: Partial<Payment>) {
    super(data);
  }
}
