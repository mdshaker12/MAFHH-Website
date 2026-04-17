import { CheckCircle, Users, Building2 } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const employeeFeatures = [
  "Inventory management with real-time tracking",
  "Auto-deduction consumption system",
  "Dish management and recipe tracking",
  "Vendor management and ordering",
  "Budget and expense tracking",
]

const ownerFeatures = [
  "Real-time inventory tracking across locations",
  "Consumption tracking (store to kitchen, inter-branch)",
  "Vendor transactions (purchases, payments, balances)",
  "Monthly expenses (rent, salaries, electricity, taxes)",
  "Sales and profit tracking with analytics",
]

export function CaseStudy() {
  return (
    <section id="case-studies" className="py-24 sm:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="text-sm font-semibold leading-7 text-primary uppercase tracking-wide">Case Study</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Restaurant Management System
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            A comprehensive solution that transformed restaurant operations with dual dashboards 
            for employees and owners, streamlining everything from inventory to profit tracking.
          </p>
        </div>

        <div className="mt-16 lg:mt-20">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Employee Dashboard */}
            <Card className="relative overflow-hidden border-2 border-primary/20">
              <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Employee Dashboard</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Empowering staff with tools for daily operations, inventory control, and vendor coordination.
                </p>
                <ul className="space-y-3">
                  {employeeFeatures.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Owner Dashboard */}
            <Card className="relative overflow-hidden border-2 border-accent/20">
              <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
                    <Building2 className="h-5 w-5 text-accent" />
                  </div>
                  <CardTitle className="text-xl">Owner Dashboard</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Complete oversight with real-time analytics, financial tracking, and business intelligence.
                </p>
                <ul className="space-y-3">
                  {ownerFeatures.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Results */}
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { label: "Time Saved", value: "80%" },
              { label: "Error Reduction", value: "90%" },
              { label: "Cost Savings", value: "30%" },
              { label: "User Satisfaction", value: "95%" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-lg bg-background p-6 text-center border border-border">
                <div className="text-2xl font-bold text-primary sm:text-3xl">{stat.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
