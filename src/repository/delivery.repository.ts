import axios from 'axios'
import { Injectable } from '@nestjs/common';


@Injectable()
export class DeliveryRepository {
    constructor(){
    }    
    sheet(name, numberP, numberC, type){
        axios.post('https://sheetdb.io/api/v1/059zyale8msd5', {
            name : name,
            numberP : numberP,
            numberC : numberP,
            type : type
          }) .then((response) =>{
            return 'teste'
          }).catch((erro)=>{`Deu erro \n ${erro}`})
    }
};