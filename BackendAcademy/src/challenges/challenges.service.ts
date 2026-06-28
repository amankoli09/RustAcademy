import { Injectable } from '@nestjs/common';
import type { WeeklyChallengeMetadata } from './interfaces/weekly-challenge-metadata.interface';

@Injectable()
export class ChallengesService {
  getWeeklyChallengeMetadata(): WeeklyChallengeMetadata {
    const now = new Date();
    const weekStart = this.getWeekStart(now);
    const weekEnd = this.getWeekEnd(weekStart);

    return {
      id: 'weekly-challenge-v1',
      title: 'Weekly Rust Challenge',
      description:
        'Complete a short Rust exercise this week to earn bonus XP and improve your skills.',
      startDate: weekStart.toISOString(),
      endDate: weekEnd.toISOString(),
      rewardXp: 100,
      bonusDescription:
        'Finish the challenge before the end of the week to unlock extra rewards.',
      isActive: true,
    };
  }

  private getWeekStart(now: Date): Date {
    const start = new Date(now);
    const day = start.getDay();
    const diff = start.getDate() - day;
    start.setHours(0, 0, 0, 0);
    start.setDate(diff);
    return start;
  }

  private getWeekEnd(startOfWeek: Date): Date {
    const end = new Date(startOfWeek);
    end.setDate(startOfWeek.getDate() + 6);
    end.setHours(23, 59, 59, 999);
    return end;
  }
}
