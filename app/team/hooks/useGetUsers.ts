export const useGetUsers = async () => {
  const res = await fetch('https://dummyjson.com/users');

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await res.json();

  return new Promise(resolve => {
    setTimeout(() => {
      resolve(data.users)
    }, 3000);
  });
}