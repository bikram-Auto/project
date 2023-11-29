import { Controller, Get, Post } from "@nestjs/common";


@Controller()
export class AppController{
    @Get('/user')
    getUser(){
        return {name: 'bikash', class: '4th'};
    }

    @Post('/user')
    postUser(){
        return 'it storing';
    }
}