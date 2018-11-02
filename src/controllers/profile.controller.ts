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
import {Profile} from '../models';
import {ProfileRepository} from '../repositories';

export class ProfileController {
  constructor(
    @repository(ProfileRepository)
    public profileRepository : ProfileRepository,
  ) {}

  @post('/profiles', {
    responses: {
      '200': {
        description: 'Profile model instance',
        content: {'application/json': {'x-ts-type': Profile}},
      },
    },
  })
  async create(@requestBody() profile: Profile): Promise<Profile> {
    return await this.profileRepository.create(profile);
  }

  @get('/profiles/count', {
    responses: {
      '200': {
        description: 'Profile model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Profile)) where?: Where,
  ): Promise<Count> {
    return await this.profileRepository.count(where);
  }

  @get('/profiles', {
    responses: {
      '200': {
        description: 'Array of Profile model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Profile}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Profile)) filter?: Filter,
  ): Promise<Profile[]> {
    return await this.profileRepository.find(filter);
  }

  @patch('/profiles', {
    responses: {
      '200': {
        description: 'Profile PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() profile: Profile,
    @param.query.object('where', getWhereSchemaFor(Profile)) where?: Where,
  ): Promise<Count> {
    return await this.profileRepository.updateAll(profile, where);
  }

  @get('/profiles/{id}', {
    responses: {
      '200': {
        description: 'Profile model instance',
        content: {'application/json': {'x-ts-type': Profile}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Profile> {
    return await this.profileRepository.findById(id);
  }

  @patch('/profiles/{id}', {
    responses: {
      '204': {
        description: 'Profile PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() profile: Profile,
  ): Promise<void> {
    await this.profileRepository.updateById(id, profile);
  }

  @del('/profiles/{id}', {
    responses: {
      '204': {
        description: 'Profile DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.profileRepository.deleteById(id);
  }
}
