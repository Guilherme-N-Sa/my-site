import React from "react";
import { DetailedInfoWrapper } from "./styles";
import { DetailedInfoProps } from "./types";

export default function DetailedInfo({ content = 'Detailed information goes here...' }: DetailedInfoProps) {
  return <DetailedInfoWrapper>{content}</DetailedInfoWrapper>;
}
