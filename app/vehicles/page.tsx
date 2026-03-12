'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Car, Wrench, ShieldAlert } from 'lucide-react';

export default function VehiclesPage() {
  return (
    <div className="min-h-screen p-6 md:p-10 max-w-7xl mx-auto space-y-8">
      <header className="border-b border-border pb-6">
        <h1 className="text-4xl font-headline font-bold">Vehicle Portal</h1>
        <p className="text-muted-foreground mt-1">Maintenance and insurance management</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="bg-muted/30 border-dashed">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Car className="size-5 text-blue-500" />
              My Fleet
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center py-12 text-center">
            <p className="text-muted-foreground">Add your vehicles to track their history.</p>
          </CardContent>
        </Card>

        <Card className="bg-muted/30 border-dashed">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Wrench className="size-5 text-yellow-600" />
              Maintenance
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center py-12 text-center">
            <p className="text-muted-foreground">Log services like oil changes and tire rotations.</p>
          </CardContent>
        </Card>

        <Card className="bg-muted/30 border-dashed">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShieldAlert className="size-5 text-red-500" />
              Alerts
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center py-12 text-center">
            <p className="text-muted-foreground">Upcoming insurance or service expirations will appear here.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
