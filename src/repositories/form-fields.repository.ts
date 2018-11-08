import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {FormFields} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class FormFieldsRepository extends DefaultCrudRepository<
  FormFields,
  typeof FormFields.prototype.id
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(FormFields, dataSource);
  }
}
