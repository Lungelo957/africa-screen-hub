
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Crown, Zap } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Viewer",
      price: "R90",
      period: "month",
      description: "Perfect for film enthusiasts who want to access our showcase content",
      icon: Star,
      popular: false,
      features: [
        "Access to all showcase films",
        "HD streaming quality",
        "Mobile & desktop viewing",
        "Community discussions",
        "Monthly film premieres"
      ],
      color: "african-sky"
    },
    {
      name: "Creator",
      price: "R350",
      period: "month",
      description: "For aspiring creatives ready to learn and collaborate",
      icon: Zap,
      popular: true,
      features: [
        "All Viewer benefits",
        "Access to training courses",
        "Portfolio page creation",
        "Collaborative project participation",
        "Mentorship opportunities",
        "Equipment rental discounts",
        "Industry networking events"
      ],
      color: "african-gold"
    },
    {
      name: "Professional",
      price: "R650",
      period: "month",
      description: "For established professionals and serious creators",
      icon: Crown,
      popular: false,
      features: [
        "All Creator benefits",
        "Priority project assignments",
        "Advanced course modules",
        "1-on-1 coaching sessions",
        "Revenue sharing on films",
        "Production equipment access",
        "Job board priority listings",
        "Marketing support for projects"
      ],
      color: "african-sunset"
    }
  ];

  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto section-padding">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold">
            <span className="text-gradient">Choose Your Path</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you're here to watch incredible stories or create them, we have the perfect plan for your journey.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`card-hover bg-card/50 backdrop-blur relative ${plan.popular ? 'border-african-gold border-2' : 'border-african-gold/20'}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-african-gold text-african-earth px-4 py-1">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center space-y-4 pb-8">
                <div className={`w-16 h-16 bg-gradient-to-br from-${plan.color} to-${plan.color}-dark rounded-full mx-auto flex items-center justify-center`}>
                  <plan.icon className="h-8 w-8 text-white" />
                </div>
                
                <div>
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <CardDescription className="mt-2">{plan.description}</CardDescription>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-baseline justify-center space-x-1">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">/{plan.period}</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className={`h-5 w-5 text-${plan.color} mt-0.5 flex-shrink-0`} />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${plan.popular ? 'btn-primary' : 'btn-secondary'}`}
                  size="lg"
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 space-y-4">
          <p className="text-muted-foreground">
            All plans include access to our community platform and basic support.
          </p>
          <p className="text-sm text-muted-foreground">
            Prices shown in South African Rand (ZAR). International pricing available.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
