import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    @Inject('app_service') private readonly appService: AppService,
    @Inject('person')
    private readonly person: {
      name: string;
      age: number;
    },
    @Inject('person2')
    private readonly person2: {
      name: string;
      desc: string;
    },
    @Inject('person3')
    private readonly person3: { name: string; desc: string },
    @Inject('person4')
    private readonly person4: { name: string; age: number },
    @Inject('person5')
    private readonly person5: { name: string; desc: string },
  ) {}

  @Get()
  getHello(): string {
    console.log('this', this);
    console.log('this.person', this.person);
    return this.appService.getHello();
  }
}
