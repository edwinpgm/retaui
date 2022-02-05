import React from 'react';
import { FullscreenHeader } from './FullscreenHeader';

export interface FullscreenInterface extends React.FC {
  Header: typeof FullscreenHeader;
}

export const Fullscreen: FullscreenInterface = ({ children }) => {
  return <div className="fixed top-0 left-0 right-0 bottom-0">{children}</div>;
};

Fullscreen.Header = FullscreenHeader;
