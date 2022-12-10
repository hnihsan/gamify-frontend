export class DBSubject {
  _id: string;
  title: string;
  creator: string;
  lessons: string;
  difficulty: string;
  created_at: string;
  updated_at: string;
}

export class DBChallenge {
  _id: string;
  subject_id: string;
  title: string;
  passing_score: number;
  attempt_limit: number;
  difficulty: string;
  created_at: string;
  updated_at: string;
}

export class QuizOptions {
  content: string;
  isAnswer: boolean;
}

export class DBQuiz {
  _id: string;
  challenge_id: string;
  question: string;
  answertype: string;
  options: Array<QuizOptions>;
  created_at: string;
  updated_at: string;
}

export class AchievementCondition {
  type: string;
  operation: string;
  value: string;
}

export class DBAchievement {
  _id: string;
  subject_id: string;
  title: string;
  image: string;
  description: string;
  condition: AchievementCondition;
  created_at: string;
  updated_at: string;
}

export class DBChallengeAttempt {
  _id: string;
  user_id: string;
  challenge_id: string;
  timestamp: string;
  score: number;
  duration: number; // in second
  created_at: string;
  updated_at: string;
}

export class UserSubjectProgress {
  subject_id: string;
  finished_challenges_count: number;
  completed_achievements: Array<string>;
}

export class DBUser {
  _id: string;
  fullname: string;
  email: string;
  phone: string;
  organization: string;
  enrolled_subject_ids: Array<string>;
  subjects_progress: Array<UserSubjectProgress>;
  created_at: string;
  updated_at: string;
}
