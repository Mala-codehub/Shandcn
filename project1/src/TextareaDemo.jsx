import React from 'react';
import { Textarea } from "@/components/ui/textarea";

export function TextareaDemo({ content }) {
  return (
    <Textarea
      className="border-gray-300"
      value={content}
      readOnly
      placeholder="Add Your Heading Text Here"
    />
  );
}

export default TextareaDemo;
