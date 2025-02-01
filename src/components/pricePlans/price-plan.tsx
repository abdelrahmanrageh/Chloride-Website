import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from 'lucide-react'

interface PricePlanProps {
  name: string
  price: number
  features: string[]
  additionalFeatures: string[]
  expanded: boolean
  featured?: boolean
}

export function PricePlan({ name, price, features, additionalFeatures, expanded , featured}: PricePlanProps) {
  return (
    <Card className={`flex flex-col h-full !bg-gray-950 text-white border-gray-700 ${featured ? 'border-[3px] !border-lightBlue' : ''}`}>
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center ">{name}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="text-4xl font-bold text-center mb-6">${price.toFixed(2)}</div>
        <ul className="space-y-2 mb-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <Check className="w-5 h-5 text-lightBlue mr-2" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <div className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${expanded ? 'max-h-96' : 'max-h-0'}`}>
          {additionalFeatures.length > 0 && (
            <ul className="space-y-2 ">
              {additionalFeatures.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <Check className="w-5 h-5 text-lightBlue mr-2" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full !bg-lightBlue !text-white">Choose Plan</Button>
      </CardFooter>
    </Card>
  )
}
