import React from 'react';
import { useRouter } from 'next/router';

const ClientProjectPage = () => {
  const router = useRouter();
  console.log(router.query);
  return <div>clent project</div>;
};

export default ClientProjectPage;
