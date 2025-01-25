/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			breathe: {
  				'0%, 100%': {
  					transform: 'scale(1)'
  				},
  				'50%': {
  					transform: 'scale(1.05)'
  				}
  			},
  			chatInOut: {
  				'0%': {
  					transform: 'translateY(-30px) translateX(-90px) scale(0)',
  					opacity: '0'
  				},
  				'8%': {
  					transform: 'translateY(0)',
  					opacity: '1'
  				},
  				'92%': {
  					transform: 'translateY(0)',
  					opacity: '1'
  				},
  				'100%': {
  					transform: 'translateY(-30px) translate(-90px) scale(0)',
  					opacity: '0'
  				}
  			},
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			breathe: 'breathe 2s ease-in-out infinite',
  			chatIn: 'chatInOut 7s ease-in-out infinite',
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		},
  		colors: {}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
