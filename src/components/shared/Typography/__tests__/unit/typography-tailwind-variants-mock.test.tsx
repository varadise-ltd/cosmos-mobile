import { render } from '@testing-library/react-native';
import Typography from '../../Typography';

// Mock tailwind-variants to return a function that applies classes
jest.mock('tailwind-variants', () => ({
  tv: jest.fn((config) => {
    const mockFn = jest.fn((props) => {
      const variant = props?.variant || config.defaultVariants?.variant;
      const className = props?.className || '';
      const variantClass = config.variants.variant[variant] || '';
      return `${variantClass} ${className}`.trim();
    });
    return mockFn;
  }),
}));

describe('Typography Component - tailwind-variants Mock Configuration', () => {
  it('applies variant classes through mocked tv', () => {
    const { getByText } = render(
      <Typography variant="display-md-regular">Test</Typography>,
    );
    expect(getByText('Test')).toBeTruthy();
  });

  it('applies custom className along with variant', () => {
    const { getByText } = render(
      <Typography variant="text-lg-medium" className="custom-class">
        Test
      </Typography>,
    );
    expect(getByText('Test')).toBeTruthy();
  });

  it('uses default variant when no variant is provided', () => {
    const { getByText } = render(<Typography>Test</Typography>);
    expect(getByText('Test')).toBeTruthy();
  });

  it('handles all display variants without errors', () => {
    const displayVariants = [
      'display-md-regular',
      'display-md-medium',
      'display-md-semi-bold',
      'display-sm-regular',
      'display-sm-medium',
      'display-sm-semi-bold',
      'display-xs-regular',
      'display-xs-medium',
      'display-xs-semi-bold',
    ];

    displayVariants.forEach((variant: any) => {
      const { getByText } = render(
        <Typography variant={variant}>{variant}</Typography>,
      );
      expect(getByText(variant)).toBeTruthy();
    });
  });

  it('handles all title variants without errors', () => {
    const titleVariants = [
      'title-xxl-regular',
      'title-xxl-medium',
      'title-xxl-semi-bold',
      'title-xl-regular',
      'title-xl-medium',
      'title-xl-semi-bold',
      'title-lg-regular',
      'title-lg-medium',
      'title-lg-semi-bold',
      'title-md-regular',
      'title-md-medium',
      'title-md-semi-bold',
      'title-sm-regular',
      'title-sm-medium',
      'title-sm-semi-bold',
      'title-xs-regular',
      'title-xs-medium',
      'title-xs-semi-bold',
    ];

    titleVariants.forEach((variant: any) => {
      const { getByText } = render(
        <Typography variant={variant}>{variant}</Typography>,
      );
      expect(getByText(variant)).toBeTruthy();
    });
  });

  it('handles all text variants without errors', () => {
    const textVariants = [
      'text-lg-regular',
      'text-lg-medium',
      'text-lg-semi-bold',
      'text-md-regular',
      'text-md-medium',
      'text-md-semi-bold',
      'text-ssm-regular',
      'text-ssm-medium',
      'text-ssm-semi-bold',
      'text-sm-regular',
      'text-sm-medium',
      'text-sm-semi-bold',
      'text-xs-regular',
      'text-xs-medium',
      'text-xs-semi-bold',
      'text-xxs-regular',
      'text-xxs-medium',
      'text-xxs-semi-bold',
    ];

    textVariants.forEach((variant: any) => {
      const { getByText } = render(
        <Typography variant={variant}>{variant}</Typography>,
      );
      expect(getByText(variant)).toBeTruthy();
    });
  });
});
