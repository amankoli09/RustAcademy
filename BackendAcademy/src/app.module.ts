import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TutorProfileModule } from './users/tutor-profile.module';
import { SubmissionModule } from './submissions/submission.module';

@Module({
  imports: [TutorProfileModule, SubmissionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
