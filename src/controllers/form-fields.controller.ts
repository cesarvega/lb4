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
import {FormFields} from '../models';
import {FormFieldsRepository} from '../repositories';

export class FormFieldsController {
  constructor(
    @repository(FormFieldsRepository)
    public formFieldsRepository : FormFieldsRepository,
  ) {}

  @post('/form-fields', {
    responses: {
      '200': {
        description: 'FormFields model instance',
        content: {'application/json': {schema: {'x-ts-type': FormFields}}},
      },
    },
  })
  async create(@requestBody() formFields: FormFields): Promise<FormFields> {
    return await this.formFieldsRepository.create(formFields);
  }

  @get('/form-fields/count', {
    responses: {
      '200': {
        description: 'FormFields model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(FormFields)) where?: Where,
  ): Promise<Count> {
    return await this.formFieldsRepository.count(where);
  }

  @get('/form-fields', {
    responses: {
      '200': {
        description: 'Array of FormFields model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': FormFields}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(FormFields)) filter?: Filter,
  ): Promise<FormFields[]> {
    return await this.formFieldsRepository.find(filter);
  }

  @patch('/form-fields', {
    responses: {
      '200': {
        description: 'FormFields PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() formFields: FormFields,
    @param.query.object('where', getWhereSchemaFor(FormFields)) where?: Where,
  ): Promise<Count> {
    return await this.formFieldsRepository.updateAll(formFields, where);
  }

  @get('/form-fields/{id}', {
    responses: {
      '200': {
        description: 'FormFields model instance',
        content: {'application/json': {schema: {'x-ts-type': FormFields}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<FormFields> {
    return await this.formFieldsRepository.findById(id);
  }

  @patch('/form-fields/{id}', {
    responses: {
      '204': {
        description: 'FormFields PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() formFields: FormFields,
  ): Promise<void> {
    await this.formFieldsRepository.updateById(id, formFields);
  }

  @del('/form-fields/{id}', {
    responses: {
      '204': {
        description: 'FormFields DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.formFieldsRepository.deleteById(id);
  }
}
