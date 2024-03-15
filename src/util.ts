export const prop = (key: string) => (context: any) => context[key];

export const sortBy = (evalFn: (arg0: any) => any) => (xs: any[]) => xs.sort((a, b) => evalFn(a) - evalFn(b));

export const map = (fn: any) => (xs: any[]) => xs.map(fn);

export const filter = (fn: any) => (xs: any[]) => xs.filter(fn);

export const awaitAll = Promise.all.bind(Promise);
