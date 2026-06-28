import { Controller, Get } from '@nestjs/common';
import { ChallengesService } from './challenges.service';
import type { WeeklyChallengeMetadata } from './interfaces/weekly-challenge-metadata.interface';

@Controller('challenges')
export class ChallengesController {
  constructor(private readonly challengesService: ChallengesService) {}

  @Get('weekly')
  getWeeklyChallengeMetadata(): WeeklyChallengeMetadata {
    return this.challengesService.getWeeklyChallengeMetadata();
  }
}
