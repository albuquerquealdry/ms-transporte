import { Injectable } from "@nestjs/common";
import axios from 'axios';

async function cepSearch(cep : string){
    return await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
   .then((response) =>{
       const {data={}}=  response;
       return data;
   }).catch((error) => {
       throw error
   });     
   };
module.exports = cepSearch