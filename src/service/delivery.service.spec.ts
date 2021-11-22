import { Test, TestingModule } from '@nestjs/testing';
import { CreateDeliveryDto } from 'src/dto/create-delivery.dto';
import { DeliveryRepository } from '../repository/delivery.repository';
import { DeliveryService } from './delivery.service';

const mockData =  {
  "name" : "string",
  "numberP" : "string",
  "numberC" : "string",
  "cep" : "54510280",
  "type" : "string"
}
describe('DeliveryService', () => {
  let deliveryservice: DeliveryService;
  let deliveryrepository : DeliveryRepository
  let createDeliveryDto: CreateDeliveryDto
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeliveryService,DeliveryRepository],
    }).compile();
    deliveryrepository = new DeliveryRepository();
    deliveryservice = new DeliveryService(deliveryrepository)
  });
  it('should be defined', () => {
    expect(deliveryrepository).toBeDefined();
    expect(deliveryservice).toBeDefined();
  });
    it('Retorno de usuário criado', async ()=>{
      const req = await deliveryservice.create(mockData)
      deliveryrepository.sheet = jest.fn(()=>Promise.resolve({}));
      expect(req).toBe("Usuário Criado")  
  })
})
