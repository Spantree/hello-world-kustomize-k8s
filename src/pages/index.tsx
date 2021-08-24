import * as React from 'react';
import { useGetCountersQuery } from 'generated';

const Index = () => {
  const { data, loading, error } = useGetCountersQuery();
  if (loading) {
    return <div className="w-full flex items-start justify-center">Loading...</div>;
  } else if (data) {
    const { counters } = data;
    return (
      <div className="w-full flex items-start justify-center">
        <div>
          <div className="bg-white px-4 py-5 border-gray-200 sm:px-6">
            <div className="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-nowrap">
              <div className="ml-4 mt-2">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Counters</h3>
              </div>
              <div className="ml-4 mt-2 flex-shrink-0">
                {/* TODO: Implement Create New Counter Mutation */}
                <button
                  type="button"
                  className="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Create new counter
                </button>
              </div>
            </div>
          </div>
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
                            <a href="#" className="text-indigo-600 hover:text-indigo-900">
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
          </div>
        </div>
      </div>
    );
  } else {
    return <div className="w-full flex items-start justify-center">An error occurred: {error}</div>;
  }
};

export default Index;
