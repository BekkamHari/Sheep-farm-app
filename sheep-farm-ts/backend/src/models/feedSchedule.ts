
import { Table, Column, Model, DataType, PrimaryKey, Default } from 'sequelize-typescript';

@Table({ tableName: 'feed_schedules', timestamps: true })
export class FeedSchedule extends Model {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  id!: string;

  @Column({ allowNull: false })
  name!: string;

  // cron expression, e.g. "0 8 * * *" (every day at 08:00)
  @Column
  cronExpression!: string;

  // target species or group: 'sheep' | 'goat' | 'all'
  @Column({ defaultValue: 'all' })
  target!: string;

  @Column(DataType.TEXT)
  notes?: string;
}
