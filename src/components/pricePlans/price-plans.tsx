"use client"

import { useState } from "react"
import { PricePlan } from "./price-plan"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from 'lucide-react'

const plans = [
  {
    name: "Starter",
    price: 10,
    features: [
      "Windows Settings Tweaks",
      "Cpu, Ram, Gpu, Usb Tweaks",
      "Session time : 40 min",
    ],
    additionalFeatures: [
    ],
  },
  {
    name: "Extreme",
    price: 19.99,
    features: [
      "Windows Settings Tweaks",
      "Cpu, Ram, Gpu, Usb Tweaks",
      "Gpu Over Clocking",
      "Custom Windows build make specially for you",
    ],
    additionalFeatures: [
      "Discord Ultimate subscription role",
      "Session time : ~60 min",
    ],
  },
  {
    name: "Ultimate",
    price: 29.99,
    features: [
      "Windows Settings Tweaks",
      "Cpu, Ram, Gpu, Usb Tweaks",
      "Gpu Over Clocking",
      "Hidden Bios Tweaks",
      "Custom Windows build make specially for you",
      "Discord Ultimate subscription role",
    ],
    additionalFeatures: [
      "Access to all of Ultimate Private Builds & Tweaks",
      "Access to Premium Atom Tweaking Utiltiy",
      "Session time : ~90 min",
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
