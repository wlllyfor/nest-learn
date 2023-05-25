import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';
import { ProblemModule } from './problem/problem.module';
import { PersonModule } from './person/person.module';

@Module({
  imports: [TaskModule, ProblemModule, PersonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
