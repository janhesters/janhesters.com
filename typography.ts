import type { PluginUtils } from 'tailwindcss/types/config';

export function typographyStyles({ theme }: PluginUtils) {
  return {
    invert: {
      css: {
        '--tw-prose-a-text-decoration-thickness':
          'var(--tw-prose-invert-a-text-decoration-thickness)',
        '--tw-prose-block-quote-box-shadow':
          'var(--tw-prose-invert-block-quote-box-shadow)',
        '--tw-prose-b-font-weight': 'var(--tw-prose-invert-b-font-weight)',
        '--tw-prose-p-font-weight': 'var(--tw-prose-invert-p-font-weight)',
        '--tw-prose-pre-bg': 'var(--tw-prose-invert-pre-bg)',
        '--tw-prose-pre-border': 'var(--tw-prose-invert-pre-border)',
        '--tw-prose-table-border': 'var(--tw-prose-invert-table-border)',
      },
    },
    DEFAULT: {
      css: {
        '--tw-prose-block-quote-box-shadow':
          'inset 3px 0 0 0 hsl(var(--foreground))',
        '--tw-prose-b-font-weight': theme('fontWeight.semibold'),
        '--tw-prose-p-font-weight': theme('fontWeight.medium'),
        '--tw-prose-pre-border': 'hsl(var(--border))',
        '--tw-prose-table-border': 'hsl(var(--border))',
        '--tw-prose-a-text-decoration-thickness': '2px',

        '--tw-prose-invert-block-quote-box-shadow':
          'inset 2px 0 0 0 hsl(var(--foreground))',
        '--tw-prose-invert-b-font-weight': theme('fontWeight.medium'),
        '--tw-prose-invert-p-font-weight': theme('fontWeight.light'),
        '--tw-prose-invert-pre-border': 'hsl(var(--border))',
        '--tw-prose-invert-table-border': 'hsl(var(--border))',
        '--tw-prose-invert-a-text-decoration-thickness': '1px',

        // Base
        p: {
          fontSize: theme('fontSize.xl')[0],
          fontFamily:
            'source-serif-pro, Georgia, Cambria, "Times New Roman", Times, serif',
          fontWeight: 'var(--tw-prose-p-font-weight)',
          lineHeight: theme('lineHeight.8'),
        },

        // Headings
        h2: {
          fontSize: theme('fontSize.4xl')[0],
          marginBottom: theme('spacing.8'),
        },
        h3: {
          fontSize: theme('fontSize.2xl')[0],
          marginTop: theme('spacing.11'),
          lineHeight: theme('lineHeight.7'),
        },
        h4: {
          lineHeight: theme('lineHeight.6'),
          fontSize: theme('fontSize.xl')[0],
        },

        // Images
        img: {
          border: '1px solid',
          borderColor: 'var(--tw-prose-pre-border)',
          borderRadius: theme('borderRadius.2xl'),
          marginLeft: 'auto',
          marginRight: 'auto',
        },

        // Inline elements
        a: {
          fontWeight: 'var(--tw-prose-p-font-weight)',
          // Change the underline width.
          textDecorationThickness:
            'var(--tw-prose-a-text-decoration-thickness)',
        },
        'a:hover': {
          color: 'hsl(var(--primary))',
        },
        strong: {
          fontWeight: 'var(--tw-prose-b-font-weight)',
        },
        code: {
          backgroundColor: 'rgb(var(--primary-opaque))',
          borderRadius: theme('borderRadius.md'),
          fontWeight: theme('fontWeight.medium'),
          paddingLeft: theme('spacing.1'),
          paddingRight: theme('spacing.1'),
        },
        // 'a code': {
        //   color: 'inherit',
        // },
        //   ':is(h2, h3) code': {
        //     fontWeight: theme('fontWeight.bold'),
        //   },

        // Quotes
        blockquote: {
          borderInlineStartWidth: theme('borderWidth.0'),
          borderLeftColor: 'var(--foreground)',
          boxShadow: 'var(--tw-prose-block-quote-box-shadow)',
          marginLeft: '-1.25rem',
          paddingInlineStart: theme('spacing.0'),
          paddingLeft: theme('spacing.5'),
        },

        // Figures
        figcaption: {
          border: '1px solid',
          borderColor: 'var(--tw-prose-pre-border)',
          borderBottom: '0',
        },
        // 'figcaption > p': {
        //   margin: 0,
        // },

        // Lists
        ul: {
          listStyleType: 'disc',
        },
        ol: {
          listStyleType: 'decimal',
        },
        li: {
          fontFamily:
            'source-serif-pro, Georgia, Cambria, "Times New Roman", Times, serif',
          fontSize: theme('fontSize.xl')[0],
          fontWeight: 'var(--tw-prose-p-font-weight)',
          lineHeight: theme('lineHeight.8'),
        },
        'ol > li::marker': {
          color: 'hsl(var(--foreground))',
        },
        'ul > li::marker': {
          color: 'hsl(var(--foreground))',
        },
        '& input[type="checkbox"]': {
          accentColor: theme('colors.primary.DEFAULT'),
        },

        // Code blocks
        pre: {
          backgroundColor: 'hsl(var(--code-background))',
          border: '1px solid',
          borderColor: 'var(--tw-prose-pre-border)',
          borderRadius: theme('borderRadius.2xl'),
          color: 'hsl(var(--foreground))',
          fontSize: theme('fontSize.sm')[0],
          overflowX: 'auto',
        },

        // Horizontal rules
        hr: {
          borderColor: 'hsl(var(--border))',
        },

        // Tables
        table: {
          backgroundColor: 'hsl(var(--code-background))',
          border: '1px solid',
          borderColor: 'var(--tw-prose-table-border)',
          borderCollapse: 'separate',
          borderSpacing: '0px',
          borderLeft: '0',
          borderRadius: theme('borderRadius.2xl'),
        },
        'thead:first-child tr:first-child th:first-child': {
          borderTopLeftRadius: theme('borderRadius.2xl'),
        },
        'thead:first-child tr:first-child th:last-child': {
          borderTopRightRadius: theme('borderRadius.2xl'),
        },
        'tbody:last-child tr:last-child td:first-child': {
          borderBottomLeftRadius: theme('borderRadius.2xl'),
        },
        'tbody:last-child tr:last-child td:last-child': {
          borderBottomRightRadius: theme('borderRadius.2xl'),
        },
        'th, td': {
          borderLeft: '1px solid',
          borderLeftColor: 'var(--tw-prose-table-border)',
        },
        th: {
          paddingTop: theme('spacing.2'),
          paddingBottom: theme('spacing.2'),
          paddingLeft: theme('spacing.3'),
          paddingRight: theme('spacing.3'),
        },
        td: {
          borderTop: '1px solid',
          borderTopColor: 'var(--tw-prose-table-border)',
          paddingLeft: theme('spacing.3'),
          paddingRight: theme('spacing.3'),
        },
        // 'thead th': {
        //   color: 'var(--tw-prose-headings)',
        //   fontWeight: theme('fontWeight.semibold'),
        //   verticalAlign: 'bottom',
        //   paddingBottom: theme('spacing.2'),
        // },
        // 'thead th:not(:first-child)': {
        //   paddingLeft: theme('spacing.2'),
        // },
        // 'thead th:not(:last-child)': {
        //   paddingRight: theme('spacing.2'),
        // },
        // 'tbody tr': {
        //   borderBottomWidth: '1px',
        //   borderBottomColor: 'var(--tw-prose-td-borders)',
        // },
        // 'tbody tr:last-child': {
        //   borderBottomWidth: 0,
        // },
        // 'tbody td': {
        //   verticalAlign: 'baseline',
        // },
        // tfoot: {
        //   borderTopWidth: '1px',
        //   borderTopColor: 'var(--tw-prose-th-borders)',
        // },
        // 'tfoot td': {
        //   verticalAlign: 'top',
        // },
        // ':is(tbody, tfoot) td': {
        //   paddingTop: theme('spacing.2'),
        //   paddingBottom: theme('spacing.2'),
        // },
        // ':is(tbody, tfoot) td:not(:first-child)': {
        //   paddingLeft: theme('spacing.2'),
        // },
        // ':is(tbody, tfoot) td:not(:last-child)': {
        //   paddingRight: theme('spacing.2'),
        // },
      },
    },
  };
}
