import { cn } from '../../lib/utils';
import { VariantProps, cva } from 'class-variance-authority';
import { HTMLAttributes, ReactNode } from 'react';

const buttonVariants = cva(
  'flex justify-center items-center rounded-sm font-medium text-white duration-300 dark:text-black disabled:opacity-75 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        // ** FILLED
        default:
          'bg-transparent border border-slate-900 text-dark hover:bg-slate-900 hover:text-white dark:bg-indigo-600 dark:text-white dark:hover:bg-indigo-700',
        danger:
          'bg-transparent border border-red-600 text-red-600 hover:bg-red-600 hover:text-white dark:bg-red-600 dark:text-white dark:hover:bg-red-700',
        cancel:
          'text-white bg-gray-400 border border-gray-400 hover:border-gray-300 hover:text-gray-900 dark:bg-gray-500 dark:text-white hover:bg-gray-400 dark:hover:bg-gray-400',

        // ** OUTLINE
        outline:
          'border border-indigo-400 hover:text-white bg-transparent text-black hover:border-transparent hover:bg-indigo-600 dark:text-gray-700 dark:hover:text-white',
      },
      size: {
        default: 'p-3',
        sm: 'text-sm px-4 py-2',
      },
      fullWidth: {
        true: 'w-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

interface ButtonProps
  extends HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
  isLoading?: boolean;
}

const Button = ({
  variant,
  size,
  fullWidth,
  isLoading,
  className,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`${cn(
        buttonVariants({ variant, size, fullWidth, className })
      )}`}
      {...props}
      disabled={isLoading}
    >
      {isLoading ? (
        <svg
          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      ) : null}
      {children}
    </button>
  );
};

export default Button;
