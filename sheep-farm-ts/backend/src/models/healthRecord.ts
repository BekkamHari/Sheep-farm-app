
import { Table, Column, Model, DataType, PrimaryKey, Default, ForeignKey } from 'sequelize-typescript';
import { Animal } from './animal';

@Table({ tableName: 'health_records', timestamps: true })
export class HealthRecord extends Model {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  id!: string;

  @ForeignKey(() => Animal)
  @Column({ type: DataType.UUID, allowNull: false })
  animalId!: string;

  @Column(DataType.DATEONLY)
  date!: string;

  @Column
  type!: string;

  @Column(DataType.TEXT)
  description?: string;

  @Column(DataType.TEXT)
  treatment?: string;
}
