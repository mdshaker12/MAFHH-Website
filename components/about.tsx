import { Target, Zap, Shield, Users } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "We focus on solving real business problems with practical, efficient solutions.",
  },
  {
    icon: Zap,
    title: "Innovation First",
    description: "Leveraging cutting-edge technology to build systems that scale with your business.",
  },
  {
    icon: Shield,
    title: "Reliability",
    description: "Building robust systems that businesses can depend on, day after day.",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "We work alongside our clients as partners, not just vendors.",
  },
]

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="text-sm font-semibold leading-7 text-primary uppercase tracking-wide">About Us</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Technology That Powers Real Business
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            MAFHH Technologies is a technology-focused company specializing in building custom dashboards, 
            ERP systems, and scalable business software solutions. We help businesses automate manual 
            operations and transform them into efficient, reliable, and scalable systems.
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-foreground">
                  <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                    <value.icon className="h-6 w-6 text-primary-foreground" aria-hidden="true" />
                  </div>
                  {value.title}
                </dt>
                <dd className="mt-2 text-base leading-7 text-muted-foreground">{value.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
