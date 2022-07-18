import { RewardI } from './Reward';

export type Form = {
  name: string;
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

export type dbQuestion = {
  id: number | string;
  createdAt: string;
  updatedAt: string;
  question: string;
  type: 'MCQ' | 'Long Answer';
  content: {
    MCQ: string[];
  };
  formId: number;
};

export type dbQuizQuestion = {
  id: number | string;
  createdAt: string;
  updatedAt: string;
  question: string;
  type: 'MCQ' | 'Long Answer';
  content: { text: string; score: number }[];

  formId: number;
};

export type dbFormData = {
  id: string | number;
  name: string;
  createdAt: string;
  updatedAt: string;
  type: 'survey';
  validity: string;
  style: {
    bgColor: string;
    fgColor: string;
  };
  rewardId: number | null;
  userId: 11;
  questions: dbQuestion[];
};

export type dbQuestionData = {
  id: string | number;
  name: string;
  createdAt: string;
  updatedAt: string;
  type: 'survey';
  validity: string;
  style: {
    bgColor: string;
    fgColor: string;
  };
  rewardId: number | null;
  userId: 11;
  questions: dbQuizQuestion[];
  metadata: any[];
};

export type dbRewardData = {
  id: number;
  createdAt: string;
  updatedAt: string;
  name: string;
  type: string;
  content: any;
  validity: string;
  count: number;
  style: any;
  userId: number;
};
