
import { useGetUserById } from '../hooks/useGetUserById';
import Link from 'next/link';

export default async function Page({ params: { id } }: { params: { id: number } }) {
  const user = await useGetUserById(id);

  return (
    <div className='mx-11 grid place-items-center flex-col px-3.5 rounded border flex items-center justify-center h-56 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700"'>
      <div>id: {user.id}</div>
      <div>firstName: {user.firstName}</div>
      <div>lastName: {user.lastName}</div>
      <div className='mt-3'>
        <Link
          href={`team/${id}/edit`}
          className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        >
          Edit
        </Link>
      </div>
    </div>
  );
}
