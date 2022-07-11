export type SurveyDetails = {
  form: {
    id: number;
    name: string;
    createdAt: string;
    updatedAt: string;
    type: 'survey';
    validity: string;
    style: {
      bgColor: string;
      fgColor: string;
    };
    metaData: {};
    rewardId: number | null;
    userId: number;
    questions: [
      {
        id: number;
        createdAt: string;
        updatedAt: string;
        question: string;
        type: 'MCQ' | 'Long Answer';
        content: {
          MCQ: string[];
        } | null;
        formId: number;
      }
    ];
  };
  responses: [
    {
      id: number;
      createdAt: string;
      updatedAt: string;
      name: string;
      number: string;
      totalScore: -1;
      answers: {
        values: {
          meta: {};
          score: null;
          answer: string;
          question_id: number;
        }[];
      };
      meta: {};
      formId: number;
    }
  ];
};
