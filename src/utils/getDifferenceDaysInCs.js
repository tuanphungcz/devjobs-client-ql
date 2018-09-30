import { differenceInDays } from 'date-fns';

export const getDifferenceDaysInCs = createdAt => {
  const difference = differenceInDays(new Date(), createdAt);
  if (difference === 0) {
    return 'zvreřejněno dneska';
  }

  if (difference === 1) {
    return 'zvreřejněno včera';
  }
  return `zvreřejněno před ${difference} dny`;
};
