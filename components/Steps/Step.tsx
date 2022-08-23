import React from 'react';
import { CheckIcon } from '@heroicons/react/solid';
import clsx from 'clsx';

export enum StepStatus {
  Waiting = 'waiting',
  Current = 'current',
  Finished = 'finished',
}

type StepProps = {
  onClick?: (index: number) => void;
  stepIndex?: number;
  stepNumber?: string;
  status?: StepStatus;
  title?: string;
  isLast?: boolean;
};

export const Step: React.FC<StepProps> = ({
  onClick,
  stepIndex,
  stepNumber,
  title,
  status,
  isLast,
}) => {
  const onStepClick = () => {
    onClick?.(stepIndex as number);
  };

  const iconClassName = {
    [StepStatus.Finished]: 'border-primary-700 text-primary-700',
    [StepStatus.Current]: 'border-primary-700 bg-primary-700 text-white',
    [StepStatus.Waiting]: 'border-tertiary-200 text-tertiary-200',
  };

  return (
    <div
      onClick={onStepClick}
      className={clsx(
        'cursor-pointer flex gap-x-2 text-sm items-center overflow-hidden',
        isLast ? 'flex-none' : 'flex-1 mr-3',
      )}
    >
      <div
        className={clsx(
          'rounded-full border h-6 w-6 inline-flex items-center justify-center text-xs shrink-0',
          iconClassName[status as StepStatus],
        )}
      >
        {status === StepStatus.Finished ? (
          <CheckIcon className="h-3 w-3" />
        ) : (
          <span>{stepNumber}</span>
        )}
      </div>
      <span
        className={clsx(
          'relative pr-3 inline-block',
          !isLast &&
            `after:content-[""] after:absolute after:top-3 after:w-[9999px] after:h-[1px] ${
              status === StepStatus.Finished
                ? 'after:bg-primary-700'
                : 'after:bg-tertiary-200'
            } after:left-full`,
        )}
      >
        {title}
      </span>
    </div>
  );
};
