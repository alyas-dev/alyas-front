import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ManageSubscription from "./_components/manage-subscription";

export default function PaymentPage() {
  return (
    <div>
      <div className="p-6 space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Payment Management</CardTitle>
            <CardDescription>
              Manage your billing and payment methods
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Current Plan
                </p>
                <p className="text-md">Free</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Billing Status
                </p>
                <p className="text-md">N/A</p>
              </div>
            </div>
            <ManageSubscription />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
