import { PropsWithChildren } from 'react';
import { TableOptions, TableInstance } from 'react-table';

export type TableProps<T extends Record<string, unknown>> = {
  pageSize?: number;
} & PropsWithChildren<TableOptions<T>>;

export type TablePaginationProps<T extends Record<string, unknown>> =
  PropsWithChildren<{ instance: TableInstance<T> }>;

export type TableFiltersProps<T extends Record<string, unknown>> =
  PropsWithChildren<{ instance: TableInstance<T> }>;

export type TableBaseProps<T extends Record<string, unknown>> = {
  canSort?: boolean;
} & PropsWithChildren<{ instance: TableInstance<T> }>;

export type TableHeadProps<T extends Record<string, unknown>> = {
  canSort?: boolean;
} & PropsWithChildren<{ instance: TableInstance<T> }>;

export type TableBodyProps<T extends Record<string, unknown>> =
  PropsWithChildren<{ instance: TableInstance<T> }>;
