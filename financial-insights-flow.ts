'use server';
/**
 * @fileOverview A financial advisor AI agent.
 *
 * - generateFinancialInsights - A function that handles the financial insights generation process.
 * - FinancialInsightsInput - The input type for the generateFinancialInsights function.
 * - FinancialInsightsOutput - The return type for the generateFinancialInsights function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

// Input Schemas
const IncomeEntrySchema = z.object({
  amount: z.number().describe('The amount of income received.'),
  date: z.string().describe('The date the income was received (YYYY-MM-DD).'),
  source: z.string().describe('The source of the income (e.g., Salary, Freelance, Gift).'),
  description: z.string().optional().describe('A brief description of the income.'),
});
export type IncomeEntry = z.infer<typeof IncomeEntrySchema>;

const ExpenseEntrySchema = z.object({
  amount: z.number().describe('The amount of the expense.'),
  date: z.string().describe('The date the expense occurred (YYYY-MM-DD).'),
  category: z.string().describe('The category of the expense (e.g., Food, Transport, Rent, Entertainment).'),
  description: z.string().optional().describe('A brief description of the expense.'),
});
export type ExpenseEntry = z.infer<typeof ExpenseEntrySchema>;

const BillEntrySchema = z.object({
  amount: z.number().describe('The amount of the bill.'),
  dueDate: z.string().describe('The due date of the bill (YYYY-MM-DD).'),
  name: z.string().describe('The name of the bill (e.g., Electricity, Internet, Rent).'),
  category: z.string().describe('The category of the bill (e.g., Utilities, Housing, Subscription).'),
  isPaid: z.boolean().describe('Whether the bill has been paid.'),
});
export type BillEntry = z.infer<typeof BillEntrySchema>;

const FinancialInsightsInputSchema = z.object({
  income: z.array(IncomeEntrySchema).describe('A list of income entries.'),
  expenses: z.array(ExpenseEntrySchema).describe('A list of expense entries.'),
  bills: z.array(BillEntrySchema).describe('A list of recurring bills.'),
});
export type FinancialInsightsInput = z.infer<typeof FinancialInsightsInputSchema>;

// Output Schema
const FinancialInsightsOutputSchema = z.object({
  spendingHabitReport: z.string().describe('A detailed report on spending habits, identifying patterns and significant expenditures.'),
  budgetSuggestions: z.string().describe('Personalized suggestions for budgeting, including areas where spending could be reduced or optimized.'),
  financialHealthInsights: z.string().describe('Overall insights into the user\'s financial health, highlighting strengths, weaknesses, and actionable advice.'),
  summary: z.string().describe('A concise summary of the financial analysis.'),
});
export type FinancialInsightsOutput = z.infer<typeof FinancialInsightsOutputSchema>;

export async function generateFinancialInsights(input: FinancialInsightsInput): Promise<FinancialInsightsOutput> {
  return financialInsightsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'financialInsightsPrompt',
  input: {schema: FinancialInsightsInputSchema},
  output: {schema: FinancialInsightsOutputSchema},
  prompt: `You are an AI-powered financial advisor. Your task is to analyze the provided financial data (income, expenses, and bills) and generate a personalized spending habit report, budget suggestions, and financial health insights.

Analyze the data comprehensively and provide actionable advice.
If no data is provided for a category, mention that in your report.

## Income:
{{#if income}}
{{#each income}}
- Date: {{{date}}}, Source: {{{source}}}, Amount: $ {{{amount}}}, Description: {{{description}}}
{{/each}}
{{else}}
No income data provided.
{{/if}}

## Expenses:
{{#if expenses}}
{{#each expenses}}
- Date: {{{date}}}, Category: {{{category}}}, Amount: $ {{{amount}}}, Description: {{{description}}}
{{/each}}
{{else}}
No expense data provided.
{{/if}}

## Bills:
{{#if bills}}
{{#each bills}}
- Due Date: {{{dueDate}}}, Name: {{{name}}}, Category: {{{category}}}, Amount: $ {{{amount}}}, Paid: {{{isPaid}}}
{{/each}}
{{else}}
No bill data provided.
{{/if}}

Based on the above financial data, please generate the following:

1.  **Spending Habit Report**:
    *   Identify primary spending categories.
    *   Note any unusual spending patterns or significant one-time expenses.
    *   Comment on the balance between essential and discretionary spending.

2.  **Budget Suggestions**:
    *   Propose realistic budget adjustments based on income and expenses.
    *   Suggest areas for potential savings or re-allocation of funds.
    *   Provide tips for better bill management.

3.  **Financial Health Insights**:
    *   Assess the overall financial stability.
    *   Highlight strengths (e.g., consistent income, low debt) and weaknesses (e.g., high debt-to-income ratio, insufficient savings).
    *   Offer general advice for improving long-term financial well-being.

4.  **Summary**:
    *   A brief, overarching summary of your findings and recommendations.`
});

const financialInsightsFlow = ai.defineFlow(
  {
    name: 'financialInsightsFlow',
    inputSchema: FinancialInsightsInputSchema,
    outputSchema: FinancialInsightsOutputSchema,
  },
  async (input) => {
    const {output} = await prompt(input);
    return output!;
  }
);
