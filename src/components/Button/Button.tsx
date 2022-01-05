import React from 'react';

export type ButtonProps = {
  label: string;
} & React.ComponentPropsWithoutRef<'button'>;

export const Button: React.FC<ButtonProps> = ({ label, ...rest }) => {
  return <button {...rest}>{label}</button>;
};
