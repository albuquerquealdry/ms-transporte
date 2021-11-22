import { Module } from '@nestjs/common';
import {DeliveryService} from './service/delivery.service'
import {DeliveryController} from './controller/delivery.controller'
import { DeliveryRepository} from './repository/delivery.repository'

@Module({
  imports: [],
  controllers: [DeliveryController],
  providers: [DeliveryService, DeliveryRepository],
})
export class AppModule {}
