import { cn } from './cn';

describe('cn utility - Integration Tests', () => {
  describe('Material Component Use Cases', () => {
    it('merges default Material bg with no custom className', () => {
      const defaultClassName = 'bg-color-surface-bg-primary';
      const mergedClass = cn(defaultClassName, undefined);

      expect(mergedClass).toBe('bg-color-surface-bg-primary');
    });

    it('merges non-background className with default Material bg', () => {
      const defaultClassName = 'bg-color-surface-bg-primary';
      const customClassName = 'p-4 rounded-lg shadow-md';
      const mergedClass = cn(defaultClassName, customClassName);

      expect(mergedClass).toContain('bg-color-surface-bg-primary');
      expect(mergedClass).toContain('p-4');
      expect(mergedClass).toContain('rounded-lg');
      expect(mergedClass).toContain('shadow-md');
    });

    it('overrides default Material bg with custom design token bg', () => {
      const defaultClassName = 'bg-color-surface-bg-primary';
      const customClassName = 'bg-color-button-primary-surface-default';
      const mergedClass = cn(defaultClassName, customClassName);

      expect(mergedClass).toBe('bg-color-button-primary-surface-default');
      expect(mergedClass).not.toContain('bg-color-surface-bg-primary');
    });

    it('overrides default Material bg with standard tailwind bg', () => {
      const defaultClassName = 'bg-color-surface-bg-primary';
      const customClassName = 'bg-red-500';
      const mergedClass = cn(defaultClassName, customClassName);

      expect(mergedClass).toBe('bg-red-500');
      expect(mergedClass).not.toContain('bg-color-surface-bg-primary');
    });

    it('overrides default Material bg but keeps non-conflicting classes', () => {
      const defaultClassName = 'bg-color-surface-bg-primary';
      const customClassName = 'bg-blue-500 p-4 rounded-lg';
      const mergedClass = cn(defaultClassName, customClassName);

      expect(mergedClass).toContain('bg-blue-500');
      expect(mergedClass).toContain('p-4');
      expect(mergedClass).toContain('rounded-lg');
      expect(mergedClass).not.toContain('bg-color-surface-bg-primary');
    });

    it('handles multiple non-bg classes with default Material background', () => {
      const defaultClassName = 'bg-color-surface-bg-primary';
      const customClassName = 'p-8 m-4 flex flex-row items-center';
      const mergedClass = cn(defaultClassName, customClassName);

      expect(mergedClass).toContain('bg-color-surface-bg-primary');
      expect(mergedClass).toContain('p-8');
      expect(mergedClass).toContain('m-4');
      expect(mergedClass).toContain('flex');
      expect(mergedClass).toContain('flex-row');
      expect(mergedClass).toContain('items-center');
    });

    it('overrides with another design token bg and keeps other classes', () => {
      const defaultClassName = 'bg-color-surface-bg-primary';
      const customClassName =
        'bg-color-button-secondary-surface-default p-8 m-4 rounded-xl shadow-lg';
      const mergedClass = cn(defaultClassName, customClassName);

      expect(mergedClass).toContain(
        'bg-color-button-secondary-surface-default',
      );
      expect(mergedClass).toContain('p-8');
      expect(mergedClass).toContain('m-4');
      expect(mergedClass).toContain('rounded-xl');
      expect(mergedClass).toContain('shadow-lg');
      expect(mergedClass).not.toContain('bg-color-surface-bg-primary');
    });
  });

  describe('Button Component Use Cases', () => {
    it('merges base button styles with variant-specific styles', () => {
      const baseStyles = 'px-4 py-2 rounded-lg font-medium';
      const primaryVariant =
        'bg-color-button-primary-surface-default text-white';
      const mergedClass = cn(baseStyles, primaryVariant);

      expect(mergedClass).toContain('px-4');
      expect(mergedClass).toContain('py-2');
      expect(mergedClass).toContain('rounded-lg');
      expect(mergedClass).toContain('font-medium');
      expect(mergedClass).toContain('bg-color-button-primary-surface-default');
      expect(mergedClass).toContain('text-white');
    });

    it('overrides button padding when custom size is provided', () => {
      const baseStyles = 'px-4 py-2 rounded-lg';
      const customSize = 'px-8 py-4';
      const mergedClass = cn(baseStyles, customSize);

      expect(mergedClass).toContain('px-8');
      expect(mergedClass).toContain('py-4');
      expect(mergedClass).toContain('rounded-lg');
      expect(mergedClass).not.toContain('px-4');
      expect(mergedClass).not.toContain('py-2');
    });

    it('handles conditional disabled state', () => {
      const baseStyles = 'px-4 py-2 bg-blue-500 text-white';
      const isDisabled = true;
      const mergedClass = cn(baseStyles, {
        'opacity-50 cursor-not-allowed': isDisabled,
      });

      expect(mergedClass).toContain('px-4');
      expect(mergedClass).toContain('py-2');
      expect(mergedClass).toContain('bg-blue-500');
      expect(mergedClass).toContain('text-white');
      expect(mergedClass).toContain('opacity-50');
      expect(mergedClass).toContain('cursor-not-allowed');
    });
  });

  describe('Typography Component Use Cases', () => {
    it('merges base typography styles with variant styles', () => {
      const baseStyles = 'font-sans';
      const headingVariant = 'text-3xl font-bold text-gray-900';
      const mergedClass = cn(baseStyles, headingVariant);

      expect(mergedClass).toContain('font-sans');
      expect(mergedClass).toContain('text-3xl');
      expect(mergedClass).toContain('font-bold');
      expect(mergedClass).toContain('text-gray-900');
    });

    it('overrides text color when custom color is provided', () => {
      const baseStyles = 'text-gray-900 text-base';
      const customColor = 'text-blue-600';
      const mergedClass = cn(baseStyles, customColor);

      expect(mergedClass).toContain('text-blue-600');
      expect(mergedClass).toContain('text-base');
      expect(mergedClass).not.toContain('text-gray-900');
    });

    it('overrides font weight but keeps other typography styles', () => {
      const baseStyles = 'text-base font-normal text-gray-900';
      const customWeight = 'font-bold';
      const mergedClass = cn(baseStyles, customWeight);

      expect(mergedClass).toContain('text-base');
      expect(mergedClass).toContain('font-bold');
      expect(mergedClass).toContain('text-gray-900');
      expect(mergedClass).not.toContain('font-normal');
    });
  });

  describe('Layout Component Use Cases', () => {
    it('merges container styles with responsive padding', () => {
      const containerStyles = 'w-full mx-auto';
      const responsivePadding = 'px-4 sm:px-6 lg:px-8';
      const mergedClass = cn(containerStyles, responsivePadding);

      expect(mergedClass).toContain('w-full');
      expect(mergedClass).toContain('mx-auto');
      expect(mergedClass).toContain('px-4');
      expect(mergedClass).toContain('sm:px-6');
      expect(mergedClass).toContain('lg:px-8');
    });

    it('handles flex layout with conditional direction', () => {
      const baseLayout = 'flex items-center justify-between';
      const isVertical = true;
      const mergedClass = cn(baseLayout, {
        'flex-col': isVertical,
        'flex-row': !isVertical,
      });

      expect(mergedClass).toContain('flex');
      expect(mergedClass).toContain('items-center');
      expect(mergedClass).toContain('justify-between');
      expect(mergedClass).toContain('flex-col');
      expect(mergedClass).not.toContain('flex-row');
    });

    it('overrides grid columns in responsive design', () => {
      const baseGrid = 'grid grid-cols-1';
      const responsiveGrid = 'md:grid-cols-2 lg:grid-cols-3';
      const mergedClass = cn(baseGrid, responsiveGrid);

      expect(mergedClass).toContain('grid');
      expect(mergedClass).toContain('grid-cols-1');
      expect(mergedClass).toContain('md:grid-cols-2');
      expect(mergedClass).toContain('lg:grid-cols-3');
    });
  });

  describe('Card Component Use Cases', () => {
    it('merges card wrapper styles with variant-specific styles', () => {
      const wrapperStyles = 'rounded-lg overflow-hidden';
      const elevatedVariant = 'bg-white shadow-lg border border-gray-200';
      const mergedClass = cn(wrapperStyles, elevatedVariant);

      expect(mergedClass).toContain('rounded-lg');
      expect(mergedClass).toContain('overflow-hidden');
      expect(mergedClass).toContain('bg-white');
      expect(mergedClass).toContain('shadow-lg');
      expect(mergedClass).toContain('border');
      expect(mergedClass).toContain('border-gray-200');
    });

    it('overrides shadow when custom shadow is provided', () => {
      const baseStyles = 'rounded-lg shadow-md bg-white';
      const customShadow = 'shadow-2xl';
      const mergedClass = cn(baseStyles, customShadow);

      expect(mergedClass).toContain('rounded-lg');
      expect(mergedClass).toContain('shadow-2xl');
      expect(mergedClass).toContain('bg-white');
      expect(mergedClass).not.toContain('shadow-md');
    });

    it('handles interactive states with hover and focus', () => {
      const baseStyles = 'rounded-lg bg-white border border-gray-200';
      const interactiveStyles =
        'hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500';
      const mergedClass = cn(baseStyles, interactiveStyles);

      expect(mergedClass).toContain('rounded-lg');
      expect(mergedClass).toContain('bg-white');
      expect(mergedClass).toContain('border');
      expect(mergedClass).toContain('border-gray-200');
      expect(mergedClass).toContain('hover:shadow-lg');
      expect(mergedClass).toContain('focus:outline-none');
      expect(mergedClass).toContain('focus:ring-2');
      expect(mergedClass).toContain('focus:ring-blue-500');
    });
  });

  describe('Form Component Use Cases', () => {
    it('merges input base styles with state-specific styles', () => {
      const baseStyles = 'w-full px-3 py-2 border rounded-md';
      const normalState = 'border-gray-300 focus:border-blue-500';
      const mergedClass = cn(baseStyles, normalState);

      expect(mergedClass).toContain('w-full');
      expect(mergedClass).toContain('px-3');
      expect(mergedClass).toContain('py-2');
      expect(mergedClass).toContain('border');
      expect(mergedClass).toContain('rounded-md');
      expect(mergedClass).toContain('border-gray-300');
      expect(mergedClass).toContain('focus:border-blue-500');
    });

    it('overrides border color when input has error', () => {
      const baseStyles = 'w-full px-3 py-2 border border-gray-300 rounded-md';
      const hasError = true;
      const mergedClass = cn(baseStyles, {
        'border-red-500 focus:border-red-500': hasError,
      });

      expect(mergedClass).toContain('w-full');
      expect(mergedClass).toContain('px-3');
      expect(mergedClass).toContain('py-2');
      expect(mergedClass).toContain('border');
      expect(mergedClass).toContain('rounded-md');
      expect(mergedClass).toContain('border-red-500');
      expect(mergedClass).toContain('focus:border-red-500');
      expect(mergedClass).not.toContain('border-gray-300');
    });

    it('handles multiple state variations', () => {
      const baseStyles = 'px-3 py-2 border rounded-md';
      const isDisabled = false;
      const hasError = false;
      const isSuccess = true;
      const mergedClass = cn(baseStyles, {
        'border-gray-300': !hasError && !isSuccess,
        'border-red-500': hasError,
        'border-green-500': isSuccess,
        'opacity-50 cursor-not-allowed': isDisabled,
      });

      expect(mergedClass).toContain('px-3');
      expect(mergedClass).toContain('py-2');
      expect(mergedClass).toContain('border');
      expect(mergedClass).toContain('rounded-md');
      expect(mergedClass).toContain('border-green-500');
      expect(mergedClass).not.toContain('border-gray-300');
      expect(mergedClass).not.toContain('border-red-500');
      expect(mergedClass).not.toContain('opacity-50');
    });
  });

  describe('Theme Switching Use Cases', () => {
    it('switches from light to dark theme background', () => {
      const lightTheme = 'bg-white text-gray-900';
      const darkTheme = 'bg-gray-900 text-white';
      const isDark = true;
      const mergedClass = cn(isDark ? darkTheme : lightTheme);

      expect(mergedClass).toContain('bg-gray-900');
      expect(mergedClass).toContain('text-white');
      expect(mergedClass).not.toContain('bg-white');
      expect(mergedClass).not.toContain('text-gray-900');
    });

    it('merges theme-specific classes with component classes', () => {
      const componentStyles = 'rounded-lg p-4 shadow-md';
      const isDark = true;
      const themeStyles = isDark
        ? 'bg-gray-800 text-white'
        : 'bg-white text-gray-900';
      const mergedClass = cn(componentStyles, themeStyles);

      expect(mergedClass).toContain('rounded-lg');
      expect(mergedClass).toContain('p-4');
      expect(mergedClass).toContain('shadow-md');
      expect(mergedClass).toContain('bg-gray-800');
      expect(mergedClass).toContain('text-white');
    });
  });

  describe('Real-world Complex Scenarios', () => {
    it('handles deeply nested component composition', () => {
      const containerStyles = 'flex flex-col gap-4';
      const cardStyles = 'rounded-lg bg-white shadow-md p-6';
      const headerStyles = 'text-2xl font-bold text-gray-900 mb-4';
      const customOverrides = 'bg-blue-50 text-blue-900 shadow-lg';

      const mergedCard = cn(cardStyles, customOverrides);
      const mergedContainer = cn(containerStyles);
      const mergedHeader = cn(headerStyles);

      // Card should have overrides applied
      expect(mergedCard).toContain('rounded-lg');
      expect(mergedCard).toContain('bg-blue-50');
      expect(mergedCard).toContain('text-blue-900');
      expect(mergedCard).toContain('shadow-lg');
      expect(mergedCard).toContain('p-6');
      expect(mergedCard).not.toContain('bg-white');
      expect(mergedCard).not.toContain('shadow-md');

      // Container should remain unchanged
      expect(mergedContainer).toBe('flex flex-col gap-4');

      // Header should remain unchanged
      expect(mergedHeader).toBe('text-2xl font-bold text-gray-900 mb-4');
    });

    it('handles component with multiple conditional states', () => {
      const baseStyles = 'px-4 py-2 rounded-lg font-medium transition-colors';
      const variant: 'primary' | 'secondary' | 'outline' = 'primary';
      const size: 'small' | 'medium' | 'large' = 'large';
      const isDisabled = false;
      const isLoading = true;

      const mergedClass = cn(
        baseStyles,
        {
          'bg-blue-500 text-white': variant === 'primary',
          'bg-gray-500 text-white': variant === 'secondary',
          'bg-white text-blue-500 border-2 border-blue-500':
            variant === 'outline',
        },
        {
          'px-3 py-1.5 text-sm': size === 'small',
          'px-4 py-2 text-base': size === 'medium',
          'px-6 py-3 text-lg': size === 'large',
        },
        {
          'opacity-50 cursor-not-allowed': isDisabled,
          'cursor-wait': isLoading,
        },
      );

      expect(mergedClass).toContain('rounded-lg');
      expect(mergedClass).toContain('font-medium');
      expect(mergedClass).toContain('transition-colors');
      expect(mergedClass).toContain('bg-blue-500');
      expect(mergedClass).toContain('text-white');
      expect(mergedClass).toContain('px-6');
      expect(mergedClass).toContain('py-3');
      expect(mergedClass).toContain('text-lg');
      expect(mergedClass).toContain('cursor-wait');
      expect(mergedClass).not.toContain('opacity-50');
      expect(mergedClass).not.toContain('px-4');
      expect(mergedClass).not.toContain('py-2');
    });
  });
});
