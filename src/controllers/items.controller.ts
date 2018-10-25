import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  del,
  requestBody,
} from '@loopback/rest';
import { Items } from '../models';
import { ItemRepository } from '../repositories';

export class ItemsController {
  constructor(
    @repository(ItemRepository)
    public itemRepository: ItemRepository,
  ) { }

  @post('/items', {
    responses: {
      '200': {
        description: 'Item model instance',
        content: { 'application/json': { 'x-ts-type': Items } },
      },
    },
  })
  async create(@requestBody() item: Items): Promise<Items> {
    return await this.itemRepository.create(item);
  }

  @get('/items/count', {
    responses: {
      '200': {
        description: 'Item model count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Items)) where?: Where,
  ): Promise<Count> {
    return await this.itemRepository.count(where);
  }

  @get('/items', {
    responses: {
      '200': {
        description: 'Array of Item model instances',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Items } },
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Items)) filter?: Filter,
  ): Promise<Items[]> {
    return await this.itemRepository.find(filter);
  }

  @patch('/items', {
    responses: {
      '200': {
        description: 'Item PATCH success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async updateAll(
    @requestBody() item: Items,
    @param.query.object('where', getWhereSchemaFor(Items)) where?: Where,
  ): Promise<Count> {
    return await this.itemRepository.updateAll(item, where);
  }

  @get('/items/{id}', {
    responses: {
      '200': {
        description: 'Item model instance',
        content: { 'application/json': { 'x-ts-type': Items } },
      },
    },
  })
  async findById(@param.path.string('id') id: number): Promise<Items> {
    return await this.itemRepository.findById(id);
  }

  @patch('/items/{id}', {
    responses: {
      '204': {
        description: 'Item PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: number,
    @requestBody() item: Items,
  ): Promise<void> {
    await this.itemRepository.updateById(id, item);
  }

  @del('/items/{id}', {
    responses: {
      '204': {
        description: 'Item DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: number): Promise<void> {
    await this.itemRepository.deleteById(id);
  }
}
