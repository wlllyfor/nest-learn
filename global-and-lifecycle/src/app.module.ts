import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';
import { EventModule } from './event/event.module';

@Module({
  imports: [TaskModule, EventModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
