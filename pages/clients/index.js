import Link from 'next/link';

const ClientPage = () => {
  return (
    <div>
      <h1>Cliebt page</h1>
      <Link href='/clients/charan'>Charan</Link>
      <Link
        href={{
          pathname: '/clients/[id]',
          query: {
            id: 'john',
          },
        }}
      >
        John
      </Link>
    </div>
  );
};

export default ClientPage;
