import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { PersonService } from './person.service';
import { CreatePersonDto } from './dto/create-person.dto';
@Controller('api/person')
export class PersonController {
  constructor(private readonly personService: PersonService) { }

  // @Get(':id')
  // urlParm(@Param('id') id: string) {
  //   console.log('11', 11);
  //   return `received: id=${id}`;
  // }

  // @Get('find')
  // query(@Query('name') name: string, @Query('age') age: number) {
  //   return `received: name=${name},age=${age}`;
  // }

  @Post()
  body(@Body() createPersonDto: CreatePersonDto) {
    return `received: ${JSON.stringify(createPersonDto)}`;
  }
}
