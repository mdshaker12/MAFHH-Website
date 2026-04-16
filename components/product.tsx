import { 
  Store, 
  Receipt, 
  Package, 
  Users, 
  TrendingUp, 
  Wifi,
  ArrowRight
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const features = [
  {
    icon: Store,
    title: "Multi-branch Support",
    description: "Manage multiple restaurant locations from a single dashboard",
  },
  {
    icon: Receipt,
    title: "Billing System",
    description: "Fast, intuitive billing with split payments and discounts",
  },
  {
    icon: Package,
    title: "Inventory & Consumption",
    description: "Track stock levels and consumption across all branches",
  },
  {
    icon: Users,
    title: "Vendor Management",
    description: "Manage vendors, purchases, payments, and balances",
  },
  {
    icon: TrendingUp,
    title: "Sales & Profit Tracking",
    description: "Real-time analytics for revenue and profit margins",
  },
  {
    icon: Wifi,
    title: "Real-time Updates",
    description: "WebSocket-powered live updates across all devices",
  },
]

export function Product() {
  return (
    <section id="products" className="py-24 sm:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24 items-center">
          <div>
            <p className="text-sm font-semibold leading-7 text-primary uppercase tracking-wide">
              Product Showcase
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Restaurant Billing Software
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Our upcoming SaaS product designed specifically for the restaurant industry. 
              A complete solution for billing, inventory, and business management.
            </p>
            
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 shrink-0">
                    <feature.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{feature.title}</p>
                    <p className="text-xs text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10">
              <Button asChild size="lg" className="group">
                <Link href="#contact">
                  Request Early Access
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
          
          {/* Product Preview */}
          <div className="relative">
            <div className="relative rounded-2xl bg-background border border-border shadow-2xl overflow-hidden">
              {/* Browser Header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary/50">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-400" />
                  <div className="h-3 w-3 rounded-full bg-yellow-400" />
                  <div className="h-3 w-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="h-6 rounded-md bg-muted flex items-center justify-center">
                    <span className="text-xs text-muted-foreground">billing.mafhh.com</span>
                  </div>
                </div>
              </div>
              
              {/* Dashboard Preview */}
              <div className="p-6 space-y-4">
                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "Today&apos;s Sales", value: "$4,250" },
                    { label: "Orders", value: "156" },
                    { label: "Profit", value: "$1,280" },
                  ].map((stat, i) => (
                    <div key={i} className="p-3 rounded-lg bg-secondary/50 border border-border">
                      <p className="text-[10px] text-muted-foreground">{stat.label}</p>
                      <p className="text-sm font-bold text-foreground">{stat.value}</p>
                    </div>
                  ))}
                </div>
                
                {/* Chart Placeholder */}
                <div className="h-32 rounded-lg bg-secondary/30 border border-border flex items-end justify-around px-4 pb-4">
                  {[40, 65, 45, 80, 55, 90, 70].map((height, i) => (
                    <div 
                      key={i} 
                      className="w-6 rounded-t bg-primary/60"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
                
                {/* Table Preview */}
                <div className="rounded-lg border border-border overflow-hidden">
                  <div className="grid grid-cols-4 gap-2 p-2 bg-secondary/50 text-[10px] font-medium text-muted-foreground">
                    <span>Order</span>
                    <span>Items</span>
                    <span>Status</span>
                    <span>Amount</span>
                  </div>
                  {[
                    { order: "#1234", items: "3", status: "Completed", amount: "$45" },
                    { order: "#1235", items: "5", status: "Pending", amount: "$78" },
                    { order: "#1236", items: "2", status: "Completed", amount: "$32" },
                  ].map((row, i) => (
                    <div key={i} className="grid grid-cols-4 gap-2 p-2 text-[10px] border-t border-border">
                      <span className="text-foreground font-medium">{row.order}</span>
                      <span className="text-muted-foreground">{row.items}</span>
                      <span className={row.status === "Completed" ? "text-accent" : "text-yellow-500"}>
                        {row.status}
                      </span>
                      <span className="text-foreground">{row.amount}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
