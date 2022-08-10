import React from 'react';
import clsx from 'clsx';

export type AvatarProps = {
  src?: string;
  alt?: string;
  className?: string;
};

export const Avatar: React.FC<AvatarProps> = ({
  src = '',
  alt = '',
  className = '',
}) => {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        className={clsx('rounded-full w-10 h-10 flex-shrink-0', className)}
      />
    );
  }

  return (
    <div
      className={clsx(
        'rounded-full w-10 h-10 flex-shrink-0 items-center justify-center flex bg-gray-500 text-white',
        className,
      )}
    >
      {alt.charAt(0).toUpperCase()}
    </div>
  );
};
