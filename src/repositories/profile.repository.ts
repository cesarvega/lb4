import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {Profile} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ProfileRepository extends DefaultCrudRepository<
  Profile,
  typeof Profile.prototype.ID
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Profile, dataSource);
  }
}
