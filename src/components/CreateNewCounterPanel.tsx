import { GetAllCountersDocument, useCreateNewCounterMutation } from 'generated';
import React, { useState } from 'react';

interface Props {
  setActive: (active: boolean) => any;
}

export const CreateNewCounterPanel: React.FC<Props> = ({ setActive }) => {
  const [name, setName] = useState<string>('');
  const [createNewCounter] = useCreateNewCounterMutation({ refetchQueries: [GetAllCountersDocument] });

  return (
    <div className="bg-white shadow sm:rounded-lg w-full ml-0 flex justify-center">
      <div className="px-4 sm:p-6 w-full items-center">
        <h3 className="text-lg leading-6 font-medium text-center text-gray-900 w-full">Create a New Counter</h3>
        <div className="mt-2 text-sm text-center text-gray-500 w-full">
          <p className="w-full text-center">Please provide the name of your counter.</p>
        </div>
        <form className="mt-5 flex items-center justify-center">
          <div className="w-80">
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="shadow-sm  focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="My counter name"
              required
              onBlur={(e) => {
                e.preventDefault();
                const { value } = e.target;
                setName(value);
              }}
            />
          </div>
          <button
            type="submit"
            className="mt-3 inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            onClick={(e) => {
              e.preventDefault();
              createNewCounter({ variables: { data: { name } } });
              setActive(false);
            }}
          >
            Add Counter
          </button>
          <button
            type="submit"
            className="mt-3 inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-indigo-500 bg-gray-200 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            onClick={(e) => {
              e.preventDefault();
              setActive(false);
            }}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};
