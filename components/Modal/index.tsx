import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import clsx from 'clsx';
import { XCircleIcon } from '@heroicons/react/outline';

export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  titleClassName?: string;
  size?: 'md' | 'lg' | 'xl' | '2xl';
};

export const Modal: React.FC<ModalProps> = ({
  title = '',
  titleClassName = '',
  children,
  isOpen,
  onClose,
  size = '2xl',
}) => {
  const sizeClassName = {
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className={clsx(
                  'w-full transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all',
                  sizeClassName[size],
                )}
              >
                <Dialog.Title
                  as="h3"
                  className={clsx(
                    'mb-5',
                    titleClassName ||
                      'text-lg font-medium leading-6 text-text-800',
                  )}
                >
                  {title}
                </Dialog.Title>

                <button onClick={onClose} className="absolute top-4 right-4">
                  <XCircleIcon className="text-tertiary-600 h-7 w-7" />
                </button>

                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
