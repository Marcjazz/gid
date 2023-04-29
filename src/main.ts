import { CommandFactory } from 'nest-commander';
import { GidModule } from './gid.module';

async function bootstrap() {
  await CommandFactory.run(GidModule, ['warn', 'error']);
}
bootstrap();
