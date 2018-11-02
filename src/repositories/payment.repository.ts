import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {Payment} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PaymentRepository extends DefaultCrudRepository<
  Payment,
  typeof Payment.prototype.id
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Payment, dataSource);
  }
}
