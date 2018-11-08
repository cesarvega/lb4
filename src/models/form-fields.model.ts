import {Entity, model, property} from '@loopback/repository';

@model()
export class FormFields extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  formName: string;

  @property({
    type: 'array',
    itemType: 'object',
    required: true,
  })
  fields: object[];

  @property({
    type: 'string',
    id: true,
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
  date: string;

  constructor(data?: Partial<FormFields>) {
    super(data);
  }
}
