const cdkPrefix = ['cdk', '-'].join('');
const cdkDefaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  // Strange behaviour with JIT enabled
  // TODO : resolve issues with JIT compilation -> rollback to default
  // mode: 'jit',
  prefix: cdkPrefix,
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['./src/**/*.{html,ts,tsx,vue}', './public/**/*.html'],
  },
  future: {
    standardFontWeights: true,
    defaultLineHeights: true,
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },

  darkMode: 'media',
  theme: {
    screens: {
      tablet: '640px',
      laptop: '1024px',
      desktop: '1280px',
    },
    space: {
      xs: '0.5rem',
      sm: '1rem',
      md: '1.5rem',
      lg: '2rem',
      xl: '2.5rem',
    },
    fontFamily: {
      sans: ['Montserrat', ...cdkDefaultTheme.fontFamily.sans],
    },
    borderRadius: {
      none: '0',
      sm: '0.125rem',
      md: '0.375rem',
      lg: '0.5rem',
      full: '9999px',
      DEFAULT: '0.25rem',
    },
    extend: {
      colors: {
        black: {
          50: '#15161E',
          DEFAULT: 'var(--cdk-palette-black)',
        },
        white: {
          50: '#fff',
          DEFAULT: 'var(--cdk-palette-white)',
        },
        purple: {
          50: '#4F00FF',
          DEFAULT: 'var(--cdk-palette-purple)',
        },
        violet: {
          50: '#6B6E8C',
          DEFAULT: 'var(--cdk-palette-violet)',
        },
        gray: {
          50: '#F9F9FB',
          DEFAULT: 'var(--cdk-palette-gray)',
        },
      },
    },

    fontSize: {
      xs: '14px',
      sm: '1rem',
      md: '18px',
      lg: '24px',
      xl: '1.75rem',
    },

    container: {
      center: true,
      padding: '1.5rem',
    },
  },
  variantOrder: [
    'first',
    'last',
    'odd',
    'even',
    'visited',
    'checked',
    'group-hover',
    'group-focus',
    'focus-within',
    'hover',
    'focus',
    'focus-visible',
    'active',
    'group-disabled',
    'disabled',
  ],
  variants: {
    extend: {
      borderColor: ['focus-visible'],
      opacity: ['responsive', 'hover'],
    },
  },
  plugins: [
    require('@tailwindcss/jit'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('tailwindcss-children'),
    require('tailwindcss-interaction-variants'),
  ],
};
