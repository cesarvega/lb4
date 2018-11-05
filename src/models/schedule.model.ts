import { Entity, model, property } from '@loopback/repository';

@model()
export class Schedule extends Entity {
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
    type: 'date',
    required: true,
  })
  eventDate: string;

  @property({
    type: 'date',
    required: true,
  })
  createdDate: string;

  constructor(data?: Partial<Schedule>) {
    super(data);
  }
}
