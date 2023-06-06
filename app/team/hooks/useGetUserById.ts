export const useGetUserById = async (id: number) => {
  const res = await fetch(`https://dummyjson.com/users/${id}`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const user = await res.json();

  return new Promise(resolve => {
    setTimeout(() => {
      resolve(user)
    }, 3000);
  });
};
