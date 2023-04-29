import { Module } from '@nestjs/common';
import { AppLogger } from './app.logger';
import { AppRunner } from './app.runner';

@Module({
  imports: [],
  providers: [AppRunner, AppLogger],
})
export class AppModule {}
