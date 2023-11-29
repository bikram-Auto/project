import { Controller, Get, Post, Req } from "@nestjs/common";


@Controller()
export class AppController{
    @Get('/user')
    getUser(){
        return {name: 'bikash', class: '4th'};
    }

    @Post('/user')
    postUser(@Req() req: Request){
        return req.body;
    }
}