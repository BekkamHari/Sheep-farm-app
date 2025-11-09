
import { Table, Column, Model, DataType, PrimaryKey, Default, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Role } from './role';

@Table({ tableName: 'users', timestamps: true })
export class User extends Model {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  id!: string;

  @Column({ unique: true })
  username!: string;

  @Column
  passwordHash!: string;

  @ForeignKey(() => Role)
  @Column({ type: DataType.UUID })
  roleId?: string;

  @BelongsTo(() => Role)
  role?: Role;
}
