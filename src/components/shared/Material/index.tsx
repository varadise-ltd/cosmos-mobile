import { cn } from '@/utils/cn';
import InternalMaterial from './material';
import { MaterialProps } from './types';

export default function Material({ className, ...props }: MaterialProps) {
  return (
    <InternalMaterial
      className={cn('bg-color-surface-bg-primary', className)}
      {...props}
    />
  );
}
