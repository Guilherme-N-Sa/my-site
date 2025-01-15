import React from 'react';
import { DetailedInfoWrapper } from './styles';
import { DetailedInfoProps } from './types';

const DetailedInfo: React.FC<DetailedInfoProps> = ({ content = 'Detailed information goes here...' }) => {
  return (
    <DetailedInfoWrapper>{content}</DetailedInfoWrapper>
  );
};

export default DetailedInfo; 