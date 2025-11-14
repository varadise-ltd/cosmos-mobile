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

describe('Typography Component - Basic Rendering', () => {
  it('renders with default props', () => {
    const { getByText } = render(<Typography>Hello World</Typography>);
    expect(getByText('Hello World')).toBeTruthy();
  });

  it('renders with default variant when no variant is specified', () => {
    const { getByText } = render(<Typography>Default Text</Typography>);
    const textElement = getByText('Default Text');
    expect(textElement).toBeTruthy();
  });

  it('renders children correctly', () => {
    const testContent = 'Test Content';
    const { getByText } = render(<Typography>{testContent}</Typography>);
    expect(getByText(testContent)).toBeTruthy();
  });

  it('renders with custom className', () => {
    const { getByText } = render(
      <Typography className="custom-class">Custom Styled</Typography>,
    );
    expect(getByText('Custom Styled')).toBeTruthy();
  });
});
