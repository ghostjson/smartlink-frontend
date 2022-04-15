import { QuizDetailsProps } from '../components/shared/QuizDetails';

export const genQuizData: () => QuizDetailsProps = () => {
  return {
    title: 'progression',
    url: 'http://idealistic-cradle.org',
    attended: 444,
    details: [
      {
        question:
          'Deserunt dolor soluta odit. Est aperiam esse maxime illum iste magnam.',
        choices: [
          {
            choice: 'quia',
            answered: 42,
          },
          {
            choice: 'saepe',
            answered: 4,
          },
          {
            choice: 'corporis',
            answered: 38,
          },
        ],
      },
      {
        question: 'Nemo aut ea animi minus excepturi nemo illum fugiat aut.',
        choices: [
          {
            choice: 'impedit',
            answered: 26,
          },
          {
            choice: 'commodi',
            answered: 31,
          },
          {
            choice: 'consectetur',
            answered: 31,
          },
        ],
      },
      {
        question:
          'Laborum consequuntur illum quam eum aut illum necessitatibus ullam. Omnis earum aut ut autem qui quaerat suscipit.',
        choices: [
          {
            choice: 'ut',
            answered: 20,
          },
          {
            choice: 'laboriosam',
            answered: 30,
          },
          {
            choice: 'dolorem',
            answered: 38,
          },
        ],
      },
      {
        question:
          'Non facere doloribus enim sed perspiciatis. Cum ratione enim voluptatem. Culpa corrupti facilis magni omnis eius quia tenetur.',
        choices: [
          {
            choice: 'autem',
            answered: 47,
          },
          {
            choice: 'saepe',
            answered: 46,
          },
          {
            choice: 'ut',
            answered: 4,
          },
        ],
      },
    ],
    responses: [
      {
        id: 1105,
        name: 'Brain',
        mobile: '383.600.8655 x84289',
        link: 'https://broken-marten.org',
      },
      {
        id: 6990,
        name: 'Brooklyn',
        mobile: '668-894-0735',
        link: 'https://judicious-rectangle.name',
      },
      {
        id: 8809,
        name: 'Retha',
        mobile: '(218) 525-1572 x4855',
        link: 'https://judicious-electricity.info',
      },
    ],
    rewards: [
      {
        id: 8809,
        name: 'Retha',
        mobile: '(218) 525-1572 x4855',
        status: 'claimed',
        amount: 22,
        link: 'https://judicious-electricity.info',
      },
      {
        id: 8809,
        name: 'Ram',
        mobile: '(218) 53435-1572 x4855',
        status: 'unclaimed',
        amount: 200,
        link: 'https://judicious-electricity.info',
      },
      {
        id: 8809,
        name: 'Retha',
        mobile: '(218) 525-1572 x4855',
        status: 'claimed',
        amount: 12,
        link: 'https://judicious-electricity.info',
      },
    ],
  };
};
