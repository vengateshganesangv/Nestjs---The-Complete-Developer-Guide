import { Module } from '@nestjs/common';
import { PowerService } from './power.service';

@Module({
  //By Default it's private so export
  providers: [PowerService],
  exports: [PowerService],
})
export class PowerModule {}
