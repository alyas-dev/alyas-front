"use client";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

export default function ManageSubscription() {
  return (
    <Link href="/pricing">
      <Button variant="outline">
        <ExternalLink className="h-4 w-4 mr-2" />
        View Pricing
      </Button>
    </Link>
  );
}
