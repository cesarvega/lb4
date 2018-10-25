import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {Inventory} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class InventoryRepository extends DefaultCrudRepository<
  Inventory,
  typeof Inventory.prototype.id
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Inventory, dataSource);
  }
}
