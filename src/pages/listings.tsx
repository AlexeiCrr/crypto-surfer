/* eslint-disable tailwindcss/no-custom-classname */
import 'react-data-grid/lib/styles.css';

import type { FC } from 'react';
import { useEffect, useId, useState } from 'react';
import DataGrid from 'react-data-grid';
import type { SingleValue } from 'react-select';
import Select from 'react-select';
import useSwr from 'swr';

import Button from '@/components/button';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import type { Coin, Option } from '@/utils/constants';
import { CURRENCY } from '@/utils/constants';
import { fetcher } from '@/utils/fetcher';

const currencyOptions: Option[] = [
  { value: CURRENCY.EUR, label: 'Euro', symbol: '$' },
  { value: CURRENCY.USD, label: 'USD', symbol: '€' },
  { value: CURRENCY.GBP, label: 'Pound Sterling', symbol: '£' },
  { value: CURRENCY.CHF, label: 'Swiss Franc', symbol: 'CHf' },
  { value: CURRENCY.CAD, label: 'Canadian Dollar', symbol: 'C$' },
  { value: CURRENCY.AUD, label: 'Australlian Dollar', symbol: 'A$' },
];

const columns = [
  { key: 'name', name: 'Name' },
  { key: 'image', name: 'Image' },
  { key: 'currentPrice', name: 'Current Price' },
  { key: 'circulatingSupply', name: 'Circulating Supply' },
  { key: 'totalSupply', name: 'Total Supply' },
];

const Listings: FC = () => {
  const [state, setState] = useState({
    currency: CURRENCY.EUR,
    page: 1,
  });
  const { currency, page } = state;
  const url = `/api/crypto/listings?currency=${currency}&page=${page}`;
  const { data, error } = useSwr(url, fetcher);

  const [tokens, setTokens] = useState<Coin[]>([]);
  // if i don't set an instanceID it throws an error about missmatching ids
  const selectId = useId();

  const handlePageChange = (newPage: number) => {
    if (newPage < 1) return;
    setState({ ...state, page: newPage });
  };

  const handleCurrencyChange = (newValue: SingleValue<Option>) => {
    if (state.currency === (newValue!.value as CURRENCY)) return;
    setState({ ...state, currency: newValue!.value as CURRENCY });
  };

  useEffect(() => {
    if (data && !error) {
      setTokens(data);
    }
  }, [data, error]);

  const tokenRows = tokens.map((token) => {
    return {
      ...token,
      image: (
        <>
          <img src={token.image} alt={token.id} className="w-4" />
        </>
      ),
    };
  });

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
        <h1 className="mb-6 text-2xl font-bold">Your Listings</h1>
        {error && <div>failed to load</div>}
        <div className="mb-6">
          <Select
            instanceId={selectId}
            value={
              {
                value: state.currency,
                label: currencyOptions.find(
                  (option) => option.value === state.currency
                )?.label,
              } as Option
            }
            onChange={handleCurrencyChange}
            options={currencyOptions}
          />
        </div>
        <div>
          {tokens && (
            <DataGrid
              className="rdg-light my-8"
              columns={columns}
              rows={tokenRows}
            />
          )}
        </div>
        <div className="flex">
          <Button
            onClick={() => handlePageChange(state.page - 1)}
            text="Prev"
            disabled={!data}
          />
          <p className="mx-4 min-w-[2rem] text-center"> {state.page}</p>
          <Button
            onClick={() => handlePageChange(state.page + 1)}
            text="Next"
            disabled={!data}
          />
        </div>
      </div>
    </Main>
  );
};

export default Listings;
