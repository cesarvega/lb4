import { DefaultCrudRepository, juggler } from '@loopback/repository';
import { Items } from '../models';
import { DbDataSource } from '../datasources';
import { inject } from '@loopback/core';

export class ItemRepository extends DefaultCrudRepository<
  Items,
  typeof Items.prototype.price
  > {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Items, dataSource);
  }
}
