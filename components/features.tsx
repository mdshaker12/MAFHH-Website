import { 
  Layers, 
  Shield, 
  Zap, 
  FileText, 
  Building2, 
  Users 
} from "lucide-react"

const features = [
  {
    icon: Layers,
    title: "Multi-tenant Architecture",
    description: "Isolated data for each client with shared infrastructure for cost efficiency.",
  },
  {
    icon: Shield,
    title: "Role-based Access",
    description: "Granular permissions for Admin, Manager, Cashier, and custom roles.",
  },
  {
    icon: Zap,
    title: "Real-time System",
    description: "Instant updates across all connected devices using WebSocket technology.",
  },
  {
    icon: FileText,
    title: "Audit Logs",
    description: "Complete activity tracking for compliance and security monitoring.",
  },
  {
    icon: Building2,
    title: "Scalable for 50+ Outlets",
    description: "Architecture designed to handle enterprise-level deployments.",
  },
  {
    icon: Users,
    title: "100+ Concurrent Users",
    description: "High-performance system supporting multiple users per outlet.",
  },
]

export function Features() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="text-sm font-semibold leading-7 text-primary uppercase tracking-wide">
            Enterprise Features
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Built for Scale
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Our solutions are engineered with enterprise-grade features to support 
            businesses of all sizes.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div 
                key={feature.title} 
                className="group relative rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/50 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary transition-colors duration-300">
                  <feature.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="mt-6 text-lg font-semibold leading-8 text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 text-base leading-7 text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
