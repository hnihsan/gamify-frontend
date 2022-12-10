export class EnrolledSubject {
  subject_id: string;
  challenge_completed: number;
  achievements_completed: Array<string>;
  finished_challenges: Array<FinishedChallenges>;
}

export class FinishedChallenges {
  challenge_id: string;
  attempts: Array<AttemptDetail>;
  attempts_count: number;
  highest_score: number;
}

export class AttemptDetail {
  timestamp: string;
  score: number;
  duration: number; // in second
}

export class User {
  fullname: string;
  email: string;
  organization: string;
  enrolled_subject_ids: Array<string>;
  enrolled_subjects: Array<EnrolledSubject>;
}
