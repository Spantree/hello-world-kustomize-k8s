import * as React from 'react';
import { useGetAllCountersQuery, useGetSystemInfoQuery } from 'generated';
import { LoadingMessage, ErrorMessage, CounterTable, SectionHeader } from 'components';

const Index = () => {
  const { data, loading, error } = useGetAllCountersQuery();
  const { data: systemData } = useGetSystemInfoQuery();

  const databaseType = systemData?.systemInfo?.databaseType ?? '';
  const greeting = systemData?.systemInfo?.greeting ?? '';
  return (
    <main className="flex-auto items-center justify-center mt-12">
      <div className="max-w-4xl mx-auto">
        {loading ? (
          <LoadingMessage />
        ) : data ? (
          <div className="flex flex-col mb-8">
            <SectionHeader
              heading="Counters"
              body={`${greeting} These counters maintain their state inside a ${databaseType} Database.`}
            />
            <CounterTable counters={data.counters} />
          </div>
        ) : error ? (
          <ErrorMessage error={error} />
        ) : (
          <ErrorMessage error={new Error('Something went horribly wrong')} />
        )}
      </div>
    </main>
  );
};

export default Index;
