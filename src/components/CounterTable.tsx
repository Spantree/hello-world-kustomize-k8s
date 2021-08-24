import React, { useState } from 'react';

import { CounterDataFragment, useCreateNewCounterMutation, useIncrementCounterMutation } from 'generated';
import { CreateNewCounterPanel } from './CreateNewCounterPanel';

interface Props {
  counters: Array<CounterDataFragment>;
}

export const CounterTable: React.FC<Props> = ({ counters }) => {
  const [createMode, setCreateMode] = useState(false);
  const [incrementCounter] = useIncrementCounterMutation();
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 w-2xl">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Value
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    &nbsp;
                  </th>
                </tr>
              </thead>
              <tbody>
                {counters.map(({ id, name, value }, counterIdx) => (
                  <tr key={id} className={counterIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium tgit ext-gray-900">{name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{value}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      {/* TODO: Implement Increment Mutation */}
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          incrementCounter({ variables: { id } });
                        }}
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        Increment
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="mt-8 flex-shrink-0 items-center justify-center w-full flex">
        {/* TODO: Implement Create New Counter Mutation */}
        {!createMode ? (
          <button
            type="button"
            className="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={(e) => {
              e.preventDefault();
              setCreateMode(true);
            }}
          >
            Create new counter
          </button>
        ) : (
          <CreateNewCounterPanel setActive={setCreateMode} />
        )}
      </div>
    </div>
  );
};
