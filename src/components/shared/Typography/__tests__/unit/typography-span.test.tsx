import { render } from '@testing-library/react-native';
import Typography from '../../Typography';

// Mock tailwind-variants
jest.mock('tailwind-variants', () => ({
  tv: jest.fn((config) => {
    return jest.fn((props) => {
      const variant = props?.variant || config.defaultVariants?.variant;
      return config.variants.variant[variant] || '';
    });
  }),
}));

describe('Typography.Span Component', () => {
  describe('Basic Rendering', () => {
    it('renders Span component', () => {
      const { getByText } = render(
        <Typography>
          Hello <Typography.Span>World</Typography.Span>
        </Typography>
      );
      expect(getByText('World')).toBeTruthy();
    });

    it('renders Span with default variant', () => {
      const { getByText } = render(
        <Typography>
          <Typography.Span>Span Text</Typography.Span>
        </Typography>
      );
      expect(getByText('Span Text')).toBeTruthy();
    });

    it('renders Span with custom variant', () => {
      const { getByText } = render(
        <Typography>
          <Typography.Span variant="text-lg-semi-bold">Bold Text</Typography.Span>
        </Typography>
      );
      expect(getByText('Bold Text')).toBeTruthy();
    });

    it('renders Span with custom className', () => {
      const { getByText } = render(
        <Typography>
          <Typography.Span className="color-text-brand">Branded</Typography.Span>
        </Typography>
      );
      expect(getByText('Branded')).toBeTruthy();
    });
  });

  describe('Nested Text Support', () => {
    it('renders single nested span within Typography', () => {
      const { getByText } = render(
        <Typography variant="text-md-regular">
          This is <Typography.Span variant="text-md-semi-bold">bold</Typography.Span> text
        </Typography>
      );
      expect(getByText('bold')).toBeTruthy();
    });

    it('renders multiple nested spans within Typography', () => {
      const { getByText } = render(
        <Typography variant="text-md-regular">
          Price:{' '}
          <Typography.Span variant="text-lg-semi-bold">$99</Typography.Span>{' '}
          <Typography.Span variant="text-xs-regular">(was $199)</Typography.Span>
        </Typography>
      );
      expect(getByText('$99')).toBeTruthy();
      expect(getByText('(was $199)')).toBeTruthy();
    });

    it('renders nested spans with different variants', () => {
      const { getByText } = render(
        <Typography variant="text-md-regular">
          <Typography.Span variant="text-lg-semi-bold">Large Bold</Typography.Span>{' '}
          <Typography.Span variant="text-sm-regular">Small Regular</Typography.Span>{' '}
          <Typography.Span variant="text-xs-medium">Extra Small Medium</Typography.Span>
        </Typography>
      );
      expect(getByText('Large Bold')).toBeTruthy();
      expect(getByText('Small Regular')).toBeTruthy();
      expect(getByText('Extra Small Medium')).toBeTruthy();
    });

    it('renders nested spans with different classNames', () => {
      const { getByText } = render(
        <Typography>
          <Typography.Span className="color-text-brand">Brand Color</Typography.Span>{' '}
          <Typography.Span className="color-text-tertiary">Tertiary Color</Typography.Span>
        </Typography>
      );
      expect(getByText('Brand Color')).toBeTruthy();
      expect(getByText('Tertiary Color')).toBeTruthy();
    });
  });

  describe('Complex Nesting', () => {
    it('renders deeply nested spans', () => {
      const { getByText } = render(
        <Typography variant="text-md-regular">
          Outer{' '}
          <Typography.Span variant="text-md-semi-bold">
            Middle <Typography.Span variant="text-lg-semi-bold">Inner</Typography.Span>
          </Typography.Span>
        </Typography>
      );
      expect(getByText('Inner')).toBeTruthy();
    });

    it('renders complex content with mixed text and spans', () => {
      const { getByText } = render(
        <Typography variant="text-md-regular">
          Visit our{' '}
          <Typography.Span variant="text-md-semi-bold" className="color-text-brand">
            website
          </Typography.Span>{' '}
          for more <Typography.Span variant="text-md-medium">information</Typography.Span> and{' '}
          <Typography.Span variant="text-sm-regular" className="color-text-tertiary">
            updates
          </Typography.Span>
        </Typography>
      );
      expect(getByText('website')).toBeTruthy();
      expect(getByText('information')).toBeTruthy();
      expect(getByText('updates')).toBeTruthy();
    });
  });

  describe('Props Passthrough', () => {
    it('passes through TextProps to Span', () => {
      const { getByText } = render(
        <Typography>
          <Typography.Span testID="test-span" accessibilityLabel="Test Label">
            Test
          </Typography.Span>
        </Typography>
      );
      const span = getByText('Test');
      expect(span).toBeTruthy();
      expect(span.props.testID).toBe('test-span');
      expect(span.props.accessibilityLabel).toBe('Test Label');
    });

    it('passes through onPress handler to Span', () => {
      const onPress = jest.fn();
      const { getByText } = render(
        <Typography>
          <Typography.Span onPress={onPress}>Clickable</Typography.Span>
        </Typography>
      );
      const span = getByText('Clickable');
      expect(span.props.onPress).toBe(onPress);
    });

    it('passes through numberOfLines prop to Span', () => {
      const { getByText } = render(
        <Typography>
          <Typography.Span numberOfLines={2}>Truncated Text</Typography.Span>
        </Typography>
      );
      const span = getByText('Truncated Text');
      expect(span.props.numberOfLines).toBe(2);
    });
  });

  describe('Variant Combinations', () => {
    it('renders Span with display variant', () => {
      const { getByText } = render(
        <Typography>
          <Typography.Span variant="display-md-semi-bold">Large Display</Typography.Span>
        </Typography>
      );
      expect(getByText('Large Display')).toBeTruthy();
    });

    it('renders Span with title variant', () => {
      const { getByText } = render(
        <Typography>
          <Typography.Span variant="title-lg-medium">Title Text</Typography.Span>
        </Typography>
      );
      expect(getByText('Title Text')).toBeTruthy();
    });

    it('renders Span with text variant', () => {
      const { getByText } = render(
        <Typography>
          <Typography.Span variant="text-xxs-regular">Tiny Text</Typography.Span>
        </Typography>
      );
      expect(getByText('Tiny Text')).toBeTruthy();
    });

    it('renders parent and child with different variant categories', () => {
      const { getByText } = render(
        <Typography variant="display-md-regular">
          Display with{' '}
          <Typography.Span variant="text-xs-semi-bold">small bold</Typography.Span> text
        </Typography>
      );
      expect(getByText('small bold')).toBeTruthy();
    });
  });

  describe('Edge Cases', () => {
    it('renders Span with empty string children', () => {
      const { UNSAFE_root } = render(
        <Typography>
          <Typography.Span>{''}</Typography.Span>
        </Typography>
      );
      expect(UNSAFE_root).toBeTruthy();
    });

    it('renders Span with numeric children', () => {
      const { getByText } = render(
        <Typography>
          Count: <Typography.Span>{42}</Typography.Span>
        </Typography>
      );
      expect(getByText('42')).toBeTruthy();
    });

    it('renders Span with boolean children (should not render)', () => {
      const { queryByText } = render(
        <Typography>
          <Typography.Span>{true}</Typography.Span>
        </Typography>
      );
      expect(queryByText('true')).toBeNull();
    });

    it('renders multiple Spans consecutively without spacing', () => {
      const { getByText } = render(
        <Typography>
          <Typography.Span>First</Typography.Span>
          <Typography.Span>Second</Typography.Span>
          <Typography.Span>Third</Typography.Span>
        </Typography>
      );
      expect(getByText('First')).toBeTruthy();
      expect(getByText('Second')).toBeTruthy();
      expect(getByText('Third')).toBeTruthy();
    });
  });

  describe('Styling Independence', () => {
    it('applies independent styles to parent and child', () => {
      const { getByText } = render(
        <Typography variant="text-lg-regular" className="color-text-primary">
          <Typography.Span variant="text-sm-semi-bold" className="color-text-brand">
            Child
          </Typography.Span>
        </Typography>
      );
      expect(getByText('Child')).toBeTruthy();
    });

    it('Span inherits parent Text properties by default', () => {
      const { getByText } = render(
        <Typography testID="parent-text">
          <Typography.Span testID="child-span">Span</Typography.Span>
        </Typography>
      );
      expect(getByText('Span').props.testID).toBe('child-span');
    });
  });
});
