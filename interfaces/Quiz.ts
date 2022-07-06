export type QuizFormType = {
  name: string;
  questions: QuizQuestionType[] | [];
  reward: boolean;
  style: {
    bgColor: string;
    fgColor: string;
  };
  results: ResultType[];
};

export type QuizQuestionType = {
  id: string;
  question: string;
  choices: { text: string; score: number | string }[];
};

export type ResultType = {
  message: string;
  from: number;
  to: number;
};
