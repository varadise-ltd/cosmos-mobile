/**
 * Tailwind Theme - Components
 * Maps CSS custom properties for component-specific colors to Tailwind utilities
 */

module.exports = {
  // Avatar
  avatar: {
    group: 'var(--color-avatar-group)',
    organization: 'var(--color-avatar-organization)',
    project: 'var(--color-avatar-project)',
    user: {
      1: 'var(--color-avatar-user-1)',
      2: 'var(--color-avatar-user-2)',
      3: 'var(--color-avatar-user-3)',
      4: 'var(--color-avatar-user-4)',
      5: 'var(--color-avatar-user-5)',
      6: 'var(--color-avatar-user-6)',
      7: 'var(--color-avatar-user-7)',
      8: 'var(--color-avatar-user-8)',
      9: 'var(--color-avatar-user-9)',
      10: 'var(--color-avatar-user-10)',
      11: 'var(--color-avatar-user-11)',
    },
  },

  // Banner
  banner: {
    critical: 'var(--color-banner-critical)',
    default: 'var(--color-banner-default)',
    info: 'var(--color-banner-info)',
    success: 'var(--color-banner-success)',
    warning: 'var(--color-banner-warning)',
  },

  // Button - Critical
  'button-critical': {
    icon: {
      default: 'var(--color-button-critical-icon-default)',
      'default-ghost': 'var(--color-button-critical-icon-default-ghost)',
      disabled: 'var(--color-button-critical-icon-disabled)',
    },
    surface: {
      default: 'var(--color-button-critical-surface-default)',
      disabled: 'var(--color-button-critical-surface-disabled)',
      subtle: 'var(--color-button-critical-surface-subtle)',
    },
    text: {
      default: 'var(--color-button-critical-text-default)',
      'default-ghost': 'var(--color-button-critical-text-default-ghost)',
      disabled: 'var(--color-button-critical-text-disabled)',
    },
  },

  // Button - Ghost
  'button-ghost': {
    icon: {
      bold: 'var(--color-button-ghost-icon-bold)',
      default: 'var(--color-button-ghost-icon-default)',
      disabled: 'var(--color-button-ghost-icon-disabled)',
    },
    text: {
      default: 'var(--color-button-ghost-text-default)',
      disabled: 'var(--color-button-ghost-text-disabled)',
    },
  },

  // Button - Glass
  'button-glass': {
    icon: {
      default: 'var(--color-button-glass-icon-default)',
      disabled: 'var(--color-button-glass-icon-disabled)',
      'disabled-on-tint': 'var(--color-button-glass-icon-disabled-on-tint)',
      'on-tint': 'var(--color-button-glass-icon-on-tint)',
      subtle: 'var(--color-button-glass-icon-subtle)',
      tint: 'var(--color-button-glass-icon-tint)',
    },
    surface: {
      selected: 'var(--color-button-glass-surface-selected)',
    },
    text: {
      default: 'var(--color-button-glass-text-default)',
      disabled: 'var(--color-button-glass-text-disabled)',
      'disabled-on-tint': 'var(--color-button-glass-text-disabled-on-tint)',
      'on-tint': 'var(--color-button-glass-text-on-tint)',
      subtle: 'var(--color-button-glass-text-subtle)',
      tint: 'var(--color-button-glass-text-tint)',
    },
  },

  // Button - Outline
  'button-outline': {
    border: {
      default: 'var(--color-button-outline-border-default)',
      disabled: 'var(--color-button-outline-border-disabled)',
    },
    icon: {
      bold: 'var(--color-button-outline-icon-bold)',
      default: 'var(--color-button-outline-icon-default)',
      disabled: 'var(--color-button-outline-icon-disabled)',
    },
    surface: {
      default: 'var(--color-button-outline-surface-default)',
    },
    text: {
      default: 'var(--color-button-outline-text-default)',
      disabled: 'var(--color-button-outline-text-disabled)',
    },
  },

  // Button - Primary
  'button-primary': {
    border: 'var(--color-button-primary-border)',
    icon: {
      default: 'var(--color-button-primary-icon-default)',
      disabled: 'var(--color-button-primary-icon-disabled)',
    },
    surface: {
      default: 'var(--color-button-primary-surface-default)',
      disabled: 'var(--color-button-primary-surface-disabled)',
    },
    text: {
      default: 'var(--color-button-primary-text-default)',
      disabled: 'var(--color-button-primary-text-disabled)',
    },
  },

  // Button - Secondary
  'button-secondary': {
    icon: {
      bold: 'var(--color-button-secondary-icon-bold)',
      default: 'var(--color-button-secondary-icon-default)',
      disabled: 'var(--color-button-secondary-icon-disabled)',
    },
    surface: {
      default: 'var(--color-button-secondary-surface-default)',
      disabled: 'var(--color-button-secondary-surface-disabled)',
    },
    text: {
      default: 'var(--color-button-secondary-text-default)',
      disabled: 'var(--color-button-secondary-text-disabled)',
    },
  },

  // Button - Text Black
  'button-text-black': {
    icon: {
      default: 'var(--color-button-text-black-icon-default)',
      disabled: 'var(--color-button-text-black-icon-disabled)',
    },
    text: {
      default: 'var(--color-button-text-black-text-default)',
      disabled: 'var(--color-button-text-black-text-disabled)',
    },
  },

  // Button - Text Critical
  'button-text-critical': {
    icon: {
      default: 'var(--color-button-text-critical-icon-default)',
      disabled: 'var(--color-button-text-critical-icon-disabled)',
    },
    text: {
      default: 'var(--color-button-text-critical-text-default)',
      disabled: 'var(--color-button-text-critical-text-disabled)',
    },
  },

  // Button - Text Default
  'button-text-default': {
    icon: {
      default: 'var(--color-button-text-default-icon-default)',
      disabled: 'var(--color-button-text-default-icon-disabled)',
      subtle: 'var(--color-button-text-default-icon-subtle)',
    },
    text: {
      default: 'var(--color-button-text-default-text-default)',
      disabled: 'var(--color-button-text-default-text-disabled)',
      subtle: 'var(--color-button-text-default-text-subtle)',
    },
  },

  // Button - Text Link
  'button-text-link': {
    icon: {
      default: 'var(--color-button-text-link-icon-default)',
      disabled: 'var(--color-button-text-link-icon-disabled)',
    },
    text: {
      default: 'var(--color-button-text-link-text-default)',
      disabled: 'var(--color-button-text-link-text-disabled)',
    },
  },

  // Button - Text White
  'button-text-white': {
    icon: {
      default: 'var(--color-button-text-white-icon-default)',
      disabled: 'var(--color-button-text-white-icon-disabled)',
    },
    text: {
      default: 'var(--color-button-text-white-text-default)',
      disabled: 'var(--color-button-text-white-text-disabled)',
    },
  },

  // Chips
  chips: {
    border: {
      default: 'var(--color-chips-border-default)',
      disabled: 'var(--color-chips-border-disabled)',
    },
    icon: {
      default: 'var(--color-chips-icon-default)',
      disabled: 'var(--color-chips-icon-disabled)',
      selected: 'var(--color-chips-icon-selected)',
    },
    surface: {
      selected: 'var(--color-chips-surface-selected)',
    },
    text: {
      default: 'var(--color-chips-text-default)',
      disabled: 'var(--color-chips-text-disabled)',
      selected: 'var(--color-chips-text-selected)',
    },
  },

  // Input
  input: {
    border: {
      DEFAULT: 'var(--color-input-border)',
      bold: 'var(--color-input-border-bold)',
      critical: 'var(--color-input-border-critical)',
      disabled: 'var(--color-input-border-disabled)',
      focused: 'var(--color-input-border-focused)',
      hovered: 'var(--color-input-border-hovered)',
      selected: 'var(--color-input-border-selected)',
      'selected-light': 'var(--color-input-border-selected-light)',
    },
    surface: {
      DEFAULT: 'var(--color-input-surface)',
      bold: 'var(--color-input-surface-bold)',
      disabled: 'var(--color-input-surface-disabled)',
      'disabled-bold': 'var(--color-input-surface-disabled-bold)',
      hovered: 'var(--color-input-surface-hovered)',
      selected: 'var(--color-input-surface-selected)',
      'selected-brand': 'var(--color-input-surface-selected-brand)',
    },
  },

  // Segmented Control
  'segmented-control': {
    background: {
      DEFAULT: 'var(--color-segmented-control-background)',
      mobile: 'var(--color-segmented-control-background-mobile)',
    },
    foreground: {
      hover: 'var(--color-segmented-control-foreground-hover)',
      selected: 'var(--color-segmented-control-foreground-selected)',
    },
  },
};
