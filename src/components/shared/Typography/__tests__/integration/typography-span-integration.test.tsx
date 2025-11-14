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

describe('Typography.Span Integration Tests', () => {
  describe('Real-world Use Cases', () => {
    it('renders a pricing display with mixed formatting', () => {
      const { getByText } = render(
        <Typography variant="text-lg-regular" className="color-text-primary">
          Price:{' '}
          <Typography.Span
            variant="text-lg-semi-bold"
            className="color-text-brand"
          >
            $99.99
          </Typography.Span>{' '}
          <Typography.Span
            variant="text-xs-regular"
            className="color-text-tertiary"
          >
            (was $199.99)
          </Typography.Span>
        </Typography>,
      );

      expect(getByText('$99.99')).toBeTruthy();
      expect(getByText('(was $199.99)')).toBeTruthy();
    });

    it('renders a highlighted search result', () => {
      const searchTerm = 'react';
      const { getByText } = render(
        <Typography variant="text-md-regular">
          Learn{' '}
          <Typography.Span
            variant="text-md-semi-bold"
            className="bg-yellow-200"
          >
            {searchTerm}
          </Typography.Span>{' '}
          native development
        </Typography>,
      );

      expect(getByText(searchTerm)).toBeTruthy();
    });

    it('renders a link-like text within paragraph', () => {
      const { getByText } = render(
        <Typography variant="text-md-regular" className="color-text-primary">
          Visit our{' '}
          <Typography.Span
            variant="text-md-semi-bold"
            className="color-text-brand underline"
            testID="link-span"
          >
            website
          </Typography.Span>{' '}
          for more information
        </Typography>,
      );

      const linkSpan = getByText('website');
      expect(linkSpan).toBeTruthy();
      expect(linkSpan.props.testID).toBe('link-span');
    });

    it('renders a notification with emphasized content', () => {
      const { getByText } = render(
        <Typography variant="text-md-regular" className="color-text-primary">
          You have{' '}
          <Typography.Span
            variant="text-md-semi-bold"
            className="color-text-error"
          >
            3 unread
          </Typography.Span>{' '}
          messages
        </Typography>,
      );

      expect(getByText('3 unread')).toBeTruthy();
    });

    it('renders a status message with icon and text', () => {
      const { getByText } = render(
        <Typography variant="text-sm-regular" className="color-text-success">
          ✓{' '}
          <Typography.Span variant="text-sm-medium">
            Successfully saved
          </Typography.Span>
        </Typography>,
      );

      expect(getByText('Successfully saved')).toBeTruthy();
    });
  });

  describe('Complex Formatting Scenarios', () => {
    it('renders mixed font weights in a sentence', () => {
      const { getByText } = render(
        <Typography variant="text-md-regular">
          <Typography.Span variant="text-md-semi-bold">
            Warning:
          </Typography.Span>{' '}
          This action{' '}
          <Typography.Span variant="text-md-medium">cannot</Typography.Span> be
          undone
        </Typography>,
      );

      expect(getByText('Warning:')).toBeTruthy();
      expect(getByText('cannot')).toBeTruthy();
    });

    it('renders multiple color variations in text', () => {
      const { getByText } = render(
        <Typography variant="text-md-regular">
          <Typography.Span className="color-text-success">
            Success:
          </Typography.Span>{' '}
          5,{' '}
          <Typography.Span className="color-text-error">
            Failed:
          </Typography.Span>{' '}
          2,{' '}
          <Typography.Span className="color-text-warning">
            Pending:
          </Typography.Span>{' '}
          3
        </Typography>,
      );

      expect(getByText('Success:')).toBeTruthy();
      expect(getByText('Failed:')).toBeTruthy();
      expect(getByText('Pending:')).toBeTruthy();
    });

    it('renders formatted user mention within text', () => {
      const username = '@johndoe';
      const { getByText } = render(
        <Typography variant="text-md-regular">
          <Typography.Span
            variant="text-md-semi-bold"
            className="color-text-brand"
          >
            {username}
          </Typography.Span>{' '}
          commented on your post
        </Typography>,
      );

      expect(getByText(username)).toBeTruthy();
    });

    it('renders code snippet inline within text', () => {
      const { getByText } = render(
        <Typography variant="text-md-regular">
          Use the{' '}
          <Typography.Span
            variant="text-sm-medium"
            className="font-mono bg-gray-100 px-1 rounded"
          >
            Typography.Span
          </Typography.Span>{' '}
          component for inline styling
        </Typography>,
      );

      expect(getByText('Typography.Span')).toBeTruthy();
    });
  });

  describe('Accessibility Integration', () => {
    it('maintains accessibility with nested spans', () => {
      const { getByText, getByLabelText } = render(
        <Typography
          variant="text-md-regular"
          accessibilityLabel="Total price with discount"
        >
          Price:{' '}
          <Typography.Span
            variant="text-lg-semi-bold"
            accessibilityLabel="Current price"
          >
            $99
          </Typography.Span>{' '}
          <Typography.Span
            variant="text-xs-regular"
            accessibilityLabel="Original price"
          >
            (was $199)
          </Typography.Span>
        </Typography>,
      );

      expect(getByText('$99')).toBeTruthy();
      expect(getByLabelText('Current price')).toBeTruthy();
      expect(getByLabelText('Original price')).toBeTruthy();
    });

    it('supports role and accessibility props on span', () => {
      const { getByText } = render(
        <Typography>
          <Typography.Span
            accessibilityRole="link"
            accessibilityHint="Double tap to open link"
          >
            Click here
          </Typography.Span>
        </Typography>,
      );

      const span = getByText('Click here');
      expect(span.props.accessibilityRole).toBe('link');
      expect(span.props.accessibilityHint).toBe('Double tap to open link');
    });
  });

  describe('Interactive Spans', () => {
    it('handles onPress on span within typography', () => {
      const handlePress = jest.fn();
      const { getByText } = render(
        <Typography variant="text-md-regular">
          Tap{' '}
          <Typography.Span variant="text-md-semi-bold" onPress={handlePress}>
            here
          </Typography.Span>{' '}
          to continue
        </Typography>,
      );

      const span = getByText('here');
      expect(span.props.onPress).toBe(handlePress);
    });

    it('handles multiple interactive spans', () => {
      const handleEdit = jest.fn();
      const handleDelete = jest.fn();
      const { getByText } = render(
        <Typography variant="text-sm-regular">
          <Typography.Span
            variant="text-sm-semi-bold"
            className="color-text-brand"
            onPress={handleEdit}
          >
            Edit
          </Typography.Span>
          {' • '}
          <Typography.Span
            variant="text-sm-semi-bold"
            className="color-text-error"
            onPress={handleDelete}
          >
            Delete
          </Typography.Span>
        </Typography>,
      );

      expect(getByText('Edit').props.onPress).toBe(handleEdit);
      expect(getByText('Delete').props.onPress).toBe(handleDelete);
    });
  });

  describe('Typography Hierarchy', () => {
    it('renders display text with emphasized span', () => {
      const { getByText } = render(
        <Typography variant="display-md-regular">
          Welcome{' '}
          <Typography.Span
            variant="display-md-semi-bold"
            className="color-text-brand"
          >
            Home
          </Typography.Span>
        </Typography>,
      );

      expect(getByText('Home')).toBeTruthy();
    });

    it('renders title with subtitle variation', () => {
      const { getByText } = render(
        <Typography variant="title-lg-semi-bold">
          Dashboard
          <Typography.Span
            variant="text-sm-regular"
            className="color-text-tertiary"
          >
            {' '}
            (Updated 2 mins ago)
          </Typography.Span>
        </Typography>,
      );

      expect(getByText('(Updated 2 mins ago)')).toBeTruthy();
    });
  });

  describe('Performance and Edge Cases', () => {
    it('renders many nested spans efficiently', () => {
      const { getByText } = render(
        <Typography variant="text-md-regular">
          {Array.from({ length: 10 }, (_, i) => (
            <Typography.Span key={i} variant="text-md-semi-bold">
              {`Item ${i}${i < 9 ? ', ' : ''}`}
            </Typography.Span>
          ))}
        </Typography>,
      );

      expect(getByText('Item 0, ')).toBeTruthy();
      expect(getByText('Item 9')).toBeTruthy();
    });

    it('handles conditional rendering within spans', () => {
      const showDiscount = true;
      const { getByText } = render(
        <Typography variant="text-md-regular">
          Price: $99
          {showDiscount && (
            <Typography.Span
              variant="text-xs-regular"
              className="color-text-success"
            >
              {' '}
              Save 50%!
            </Typography.Span>
          )}
        </Typography>,
      );

      expect(getByText('Save 50%!')).toBeTruthy();
    });

    it('renders with null or undefined spans gracefully', () => {
      const { getByText } = render(
        <Typography variant="text-md-regular">
          Price: $99
          {null}
          {undefined}
          <Typography.Span variant="text-xs-regular"> (Final)</Typography.Span>
        </Typography>,
      );

      expect(getByText('(Final)')).toBeTruthy();
    });
  });
});
