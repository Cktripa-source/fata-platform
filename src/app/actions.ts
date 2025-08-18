'use server';

import { summarizeContent, type SummarizeContentInput } from '@/ai/flows/summarize-content';

export async function getSummary(input: SummarizeContentInput): Promise<string> {
  try {
    const result = await summarizeContent(input);
    return result.summary;
  } catch (error) {
    console.error('Error summarizing content:', error);
    throw new Error('Failed to get summary from AI flow.');
  }
}
