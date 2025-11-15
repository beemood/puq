import { boot } from '@puq/nest';
import { NestAppModule } from './lib/nest-app.module.js';

export function bootstrap() {
  boot(NestAppModule);
}
