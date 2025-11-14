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

describe('Typography Component - Children', () => {
  it('renders string children', () => {
    const { getByText } = render(<Typography>Simple string</Typography>);
    expect(getByText('Simple string')).toBeTruthy();
  });

  it('renders number children', () => {
    const { getByText } = render(<Typography>{42}</Typography>);
    expect(getByText('42')).toBeTruthy();
  });

  it('renders nested Text components', () => {
    const { getByText } = render(
      <Typography>
        Parent text <Typography>nested text</Typography>
      </Typography>,
    );
    expect(getByText('nested text')).toBeTruthy();
  });

  it('renders multiple children', () => {
    const { getByText } = render(
      <Typography>
        First part{' '}
        <Typography variant="text-md-semi-bold">bold part</Typography> last part
      </Typography>,
    );
    expect(getByText('bold part')).toBeTruthy();
  });

  it('renders empty string children', () => {
    const { getByTestId } = render(
      <Typography testID="empty-text">{''}</Typography>,
    );
    expect(getByTestId('empty-text')).toBeTruthy();
  });

  it('renders with expression children', () => {
    const value = 'dynamic value';
    const { getByText } = render(<Typography>{value}</Typography>);
    expect(getByText('dynamic value')).toBeTruthy();
  });

  it('renders with conditional children', () => {
    const showText = true;
    const { getByText } = render(
      <Typography>{showText ? 'Visible' : 'Hidden'}</Typography>,
    );
    expect(getByText('Visible')).toBeTruthy();
  });

  it('renders with template literals', () => {
    const name = 'World';
    const { getByText } = render(<Typography>{`Hello ${name}`}</Typography>);
    expect(getByText('Hello World')).toBeTruthy();
  });
});
