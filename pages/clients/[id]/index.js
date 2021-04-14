import React from 'react';
import { useRouter } from 'next/router';

const ClientId = () => {
  const router = useRouter();
  console.log(router.query);

  const loadProj = () => {
    router.push('/clients/max/A');
  };
  return (
    <div>
      clientId
      <button onClick={loadProj}>Load project A</button>
    </div>
  );
};

export default ClientId;
