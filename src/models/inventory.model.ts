import {Entity, model, property} from '@loopback/repository';

@model()
export class Inventory extends Entity {
  @property({
    type: 'number',
    id: true,
    required: true,
  })
  id: number;

  @property({
    type: 'date',
    required: true,
  })
  date: string;

  @property({
    type: 'number',
    required: true,
  })
  total: number;

  @property({
    type: 'number',
    required: true,
  })
  current: number;

  @property({
    type: 'number',
    required: true,
  })
  itemId: number;

  constructor(data?: Partial<Inventory>) {
    super(data);
  }
}
