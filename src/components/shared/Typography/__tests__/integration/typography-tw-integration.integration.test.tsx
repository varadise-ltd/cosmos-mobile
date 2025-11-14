import { render } from '@testing-library/react-native';
import { Text } from 'react-native';
import Typography from '../../Typography';

// This integration test verifies that the Typography component works correctly with real tailwind-variants
// We're just testing that tv() generates the correct className strings, not the rendering details
describe('Typography Component - tailwind-variants Integration Tests', () => {
  it('renders Typography with display-md-regular variant and applies correct classes', () => {
    const { UNSAFE_root } = render(
      <Typography variant="display-md-regular">Display Text</Typography>,
    );
    // Find either Text component or web rendering (span/div)
    const element = UNSAFE_root.findByType(Text);

    expect(element).toBeTruthy();
    expect(element.props.className).toContain('text-size-72');
    expect(element.props.className).toContain('leading-size-90');
    expect(element.props.className).toContain('font-normal');
    expect(element.props.className).toContain('tracking-tracking-tight-7xl');
  });

  it('renders Typography with title-lg-medium variant and applies correct classes', () => {
    const { UNSAFE_root } = render(
      <Typography variant="title-lg-medium">Title Text</Typography>,
    );
    const element = UNSAFE_root.findByType(Text);

    expect(element).toBeTruthy();
    expect(element.props.className).toContain('text-size-32');
    expect(element.props.className).toContain('leading-size-40');
    expect(element.props.className).toContain('font-medium');
    expect(element.props.className).toContain('tracking-tracking-tight-2xl');
  });

  it('renders Typography with text-md-regular (default) and applies correct classes', () => {
    const { UNSAFE_root } = render(<Typography>Default Text</Typography>);
    const element = UNSAFE_root.findByType(Text);

    expect(element).toBeTruthy();
    expect(element.props.className).toContain('text-size-16');
    expect(element.props.className).toContain('leading-size-24');
    expect(element.props.className).toContain('font-normal');
  });

  it('renders Typography with custom className merged with variant', () => {
    const { UNSAFE_root } = render(
      <Typography variant="text-lg-semi-bold" className="underline italic">
        Custom Styled
      </Typography>,
    );
    const element = UNSAFE_root.findByType(Text);

    expect(element).toBeTruthy();
    // Variant classes should be applied
    expect(element.props.className).toContain('leading-size-24');
    expect(element.props.className).toContain('font-semibold');
    // Custom classes (non-conflicting)
    expect(element.props.className).toContain('underline');
    expect(element.props.className).toContain('italic');
  });

  it('renders all display variants correctly', () => {
    const variants = [
      'display-md-regular',
      'display-md-medium',
      'display-md-semi-bold',
      'display-sm-regular',
      'display-sm-medium',
      'display-sm-semi-bold',
      'display-xs-regular',
      'display-xs-medium',
      'display-xs-semi-bold',
    ] as const;

    variants.forEach((variant) => {
      const { UNSAFE_root } = render(
        <Typography variant={variant}>{variant}</Typography>,
      );
      const element = UNSAFE_root.findByType(Text);
      expect(element).toBeTruthy();
      expect(element.props.className).toBeTruthy();
    });
  });

  it('renders all title variants correctly', () => {
    const variants = [
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
    ] as const;

    variants.forEach((variant) => {
      const { UNSAFE_root } = render(
        <Typography variant={variant}>{variant}</Typography>,
      );
      const element = UNSAFE_root.findByType(Text);
      expect(element).toBeTruthy();
      expect(element.props.className).toBeTruthy();
    });
  });

  it('renders all text variants correctly', () => {
    const variants = [
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
    ] as const;

    variants.forEach((variant) => {
      const { UNSAFE_root } = render(
        <Typography variant={variant}>{variant}</Typography>,
      );
      const element = UNSAFE_root.findByType(Text);
      expect(element).toBeTruthy();
      expect(element.props.className).toBeTruthy();
    });
  });

  it('applies font-normal to all regular variants', () => {
    const { UNSAFE_root: root1 } = render(
      <Typography variant="display-md-regular">Display</Typography>,
    );
    const { UNSAFE_root: root2 } = render(
      <Typography variant="title-lg-regular">Title</Typography>,
    );
    const { UNSAFE_root: root3 } = render(
      <Typography variant="text-md-regular">Text</Typography>,
    );

    expect(root1.findByType(Text).props.className).toContain('font-normal');
    expect(root2.findByType(Text).props.className).toContain('font-normal');
    expect(root3.findByType(Text).props.className).toContain('font-normal');
  });

  it('applies font-medium to all medium variants', () => {
    const { UNSAFE_root: root1 } = render(
      <Typography variant="display-md-medium">Display</Typography>,
    );
    const { UNSAFE_root: root2 } = render(
      <Typography variant="title-lg-medium">Title</Typography>,
    );
    const { UNSAFE_root: root3 } = render(
      <Typography variant="text-md-medium">Text</Typography>,
    );

    expect(root1.findByType(Text).props.className).toContain('font-medium');
    expect(root2.findByType(Text).props.className).toContain('font-medium');
    expect(root3.findByType(Text).props.className).toContain('font-medium');
  });

  it('applies font-semibold to all semi-bold variants', () => {
    const { UNSAFE_root: root1 } = render(
      <Typography variant="display-md-semi-bold">Display</Typography>,
    );
    const { UNSAFE_root: root2 } = render(
      <Typography variant="title-lg-semi-bold">Title</Typography>,
    );
    const { UNSAFE_root: root3 } = render(
      <Typography variant="text-md-semi-bold">Text</Typography>,
    );

    expect(root1.findByType(Text).props.className).toContain('font-semibold');
    expect(root2.findByType(Text).props.className).toContain('font-semibold');
    expect(root3.findByType(Text).props.className).toContain('font-semibold');
  });

  it('merges custom className that overrides variant properties', () => {
    const { UNSAFE_root } = render(
      <Typography variant="text-md-regular" className="font-bold">
        Bold Override
      </Typography>,
    );
    const element = UNSAFE_root.findByType(Text);

    // Custom class should be present and override font-normal from variant
    expect(element.props.className).toContain('font-bold');
  });

  it('handles nested Typography.Span components', () => {
    const { UNSAFE_root } = render(
      <Typography variant="text-md-regular">
        Normal <Typography.Span variant="text-md-semi-bold">bold</Typography.Span> text
      </Typography>,
    );

    // Find all Text elements, the second one should be the Span
    const textElements = UNSAFE_root.findAllByType(Text);
    expect(textElements.length).toBeGreaterThanOrEqual(2);
    
    // The span element should have font-semibold
    const spanElement = textElements.find(el => 
      el.props.className && el.props.className.includes('font-semibold')
    );
    expect(spanElement).toBeTruthy();
    expect(spanElement!.props.className).toContain('font-semibold');
  });
});
