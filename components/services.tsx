import { Database, Cog, BarChart3, Globe, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: Database,
    title: "Custom ERP Development",
    description: "End-to-end ERP solutions tailored to your business processes. From inventory management to financial tracking, we build systems that streamline your operations.",
    features: ["Inventory Management", "Order Processing", "Financial Tracking", "Reporting & Analytics"],
  },
  {
    icon: Cog,
    title: "Business Automation Systems",
    description: "Transform manual workflows into automated processes. Reduce errors, save time, and scale your operations with intelligent automation.",
    features: ["Workflow Automation", "Data Integration", "Process Optimization", "Custom Triggers"],
  },
  {
    icon: BarChart3,
    title: "Dashboard & Analytics Systems",
    description: "Real-time dashboards that provide actionable insights. Make data-driven decisions with custom analytics tailored to your KPIs.",
    features: ["Real-time Data", "Custom KPIs", "Interactive Charts", "Export & Sharing"],
  },
  {
    icon: Globe,
    title: "Static & Dynamic Websites",
    description: "Modern, responsive websites built with the latest technologies. From simple landing pages to complex web applications.",
    features: ["Responsive Design", "SEO Optimized", "Fast Performance", "CMS Integration"],
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="text-sm font-semibold leading-7 text-primary uppercase tracking-wide">Our Services</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Solutions That Drive Growth
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            We offer a comprehensive suite of services to help businesses modernize their operations 
            and achieve sustainable growth.
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mt-24 lg:max-w-none lg:grid-cols-2">
          {services.map((service) => (
            <Card key={service.title} className="group relative overflow-hidden border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary transition-colors duration-300">
                    <service.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">{service.description}</CardDescription>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-muted-foreground">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
