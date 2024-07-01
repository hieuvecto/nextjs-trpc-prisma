import React, { FunctionComponent } from 'react';
import Span from '../atoms/Span';

export type RatingProps = {
  rating: number;
  ratingCount: number;
};
const Rating: FunctionComponent<RatingProps> = ({ rating, ratingCount }) => (
  <div className="flex items-center">
    <Span className="text-yellow-500 text-lg font-bold">★</Span>
    <Span className="text-gray-700 text-lg ml-1">{rating}</Span>
    <Span className="text-gray-600 text-sm ml-1">({ratingCount})</Span>
  </div>
);

export default Rating;
