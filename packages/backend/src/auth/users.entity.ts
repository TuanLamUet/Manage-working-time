import { BaseEntity, PrimaryGeneratedColumn, Column, Entity, Unique } from 'typeorm';

import * as bcrypt from 'bcryptjs';

@Entity()
@Unique(['email', 'username'])
export class Users extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string

  @Column()
  username: string

  @Column()
  password: string;

  @Column({default: 'staff'})
  role: string

  async comparePassword(password): Promise<boolean> {
    return bcrypt.compare(password, this.password);
  }
}

