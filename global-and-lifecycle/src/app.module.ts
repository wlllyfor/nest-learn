import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';
import { EventModule } from './event/event.module';
import { CccModule } from './ccc/ccc.module';
import { DddModule } from './ddd/ddd.module';

@Module({
  imports: [TaskModule, EventModule, CccModule, DddModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
