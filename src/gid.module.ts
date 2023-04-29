import { Module } from '@nestjs/common';
import { GidLogger } from './gid.logger';
import { GidRunner } from './gid.runner';

@Module({
  imports: [],
  providers: [GidRunner, GidLogger],
})
export class GidModule {}
