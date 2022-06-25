export type SurveyFormType = {
  title: string;
  reward: false;
  questions: SurveyQuestionType[] | [];
  style: {
    bgColor: string;
    fgColor: string;
  };
};

export type SurveyQuestionType =
  | {
      id: string;
      question: string;
      type: 'MCQ';
      content: {
        MCQ: Array<string>;
      };
    }
  | {
      id: string;
      question: string;
      type: 'Long Answer';
      content: {};
    };
