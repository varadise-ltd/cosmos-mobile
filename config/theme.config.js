/**
 * Theme Configuration
 * This file maps semantic color tokens to Tailwind for use with dark mode
 */

module.exports = {
  border: {
    bold: 'var(--color-border-bold)',
    bolder: 'var(--color-border-bolder)',
    default: 'var(--color-border-default)',
    disabled: 'var(--color-border-disabled)',
    hidden: 'var(--color-border-hidden)',
    inverse: 'var(--color-border-inverse)',
    selected: 'var(--color-border-selected)',
    white: 'var(--color-border-white)',
  },
  
  icon: {
    bold: 'var(--color-icon-bold)',
    default: 'var(--color-icon-default)',
    disabled: 'var(--color-icon-disabled)',
    subtle: 'var(--color-icon-subtle)',
  },
  
  surface: {
    'bg-primary': 'var(--color-surface-bg-primary)',
    'bg-secondary': 'var(--color-surface-bg-secondary)',
    'bg-tertiary': 'var(--color-surface-bg-tertiary)',
  },
  
  text: {
    body: 'var(--color-text-body)',
    caption: 'var(--color-text-caption)',
    disabled: 'var(--color-text-disabled)',
    title: 'var(--color-text-title)',
  },
};
