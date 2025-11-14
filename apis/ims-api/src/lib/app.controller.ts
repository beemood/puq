import { Get } from '@nestjs/common';
import { Controller } from '@puq/nest';

@Controller()
export class AppController {
  @Get('whoami')
  whoami() {
    return { name: 'ims-api' };
  }

  @Get('ping')
  ping() {
    return { name: 'ims-api' };
  }
}
