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
import {Inventory} from '../models';
import {InventoryRepository} from '../repositories';

export class InventoryController {
  constructor(
    @repository(InventoryRepository)
    public inventoryRepository : InventoryRepository,
  ) {}

  @post('/inventories', {
    responses: {
      '200': {
        description: 'Inventory model instance',
        content: {'application/json': {'x-ts-type': Inventory}},
      },
    },
  })
  async create(@requestBody() inventory: Inventory): Promise<Inventory> {
    return await this.inventoryRepository.create(inventory);
  }

  @get('/inventories/count', {
    responses: {
      '200': {
        description: 'Inventory model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Inventory)) where?: Where,
  ): Promise<Count> {
    return await this.inventoryRepository.count(where);
  }

  @get('/inventories', {
    responses: {
      '200': {
        description: 'Array of Inventory model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Inventory}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Inventory)) filter?: Filter,
  ): Promise<Inventory[]> {
    return await this.inventoryRepository.find(filter);
  }

  @patch('/inventories', {
    responses: {
      '200': {
        description: 'Inventory PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() inventory: Inventory,
    @param.query.object('where', getWhereSchemaFor(Inventory)) where?: Where,
  ): Promise<Count> {
    return await this.inventoryRepository.updateAll(inventory, where);
  }

  @get('/inventories/{id}', {
    responses: {
      '200': {
        description: 'Inventory model instance',
        content: {'application/json': {'x-ts-type': Inventory}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Inventory> {
    return await this.inventoryRepository.findById(id);
  }

  @patch('/inventories/{id}', {
    responses: {
      '204': {
        description: 'Inventory PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() inventory: Inventory,
  ): Promise<void> {
    await this.inventoryRepository.updateById(id, inventory);
  }

  @del('/inventories/{id}', {
    responses: {
      '204': {
        description: 'Inventory DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.inventoryRepository.deleteById(id);
  }
}
