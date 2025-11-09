
import { Table, Column, Model, DataType, PrimaryKey, Default, HasMany } from 'sequelize-typescript';
import { HealthRecord } from './healthRecord';

@Table({ tableName: 'animals', timestamps: true })
export class Animal extends Model {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  id!: string;

  @Column({ unique: true, allowNull: false })
  tag!: string;

  @Column({ type: DataType.ENUM('sheep','goat'), allowNull: false })
  species!: 'sheep' | 'goat';

  @Column
  breed?: string;

  @Column(DataType.DATEONLY)
  dob?: string;

  @Column({ type: DataType.ENUM('male','female') })
  gender?: 'male' | 'female';

  @Column({ defaultValue: 'active' })
  status?: string;

  @Column(DataType.TEXT)
  notes?: string;

  @HasMany(() => HealthRecord)
  healthRecords?: HealthRecord[];
}
