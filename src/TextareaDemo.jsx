import React from 'react';
import { Textarea } from "@/components/ui/textarea";

export function TextareaDemo({ content }) {
  return <Textarea value={content} readOnly placeholder="Type your message here." />;
}

export default TextareaDemo;
