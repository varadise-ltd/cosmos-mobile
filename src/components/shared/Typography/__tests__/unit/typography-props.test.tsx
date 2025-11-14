import { render } from '@testing-library/react-native';
import Typography from '../../Typography';

// Mock tailwind-variants
jest.mock('tailwind-variants', () => ({
  tv: jest.fn((config) => {
    return jest.fn((props) => {
      const variant = props?.variant || config.defaultVariants?.variant;
      const className = props?.className || '';
      const variantClass = config.variants.variant[variant] || '';
      return `${variantClass} ${className}`.trim();
    });
  }),
}));

describe('Typography Component - Props', () => {
  it('passes through native Text props', () => {
    const { getByText } = render(
      <Typography numberOfLines={1} ellipsizeMode="tail">
        Long text that should be truncated
      </Typography>,
    );
    const textElement = getByText('Long text that should be truncated');
    expect(textElement).toBeTruthy();
    expect(textElement.props.numberOfLines).toBe(1);
    expect(textElement.props.ellipsizeMode).toBe('tail');
  });

  it('handles testID prop', () => {
    const { getByTestId } = render(
      <Typography testID="custom-typography">Test</Typography>,
    );
    expect(getByTestId('custom-typography')).toBeTruthy();
  });

  it('handles accessible prop', () => {
    const { getByText } = render(
      <Typography accessible={true} accessibilityLabel="Screen reader text">
        Visible text
      </Typography>,
    );
    const textElement = getByText('Visible text');
    expect(textElement.props.accessible).toBe(true);
    expect(textElement.props.accessibilityLabel).toBe('Screen reader text');
  });

  it('handles onPress prop', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <Typography onPress={onPressMock}>Pressable text</Typography>,
    );
    const textElement = getByText('Pressable text');
    expect(textElement.props.onPress).toBe(onPressMock);
  });

  it('handles selectable prop', () => {
    const { getByText } = render(
      <Typography selectable={true}>Selectable text</Typography>,
    );
    const textElement = getByText('Selectable text');
    expect(textElement.props.selectable).toBe(true);
  });

  it('combines variant with className', () => {
    const { getByText } = render(
      <Typography variant="title-lg-medium" className="custom-class">
        Combined styles
      </Typography>,
    );
    expect(getByText('Combined styles')).toBeTruthy();
  });

  it('handles allowFontScaling prop', () => {
    const { getByText } = render(
      <Typography allowFontScaling={false}>No scaling</Typography>,
    );
    const textElement = getByText('No scaling');
    expect(textElement.props.allowFontScaling).toBe(false);
  });

  it('handles maxFontSizeMultiplier prop', () => {
    const { getByText } = render(
      <Typography maxFontSizeMultiplier={1.5}>Max scaling</Typography>,
    );
    const textElement = getByText('Max scaling');
    expect(textElement.props.maxFontSizeMultiplier).toBe(1.5);
  });
});
