import { Factory, Receipt, CheckCircle, Clock } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    icon: Factory,
    title: "ERP System for Adhesive Tape Manufacturing",
    description: "A comprehensive ERP solution for managing the entire manufacturing process from orders to delivery.",
    status: "In Development",
    modules: [
      { name: "Order Management System", complete: false },
      { name: "Inventory Management", complete: true },
      { name: "Consumption Management", complete: true },
      { name: "Bill of Materials (BOM)", complete: false },
      { name: "Smart Material Check", complete: false },
      { name: "Notification System", complete: false },
      { name: "Dashboard & Deployment", complete: false },
    ],
  },
  {
    icon: Receipt,
    title: "Restaurant Billing SaaS",
    description: "A complete billing and management solution for restaurants, inspired by industry leaders like Petpooja.",
    status: "In Development",
    modules: [
      { name: "Billing Module", complete: false },
      { name: "Inventory Module", complete: true },
      { name: "Consumption Module", complete: true },
      { name: "Dish Management Module", complete: true },
      { name: "Monthly Expenses Module", complete: true },
      { name: "Sales & Profit Module", complete: true },
    ],
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="text-sm font-semibold leading-7 text-primary uppercase tracking-wide">Ongoing Projects</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            What We&apos;re Building
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            A glimpse into our current development pipeline. These projects showcase our commitment 
            to building comprehensive, industry-specific solutions.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:mt-20">
          {projects.map((project) => (
            <Card key={project.title} className="flex flex-col">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <project.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{project.title}</CardTitle>
                      <Badge variant="secondary" className="mt-1">
                        <Clock className="h-3 w-3 mr-1" />
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <CardDescription className="text-base mb-6">{project.description}</CardDescription>
                <div className="space-y-3">
                  <p className="text-sm font-medium text-foreground">Modules:</p>
                  <ul className="space-y-2">
                    {project.modules.map((module) => (
                      <li key={module.name} className="flex items-center gap-2 text-sm">
                        <CheckCircle 
                          className={`h-4 w-4 ${module.complete ? "text-accent" : "text-muted-foreground/40"}`} 
                        />
                        <span className={module.complete ? "text-foreground" : "text-muted-foreground"}>
                          {module.name}
                        </span>
                        {module.complete && (
                          <Badge variant="outline" className="text-xs text-accent border-accent">
                            Complete
                          </Badge>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 pt-4 border-t border-border">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-medium text-foreground">
                      {project.modules.filter(m => m.complete).length}/{project.modules.length} Modules
                    </span>
                  </div>
                  <div className="mt-2 h-2 w-full rounded-full bg-secondary">
                    <div 
                      className="h-2 rounded-full bg-primary transition-all duration-300"
                      style={{ 
                        width: `${(project.modules.filter(m => m.complete).length / project.modules.length) * 100}%` 
                      }}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
