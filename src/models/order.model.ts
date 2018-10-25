import {Entity, model, property} from '@loopback/repository';

@model()
export class Order extends Entity {
  @property({
    type: 'number',
    id: true,
    required: true,
  })
  id: number;

  @property({
    type: 'string',
    required: true,
  })
  user: string;

  @property({
    type: 'date',
    required: true,
  })
  date: string;

  @property({
    type: 'array',
    itemType: 'string',
  })
  items?: string[];

  constructor(data?: Partial<Order>) {
    super(data);
  }
}
