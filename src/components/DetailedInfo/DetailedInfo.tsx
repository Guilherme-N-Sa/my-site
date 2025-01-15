import React from "react";
import ReactMarkdown from "react-markdown";
import { DetailedInfoWrapper } from "./styles";
import { DetailedInfoProps } from "./types";

export default function DetailedInfo({
  content = "Detailed information goes here...",
  isMarkdown = false,
}: DetailedInfoProps) {
  return (
    <DetailedInfoWrapper className="detailed-info">
      {isMarkdown ? (
        <div className="markdown-content">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      ) : (
        content
      )}
    </DetailedInfoWrapper>
  );
}
