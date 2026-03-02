interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  fullWidth?: boolean
}

export default function Section({ children, className = '', id, fullWidth = false }: SectionProps) {
  return (
    <section id={id} className={`relative ${!fullWidth ? 'py-14 md:py-20 lg:py-32' : ''} ${className}`}>
      <div className={!fullWidth ? 'container mx-auto px-6 md:px-12 max-w-7xl' : ''}>
        {children}
      </div>
    </section>
  )
}
