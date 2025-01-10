export const apiKeys = {
  users: () => ["users"],
  cards: () => ["cards"],
  recentTransactions: () => ["recentTransactions"],
  expenses: () => ["expenses"],
  weeklyActivity: () => ["weeklyActivity"],
  friends: () => ["friends"],
  balanceHistory: () => ["balanceHistory"],
  userById: (id: string) => [...apiKeys.users(), id],
};
