import { Controller,Get,Post,Body,Param} from '@nestjs/common';

import { MessageDto } from './dtos/create-message.dto';

@Controller('messages')
export class MessagesController {
  @Get("/")
  listMessages(){
    return 'list';
  }
  @Post("/")
  createMessage(@Body() body:MessageDto){
    console.log(body)
    return "create a one";
  }
  @Get("/:id")
  getMessage(@Param("id") id:string){
    console.log(id);
    return "get one";
  }
}
