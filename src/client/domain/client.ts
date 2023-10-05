import { Length } from 'class-validator';
import { ObjectId } from 'mongodb';
import {
  Column,
  CreateDateColumn,
  ObjectIdColumn,
  UpdateDateColumn,
  Entity,
  Index
} from 'typeorm';
import { ClientState } from './client-state';

@Entity('client')
export class Client {
  @ObjectIdColumn()
  _id: ObjectId | string;

  @Index({
    unique: true,
  })
  @Column()
  dni: string;

  @Column()
  @Length(3, 20)
  firstName: string;

  @Column()
  @Length(3, 20)
  lastName: string;

  @Column()
  state: ClientState = ClientState.ACTIVE;

  mail: string;

  phoneNumber: string;

  @CreateDateColumn()
  createDate: Date;

  @UpdateDateColumn()
  updateDate: Date;
}
