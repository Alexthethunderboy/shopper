import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: ["class", "media"],
    theme: {
        extend: {
            boxShadow: {
                'soft-lg': '0 10px 25px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.02)',
            },
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))"
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))"
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))"
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))"
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                    blue: "hsl(var(--accent-blue))",
                    purple: "hsl(var(--accent-purple))",
                    pink: "hsl(var(--accent-pink))",
                    warm: "hsl(var(--accent-warm))",
                    cool: "hsl(var(--accent-cool))"
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))'
                },
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))'
                },
                chart: {
                    '1': 'hsl(var(--chart-1))',
                    '2': 'hsl(var(--chart-2))',
                    '3': 'hsl(var(--chart-3))',
                    '4': 'hsl(var(--chart-4))',
                    '5': 'hsl(var(--chart-5))'
                }
            },
            container: {
                center: true,
                padding: '2rem',
                screens: {
                    '2xl': '1400px'
                }
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)"
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
                shimmer: {
                    '0%': {
                        backgroundPosition: '100% 50%'
                    },
                    '100%': {
                        backgroundPosition: '0 50%'
                    }
                },
                'fade-up': {
                    from: {
                        opacity: '0',
                        transform: 'translateY(20px)'
                    },
                    to: {
                        opacity: '1',
                        transform: 'translateY(0)'
                    }
                },
                'fade-down': {
                    from: {
                        opacity: '0',
                        transform: 'translateY(-20px)'
                    },
                    to: {
                        opacity: '1',
                        transform: 'translateY(0)'
                    }
                }
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                shimmer: 'shimmer 1.4s ease infinite',
                'fade-up': 'fade-up 0.5s ease-out forwards',
                'fade-down': 'fade-down 0.5s ease-out forwards'
            },
            typography: {
                DEFAULT: {
                    css: {
                        maxWidth: '65ch',
                        color: 'hsl(var(--foreground))',
                        '[class~="lead"]': {
                            color: 'hsl(var(--foreground))',
                        },
                        a: {
                            color: 'hsl(var(--primary))',
                            '&:hover': {
                                color: 'hsl(var(--primary))',
                            },
                        },
                        strong: {
                            color: 'hsl(var(--foreground))',
                        },
                        'ol > li::marker': {
                            color: 'hsl(var(--foreground))',
                        },
                        'ul > li::marker': {
                            color: 'hsl(var(--foreground))',
                        },
                        hr: {
                            borderColor: 'hsl(var(--border))',
                        },
                        blockquote: {
                            color: 'hsl(var(--foreground))',
                            borderLeftColor: 'hsl(var(--border))',
                        },
                        h1: {
                            color: 'hsl(var(--foreground))',
                        },
                        h2: {
                            color: 'hsl(var(--foreground))',
                        },
                        h3: {
                            color: 'hsl(var(--foreground))',
                        },
                        h4: {
                            color: 'hsl(var(--foreground))',
                        },
                        'figure figcaption': {
                            color: 'hsl(var(--muted-foreground))',
                        },
                        code: {
                            color: 'hsl(var(--foreground))',
                        },
                        'a code': {
                            color: 'hsl(var(--primary))',
                        },
                        pre: {
                            color: 'hsl(var(--foreground))',
                            backgroundColor: 'hsl(var(--muted))',
                        },
                        thead: {
                            color: 'hsl(var(--foreground))',
                            borderBottomColor: 'hsl(var(--border))',
                        },
                        'tbody tr': {
                            borderBottomColor: 'hsl(var(--border))',
                        },
                    },
                },
            },
        }
    },
    plugins: [
        require("tailwindcss-animate"),
        require("@tailwindcss/typography"),
        require("@tailwindcss/forms"),
    ],
} satisfies Config;

export default config;
