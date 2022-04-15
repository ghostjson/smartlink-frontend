import { QRCodeCanvas } from 'qrcode.react';
import React from 'react';

export interface QuizDetailsProps {
  title: string;
  url: string;
  attended: string | number;
  details: {
    question: string;
    choices: { choice: string; answered: string | number }[];
  }[];
  responses: {
    id: string | number;
    name: string;
    mobile: string | number;
    link: string;
  }[];
  rewards?: {
    id: string | number;
    name: string;
    mobile: string | number;
    status: 'unclaimed' | 'claimed';
    amount: string | number;
    link: string;
  }[];
}
const QuizDetails: React.FC<QuizDetailsProps> = (props) => {
  return (
    <div className='container mx-auto min-h-screen'>
      <div className='flex justify-between items-start'>
        <div>
          <h1 className='text-2xl font-bold capitalize'>{props.title} Quiz</h1>
          <a href={props.url} className='link link-hover'>
            {props.url}
          </a>
          <div className='flex gap-2 my-2'>
            <button className='btn btn-sm btn-primary btn-outline'>Copy</button>
            <button className='btn btn-sm btn-primary btn-outline'>
              Download
            </button>
          </div>
        </div>
        <QRCodeCanvas value={props.url} />
      </div>
      <span className='font-semibold'>
        Summary - {props.attended} Quiz taken
      </span>
      {/* displaying all question and their data  */}
      <div className='flex flex-col bg-slate-50 text-lg p-4'>
        <span className='font-semibold'>Details:</span>
        {props.details.map((question, id) => (
          <div className='flex flex-col my-2' key={question.question}>
            <span>{`Q${id + 1}. ${question.question}?`}</span>
            <ol className='list-decimal px-6 space-y-1'>
              {question.choices.map((choice) => (
                <span className='flex justify-between' key={choice.choice}>
                  <li>{choice.choice}</li>
                  <span className='font-semibold text-primary'>
                    {choice.answered}%
                  </span>
                </span>
              ))}
            </ol>
          </div>
        ))}
      </div>
      {/* individual response data  */}

      <div className='overflow-x-auto my-10'>
        <h2 className='font-semibold text-lg'>Response Details</h2>
        <table className='table table-compact w-full'>
          <thead>
            <tr>
              <th>#ID</th>
              <th>Name</th>
              <th>Mobile</th>
              <th>Individual Response</th>
            </tr>
          </thead>
          <tbody>
            {props.responses.map((response) => (
              <tr key={response.id}>
                <th>{response.id}</th>
                <td>{response.name}</td>
                <td>{response.mobile}</td>
                <td>
                  <a href={response.link}>{response.link}</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* individual rewards data  */}
      {props.rewards && (
        <div className='overflow-x-auto my-10'>
          <h2 className='font-semibold text-lg'>Reward Details</h2>
          <table className='table table-compact w-full'>
            <thead>
              <tr>
                <th>#ID</th>
                <th>Name</th>
                <th>Mobile</th>
                <th>Status</th>
                <th>Amount</th>
                <th>View</th>
              </tr>
            </thead>
            <tbody>
              {props.rewards.map((reward) => (
                <tr key={reward.id}>
                  <th>{reward.id}</th>
                  <td>{reward.name}</td>
                  <td>{reward.mobile}</td>
                  <td>
                    {reward.status === 'claimed' ? (
                      <span className='badge badge-success'>Claimed</span>
                    ) : (
                      <span className='badge badge-warning'>Unclaimed</span>
                    )}
                  </td>
                  <td>{reward.amount}</td>
                  <td>
                    <a href={reward.link}>{reward.link}</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default QuizDetails;
