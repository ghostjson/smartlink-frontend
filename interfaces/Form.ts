import { RewardI } from './Reward';

type QuestionType =
  | {
      question: string;
      type: 'mcq';
      answer: { choice: string }[];
    }
  | {
      question: string;
      type: 'long';
      answer: string;
    };

export type SurveyT =
  | {
      reward: false;
      questions: QuestionType[];
    }
  | {
      reward: true;
      rewardData: RewardI;
      questions: QuestionType[];
    };
