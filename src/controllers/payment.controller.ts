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
import {Payment} from '../models';
import {PaymentRepository} from '../repositories';

export class PaymentController {
  constructor(
    @repository(PaymentRepository)
    public paymentRepository : PaymentRepository,
  ) {}

  @post('/payments', {
    responses: {
      '200': {
        description: 'Payment model instance',
        content: {'application/json': {'x-ts-type': Payment}},
      },
    },
  })
  async create(@requestBody() payment: Payment): Promise<Payment> {
    return await this.paymentRepository.create(payment);
  }

  @get('/payments/count', {
    responses: {
      '200': {
        description: 'Payment model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Payment)) where?: Where,
  ): Promise<Count> {
    return await this.paymentRepository.count(where);
  }

  @get('/payments', {
    responses: {
      '200': {
        description: 'Array of Payment model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Payment}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Payment)) filter?: Filter,
  ): Promise<Payment[]> {
    return await this.paymentRepository.find(filter);
  }

  @patch('/payments', {
    responses: {
      '200': {
        description: 'Payment PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() payment: Payment,
    @param.query.object('where', getWhereSchemaFor(Payment)) where?: Where,
  ): Promise<Count> {
    return await this.paymentRepository.updateAll(payment, where);
  }

  @get('/payments/{id}', {
    responses: {
      '200': {
        description: 'Payment model instance',
        content: {'application/json': {'x-ts-type': Payment}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Payment> {
    return await this.paymentRepository.findById(id);
  }

  @patch('/payments/{id}', {
    responses: {
      '204': {
        description: 'Payment PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() payment: Payment,
  ): Promise<void> {
    await this.paymentRepository.updateById(id, payment);
  }

  @del('/payments/{id}', {
    responses: {
      '204': {
        description: 'Payment DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.paymentRepository.deleteById(id);
  }
}
