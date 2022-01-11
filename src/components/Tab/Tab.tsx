import React from 'react';
import clsx from 'clsx';
import { Tab as TabHeadless } from '@headlessui/react';

export type TabProps = {
  list: {
    id: number;
    panel: React.ReactNode;
    header: string | React.ReactNode;
  }[];
};

export const Tab: React.FC<TabProps> = ({ list }) => {
  return (
    <TabHeadless.Group>
      <TabHeadless.List className="space-x-4 border-b border-gray-200text-sm">
        {list.map((item) => (
          <TabHeadless
            key={item.id}
            className={({ selected }) =>
              clsx(
                'mr-2 py-2 -mb-[1px]',
                selected
                  ? ' text-blue-800 font-medium border-b-2 border-blue-800'
                  : ' text-gray-400 font-medium',
              )
            }
          >
            {item.header}
          </TabHeadless>
        ))}
      </TabHeadless.List>
      <TabHeadless.Panels className="py-3">
        {list.map((item) => (
          <TabHeadless.Panel key={item.id}>{item.panel}</TabHeadless.Panel>
        ))}
      </TabHeadless.Panels>
    </TabHeadless.Group>
  );
};
