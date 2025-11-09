
import cron from 'node-cron';
import { FeedSchedule } from '../models/feedSchedule';

// very small logger
function log(msg: string){
  console.log(new Date().toISOString(), msg);
}

export function startFeedScheduler(){
  // load schedules and register cron jobs
  const register = async () => {
    const schedules = await FeedSchedule.findAll();
    for(const s of schedules){
      try {
        // schedule job
        cron.schedule(s.cronExpression, () => {
          // In a real app you'd trigger notifications, record events, call actuators, etc.
          log(`Feed job triggered: ${s.name} target=${s.target} notes=${s.notes || ''}`);
        }, { timezone: 'Asia/Kolkata' });
        log(`Registered feed schedule: ${s.name} -> ${s.cronExpression}`);
      } catch (err:any) {
        log(`Invalid cron for schedule ${s.name}: ${s.cronExpression} (${err.message})`);
      }
    }
  };

  register().catch(e => console.error('Failed to register feed schedules', e));
}
