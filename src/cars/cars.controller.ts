import { Controller, Get, Param } from '@nestjs/common';
import { get } from 'http';

@Controller('cars')
export class CarsController {
    private cars = ['TOYOTA','JEEP','HONDA']

    @Get()
    getAllCars() {
        return this.cars;
    }

    @Get(':id')
    getCarById(@Param('id') id: string) {
        console.log({ id });
        return id
    }
}
