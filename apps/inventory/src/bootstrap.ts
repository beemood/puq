import { boot } from '@puq/nest';
import { AppModule } from './lib/app.module.js';

export function bootstrap() {
  boot(AppModule);
}
