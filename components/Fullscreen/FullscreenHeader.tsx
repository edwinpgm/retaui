import React from 'react';
import { XIcon } from '@heroicons/react/solid';

type FullscreenHeaderProps = {
  title: string;
  onClick: () => void;
};

export interface FullscreenHeaderInterface
  extends React.FC<FullscreenHeaderProps> {
  __RETAUI_FULLSCREEN_HEADER: boolean;
}

export const FullscreenHeader: FullscreenHeaderInterface = ({
  title,
  onClick,
  children,
}) => {
  return (
    <div className="flex justify-between items-center py-5 pl-2 pr-5 border-b border-neutral-100">
      <div className="flex items-center divide-x">
        <XIcon
          className="h-5 w-5 text-neutral-700 mr-3 cursor-pointer"
          onClick={onClick}
        />
        <span className="pl-3 font-medium text-neutral-700">{title}</span>
      </div>
      <div>{children}</div>
    </div>
  );
};

FullscreenHeader.__RETAUI_FULLSCREEN_HEADER = true;
