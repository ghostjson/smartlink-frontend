import { RewardI } from './Reward';

export type Form = {
  id: number;
  createdAt: string;
  updatedAt: string;
  type: 'reward' | 'survey' | 'quiz' | 'form';
  validity: string;
  rewardId?: any;
  userId: number;
};
export type NewForm = {
  type: 'reward' | 'survey' | 'quiz' | 'form';
  validity: Date;
};
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
