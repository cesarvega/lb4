import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {Schedule} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ScheduleRepository extends DefaultCrudRepository<
  Schedule,
  typeof Schedule.prototype.id
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Schedule, dataSource);
  }
}
