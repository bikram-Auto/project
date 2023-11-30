import { Module } from "@nestjs/common";
// import { AppController } from "./app.controller";
import { UserModule } from './user/user.module';
// import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    
    imports: [
        UserModule,
        MongooseModule.forRoot('mongodb://localhost:27017/')
    ],
})
export class AppModule{}
