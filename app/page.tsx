"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Smartphone, Monitor, Zap } from "lucide-react"
import SalesAdvisorMobile from "@/components/sales-advisor-mobile"
import TechnicianMobile from "@/components/technician-mobile"
import ManagerDashboard from "@/components/manager-dashboard"

export default function HomePage() {
  const [selectedView, setSelectedView] = useState<"overview" | "sales-mobile" | "tech-mobile" | "manager-web">(
    "overview",
  )

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto p-6">
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Zap className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold">EV-Connect Pro</h1>
          </div>
          <p className="text-muted-foreground text-lg">Internal EV Charger Installation & Sales CRM - Wireframe Demo</p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <Button
            variant={selectedView === "overview" ? "default" : "outline"}
            onClick={() => setSelectedView("overview")}
            className="gap-2"
          >
            <Monitor className="h-4 w-4" />
            Overview
          </Button>
          <Button
            variant={selectedView === "sales-mobile" ? "default" : "outline"}
            onClick={() => setSelectedView("sales-mobile")}
            className="gap-2"
          >
            <Smartphone className="h-4 w-4" />
            Sales Advisor Mobile
          </Button>
          <Button
            variant={selectedView === "tech-mobile" ? "default" : "outline"}
            onClick={() => setSelectedView("tech-mobile")}
            className="gap-2"
          >
            <Smartphone className="h-4 w-4" />
            Technician Mobile
          </Button>
          <Button
            variant={selectedView === "manager-web" ? "default" : "outline"}
            onClick={() => setSelectedView("manager-web")}
            className="gap-2"
          >
            <Monitor className="h-4 w-4" />
            Manager Dashboard
          </Button>
        </div>

        {selectedView === "overview" && <OverviewSection />}
        {selectedView === "sales-mobile" && <SalesMobileView />}
        {selectedView === "tech-mobile" && <TechMobileView />}
        {selectedView === "manager-web" && <ManagerWebView />}
      </div>
    </div>
  )
}

function OverviewSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Smartphone className="h-5 w-5 text-primary" />
            Sales Advisor Mobile
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Lead management with swipe gestures</li>
            <li>• Customer contact integration</li>
            <li>• Site visit scheduling</li>
            <li>• Product catalog for upselling</li>
            <li>• Real-time notifications</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Smartphone className="h-5 w-5 text-primary" />
            Technician Mobile
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Job dispatch and navigation</li>
            <li>• Digital site survey forms</li>
            <li>• Photo capture with annotations</li>
            <li>• Installation checklists</li>
            <li>• Problem reporting system</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Monitor className="h-5 w-5 text-primary" />
            Manager Dashboard
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Interactive scheduling calendar</li>
            <li>• Real-time job status tracking</li>
            <li>• Performance analytics</li>
            <li>• Technician management</li>
            <li>• Customer quote generation</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

function SalesMobileView() {
  return (
    <div className="mobile-container mx-auto">
      <SalesAdvisorMobile />
    </div>
  )
}

function TechMobileView() {
  return (
    <div className="mobile-container mx-auto">
      <TechnicianMobile />
    </div>
  )
}

function ManagerWebView() {
  return (
    <div className="desktop-container">
      <ManagerDashboard />
    </div>
  )
}
