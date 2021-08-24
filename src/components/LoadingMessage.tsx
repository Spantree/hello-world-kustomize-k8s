import React from 'react';
import { ExclamationIcon } from '@heroicons/react/solid';

interface Props {
  message?: string;
}

export const LoadingMessage: React.FC<Props> = ({ message = 'Loading data...' }) => {
  return (
    <div className="rounded-md bg-yellow-50 p-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <ExclamationIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-yellow-800">{message}</h3>
        </div>
      </div>
    </div>
  );
};
