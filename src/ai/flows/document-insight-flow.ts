'use server';
/**
 * @fileOverview This file implements a Genkit flow for extracting insights from document content.
 *
 * - documentInsight - A function that processes document content to provide a summary and key details.
 * - DocumentInsightInput - The input type for the documentInsight function.
 * - DocumentInsightOutput - The return type for the documentInsight function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const DocumentInsightInputSchema = z.object({
  documentContent: z
    .string()
    .describe('The full text content of the document to be analyzed.')
});
export type DocumentInsightInput = z.infer<typeof DocumentInsightInputSchema>;

const DocumentInsightOutputSchema = z.object({
  summary: z
    .string()
    .describe('A concise summary of the document content.'),
  keyDetails: z
    .array(z.string())
    .describe(
      'An array of extracted key details such as dates, names, organizations, important terms, or critical actions.'
    )
});
export type DocumentInsightOutput = z.infer<typeof DocumentInsightOutputSchema>;

export async function documentInsight(
  input: DocumentInsightInput
): Promise<DocumentInsightOutput> {
  return documentInsightFlow(input);
}

const prompt = ai.definePrompt({
  name: 'documentInsightPrompt',
  input: {schema: DocumentInsightInputSchema},
  output: {schema: DocumentInsightOutputSchema},
  prompt: `You are an AI assistant specialized in summarizing and extracting key information from documents.
Given the following document content, provide a concise summary and extract key details such as dates, names, organizations, important terms, or critical actions.
The output should be in JSON format matching the DocumentInsightOutputSchema.

Document Content:
{{{documentContent}}}`
});

const documentInsightFlow = ai.defineFlow(
  {
    name: 'documentInsightFlow',
    inputSchema: DocumentInsightInputSchema,
    outputSchema: DocumentInsightOutputSchema
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
