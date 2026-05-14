let mockCredits = 12;
export const getUserCredits = async () => mockCredits;
export const consumeCredit = async () => (mockCredits = Math.max(0, mockCredits - 1));
export const addMonthlyCredits = async (amount: number) => (mockCredits += amount);
