import React from 'react';

interface Props {
  heading: string;
  body: string;
}

export const SectionHeader: React.FC<Props> = ({ heading, body }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">{heading}</h2>
        <p className="mt-3 text-xl text-gray-500 sm:mt-4">{body}</p>
      </div>
    </div>
  );
};
