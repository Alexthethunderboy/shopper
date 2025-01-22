export const colors = {
  brand: 'hsl(var(--brand))',
  accentWarm: 'hsl(var(--accent-warm))',
  accentCool: 'hsl(var(--accent-cool))',
  success: 'hsl(var(--success))',
} as const

export const gradients = {
  brand: 'linear-gradient(135deg, hsl(var(--brand)) 0%, hsl(var(--accent-cool)) 100%)',
  warm: 'linear-gradient(135deg, hsl(var(--accent-warm)) 0%, hsl(var(--brand)) 100%)',
  cool: 'linear-gradient(135deg, hsl(var(--accent-cool)) 0%, hsl(var(--brand)) 100%)',
} as const 