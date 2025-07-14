import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function UserDetailsSkeleton() {
  return (
    <div>
      <Card className="w-full max-w-3xl mx-auto mt-10 rounded-xl shadow-lg">
        <CardContent className="p-6 space-y-6">
          <div className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="flex-1 space-y-2">
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          </div>

          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-24 w-full" />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-24 w-full" />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-24 w-full" />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-24 w-full" />
        </CardContent>
      </Card>
    </div>
  );
}
