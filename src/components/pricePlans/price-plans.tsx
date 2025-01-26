"use client"

import { useState } from "react"
import { PricePlan } from "./price-plan"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from 'lucide-react'

const plans = [
  {
    name: "Free",
    price: 0,
    features: [
      "1 user",
      "10 projects",
      "5GB storage",
      "Basic support",
      "Access to core features",
    ],
    additionalFeatures: [
      "Email support",
      "Monthly usage reports",
      "API access (100 requests/day)",
    ],
  },
  {
    name: "Pro",
    price: 19.99,
    features: [
      "5 users",
      "50 projects",
      "50GB storage",
      "50GB storage",

      "Priority support",
      "Access to all features",
    ],
    additionalFeatures: [
      "Phone support",
      "Weekly usage reports",
      "API access (1000 requests/day)",
      "Custom integrations",
    ],
  },
  {
    name: "Enterprise",
    price: 49.99,
    features: [
      "Unlimited users",
      "Unlimited projects",
      "1TB storage",
      "24/7 dedicated support",
      "24/7 dedicated support",
      "24/7 dedicated support",

      "24/7 dedicated support",
      "Access to all features + beta",
    ],
    additionalFeatures: [
      "Dedicated account manager",
      "Daily usage reports",
      "Unlimited API access",
      "Custom development",
      "On-premise deployment option",
    ],
  },
]

export function PricePlans() {
  const [expanded, setExpanded] = useState(false)

  return (
    <section className="py-16 px-4 ">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Choose Your Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricePlan 
              key={plan.name} 
              {...plan} 
              featured={index === 1}
              expanded={expanded}
            />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button
            variant="outline"
            size="lg"
            onClick={() => setExpanded(!expanded)}
            className="mx-auto !bg-gray-950 border-gray-700"
          >
            {expanded ? (
              <>
                <ChevronUp className="w-4 h-4 mr-2" />
                Hide additional features
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4 mr-2" />
                See all features
              </>
            )}
          </Button>
        </div>
      </div>
    </section>
  )
}
