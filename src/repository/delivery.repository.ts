import axios from 'axios'
import { Injectable } from '@nestjs/common';


@Injectable()
export class DeliveryRepository {
    constructor(){
    }    
    sheet(name, numberP, numberC, type, cep , rua, bairro, cidade, uf){
     let now = new Date  
      axios.post('https://sheetdb.io/api/v1/lia2dzpfqpubn', {
            name : name,
            numberP : numberP,
            numberC : numberP,
            type : type,
            cep : cep,
            rua: rua,
            bairro : bairro,
            cidade : cidade,
            uf : uf,
            idEntrega :'id',
            status : 'Pedido realizado',
            hour : now.getUTCHours
          }) .then((response) =>{
            return 'teste'
          }).catch((erro)=>{`Deu erro \n ${erro}`})
    }
};