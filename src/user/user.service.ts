import { Body, Injectable, Req } from '@nestjs/common';

@Injectable()
export class UserService {
    
    get(){
        return {name: 'bikash kumar', class: '4th'};
    }

    create(@Body() body: any){
        return body;
    }
}
