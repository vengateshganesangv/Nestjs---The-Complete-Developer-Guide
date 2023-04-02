import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";

@Module({
  controllers: [AppController], //Group All Controller In Our Application
})
export class AppModule {}
