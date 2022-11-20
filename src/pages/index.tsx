import { useRouter } from 'next/router';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  const router = useRouter();

  return (
    <Main
      meta={
        <Meta
          title="Crypto Surfer"
          description="A Simple App that renders basic info about popular cryptocurrencies"
        />
      }
    >
      <div className="container">
        <h1 className="mb-6 text-2xl font-bold">Welcome</h1>
        <img
          src={`${router.basePath}/assets/images/bitcoin-crypto.gif`}
          alt="Nextjs starter banner"
        />
      </div>
    </Main>
  );
};

export default Index;
