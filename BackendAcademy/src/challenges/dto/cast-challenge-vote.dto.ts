import { ChallengeVoteValue } from '../interfaces/challenge-vote.interface';

export class CastChallengeVoteDto {
  userId: string;
  value: ChallengeVoteValue;
}
