import { transform } from 'next/dist/build/swc/generated-native';

/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');


const config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		typography: (theme) => ({
			DEFAULT: {
			  css: {
				maxWidth: '100%', // Make prose take the full width
			  },
			},
		  }),
  		colors: {
  			first: '#3D52A0',
  			second: '#7091E6',
  			third: '#8697C4',
  			fourth: '#ADBBDA',
			fifth: '#EDE8F5',
  			background: 'var(--background)',
  			foreground: 'var(--foreground)',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			marquee: {
  				from: {
  					transform: 'translateX(0)'
  				},
  				to: {
  					transform: 'translateX(calc(-100% - var(--gap)))'
  				}
  			},
  			'marquee-vertical': {
  				from: {
  					transform: 'translateY(0)'
  				},
  				to: {
  					transform: 'translateY(calc(-100% - var(--gap)))'
  				}
  			},
  			'slide-in-down': {
  				'0%': {
  					visibility: 'hidden',
  					transform: 'translate3d(0, -100%, 0)'
  				},
  				'1%': {
  					visibility: 'visible'
  				},
  				'100%': {
  					transform: 'translate3d(0, 0, 0)'
  				}
  			},
  			'slide-out-up': {
  				'0%': {
  					transform: 'translate3d(0, 0, 0)'
  				},
  				'100%': {
  					visibility: 'hidden',
  					transform: 'translate3d(0, -100%, 0)'
  				}
  			},
  			'fade-in': {
  				'0%': {
  					opacity: 0
  				},
  				'100%': {
  					opacity: 1
  				}
  			},
  			'cust-fade-in': {
  				'0%': {
  					opacity: 0,
					transform: 'translate(-15px, 0)',
  				},
  				'100%': {
  					opacity: 1,
					transform: 'translate(-5px, 0)',
  				}
  			},
  			'fade-out': {
  				'0%': {
  					opacity: 1
  				},
  				'100%': {
  					opacity: 0
  				}
  			}
  		},
  		animation: {
  			marquee: 'marquee var(--duration) infinite linear',
  			'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
  			slideindown: 'slide-in-down 0.6s ease-in-out 1',
  			slideoutup: 'slide-out-up 0.6s ease-in-out 1',
  			fadein: 'fade-in 0.4s ease-in-out 1',
  			fadeout: 'fade-out 0.4s ease-in-out 1',
			custfadein: 'cust-fade-in 0.3s ease-in-out',
  		}
  	}
  },

  plugins: [
        require('tailwindcss-animated'),
		require('@tailwindcss/line-clamp'),
    require("tailwindcss-animate"),
    plugin(function ({ addVariant }) {
      addVariant('accordion-open', '&[data-state="open"]');
    }),
    plugin(function ({ addVariant }) {
      addVariant('data-open', '&[data-state="open"]');
    }),
      require("tailwindcss-animate"),
	  require('@tailwindcss/typography'),
],

variants: {
    extend: {
      display: ['group-hover', 'group2-hover', 'group3-hover', 'group4-hover'],
    },
  },
};

export default config;
