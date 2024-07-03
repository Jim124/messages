import { Controller, Get, Post, Body, Param, NotFoundException } from '@nestjs/common';

import { MessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  messageService: MessagesService;
  constructor() {
    this.messageService = new MessagesService();
  }


  @Get("/")
  listMessages() {
    return this.messageService.findAll();
  }
  @Post("/")
  createMessage(@Body() body: MessageDto) {
    return this.messageService.create(body.content);
  }
  @Get("/:id")
  async getMessage(@Param("id") id: string) {
    const message = await this.messageService.findOne(id);
    if (!message) throw new NotFoundException('message not found');
    return message;
  }
}
