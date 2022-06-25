export type QuizFormType = {
  name: string;
  questions: QuizQuestionType[] | [];
  reward: boolean;
  style: {
    bgColor: string;
    fgColor: string;
  };
};

export type QuizQuestionType = {
  id: string;
  question: string;
  choices: { text: string; score: number | string }[];
};
