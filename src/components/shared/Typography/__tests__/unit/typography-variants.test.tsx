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

describe('Typography Component - Variants', () => {
  describe('Display variants', () => {
    it('renders display-md-regular variant', () => {
      const { getByText } = render(
        <Typography variant="display-md-regular">
          Display MD Regular
        </Typography>,
      );
      expect(getByText('Display MD Regular')).toBeTruthy();
    });

    it('renders display-md-medium variant', () => {
      const { getByText } = render(
        <Typography variant="display-md-medium">Display MD Medium</Typography>,
      );
      expect(getByText('Display MD Medium')).toBeTruthy();
    });

    it('renders display-md-semi-bold variant', () => {
      const { getByText } = render(
        <Typography variant="display-md-semi-bold">
          Display MD Semi Bold
        </Typography>,
      );
      expect(getByText('Display MD Semi Bold')).toBeTruthy();
    });

    it('renders display-sm-regular variant', () => {
      const { getByText } = render(
        <Typography variant="display-sm-regular">
          Display SM Regular
        </Typography>,
      );
      expect(getByText('Display SM Regular')).toBeTruthy();
    });

    it('renders display-sm-medium variant', () => {
      const { getByText } = render(
        <Typography variant="display-sm-medium">Display SM Medium</Typography>,
      );
      expect(getByText('Display SM Medium')).toBeTruthy();
    });

    it('renders display-sm-semi-bold variant', () => {
      const { getByText } = render(
        <Typography variant="display-sm-semi-bold">
          Display SM Semi Bold
        </Typography>,
      );
      expect(getByText('Display SM Semi Bold')).toBeTruthy();
    });

    it('renders display-xs-regular variant', () => {
      const { getByText } = render(
        <Typography variant="display-xs-regular">
          Display XS Regular
        </Typography>,
      );
      expect(getByText('Display XS Regular')).toBeTruthy();
    });

    it('renders display-xs-medium variant', () => {
      const { getByText } = render(
        <Typography variant="display-xs-medium">Display XS Medium</Typography>,
      );
      expect(getByText('Display XS Medium')).toBeTruthy();
    });

    it('renders display-xs-semi-bold variant', () => {
      const { getByText } = render(
        <Typography variant="display-xs-semi-bold">
          Display XS Semi Bold
        </Typography>,
      );
      expect(getByText('Display XS Semi Bold')).toBeTruthy();
    });
  });

  describe('Title variants', () => {
    it('renders title-xxl-regular variant', () => {
      const { getByText } = render(
        <Typography variant="title-xxl-regular">Title XXL Regular</Typography>,
      );
      expect(getByText('Title XXL Regular')).toBeTruthy();
    });

    it('renders title-xxl-medium variant', () => {
      const { getByText } = render(
        <Typography variant="title-xxl-medium">Title XXL Medium</Typography>,
      );
      expect(getByText('Title XXL Medium')).toBeTruthy();
    });

    it('renders title-xxl-semi-bold variant', () => {
      const { getByText } = render(
        <Typography variant="title-xxl-semi-bold">
          Title XXL Semi Bold
        </Typography>,
      );
      expect(getByText('Title XXL Semi Bold')).toBeTruthy();
    });

    it('renders title-xl-regular variant', () => {
      const { getByText } = render(
        <Typography variant="title-xl-regular">Title XL Regular</Typography>,
      );
      expect(getByText('Title XL Regular')).toBeTruthy();
    });

    it('renders title-xl-medium variant', () => {
      const { getByText } = render(
        <Typography variant="title-xl-medium">Title XL Medium</Typography>,
      );
      expect(getByText('Title XL Medium')).toBeTruthy();
    });

    it('renders title-xl-semi-bold variant', () => {
      const { getByText } = render(
        <Typography variant="title-xl-semi-bold">
          Title XL Semi Bold
        </Typography>,
      );
      expect(getByText('Title XL Semi Bold')).toBeTruthy();
    });

    it('renders title-lg-regular variant', () => {
      const { getByText } = render(
        <Typography variant="title-lg-regular">Title LG Regular</Typography>,
      );
      expect(getByText('Title LG Regular')).toBeTruthy();
    });

    it('renders title-lg-medium variant', () => {
      const { getByText } = render(
        <Typography variant="title-lg-medium">Title LG Medium</Typography>,
      );
      expect(getByText('Title LG Medium')).toBeTruthy();
    });

    it('renders title-lg-semi-bold variant', () => {
      const { getByText } = render(
        <Typography variant="title-lg-semi-bold">
          Title LG Semi Bold
        </Typography>,
      );
      expect(getByText('Title LG Semi Bold')).toBeTruthy();
    });

    it('renders title-md-regular variant', () => {
      const { getByText } = render(
        <Typography variant="title-md-regular">Title MD Regular</Typography>,
      );
      expect(getByText('Title MD Regular')).toBeTruthy();
    });

    it('renders title-md-medium variant', () => {
      const { getByText } = render(
        <Typography variant="title-md-medium">Title MD Medium</Typography>,
      );
      expect(getByText('Title MD Medium')).toBeTruthy();
    });

    it('renders title-md-semi-bold variant', () => {
      const { getByText } = render(
        <Typography variant="title-md-semi-bold">
          Title MD Semi Bold
        </Typography>,
      );
      expect(getByText('Title MD Semi Bold')).toBeTruthy();
    });

    it('renders title-sm-regular variant', () => {
      const { getByText } = render(
        <Typography variant="title-sm-regular">Title SM Regular</Typography>,
      );
      expect(getByText('Title SM Regular')).toBeTruthy();
    });

    it('renders title-sm-medium variant', () => {
      const { getByText } = render(
        <Typography variant="title-sm-medium">Title SM Medium</Typography>,
      );
      expect(getByText('Title SM Medium')).toBeTruthy();
    });

    it('renders title-sm-semi-bold variant', () => {
      const { getByText } = render(
        <Typography variant="title-sm-semi-bold">
          Title SM Semi Bold
        </Typography>,
      );
      expect(getByText('Title SM Semi Bold')).toBeTruthy();
    });

    it('renders title-xs-regular variant', () => {
      const { getByText } = render(
        <Typography variant="title-xs-regular">Title XS Regular</Typography>,
      );
      expect(getByText('Title XS Regular')).toBeTruthy();
    });

    it('renders title-xs-medium variant', () => {
      const { getByText } = render(
        <Typography variant="title-xs-medium">Title XS Medium</Typography>,
      );
      expect(getByText('Title XS Medium')).toBeTruthy();
    });

    it('renders title-xs-semi-bold variant', () => {
      const { getByText } = render(
        <Typography variant="title-xs-semi-bold">
          Title XS Semi Bold
        </Typography>,
      );
      expect(getByText('Title XS Semi Bold')).toBeTruthy();
    });
  });

  describe('Text variants', () => {
    it('renders text-lg-regular variant', () => {
      const { getByText } = render(
        <Typography variant="text-lg-regular">Text LG Regular</Typography>,
      );
      expect(getByText('Text LG Regular')).toBeTruthy();
    });

    it('renders text-lg-medium variant', () => {
      const { getByText } = render(
        <Typography variant="text-lg-medium">Text LG Medium</Typography>,
      );
      expect(getByText('Text LG Medium')).toBeTruthy();
    });

    it('renders text-lg-semi-bold variant', () => {
      const { getByText } = render(
        <Typography variant="text-lg-semi-bold">Text LG Semi Bold</Typography>,
      );
      expect(getByText('Text LG Semi Bold')).toBeTruthy();
    });

    it('renders text-md-regular variant', () => {
      const { getByText } = render(
        <Typography variant="text-md-regular">Text MD Regular</Typography>,
      );
      expect(getByText('Text MD Regular')).toBeTruthy();
    });

    it('renders text-md-medium variant', () => {
      const { getByText } = render(
        <Typography variant="text-md-medium">Text MD Medium</Typography>,
      );
      expect(getByText('Text MD Medium')).toBeTruthy();
    });

    it('renders text-md-semi-bold variant', () => {
      const { getByText } = render(
        <Typography variant="text-md-semi-bold">Text MD Semi Bold</Typography>,
      );
      expect(getByText('Text MD Semi Bold')).toBeTruthy();
    });

    it('renders text-ssm-regular variant', () => {
      const { getByText } = render(
        <Typography variant="text-ssm-regular">Text SSM Regular</Typography>,
      );
      expect(getByText('Text SSM Regular')).toBeTruthy();
    });

    it('renders text-ssm-medium variant', () => {
      const { getByText } = render(
        <Typography variant="text-ssm-medium">Text SSM Medium</Typography>,
      );
      expect(getByText('Text SSM Medium')).toBeTruthy();
    });

    it('renders text-ssm-semi-bold variant', () => {
      const { getByText } = render(
        <Typography variant="text-ssm-semi-bold">
          Text SSM Semi Bold
        </Typography>,
      );
      expect(getByText('Text SSM Semi Bold')).toBeTruthy();
    });

    it('renders text-sm-regular variant', () => {
      const { getByText } = render(
        <Typography variant="text-sm-regular">Text SM Regular</Typography>,
      );
      expect(getByText('Text SM Regular')).toBeTruthy();
    });

    it('renders text-sm-medium variant', () => {
      const { getByText } = render(
        <Typography variant="text-sm-medium">Text SM Medium</Typography>,
      );
      expect(getByText('Text SM Medium')).toBeTruthy();
    });

    it('renders text-sm-semi-bold variant', () => {
      const { getByText } = render(
        <Typography variant="text-sm-semi-bold">Text SM Semi Bold</Typography>,
      );
      expect(getByText('Text SM Semi Bold')).toBeTruthy();
    });

    it('renders text-xs-regular variant', () => {
      const { getByText } = render(
        <Typography variant="text-xs-regular">Text XS Regular</Typography>,
      );
      expect(getByText('Text XS Regular')).toBeTruthy();
    });

    it('renders text-xs-medium variant', () => {
      const { getByText } = render(
        <Typography variant="text-xs-medium">Text XS Medium</Typography>,
      );
      expect(getByText('Text XS Medium')).toBeTruthy();
    });

    it('renders text-xs-semi-bold variant', () => {
      const { getByText } = render(
        <Typography variant="text-xs-semi-bold">Text XS Semi Bold</Typography>,
      );
      expect(getByText('Text XS Semi Bold')).toBeTruthy();
    });

    it('renders text-xxs-regular variant', () => {
      const { getByText } = render(
        <Typography variant="text-xxs-regular">Text XXS Regular</Typography>,
      );
      expect(getByText('Text XXS Regular')).toBeTruthy();
    });

    it('renders text-xxs-medium variant', () => {
      const { getByText } = render(
        <Typography variant="text-xxs-medium">Text XXS Medium</Typography>,
      );
      expect(getByText('Text XXS Medium')).toBeTruthy();
    });

    it('renders text-xxs-semi-bold variant', () => {
      const { getByText } = render(
        <Typography variant="text-xxs-semi-bold">
          Text XXS Semi Bold
        </Typography>,
      );
      expect(getByText('Text XXS Semi Bold')).toBeTruthy();
    });
  });
});
