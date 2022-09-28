import {Entity, model, property, hasMany} from '@loopback/repository';
import {User} from './user.model';

enum QueryLanguage {
  'A',
  'SA',
  'S',
}

@model({settings: {strict: true}})
export class Role extends Entity {
  @property({
    type: 'string',
    id: true,
    defaultFn: 'uuidv4',
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
    jsonSchema: {
      enum: Object.values(QueryLanguage),
    },
  })
  key: QueryLanguage;

  @property({
    type: 'string',
    required: true,
  })
  description: string;
  @property({
    type: 'date',
    default: () => new Date(),
  })
  createdAt?: Date;

  @property({
    type: 'date',
    default: () => new Date(),
  })
  updatedAt?: Date;

  @hasMany(() => User)
  users: User[];
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Role>) {
    super(data);
  }
}

export interface RoleRelations {
  // describe navigational properties here
}

export type RoleWithRelations = Role & RoleRelations;
