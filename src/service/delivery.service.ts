import {  Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateDeliveryDto } from '../dto/create-delivery.dto';
import { UpdateDeliveryDto } from '../dto/update-delivery.dto';
import {DeliveryRepository} from '../repository/delivery.repository'

@Injectable()
export class DeliveryService {
  constructor(private readonly deliveryRepository : DeliveryRepository) {}
  create(createDeliveryDto: CreateDeliveryDto) {
  const delivery = this.deliveryRepository.sheet(createDeliveryDto['name'],createDeliveryDto['numberP'],createDeliveryDto['numberC'],createDeliveryDto['type']) 
  return delivery
  }

  findAll() {
    return `This action returns all delivery`;
  }

  findOne(id: number) {
    return `This action returns a #${id} delivery`;
  }

  update(id: number, updateDeliveryDto: UpdateDeliveryDto) {
    return `This action updates a #${id} delivery`;
  }

  remove(id: number) {
    return `This action removes a #${id} delivery`;
  }
}