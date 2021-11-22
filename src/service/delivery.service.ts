import {  Injectable } from '@nestjs/common';
import { CreateDeliveryDto } from '../dto/create-delivery.dto';
import {DeliveryRepository} from '../repository/delivery.repository';
const cepSearch = require('../scripts/deliverysheet');

@Injectable()
export class DeliveryService {
  constructor(private readonly deliveryRepository : DeliveryRepository) {}
  
  async create(createDeliveryDto: CreateDeliveryDto) {
  let cepData  = await cepSearch(createDeliveryDto['cep']);
  const delivery = await this.deliveryRepository.sheet(
      //Dados direto da página HTML  
      createDeliveryDto['name'],
      createDeliveryDto['numberP'],
      createDeliveryDto['numberC'],
      createDeliveryDto['type'],
      //Dados da repository Cep
      cepData['cep'],
      cepData['logradouro'],
      cepData['bairro'],
      cepData['localidade'],
      cepData['uf'])
    return "Usuário Criado"
  };
}
