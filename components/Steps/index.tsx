import React, { cloneElement } from 'react';
import toArray from 'rc-util/lib/Children/toArray';

import { Step } from './Step';

export type StepsProps = {
  children: React.ReactNode;
  current?: number;
  onChange?: (next: number) => void;
};

export const Steps = ({ children, current = 0, onChange }: StepsProps) => {
  const handleClick = (next: number) => {
    if (onChange && next !== current) {
      onChange(next);
    }
  };

  return (
    <div className="flex justify-between w-full">
      {toArray(children).map((child, index) => {
        const childProps = {
          stepNumber: `${index + 1}`,
          stepIndex: index,
          key: index,
          onClick: handleClick,
          status: 'waiting',
          isLast: index === toArray(children).length - 1,
        };

        if (index === current) {
          childProps.status = 'current';
        } else if (index < current) {
          childProps.status = 'finished';
        }

        return cloneElement(child, childProps);
      })}
    </div>
  );
};

Steps.Step = Step;
