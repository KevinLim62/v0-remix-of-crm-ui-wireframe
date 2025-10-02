"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Calendar,
  Users,
  MapPin,
  Phone,
  TrendingUp,
  AlertTriangle,
  Search,
  Filter,
  Plus,
  MoreHorizontal,
  Zap,
  ChevronDown,
  ChevronUp,
  Mail,
  Car,
  FileText,
  Shield,
  MessageSquare,
  CheckCircle,
  Building2,
  UserCheck,
  Package,
  ImageIcon,
  X,
  PackageOpen,
  Minus,
  History,
} from "lucide-react"

export default function ManagerDashboard() {
  const [activeTab, setActiveTab] = useState<
    "overview" | "schedule" | "customers" | "technicians" | "analytics" | "inventory"
  >("overview")
  const [expandedCustomer, setExpandedCustomer] = useState<number | null>(null)
  const [expandedSiteVisit, setExpandedSiteVisit] = useState<number | null>(null)
  const [expandedInstallation, setExpandedInstallation] = useState<number | null>(null)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [expandedInventoryItem, setExpandedInventoryItem] = useState<number | null>(null)

  const inventoryItems = [
    {
      id: 1,
      name: "EV Wall Charger 7.4kW",
      category: "Chargers",
      sku: "EVC-7.4-001",
      currentStock: 12,
      minStock: 5,
      unit: "units",
      usageHistory: [{ jobId: 1, customer: "Sarah Johnson", date: "2024-01-22", quantity: 1, type: "Installation" }],
    },
    {
      id: 2,
      name: "EV Wall Charger 22kW",
      category: "Chargers",
      sku: "EVC-22-001",
      currentStock: 8,
      minStock: 3,
      unit: "units",
      usageHistory: [],
    },
    {
      id: 3,
      name: "TNB Fuse 63A",
      category: "Electrical Components",
      sku: "TNB-63A",
      currentStock: 25,
      minStock: 10,
      unit: "units",
      usageHistory: [{ jobId: 1, customer: "Sarah Johnson", date: "2024-01-15", quantity: 1, type: "Site Survey" }],
    },
    {
      id: 4,
      name: "TNB Fuse 100A",
      category: "Electrical Components",
      sku: "TNB-100A",
      currentStock: 18,
      minStock: 8,
      unit: "units",
      usageHistory: [{ jobId: 2, customer: "Mike Chen", date: "2024-01-18", quantity: 1, type: "Site Survey" }],
    },
    {
      id: 5,
      name: "Power Cable 6mm²",
      category: "Cables",
      sku: "PWR-6MM",
      currentStock: 450,
      minStock: 100,
      unit: "meters",
      usageHistory: [
        { jobId: 1, customer: "Sarah Johnson", date: "2024-01-22", quantity: 15, type: "Installation" },
        { jobId: 2, customer: "Mike Chen", date: "2024-01-18", quantity: 20, type: "Site Survey" },
      ],
    },
    {
      id: 6,
      name: "Power Cable 10mm²",
      category: "Cables",
      sku: "PWR-10MM",
      currentStock: 320,
      minStock: 80,
      unit: "meters",
      usageHistory: [],
    },
    {
      id: 7,
      name: "Metal Cable Tray",
      category: "Installation Materials",
      sku: "MCT-001",
      currentStock: 35,
      minStock: 15,
      unit: "meters",
      usageHistory: [
        { jobId: 1, customer: "Sarah Johnson", date: "2024-01-22", quantity: 5, type: "Installation" },
        { jobId: 2, customer: "Mike Chen", date: "2024-01-18", quantity: 8, type: "Site Survey" },
      ],
    },
    {
      id: 8,
      name: "PVC Conduit 25mm",
      category: "Installation Materials",
      sku: "PVC-25MM",
      currentStock: 180,
      minStock: 50,
      unit: "meters",
      usageHistory: [],
    },
    {
      id: 9,
      name: "Circuit Breaker 32A",
      category: "Electrical Components",
      sku: "CB-32A",
      currentStock: 22,
      minStock: 10,
      unit: "units",
      usageHistory: [{ jobId: 1, customer: "Sarah Johnson", date: "2024-01-22", quantity: 1, type: "Installation" }],
    },
    {
      id: 10,
      name: "Earth Pit Kit",
      category: "Installation Materials",
      sku: "EPK-001",
      currentStock: 4,
      minStock: 5,
      unit: "units",
      usageHistory: [{ jobId: 2, customer: "Mike Chen", date: "2024-01-18", quantity: 1, type: "Site Survey" }],
    },
    {
      id: 11,
      name: "Wall Mounting Bracket",
      category: "Installation Materials",
      sku: "WMB-001",
      currentStock: 28,
      minStock: 12,
      unit: "units",
      usageHistory: [{ jobId: 1, customer: "Sarah Johnson", date: "2024-01-22", quantity: 1, type: "Installation" }],
    },
    {
      id: 12,
      name: "Weatherproof Junction Box",
      category: "Installation Materials",
      sku: "WJB-001",
      currentStock: 15,
      minStock: 8,
      unit: "units",
      usageHistory: [],
    },
  ]

  const jobs = [
    {
      id: 1,
      customer: "Sarah Johnson",
      technician: "John Smith",
      type: "Site Survey",
      status: "scheduled",
      time: "10:00 AM",
      address: "123 Oak Street",
    },
    {
      id: 2,
      customer: "Mike Chen",
      technician: "John Smith",
      type: "Installation",
      status: "in-progress",
      time: "2:00 PM",
      address: "456 Pine Ave",
    },
    {
      id: 3,
      customer: "Emily Rodriguez",
      technician: "Lisa Wong",
      type: "Site Survey",
      status: "completed",
      time: "9:00 AM",
      address: "789 Elm Drive",
    },
  ]

  const customers = [
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah.j@email.com",
      phone: "+1 (555) 123-4567",
      address: "123 Oak Street, Austin, TX 78701",
      vehicle: "Tesla Model 3",
      dealership: "Tesla Austin Downtown",
      referralSA: "Michael Wong",
      package: "Premium - 7.4kW Single Phase", // Added package field
      status: "active",
      siteVisits: [
        {
          id: 1,
          date: "2024-01-15",
          technician: "John Smith",
          phase: "Single Phase",
          tnbFuse: "63A",
          voltage: "240V",
          current: "32A",
          chargingPower: "7.4kW",
          cableLength: "15m",
          additionalItems: ["TNB Fuse Upgrade", "Concealed Cabling", "Metal Cable Tray"],
          notes: "Customer prefers wall-mounted charger near garage entrance",
          status: "completed",
          images: [
            { id: 1, label: "Main Panel", url: "/electrical-main-panel.jpg" },
            { id: 2, label: "Installation Area", url: "/garage-wall-installation-area.jpg" },
            { id: 3, label: "Cable Route", url: "/cable-routing-path.jpg" },
            { id: 4, label: "Meter Reading", url: "/electrical-meter-reading.jpg" },
          ],
        },
      ],
      installations: [
        {
          id: 1,
          date: "2024-01-22",
          technician: "John Smith",
          chargerModel: "Tesla Wall Connector Gen 3",
          power: "7.4kW",
          cableLength: "15m",
          testResults: "All tests passed",
          status: "completed",
          images: [
            { id: 1, label: "Installed Charger", url: "/ev-wall-charger-installed.jpg" },
            { id: 2, label: "Cable Management", url: "/cable-management-tray.jpg" },
            { id: 3, label: "Final Setup", url: "/complete-ev-charger-setup.jpg" },
            { id: 4, label: "Test Results", url: "/electrical-testing-equipment.jpg" },
          ],
        },
      ],
      warranty: {
        startDate: "2024-01-22",
        endDate: "2026-01-22",
        duration: "2 years",
        status: "active",
        coverage: "Full parts and labor",
      },
      feedback: [
        {
          id: 1,
          date: "2024-01-25",
          rating: 5,
          comment: "Excellent service! Technician was professional and installation was clean.",
        },
      ],
    },
    {
      id: 2,
      name: "Mike Chen",
      email: "mike.chen@email.com",
      phone: "+1 (555) 234-5678",
      address: "456 Pine Ave, Austin, TX 78702",
      vehicle: "BMW i4",
      dealership: "BMW of Austin",
      referralSA: "Sarah Martinez",
      package: "Business - 22kW Three Phase", // Added package field
      status: "in-progress",
      siteVisits: [
        {
          id: 1,
          date: "2024-01-18",
          technician: "Lisa Wong",
          phase: "Three Phase",
          tnbFuse: "100A",
          voltage: "415V",
          current: "32A",
          chargingPower: "22kW",
          cableLength: "20m",
          additionalItems: ["Three Phase Installation", "Concealed Cabling", "Metal Cable Tray", "Earth Pit"],
          notes: "Requires three-phase installation for faster charging",
          status: "completed",
          images: [
            { id: 1, label: "Three Phase Panel", url: "/three-phase-electrical-panel.jpg" },
            { id: 2, label: "Installation Site", url: "/commercial-garage-space.jpg" },
            { id: 3, label: "Earth Pit Location", url: "/earth-pit-grounding.jpg" },
          ],
        },
      ],
      installations: [],
      warranty: null,
      feedback: [],
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      email: "emily.r@email.com",
      phone: "+1 (555) 345-6789",
      address: "789 Elm Drive, Austin, TX 78703",
      vehicle: "Nissan Leaf",
      dealership: "Nissan Central Texas",
      referralSA: "David Lee",
      package: "Standard - 3.7kW Single Phase", // Added package field
      status: "pending",
      siteVisits: [],
      installations: [],
      warranty: null,
      feedback: [],
    },
  ]

  const technicians = [
    { id: 1, name: "John Smith", status: "active", jobs: 3, location: "Downtown Austin", rating: 4.8 },
    { id: 2, name: "Lisa Wong", status: "active", jobs: 2, location: "North Austin", rating: 4.9 },
    { id: 3, name: "Mike Johnson", status: "offline", jobs: 0, location: "South Austin", rating: 4.7 },
  ]

  const getWarrantyStatusBadge = (warranty: any) => {
    if (!warranty) return <Badge variant="outline">No Warranty</Badge>
    if (warranty.status === "active") return <Badge className="bg-success text-white">Active</Badge>
    if (warranty.status === "expired") return <Badge variant="destructive">Expired</Badge>
    return <Badge variant="outline">{warranty.status}</Badge>
  }

  const getStockStatusBadge = (item: any) => {
    if (item.currentStock <= item.minStock) {
      return <Badge variant="destructive">Low Stock</Badge>
    }
    if (item.currentStock <= item.minStock * 1.5) {
      return <Badge className="bg-warning text-white">Warning</Badge>
    }
    return <Badge className="bg-success text-white">In Stock</Badge>
  }

  const ImageModal = ({ imageUrl, onClose }: { imageUrl: string; onClose: () => void }) => (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="relative max-w-4xl w-full">
        <Button
          variant="ghost"
          size="icon"
          className="absolute -top-12 right-0 text-white hover:bg-white/20"
          onClick={onClose}
        >
          <X className="h-6 w-6" />
        </Button>
        <img
          src={imageUrl || "/placeholder.svg"}
          alt="Full size view"
          className="w-full h-auto rounded-lg"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </div>
  )

  return (
    <div className="bg-background text-foreground min-h-screen">
      {selectedImage && <ImageModal imageUrl={selectedImage} onClose={() => setSelectedImage(null)} />}

      {/* Header */}
      <div className="bg-card border-b border-border p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Zap className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-2xl font-bold">EV-Connect Pro</h1>
              <p className="text-muted-foreground">Manager Dashboard</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button size="sm">
              <Plus className="h-4 w-4 mr-2" />
              New Job
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex gap-2">
          {[
            { key: "overview", label: "Overview" },
            { key: "schedule", label: "Schedule" },
            { key: "customers", label: "Customers" },
            { key: "technicians", label: "Technicians" },
            { key: "inventory", label: "Inventory" },
            { key: "analytics", label: "Analytics" },
          ].map((tab) => (
            <Button
              key={tab.key}
              variant={activeTab === tab.key ? "default" : "ghost"}
              onClick={() => setActiveTab(tab.key as any)}
            >
              {tab.label}
            </Button>
          ))}
        </div>
      </div>

      <div className="p-6">
        {activeTab === "overview" && (
          <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Today's Jobs</p>
                      <p className="text-2xl font-bold">12</p>
                    </div>
                    <Calendar className="h-8 w-8 text-primary" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Active Technicians</p>
                      <p className="text-2xl font-bold">8</p>
                    </div>
                    <Users className="h-8 w-8 text-success" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Completion Rate</p>
                      <p className="text-2xl font-bold">94%</p>
                    </div>
                    <TrendingUp className="h-8 w-8 text-primary" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Issues</p>
                      <p className="text-2xl font-bold">2</p>
                    </div>
                    <AlertTriangle className="h-8 w-8 text-warning" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Jobs</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {jobs.slice(0, 5).map((job) => (
                      <div key={job.id} className="flex items-center justify-between p-3 rounded-lg bg-secondary/50">
                        <div className="flex items-center gap-3">
                          <div className={`status-indicator status-${job.status}`}></div>
                          <div>
                            <div className="font-medium text-sm">{job.customer}</div>
                            <div className="text-xs text-muted-foreground">
                              {job.type} - {job.technician}
                            </div>
                          </div>
                        </div>
                        <Badge variant="outline">{job.status}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Technician Status</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {technicians.map((tech) => (
                      <div key={tech.id} className="flex items-center justify-between p-3 rounded-lg bg-secondary/50">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-3 h-3 rounded-full ${tech.status === "active" ? "bg-success" : "bg-muted-foreground"}`}
                          ></div>
                          <div>
                            <div className="font-medium text-sm">{tech.name}</div>
                            <div className="text-xs text-muted-foreground">
                              {tech.location} - {tech.jobs} jobs
                            </div>
                          </div>
                        </div>
                        <div className="text-xs text-muted-foreground">★ {tech.rating}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeTab === "schedule" && (
          <div className="space-y-6">
            {/* Calendar Header */}
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">Schedule Management</h2>
              <div className="flex gap-2">
                <Button variant="outline">Today</Button>
                <Button variant="outline">Week</Button>
                <Button>Month</Button>
              </div>
            </div>

            {/* Schedule Grid */}
            <Card>
              <CardHeader>
                <CardTitle>Today's Schedule</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {jobs.map((job) => (
                    <div key={job.id} className="flex items-center gap-4 p-4 rounded-lg border border-border">
                      <div className="text-sm font-mono text-muted-foreground min-w-[60px]">{job.time}</div>
                      <div className="flex-1">
                        <div className="font-medium">{job.customer}</div>
                        <div className="text-sm text-muted-foreground">
                          {job.type} - {job.address}
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground">{job.technician}</div>
                      <Badge variant={job.status === "completed" ? "default" : "outline"}>{job.status}</Badge>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === "customers" && (
          <div className="space-y-6">
            {/* Search and Filter */}
            <div className="flex gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search customers..." className="pl-10" />
              </div>
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                New Customer
              </Button>
            </div>

            <div className="space-y-4">
              {customers.map((customer) => (
                <Card key={customer.id}>
                  <CardContent className="p-0">
                    {/* Customer Header - Always Visible */}
                    <div
                      className="flex items-center gap-4 p-4 cursor-pointer hover:bg-secondary/50 transition-colors"
                      onClick={() => setExpandedCustomer(expandedCustomer === customer.id ? null : customer.id)}
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="font-semibold text-lg">{customer.name}</h3>
                          <Badge
                            variant={
                              customer.status === "active"
                                ? "default"
                                : customer.status === "in-progress"
                                  ? "outline"
                                  : "secondary"
                            }
                          >
                            {customer.status}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {customer.address}
                          </span>
                          <span className="flex items-center gap-1">
                            <Car className="h-3 w-3" />
                            {customer.vehicle}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon" onClick={(e) => e.stopPropagation()}>
                          <Phone className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" onClick={(e) => e.stopPropagation()}>
                          <Mail className="h-4 w-4" />
                        </Button>
                        {expandedCustomer === customer.id ? (
                          <ChevronUp className="h-5 w-5 text-muted-foreground" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-muted-foreground" />
                        )}
                      </div>
                    </div>

                    {/* Expanded Customer Details */}
                    {expandedCustomer === customer.id && (
                      <div className="border-t border-border p-6 space-y-6 bg-secondary/20">
                        {/* Contact & Vehicle Information Group */}
                        <div className="space-y-3">
                          <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide flex items-center gap-2">
                            <Users className="h-4 w-4" />
                            Contact & Vehicle Information
                          </h4>

                          <div className="p-5 bg-card rounded-lg border border-border space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {/* Email */}
                              <div className="flex items-center gap-3">
                                <div className="p-2 bg-primary/10 rounded-lg">
                                  <Mail className="h-4 w-4 text-primary" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <p className="text-xs text-muted-foreground">Email Address</p>
                                  <p className="text-sm font-medium truncate">{customer.email}</p>
                                </div>
                              </div>

                              {/* Phone */}
                              <div className="flex items-center gap-3">
                                <div className="p-2 bg-primary/10 rounded-lg">
                                  <Phone className="h-4 w-4 text-primary" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <p className="text-xs text-muted-foreground">Phone Number</p>
                                  <p className="text-sm font-medium">{customer.phone}</p>
                                </div>
                              </div>

                              {/* Vehicle */}
                              <div className="flex items-center gap-3">
                                <div className="p-2 bg-primary/10 rounded-lg">
                                  <Car className="h-4 w-4 text-primary" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <p className="text-xs text-muted-foreground">Vehicle Model</p>
                                  <p className="text-sm font-medium">{customer.vehicle}</p>
                                </div>
                              </div>

                              {/* Dealership */}
                              <div className="flex items-center gap-3">
                                <div className="p-2 bg-primary/10 rounded-lg">
                                  <Building2 className="h-4 w-4 text-primary" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <p className="text-xs text-muted-foreground">Dealership</p>
                                  <p className="text-sm font-medium">{customer.dealership}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Business Information Group */}
                        <div className="space-y-3">
                          <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide flex items-center gap-2">
                            <TrendingUp className="h-4 w-4" />
                            Business Information
                          </h4>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Selected Package */}
                            <div className="p-5 bg-card rounded-lg border-2 border-primary/20 hover:border-primary/40 transition-colors">
                              <div className="flex items-start gap-3">
                                <div className="p-2 bg-primary/10 rounded-lg">
                                  <Package className="h-5 w-5 text-primary" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <p className="text-xs text-muted-foreground mb-1">Selected Package</p>
                                  <p className="text-base font-semibold text-primary">{customer.package}</p>
                                </div>
                              </div>
                            </div>

                            {/* Referral Sales Advisor */}
                            <div className="p-5 bg-card rounded-lg border-2 border-success/20 hover:border-success/40 transition-colors">
                              <div className="flex items-start gap-3">
                                <div className="p-2 bg-success/10 rounded-lg">
                                  <UserCheck className="h-5 w-5 text-success" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <p className="text-xs text-muted-foreground mb-1">Referral Sales Advisor</p>
                                  <p className="text-base font-semibold text-success">{customer.referralSA}</p>
                                  <p className="text-xs text-muted-foreground mt-1">Commission Eligible</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Site Visit Records - Expandable */}
                        <div className="space-y-2">
                          <div
                            className="flex items-center justify-between p-3 bg-card rounded-lg cursor-pointer hover:bg-secondary/50 transition-colors"
                            onClick={() => setExpandedSiteVisit(expandedSiteVisit === customer.id ? null : customer.id)}
                          >
                            <div className="flex items-center gap-2">
                              <FileText className="h-4 w-4 text-primary" />
                              <span className="font-medium">Site Visit Records</span>
                              <Badge variant="outline">{customer.siteVisits.length}</Badge>
                            </div>
                            {expandedSiteVisit === customer.id ? (
                              <ChevronUp className="h-4 w-4 text-muted-foreground" />
                            ) : (
                              <ChevronDown className="h-4 w-4 text-muted-foreground" />
                            )}
                          </div>

                          {expandedSiteVisit === customer.id && (
                            <div className="space-y-3 pl-4">
                              {customer.siteVisits.length > 0 ? (
                                customer.siteVisits.map((visit) => (
                                  <div key={visit.id} className="p-4 bg-card rounded-lg border border-border space-y-3">
                                    <div className="flex items-center justify-between">
                                      <div className="flex items-center gap-2">
                                        <Calendar className="h-4 w-4 text-muted-foreground" />
                                        <span className="text-sm font-medium">{visit.date}</span>
                                      </div>
                                      <Badge
                                        variant={visit.status === "completed" ? "default" : "outline"}
                                        className="text-xs"
                                      >
                                        {visit.status}
                                      </Badge>
                                    </div>

                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                                      <div>
                                        <p className="text-xs text-muted-foreground">Technician</p>
                                        <p className="font-medium">{visit.technician}</p>
                                      </div>
                                      <div>
                                        <p className="text-xs text-muted-foreground">Phase</p>
                                        <p className="font-medium">{visit.phase}</p>
                                      </div>
                                      <div>
                                        <p className="text-xs text-muted-foreground">TNB Fuse</p>
                                        <p className="font-medium">{visit.tnbFuse}</p>
                                      </div>
                                      <div>
                                        <p className="text-xs text-muted-foreground">Voltage</p>
                                        <p className="font-medium">{visit.voltage}</p>
                                      </div>
                                      <div>
                                        <p className="text-xs text-muted-foreground">Current</p>
                                        <p className="font-medium">{visit.current}</p>
                                      </div>
                                      <div>
                                        <p className="text-xs text-muted-foreground">Charging Power</p>
                                        <p className="font-medium">{visit.chargingPower}</p>
                                      </div>
                                      <div>
                                        <p className="text-xs text-muted-foreground">Cable Length</p>
                                        <p className="font-medium">{visit.cableLength}</p>
                                      </div>
                                    </div>

                                    {visit.additionalItems.length > 0 && (
                                      <div>
                                        <p className="text-xs text-muted-foreground mb-2">Additional Items</p>
                                        <div className="flex flex-wrap gap-2">
                                          {visit.additionalItems.map((item, idx) => (
                                            <Badge key={idx} variant="secondary" className="text-xs">
                                              {item}
                                            </Badge>
                                          ))}
                                        </div>
                                      </div>
                                    )}

                                    {visit.notes && (
                                      <div>
                                        <p className="text-xs text-muted-foreground mb-1">Notes</p>
                                        <p className="text-sm">{visit.notes}</p>
                                      </div>
                                    )}

                                    {visit.images && visit.images.length > 0 && (
                                      <div className="pt-3 border-t border-border">
                                        <div className="flex items-center gap-2 mb-3">
                                          <ImageIcon className="h-4 w-4 text-primary" />
                                          <span className="text-sm font-medium">Site Images</span>
                                          <Badge variant="secondary" className="text-xs">
                                            {visit.images.length}
                                          </Badge>
                                        </div>
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                          {visit.images.map((image) => (
                                            <div
                                              key={image.id}
                                              className="group relative aspect-video rounded-lg overflow-hidden border border-border cursor-pointer hover:border-primary transition-colors"
                                              onClick={() => setSelectedImage(image.url)}
                                            >
                                              <img
                                                src={image.url || "/placeholder.svg"}
                                                alt={image.label}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                                              />
                                              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                                                <ImageIcon className="h-6 w-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                                              </div>
                                              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2">
                                                <p className="text-xs text-white font-medium">{image.label}</p>
                                              </div>
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                ))
                              ) : (
                                <div className="p-4 bg-card rounded-lg border border-dashed border-border text-center text-sm text-muted-foreground">
                                  No site visit records yet
                                </div>
                              )}
                            </div>
                          )}
                        </div>

                        {/* Installation Records - Expandable */}
                        <div className="space-y-2">
                          <div
                            className="flex items-center justify-between p-3 bg-card rounded-lg cursor-pointer hover:bg-secondary/50 transition-colors"
                            onClick={() =>
                              setExpandedInstallation(expandedInstallation === customer.id ? null : customer.id)
                            }
                          >
                            <div className="flex items-center gap-2">
                              <Zap className="h-4 w-4 text-primary" />
                              <span className="font-medium">Installation Records</span>
                              <Badge variant="outline">{customer.installations.length}</Badge>
                            </div>
                            {expandedInstallation === customer.id ? (
                              <ChevronUp className="h-4 w-4 text-muted-foreground" />
                            ) : (
                              <ChevronDown className="h-4 w-4 text-muted-foreground" />
                            )}
                          </div>

                          {expandedInstallation === customer.id && (
                            <div className="space-y-3 pl-4">
                              {customer.installations.length > 0 ? (
                                customer.installations.map((installation) => (
                                  <div
                                    key={installation.id}
                                    className="p-4 bg-card rounded-lg border border-border space-y-3"
                                  >
                                    <div className="flex items-center justify-between">
                                      <div className="flex items-center gap-2">
                                        <Calendar className="h-4 w-4 text-muted-foreground" />
                                        <span className="text-sm font-medium">{installation.date}</span>
                                      </div>
                                      <Badge
                                        variant={installation.status === "completed" ? "default" : "outline"}
                                        className="text-xs"
                                      >
                                        {installation.status}
                                      </Badge>
                                    </div>

                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                                      <div>
                                        <p className="text-xs text-muted-foreground">Technician</p>
                                        <p className="font-medium">{installation.technician}</p>
                                      </div>
                                      <div>
                                        <p className="text-xs text-muted-foreground">Charger Model</p>
                                        <p className="font-medium">{installation.chargerModel}</p>
                                      </div>
                                      <div>
                                        <p className="text-xs text-muted-foreground">Power</p>
                                        <p className="font-medium">{installation.power}</p>
                                      </div>
                                      <div>
                                        <p className="text-xs text-muted-foreground">Cable Length</p>
                                        <p className="font-medium">{installation.cableLength}</p>
                                      </div>
                                      <div className="col-span-2 md:col-span-3">
                                        <p className="text-xs text-muted-foreground">Test Results</p>
                                        <p className="font-medium flex items-center gap-1">
                                          <CheckCircle className="h-3 w-3 text-success" />
                                          {installation.testResults}
                                        </p>
                                      </div>
                                    </div>

                                    {installation.images && installation.images.length > 0 && (
                                      <div className="pt-3 border-t border-border">
                                        <div className="flex items-center gap-2 mb-3">
                                          <ImageIcon className="h-4 w-4 text-primary" />
                                          <span className="text-sm font-medium">Installation Images</span>
                                          <Badge variant="secondary" className="text-xs">
                                            {installation.images.length}
                                          </Badge>
                                        </div>
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                          {installation.images.map((image) => (
                                            <div
                                              key={image.id}
                                              className="group relative aspect-video rounded-lg overflow-hidden border border-border cursor-pointer hover:border-primary transition-colors"
                                              onClick={() => setSelectedImage(image.url)}
                                            >
                                              <img
                                                src={image.url || "/placeholder.svg"}
                                                alt={image.label}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                                              />
                                              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                                                <ImageIcon className="h-6 w-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                                              </div>
                                              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2">
                                                <p className="text-xs text-white font-medium">{image.label}</p>
                                              </div>
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                ))
                              ) : (
                                <div className="p-4 bg-card rounded-lg border border-dashed border-border text-center text-sm text-muted-foreground">
                                  No installation records yet
                                </div>
                              )}
                            </div>
                          )}
                        </div>

                        {/* Warranty Tracking */}
                        <div className="p-4 bg-card rounded-lg space-y-3">
                          <div className="flex items-center gap-2 mb-2">
                            <Shield className="h-4 w-4 text-primary" />
                            <span className="font-medium">Warranty Information</span>
                          </div>

                          {customer.warranty ? (
                            <div className="space-y-3">
                              <div className="flex items-center justify-between">
                                <span className="text-sm text-muted-foreground">Status</span>
                                {getWarrantyStatusBadge(customer.warranty)}
                              </div>
                              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                                <div>
                                  <p className="text-xs text-muted-foreground">Start Date</p>
                                  <p className="font-medium">{customer.warranty.startDate}</p>
                                </div>
                                <div>
                                  <p className="text-xs text-muted-foreground">End Date</p>
                                  <p className="font-medium">{customer.warranty.endDate}</p>
                                </div>
                                <div>
                                  <p className="text-xs text-muted-foreground">Duration</p>
                                  <p className="font-medium">{customer.warranty.duration}</p>
                                </div>
                                <div className="col-span-2 md:col-span-3">
                                  <p className="text-xs text-muted-foreground">Coverage</p>
                                  <p className="font-medium">{customer.warranty.coverage}</p>
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div className="p-3 bg-secondary/50 rounded-lg text-center text-sm text-muted-foreground">
                              No warranty information available
                            </div>
                          )}
                        </div>

                        {/* Customer Feedback */}
                        <div className="p-4 bg-card rounded-lg space-y-3">
                          <div className="flex items-center gap-2 mb-2">
                            <MessageSquare className="h-4 w-4 text-primary" />
                            <span className="font-medium">Customer Feedback</span>
                            <Badge variant="outline">{customer.feedback.length}</Badge>
                          </div>

                          {customer.feedback.length > 0 ? (
                            <div className="space-y-3">
                              {customer.feedback.map((feedback) => (
                                <div key={feedback.id} className="p-3 bg-secondary/50 rounded-lg space-y-2">
                                  <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                      {[...Array(5)].map((_, i) => (
                                        <span
                                          key={i}
                                          className={`text-sm ${i < feedback.rating ? "text-yellow-500" : "text-muted-foreground"}`}
                                        >
                                          ★
                                        </span>
                                      ))}
                                    </div>
                                    <span className="text-sm font-medium">{feedback.rating}/5</span>
                                  </div>
                                  <p className="text-sm">{feedback.comment}</p>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <div className="p-3 bg-secondary/50 rounded-lg text-center text-sm text-muted-foreground">
                              No feedback yet
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === "technicians" && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold">Technician Management</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technicians.map((tech) => (
                <Card key={tech.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-3 h-3 rounded-full ${tech.status === "active" ? "bg-success" : "bg-muted-foreground"}`}
                        ></div>
                        <div className="font-medium">{tech.name}</div>
                      </div>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-3 w-3" />
                        {tech.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-3 w-3" />
                        {tech.jobs} jobs today
                      </div>
                      <div className="flex items-center gap-2">
                        <TrendingUp className="h-3 w-3" />
                        {tech.rating} rating
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === "inventory" && (
          <div className="space-y-6">
            {/* Inventory Header */}
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold">Inventory Management</h2>
                <p className="text-sm text-muted-foreground">Track stock levels and material usage per job</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Item
                </Button>
              </div>
            </div>

            {/* Inventory Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-muted-foreground">Total Items</p>
                      <p className="text-2xl font-bold">{inventoryItems.length}</p>
                    </div>
                    <PackageOpen className="h-6 w-6 text-primary" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-muted-foreground">Low Stock Items</p>
                      <p className="text-2xl font-bold text-destructive">
                        {inventoryItems.filter((item) => item.currentStock <= item.minStock).length}
                      </p>
                    </div>
                    <AlertTriangle className="h-6 w-6 text-destructive" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-muted-foreground">Warning Level</p>
                      <p className="text-2xl font-bold text-warning">
                        {
                          inventoryItems.filter(
                            (item) => item.currentStock > item.minStock && item.currentStock <= item.minStock * 1.5,
                          ).length
                        }
                      </p>
                    </div>
                    <TrendingUp className="h-6 w-6 text-warning" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-muted-foreground">Categories</p>
                      <p className="text-2xl font-bold">{new Set(inventoryItems.map((item) => item.category)).size}</p>
                    </div>
                    <Package className="h-6 w-6 text-success" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Search Bar */}
            <div className="flex gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search inventory items..." className="pl-10" />
              </div>
            </div>

            {/* Inventory Items by Category */}
            {["Chargers", "Electrical Components", "Cables", "Installation Materials"].map((category) => (
              <div key={category} className="space-y-3">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold">{category}</h3>
                  <Badge variant="outline">
                    {inventoryItems.filter((item) => item.category === category).length} items
                  </Badge>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  {inventoryItems
                    .filter((item) => item.category === category)
                    .map((item) => (
                      <Card key={item.id}>
                        <CardContent className="p-0">
                          {/* Item Header */}
                          <div
                            className="flex items-center gap-4 p-4 cursor-pointer hover:bg-secondary/50 transition-colors"
                            onClick={() => setExpandedInventoryItem(expandedInventoryItem === item.id ? null : item.id)}
                          >
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-1">
                                <h4 className="font-semibold">{item.name}</h4>
                                {getStockStatusBadge(item)}
                              </div>
                              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                <span>SKU: {item.sku}</span>
                                <span className="flex items-center gap-1">
                                  <Package className="h-3 w-3" />
                                  {item.currentStock} {item.unit}
                                </span>
                                <span className="text-xs">
                                  Min: {item.minStock} {item.unit}
                                </span>
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="text-right">
                                <p className="text-xs text-muted-foreground">Used in</p>
                                <p className="text-sm font-semibold">{item.usageHistory.length} jobs</p>
                              </div>
                              <Button variant="ghost" size="icon" onClick={(e) => e.stopPropagation()}>
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                              {expandedInventoryItem === item.id ? (
                                <ChevronUp className="h-5 w-5 text-muted-foreground" />
                              ) : (
                                <ChevronDown className="h-5 w-5 text-muted-foreground" />
                              )}
                            </div>
                          </div>

                          {/* Expanded Item Details */}
                          {expandedInventoryItem === item.id && (
                            <div className="border-t border-border p-6 space-y-4 bg-secondary/20">
                              {/* Stock Information */}
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="p-4 bg-card rounded-lg border border-border">
                                  <p className="text-xs text-muted-foreground mb-1">Current Stock</p>
                                  <p className="text-2xl font-bold text-primary">
                                    {item.currentStock} {item.unit}
                                  </p>
                                </div>
                                <div className="p-4 bg-card rounded-lg border border-border">
                                  <p className="text-xs text-muted-foreground mb-1">Minimum Stock</p>
                                  <p className="text-2xl font-bold">
                                    {item.minStock} {item.unit}
                                  </p>
                                </div>
                                <div className="p-4 bg-card rounded-lg border border-border">
                                  <p className="text-xs text-muted-foreground mb-1">Total Used</p>
                                  <p className="text-2xl font-bold text-destructive">
                                    {item.usageHistory.reduce((sum, usage) => sum + usage.quantity, 0)} {item.unit}
                                  </p>
                                </div>
                              </div>

                              {/* Usage History */}
                              <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                  <History className="h-4 w-4 text-primary" />
                                  <span className="font-medium">Usage History</span>
                                  <Badge variant="outline">{item.usageHistory.length}</Badge>
                                </div>

                                {item.usageHistory.length > 0 ? (
                                  <div className="space-y-2">
                                    {item.usageHistory.map((usage, idx) => (
                                      <div
                                        key={idx}
                                        className="flex items-center justify-between p-3 bg-card rounded-lg border border-border"
                                      >
                                        <div className="flex items-center gap-3">
                                          <div className="p-2 bg-destructive/10 rounded-lg">
                                            <Minus className="h-4 w-4 text-destructive" />
                                          </div>
                                          <div>
                                            <p className="text-sm font-medium">{usage.customer}</p>
                                            <p className="text-xs text-muted-foreground">
                                              Job #{usage.jobId} - {usage.type}
                                            </p>
                                          </div>
                                        </div>
                                        <div className="text-right">
                                          <p className="text-sm font-semibold text-destructive">
                                            -{usage.quantity} {item.unit}
                                          </p>
                                          <p className="text-xs text-muted-foreground">{usage.date}</p>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                ) : (
                                  <div className="p-4 bg-card rounded-lg border border-dashed border-border text-center text-sm text-muted-foreground">
                                    No usage history yet
                                  </div>
                                )}
                              </div>

                              {/* Quick Actions */}
                              <div className="flex gap-2 pt-2">
                                <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                                  <Plus className="h-3 w-3 mr-2" />
                                  Add Stock
                                </Button>
                                <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                                  <Minus className="h-3 w-3 mr-2" />
                                  Remove Stock
                                </Button>
                                <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                                  <FileText className="h-3 w-3 mr-2" />
                                  View Report
                                </Button>
                              </div>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "analytics" && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold">Analytics & Reports</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Performance Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Jobs Completed</span>
                      <span className="font-bold">156</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Average Rating</span>
                      <span className="font-bold">4.8</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Response Time</span>
                      <span className="font-bold">2.3h</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Revenue Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">This Month</span>
                      <span className="font-bold text-primary">$45,200</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Last Month</span>
                      <span className="font-bold">$38,900</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Growth</span>
                      <span className="font-bold text-success">+16.2%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
