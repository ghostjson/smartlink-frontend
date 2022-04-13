import Link from 'next/link';
import React from 'react';

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
  link: string;
}

const Card: React.FC<CardProps> = (props) => {
  console.log(props.link);
  return (
    <div className='card md:w-96 bg-base-100 shadow-xl'>
      <figure>
        <img src={props.imageSrc} alt={props.title} />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{props.title}</h2>
        <p>{props.description}</p>
        <div className='card-actions'>
          <Link href={props.link}>
            <a className='btn btn-primary w-full'>Create {props.title}</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
