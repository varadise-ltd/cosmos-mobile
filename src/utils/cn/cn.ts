import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merges className strings with tailwind-merge to handle conflicts
 * Example: cn('p-4', 'p-8') => 'p-8' (later value wins)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
