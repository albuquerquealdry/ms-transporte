import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
var cors = require('cors')



async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT || 3000);
  app.use(cors())
  
}
bootstrap();
