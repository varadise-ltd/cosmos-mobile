import { Text, TextProps } from 'react-native';
import { tv, type VariantProps } from 'tailwind-variants';

const typography = tv({
  base: 'font-Inter',
  variants: {
    variant: {
      // Display variants
      'display-md-regular':
        'text-size-72 leading-size-90 font-normal tracking-tracking-tight-7xl',
      'display-md-medium':
        'text-size-72 leading-size-90 font-medium tracking-tracking-tight-7xl',
      'display-md-semi-bold':
        'text-size-72 leading-size-90 font-semibold tracking-tracking-tight-7xl',
      'display-sm-regular':
        'text-size-60 leading-size-72 font-normal tracking-tracking-tight-6xl',
      'display-sm-medium':
        'text-size-60 leading-size-72 font-medium tracking-tracking-tight-6xl',
      'display-sm-semi-bold':
        'text-size-60 leading-size-72 font-semibold tracking-tracking-tight-6xl',
      'display-xs-regular':
        'text-size-48 leading-size-60 font-normal tracking-tracking-tight-5xl',
      'display-xs-medium':
        'text-size-48 leading-size-60 font-medium tracking-tracking-tight-5xl',
      'display-xs-semi-bold':
        'text-size-48 leading-size-60 font-semibold tracking-tracking-tight-5xl',

      // Title variants
      'title-xxl-regular':
        'text-size-40 leading-size-48 font-normal tracking-tracking-tight-4xl',
      'title-xxl-medium':
        'text-size-40 leading-size-48 font-medium tracking-tracking-tight-4xl',
      'title-xxl-semi-bold':
        'text-size-40 leading-size-48 font-semibold tracking-tracking-tight-4xl',
      'title-xl-regular':
        'text-size-36 leading-size-44 font-normal tracking-tracking-tight-3xl',
      'title-xl-medium':
        'text-size-36 leading-size-44 font-medium tracking-tracking-tight-3xl',
      'title-xl-semi-bold':
        'text-size-36 leading-size-44 font-semibold tracking-tracking-tight-3xl',
      'title-lg-regular':
        'text-size-32 leading-size-40 font-normal tracking-tracking-tight-2xl',
      'title-lg-medium':
        'text-size-32 leading-size-40 font-medium tracking-tracking-tight-2xl',
      'title-lg-semi-bold':
        'text-size-32 leading-size-40 font-semibold tracking-tracking-tight-2xl',
      'title-md-regular':
        'text-size-28 leading-size-36 font-normal tracking-tracking-tight-xl',
      'title-md-medium':
        'text-size-28 leading-size-36 font-medium tracking-tracking-tight-xl',
      'title-md-semi-bold':
        'text-size-28 leading-size-36 font-semibold tracking-tracking-tight-xl',
      'title-sm-regular':
        'text-size-24 leading-size-32 font-normal tracking-tracking-tight-lg',
      'title-sm-medium':
        'text-size-24 leading-size-32 font-medium tracking-tracking-tight-lg',
      'title-sm-semi-bold':
        'text-size-24 leading-size-32 font-semibold tracking-tracking-tight-lg',
      'title-xs-regular':
        'text-size-20 leading-size-28 font-normal tracking-tracking-tight-md',
      'title-xs-medium':
        'text-size-20 leading-size-28 font-medium tracking-tracking-tight-md',
      'title-xs-semi-bold':
        'text-size-20 leading-size-28 font-semibold tracking-tracking-tight-md',

      // Text variants
      'text-lg-regular': 'text-size-18 leading-size-24 font-normal',
      'text-lg-medium': 'text-size-18 leading-size-24 font-medium',
      'text-lg-semi-bold': 'text-size-18 leading-size-24 font-semibold',
      'text-md-regular': 'text-size-16 leading-size-24 font-normal',
      'text-md-medium': 'text-size-16 leading-size-24 font-medium',
      'text-md-semi-bold': 'text-size-16 leading-size-24 font-semibold',
      'text-ssm-regular':
        'text-size-15 leading-size-20 font-normal tracking-tracking-tight-sm',
      'text-ssm-medium':
        'text-size-15 leading-size-20 font-medium tracking-tracking-tight-sm',
      'text-ssm-semi-bold':
        'text-size-15 leading-size-20 font-semibold tracking-tracking-tight-sm',
      'text-sm-regular':
        'text-size-14 leading-size-20 font-normal tracking-tracking-tight-xl',
      'text-sm-medium':
        'text-size-14 leading-size-20 font-medium tracking-tracking-tight-xl',
      'text-sm-semi-bold':
        'text-size-14 leading-size-20 font-semibold tracking-tracking-tight-xl',
      'text-xs-regular': 'text-size-12 leading-size-16 font-normal',
      'text-xs-medium': 'text-size-12 leading-size-16 font-medium',
      'text-xs-semi-bold': 'text-size-12 leading-size-16 font-semibold',
      'text-xxs-regular': 'text-[11px] leading-[14px] font-normal',
      'text-xxs-medium': 'text-[11px] leading-[14px] font-medium',
      'text-xxs-semi-bold': 'text-[11px] leading-[14px] font-semibold',
    },
  },
  defaultVariants: {
    variant: 'text-md-regular',
  },
});

type TypographyVariants = VariantProps<typeof typography>;

type TypographyProps = Omit<TextProps, 'style'> &
  TypographyVariants & {
    className?: string;
    children: React.ReactNode;
  };

export default function Typography({
  variant,
  className,
  children,
  ...props
}: TypographyProps) {
  return (
    <Text className={typography({ variant, className })} {...props}>
      {children}
    </Text>
  );
}

// Span component for inline text with different styling (nested within Typography)
Typography.Span = function Span({
  variant,
  className,
  children,
  ...props
}: TypographyProps) {
  return (
    <Text className={typography({ variant, className })} {...props}>
      {children}
    </Text>
  );
};
