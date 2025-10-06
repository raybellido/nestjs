import { Injectable } from '@nestjs/common';

@Injectable()
export class CarsService {

        private cars=[
            {   id:1,
                brand:'Toyota',
                model:'corolla'
            }

        ]


}
