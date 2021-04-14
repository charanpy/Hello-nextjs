import React from 'react';
import { useRouter } from 'next/router';

const List = () => {
  const router = useRouter();

  console.log(router.pathname, router.query);
  return (
    <div>
      <h1>List</h1>
    </div>
  );
};

export default List;
