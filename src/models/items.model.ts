import {Entity, model, property} from '@loopback/repository';

@model()
export class Items extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'string',
  })
  description?: string;

  @property({
    type: 'number',
    required: true,
  })
  price: number;

  @property({
    type: 'number',
    id: true,
  })
  id?: number;

  constructor(data?: Partial<Items>) {
    super(data);
  }
}
