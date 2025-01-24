import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { DetailedInfoWrapper } from './styles';
import { DetailedInfoProps } from './types';

export default function DetailedInfo({
  content = 'Detailed information goes here...',
  isMarkdown = false,
}: DetailedInfoProps) {
  const [isFlipping, setIsFlipping] = useState(false);
  const flippingTime = 0.3;

  const [displayContent, setDisplayContent] = useState(content);

  useEffect(() => {
    if (content !== displayContent) {
      setIsFlipping(true);
      const timer = setTimeout(() => {
        setDisplayContent(content);
        setIsFlipping(false);
      }, flippingTime * 1000);

      return () => clearTimeout(timer);
    }
  }, [content, displayContent]);

  return (
    <DetailedInfoWrapper isFlipping={isFlipping} flippingTime={flippingTime}>
      {isMarkdown ? (
        <div className="markdown-content">
          <ReactMarkdown>{displayContent}</ReactMarkdown>
        </div>
      ) : (
        displayContent
      )}
    </DetailedInfoWrapper>
  );
}
