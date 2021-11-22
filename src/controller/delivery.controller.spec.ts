import { Test, TestingModule } from '@nestjs/testing';
import { DeliveryController } from './delivery.controller';
import { DeliveryService } from '../service/delivery.service';
import { DeliveryRepository } from '../repository/delivery.repository';
import { async } from 'rxjs';

const mockData =  {
  "name" : "string",
  "numberP" : "string",
  "numberC" : "string",
  "cep" : "54510280",
  "type" : "string"
}

describe('DeliveryController', () => {
  let controller: DeliveryController;
  let deliveryservice : DeliveryService;
  let deliveryrepository : DeliveryRepository;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeliveryController],
      providers: [DeliveryService,DeliveryRepository],
    }).compile();
    deliveryrepository = new DeliveryRepository()
    deliveryservice = new DeliveryService(deliveryrepository)
    controller = new DeliveryController(deliveryservice)
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(deliveryservice).toBeDefined();
    expect(deliveryrepository).toBeDefined()
  
  });
  it ('Teste da rota create', async ()=> {
    //deliveryservice.create =jest.fn(()=>Promise.resolve(''))
    const req = await controller.create(mockData)
    expect(req).toBe(await deliveryservice.create(mockData))
  })
});
