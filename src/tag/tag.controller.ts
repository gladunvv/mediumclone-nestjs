import { Controller, Get } from '@nestjs/common';
import { throws } from 'assert';
import { TagService } from './tqg.service';

@Controller('tags')
export class TagController {
  constructor(private readonly tagService: TagService) {}
  @Get()
  findAll(): string[] {
    return this.tagService.findAll();
  }
}
