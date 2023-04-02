import { Controller, Get } from "@nestjs/common";

@Controller("/app") //Route Requesr to Particular Function
export class AppController {
  @Get("/asdf")
  getRootRoute() {
    return "hi there!";
  }

  @Get("/bye")
  getByeThere() {
    return "bye there!";
  }
}
