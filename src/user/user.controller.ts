import { Body, Controller, Get, Post, Req } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller('/user')
export class userController{

    constructor(private userService: UserService){}

    @Get('/')
    getUser(){
       return this.userService.get();
    }

    @Post('/')
    postUser(@Body() body: any){
        return this.userService.create(body);
    }
}