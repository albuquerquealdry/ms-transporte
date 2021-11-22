import { Test, TestingModule } from '@nestjs/testing';
import axios from 'axios'
import { error } from 'console';
import { DeliveryRepository } from './delivery.repository';
const mockedAxios = axios as jest.Mocked<typeof axios>

jest.mock('axios')
describe('DeliveryRepository', () => {
    let deliveryRepository :DeliveryRepository;
  
    beforeEach(async () => {
      const module: TestingModule = await Test.createTestingModule({
        providers: [DeliveryRepository],
      }).compile();
      deliveryRepository = new DeliveryRepository()
    });
    it('should be defined', () => {
        expect(deliveryRepository).toBeDefined();
        
      });
    it('Quando a requisição é um sucesso', async ()=>{
        mockedAxios.post.mockResolvedValue('OK')
        const req = await deliveryRepository.sheet('test','test','test','test','test','test','test','test','test')
        expect(req).toBe(req)
    })
    it('Quando a requisição é uma falha', async ()=>{
        mockedAxios.post.mockRejectedValue('NOK')
        try {
            const resp = await deliveryRepository.sheet('test','test','test','test','test','test','test','test','test');
          } catch (error) {
            expect(error).toEqual('NOK');
          }
        
    })
})