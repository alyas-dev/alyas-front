"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useAuth } from "@/providers/AuthProvider";
import { Check } from "lucide-react";
import { useRouter } from "next/navigation";

export default function PricingTable() {
  const router = useRouter();
  const { session } = useAuth();
  const user = session?.user;

  return (
    <section className="flex flex-col items-center justify-center px-4 mb-24 w-full">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-medium tracking-tight mb-4">Pricing</h1>
        <p className="text-xl text-muted-foreground">
          Choose the plan that fits your needs.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl w-full">
        <Card className="relative h-fit">
          <CardHeader>
            <CardTitle className="text-2xl">Starter</CardTitle>
            <CardDescription>Perfect for getting started</CardDescription>
            <div className="mt-4">
              <span className="text-4xl font-bold">$10</span>
              <span className="text-muted-foreground">/month</span>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <Check className="h-5 w-5 text-green-500" />
              <span>5 Projects</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="h-5 w-5 text-green-500" />
              <span>10GB Storage</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="h-5 w-5 text-green-500" />
              <span>1 Team Member</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="h-5 w-5 text-green-500" />
              <span>Email Support</span>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              className="w-full"
              onClick={() => {
                if (!user) {
                  router.push("/sign-in");
                  return;
                }
                router.push("/dashboard");
              }}
            >
              {!user ? "Sign In to Get Started" : "Go to Dashboard"}
            </Button>
          </CardFooter>
        </Card>

        <Card className="relative h-fit border-primary">
          <CardHeader>
            <CardTitle className="text-2xl">Pro</CardTitle>
            <CardDescription>For growing teams</CardDescription>
            <div className="mt-4">
              <span className="text-4xl font-bold">$30</span>
              <span className="text-muted-foreground">/month</span>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <Check className="h-5 w-5 text-green-500" />
              <span>Unlimited Projects</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="h-5 w-5 text-green-500" />
              <span>100GB Storage</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="h-5 w-5 text-green-500" />
              <span>10 Team Members</span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="h-5 w-5 text-green-500" />
              <span>Priority Support</span>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              className="w-full"
              onClick={() => {
                if (!user) {
                  router.push("/sign-in");
                  return;
                }
                router.push("/dashboard");
              }}
            >
              {!user ? "Sign In to Get Started" : "Go to Dashboard"}
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="mt-12 text-center">
        <p className="text-muted-foreground">
          Need a custom plan?{" "}
          <span className="text-primary cursor-pointer hover:underline">
            Contact us
          </span>
        </p>
      </div>
    </section>
  );
}
