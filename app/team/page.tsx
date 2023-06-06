import Image from 'next/image';
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';
import { useGetUsers } from './hooks/useGetUsers'

type User = {
  firstName: string
  lastName: string
  email: string
  image: string
  age: number
  id: number
}

export default async function Page() {
  const users = await useGetUsers();

  return (
    <ul role='list' className='divide-y divide-gray-100'>
      {(users as any).map(({ firstName, lastName, email, image, id }: User) => (
        <li className='flex justify-between gap-x-6 py-5' key={uuidv4()}>
          <div className='flex gap-x-4'>
            <Image
              height={50}
              width={50}
              className='h-12 w-12 flex-none rounded-full bg-gray-50'
              src={image}
              alt=''
            />
            <div className='min-w-0 flex-auto'>
              <p className='text-sm font-semibold leading-6 text-gray-900'>
                {firstName} {lastName}
              </p>
              <p className='mt-1 truncate text-xs leading-5 text-gray-500'>
                {email}
              </p>
            </div>
          </div>
          <div className='hidden sm:flex sm:flex-col sm:items-end'>
            <p className='text-sm leading-6 text-gray-900'>Co-Founder / CEO</p>
            <p className='mt-1 text-xs leading-5 text-gray-500'>
              Last seen <time dateTime='2023-01-23T13:23Z'>3h ago</time>
            </p>
            <Link
              href={`team/${id}`}
              className='w-32 rounded-full border-2 border-slate-600 text-center'
            >
              Details
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
}