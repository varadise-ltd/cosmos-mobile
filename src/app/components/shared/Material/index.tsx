import InternalMaterial from './material';
import { MaterialProps } from './types';

export default function Material({ className, ...props }: MaterialProps) {
  return (
    <InternalMaterial
      className={className ?? 'bg-color-surface-bg-primary'}
      {...props}
    />
  );
}
