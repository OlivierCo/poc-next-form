export default function DashboardLayout(props: {
  children: React.ReactNode;
  left:React.ReactNode;
  right: React.ReactNode;
}) {
  return (
    <div className='min-h-full'>
      <main>
        <div className='mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 flex flex-col'>
          {props.children}
          <div className='flex flex-row'>
            <div className='w-6/12 p-2.5 bg-yellow-400'>{props.left}</div>
            <div className='w-6/12 p-2.5 bg-lime-600'>{props.right}</div>
          </div>
        </div>
      </main>
    </div>
  );
}
