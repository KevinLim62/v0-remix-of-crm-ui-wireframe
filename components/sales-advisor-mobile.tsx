"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Phone,
  MessageSquare,
  Calendar,
  ChevronRight,
  Bell,
  Search,
  Filter,
  Plus,
  MapPin,
  Clock,
  User,
  ArrowLeft,
  Check,
  X,
  Zap,
  ChevronDown,
  ChevronUp,
  Mail,
  Car,
  Building,
  UserCheck,
  Package,
  FileText,
  Wrench,
  Shield,
  Star,
  ImageIcon,
} from "lucide-react"

export default function SalesAdvisorMobile() {
  const [currentView, setCurrentView] = useState<"dashboard" | "leads" | "schedule" | "products" | "lead-detail">(
    "dashboard",
  )
  const [selectedLead, setSelectedLead] = useState<any>(null)
  const [showNewLeadModal, setShowNewLeadModal] = useState(false)

  const leads = [
    {
      id: 1,
      name: "Sarah Johnson",
      phone: "+1 (555) 123-4567",
      email: "sarah.j@email.com",
      car: "Tesla Model 3",
      dealer: "Tesla Downtown",
      status: "installation-complete",
      priority: "high",
      address: "123 Oak Street, Austin, TX",
      package: "Premium Package",
      referralSA: "Alex Thompson",
      siteVisit: {
        date: "2024-01-15",
        technician: "John Smith",
        phase: "Single Phase",
        voltage: "240V",
        current: "100A",
        chargingPower: "11kW",
        cableLength: "15m",
        additionalItems: ["RCCB 40A", "Cable Tray 3m", "MCB 40A"],
        images: 4,
      },
      installation: {
        date: "2024-01-22",
        technician: "Mike Wilson",
        chargerModel: "Tesla Wall Connector",
        power: "11.5kW",
        cableLength: "15m",
        testResults: "All Passed",
        images: 5,
      },
      warranty: {
        status: "Active",
        startDate: "2024-01-22",
        endDate: "2027-01-22",
        coverage: "3 Years Full Coverage",
      },
      feedback: {
        rating: 5,
        comment: "Excellent service! The installation was quick and professional.",
        date: "2024-01-25",
      },
    },
    {
      id: 2,
      name: "Mike Chen",
      phone: "+1 (555) 987-6543",
      email: "mike.chen@email.com",
      car: "BMW iX",
      dealer: "BMW Central",
      status: "site-survey-complete",
      priority: "medium",
      address: "456 Pine Ave, Austin, TX",
      package: "Standard Package",
      referralSA: "Alex Thompson",
      siteVisit: {
        date: "2024-01-20",
        technician: "John Smith",
        phase: "Three Phase",
        voltage: "415V",
        current: "63A",
        chargingPower: "22kW",
        cableLength: "20m",
        additionalItems: ["RCCB 63A", "Cable Tray 5m", "MCB 63A", "Surge Protector"],
        images: 3,
      },
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      phone: "+1 (555) 456-7890",
      email: "emily.r@email.com",
      car: "Audi e-tron",
      dealer: "Audi North",
      status: "scheduled",
      priority: "high",
      address: "789 Elm Drive, Austin, TX",
      package: "Premium Package",
      referralSA: "Alex Thompson",
    },
  ]

  if (currentView === "lead-detail" && selectedLead) {
    return <LeadDetailView lead={selectedLead} onBack={() => setCurrentView("leads")} />
  }

  return (
    <div className="bg-background text-foreground min-h-screen relative">
      {/* Header */}
      <div className="bg-card border-b border-border p-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-xl font-bold">Sales Dashboard</h1>
            <p className="text-sm text-muted-foreground">Good morning, Alex</p>
          </div>
          <div className="relative">
            <Bell className="h-6 w-6 text-muted-foreground" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-destructive rounded-full"></div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-2">
          {[
            { key: "dashboard", label: "Overview" },
            { key: "leads", label: "Leads" },
            { key: "schedule", label: "Schedule" },
            { key: "products", label: "Products" },
          ].map((tab) => (
            <Button
              key={tab.key}
              variant={currentView === tab.key ? "default" : "ghost"}
              size="sm"
              onClick={() => setCurrentView(tab.key as any)}
              className="text-xs"
            >
              {tab.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {currentView === "dashboard" && (
          <div className="space-y-4">
            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-primary">12</div>
                  <div className="text-xs text-muted-foreground">New Leads</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-success">8</div>
                  <div className="text-xs text-muted-foreground">Scheduled</div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {leads.slice(0, 3).map((lead) => (
                  <div key={lead.id} className="flex items-center gap-3 p-2 rounded-lg bg-secondary/50">
                    <div className={`status-indicator status-${lead.status}`}></div>
                    <div className="flex-1">
                      <div className="text-sm font-medium">{lead.name}</div>
                      <div className="text-xs text-muted-foreground">{lead.car}</div>
                    </div>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        )}

        {currentView === "leads" && (
          <div className="space-y-4">
            {/* Search and Filter */}
            <div className="flex gap-2">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search leads..." className="pl-10" />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>

            {/* Lead Cards */}
            <div className="space-y-3">
              {leads.map((lead) => (
                <Card
                  key={lead.id}
                  className="card-swipe cursor-pointer"
                  onClick={() => {
                    setSelectedLead(lead)
                    setCurrentView("lead-detail")
                  }}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <div className="font-medium">{lead.name}</div>
                        <div className="text-sm text-muted-foreground">{lead.car}</div>
                      </div>
                      <Badge variant={lead.status === "new" ? "default" : "secondary"}>{lead.status}</Badge>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {lead.dealer}
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        {lead.priority}
                      </div>
                    </div>
                    <div className="flex gap-2 mt-3">
                      <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                        <Phone className="h-3 w-3 mr-1" />
                        Call
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                        <MessageSquare className="h-3 w-3 mr-1" />
                        Message
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {currentView === "schedule" && (
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Today's Schedule</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50">
                  <Clock className="h-4 w-4 text-primary" />
                  <div className="flex-1">
                    <div className="text-sm font-medium">Site Visit - Emily Rodriguez</div>
                    <div className="text-xs text-muted-foreground">10:00 AM - 789 Elm Drive</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50">
                  <Clock className="h-4 w-4 text-warning" />
                  <div className="flex-1">
                    <div className="text-sm font-medium">Follow-up Call - Mike Chen</div>
                    <div className="text-xs text-muted-foreground">2:00 PM - Phone call</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {currentView === "products" && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-4">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                      <Zap className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">Premium Home Charger</div>
                      <div className="text-sm text-muted-foreground">Level 2, 40A, WiFi enabled</div>
                      <div className="text-lg font-bold text-primary">$899</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                      <Plus className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">Smart Home Integration</div>
                      <div className="text-sm text-muted-foreground">Connect to home automation</div>
                      <div className="text-lg font-bold text-primary">$299</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>

      {/* Floating Action Button */}
      <button
        onClick={() => setShowNewLeadModal(true)}
        className="absolute bottom-6 right-6 w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform z-50"
        aria-label="Add new lead"
      >
        <Plus className="h-6 w-6" />
      </button>

      {/* New Lead Modal */}
      {showNewLeadModal && <NewLeadModal onClose={() => setShowNewLeadModal(false)} />}
    </div>
  )
}

function NewLeadModal({ onClose }: { onClose: () => void }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    carModel: "",
    dealership: "",
    package: "",
    salesAdvisor: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // UI only - no actual logic
    console.log("New lead created:", formData)
    onClose()
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div className="bg-card w-full sm:max-w-lg rounded-t-3xl sm:rounded-2xl shadow-2xl max-h-[90vh] overflow-hidden flex flex-col animate-slide-up">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div>
            <h2 className="text-xl font-bold">New Lead</h2>
            <p className="text-sm text-muted-foreground">Add a new customer</p>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full">
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Form Content */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 space-y-5">
          {/* Customer Information Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
              <User className="h-4 w-4" />
              <span>Customer Information</span>
            </div>

            <div className="space-y-3">
              <div>
                <Label htmlFor="name" className="text-sm font-medium mb-1.5 block">
                  Full Name
                </Label>
                <Input
                  id="name"
                  placeholder="Enter customer name"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className="h-11"
                  required
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-sm font-medium mb-1.5 block">
                  Email Address
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="customer@email.com"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className="h-11 pl-10"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="phone" className="text-sm font-medium mb-1.5 block">
                  Phone Number
                </Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    className="h-11 pl-10"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Vehicle Information Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
              <Car className="h-4 w-4" />
              <span>Vehicle Information</span>
            </div>

            <div className="space-y-3">
              <div>
                <Label htmlFor="carModel" className="text-sm font-medium mb-1.5 block">
                  Car Model
                </Label>
                <div className="relative">
                  <Car className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="carModel"
                    placeholder="e.g., Tesla Model 3"
                    value={formData.carModel}
                    onChange={(e) => handleChange("carModel", e.target.value)}
                    className="h-11 pl-10"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="dealership" className="text-sm font-medium mb-1.5 block">
                  Dealership
                </Label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <select
                    id="dealership"
                    value={formData.dealership}
                    onChange={(e) => handleChange("dealership", e.target.value)}
                    className="h-11 w-full pl-10 pr-4 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring appearance-none"
                    required
                  >
                    <option value="">Select dealership</option>
                    <option value="Tesla Downtown">Tesla Downtown</option>
                    <option value="BMW Central">BMW Central</option>
                    <option value="Audi North">Audi North</option>
                    <option value="Mercedes South">Mercedes South</option>
                    <option value="Porsche West">Porsche West</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

          {/* Business Information Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
              <Package className="h-4 w-4" />
              <span>Business Information</span>
            </div>

            <div className="space-y-3">
              <div>
                <Label htmlFor="package" className="text-sm font-medium mb-1.5 block">
                  Package
                </Label>
                <div className="relative">
                  <Package className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <select
                    id="package"
                    value={formData.package}
                    onChange={(e) => handleChange("package", e.target.value)}
                    className="h-11 w-full pl-10 pr-4 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring appearance-none"
                    required
                  >
                    <option value="">Select package</option>
                    <option value="Basic Package">Basic Package</option>
                    <option value="Standard Package">Standard Package</option>
                    <option value="Premium Package">Premium Package</option>
                    <option value="Enterprise Package">Enterprise Package</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                </div>
              </div>

              <div>
                <Label htmlFor="salesAdvisor" className="text-sm font-medium mb-1.5 block">
                  Assign Sales Advisor
                </Label>
                <div className="relative">
                  <UserCheck className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <select
                    id="salesAdvisor"
                    value={formData.salesAdvisor}
                    onChange={(e) => handleChange("salesAdvisor", e.target.value)}
                    className="h-11 w-full pl-10 pr-4 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring appearance-none"
                    required
                  >
                    <option value="">Select sales advisor</option>
                    <option value="Alex Thompson">Alex Thompson</option>
                    <option value="Sarah Williams">Sarah Williams</option>
                    <option value="Michael Chen">Michael Chen</option>
                    <option value="Emily Rodriguez">Emily Rodriguez</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </form>

        {/* Footer Actions */}
        <div className="p-6 border-t border-border bg-card/50 backdrop-blur-sm">
          <div className="flex gap-3">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1 h-11 bg-transparent">
              Cancel
            </Button>
            <Button type="submit" onClick={handleSubmit} className="flex-1 h-11">
              Create Lead
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

function LeadDetailView({ lead, onBack }: { lead: any; onBack: () => void }) {
  const [expandedSections, setExpandedSections] = useState<{
    siteVisit: boolean
    installation: boolean
    warranty: boolean
    feedback: boolean
  }>({
    siteVisit: false,
    installation: false,
    warranty: false,
    feedback: false,
  })

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const getStatusInfo = () => {
    if (lead.status === "installation-complete") {
      return { label: "Installation Complete", color: "bg-success", textColor: "text-success" }
    } else if (lead.status === "site-survey-complete") {
      return { label: "Site Survey Complete", color: "bg-warning", textColor: "text-warning" }
    } else if (lead.status === "scheduled") {
      return { label: "Scheduled", color: "bg-primary", textColor: "text-primary" }
    } else {
      return { label: "New Lead", color: "bg-muted", textColor: "text-muted-foreground" }
    }
  }

  const statusInfo = getStatusInfo()

  return (
    <div className="bg-background text-foreground min-h-screen pb-20">
      {/* Header */}
      <div className="bg-card border-b border-border p-4 sticky top-0 z-10">
        <div className="flex items-center gap-3 mb-3">
          <Button variant="ghost" size="icon" onClick={onBack}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div className="flex-1">
            <h1 className="text-lg font-bold">{lead.name}</h1>
            <p className="text-sm text-muted-foreground">{lead.car}</p>
          </div>
        </div>

        {/* Status Badge */}
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${statusInfo.color}`}></div>
          <span className={`text-sm font-medium ${statusInfo.textColor}`}>{statusInfo.label}</span>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Contact & Vehicle Information */}
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-semibold">Contact & Vehicle Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid grid-cols-1 gap-3">
              <div className="flex items-center gap-3 p-2 rounded-lg bg-secondary/30">
                <Mail className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                <span className="text-sm">{lead.email}</span>
              </div>
              <div className="flex items-center gap-3 p-2 rounded-lg bg-secondary/30">
                <Phone className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                <span className="text-sm">{lead.phone}</span>
              </div>
              <div className="flex items-center gap-3 p-2 rounded-lg bg-secondary/30">
                <Car className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                <span className="text-sm">{lead.car}</span>
              </div>
              <div className="flex items-center gap-3 p-2 rounded-lg bg-secondary/30">
                <Building className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                <span className="text-sm">{lead.dealer}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Business Information */}
        <div className="grid grid-cols-1 gap-3">
          <Card className="border-primary/30">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Package className="h-5 w-5 text-primary" />
                <div>
                  <div className="text-xs text-muted-foreground">Selected Package</div>
                  <div className="text-sm font-semibold">{lead.package || "Not Selected"}</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-success/30">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <UserCheck className="h-5 w-5 text-success" />
                <div>
                  <div className="text-xs text-muted-foreground">Referral Sales Advisor</div>
                  <div className="text-sm font-semibold">{lead.referralSA}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-3">
          <Button className="gap-2">
            <Phone className="h-4 w-4" />
            Call Customer
          </Button>
          <Button variant="outline" className="gap-2 bg-transparent">
            <MessageSquare className="h-4 w-4" />
            Message
          </Button>
        </div>

        {/* Site Visit Record */}
        {lead.siteVisit && (
          <Card>
            <CardHeader className="cursor-pointer" onClick={() => toggleSection("siteVisit")}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-primary" />
                  <CardTitle className="text-sm font-semibold">Site Visit Record</CardTitle>
                  <Badge variant="secondary" className="text-xs">
                    {lead.siteVisit.date}
                  </Badge>
                </div>
                {expandedSections.siteVisit ? (
                  <ChevronUp className="h-4 w-4 text-muted-foreground" />
                ) : (
                  <ChevronDown className="h-4 w-4 text-muted-foreground" />
                )}
              </div>
            </CardHeader>
            {expandedSections.siteVisit && (
              <CardContent className="space-y-3 pt-0">
                <div className="text-xs text-muted-foreground">Technician: {lead.siteVisit.technician}</div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="p-2 rounded-lg bg-secondary/30">
                    <div className="text-xs text-muted-foreground">Phase</div>
                    <div className="text-sm font-medium">{lead.siteVisit.phase}</div>
                  </div>
                  <div className="p-2 rounded-lg bg-secondary/30">
                    <div className="text-xs text-muted-foreground">Voltage</div>
                    <div className="text-sm font-medium">{lead.siteVisit.voltage}</div>
                  </div>
                  <div className="p-2 rounded-lg bg-secondary/30">
                    <div className="text-xs text-muted-foreground">Current</div>
                    <div className="text-sm font-medium">{lead.siteVisit.current}</div>
                  </div>
                  <div className="p-2 rounded-lg bg-secondary/30">
                    <div className="text-xs text-muted-foreground">Power</div>
                    <div className="text-sm font-medium">{lead.siteVisit.chargingPower}</div>
                  </div>
                </div>

                <div className="p-2 rounded-lg bg-secondary/30">
                  <div className="text-xs text-muted-foreground mb-1">Cable Length</div>
                  <div className="text-sm font-medium">{lead.siteVisit.cableLength}</div>
                </div>

                <div>
                  <div className="text-xs text-muted-foreground mb-2">Additional Items Required</div>
                  <div className="flex flex-wrap gap-1">
                    {lead.siteVisit.additionalItems.map((item: string, idx: number) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2 p-2 rounded-lg bg-primary/10">
                  <ImageIcon className="h-4 w-4 text-primary" />
                  <span className="text-sm">{lead.siteVisit.images} Site Images</span>
                </div>
              </CardContent>
            )}
          </Card>
        )}

        {/* Installation Record */}
        {lead.installation && (
          <Card>
            <CardHeader className="cursor-pointer" onClick={() => toggleSection("installation")}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Wrench className="h-4 w-4 text-success" />
                  <CardTitle className="text-sm font-semibold">Installation Record</CardTitle>
                  <Badge variant="secondary" className="text-xs">
                    {lead.installation.date}
                  </Badge>
                </div>
                {expandedSections.installation ? (
                  <ChevronUp className="h-4 w-4 text-muted-foreground" />
                ) : (
                  <ChevronDown className="h-4 w-4 text-muted-foreground" />
                )}
              </div>
            </CardHeader>
            {expandedSections.installation && (
              <CardContent className="space-y-3 pt-0">
                <div className="text-xs text-muted-foreground">Technician: {lead.installation.technician}</div>

                <div className="grid grid-cols-1 gap-2">
                  <div className="p-2 rounded-lg bg-secondary/30">
                    <div className="text-xs text-muted-foreground">Charger Model</div>
                    <div className="text-sm font-medium">{lead.installation.chargerModel}</div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-2 rounded-lg bg-secondary/30">
                      <div className="text-xs text-muted-foreground">Power</div>
                      <div className="text-sm font-medium">{lead.installation.power}</div>
                    </div>
                    <div className="p-2 rounded-lg bg-secondary/30">
                      <div className="text-xs text-muted-foreground">Cable</div>
                      <div className="text-sm font-medium">{lead.installation.cableLength}</div>
                    </div>
                  </div>
                  <div className="p-2 rounded-lg bg-success/10">
                    <div className="text-xs text-muted-foreground">Test Results</div>
                    <div className="text-sm font-medium text-success">{lead.installation.testResults}</div>
                  </div>
                </div>

                <div className="flex items-center gap-2 p-2 rounded-lg bg-primary/10">
                  <ImageIcon className="h-4 w-4 text-primary" />
                  <span className="text-sm">{lead.installation.images} Installation Images</span>
                </div>
              </CardContent>
            )}
          </Card>
        )}

        {/* Warranty Tracking */}
        {lead.warranty && (
          <Card>
            <CardHeader className="cursor-pointer" onClick={() => toggleSection("warranty")}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-primary" />
                  <CardTitle className="text-sm font-semibold">Warranty</CardTitle>
                  <Badge variant={lead.warranty.status === "Active" ? "default" : "secondary"} className="text-xs">
                    {lead.warranty.status}
                  </Badge>
                </div>
                {expandedSections.warranty ? (
                  <ChevronUp className="h-4 w-4 text-muted-foreground" />
                ) : (
                  <ChevronDown className="h-4 w-4 text-muted-foreground" />
                )}
              </div>
            </CardHeader>
            {expandedSections.warranty && (
              <CardContent className="space-y-2 pt-0">
                <div className="grid grid-cols-2 gap-2">
                  <div className="p-2 rounded-lg bg-secondary/30">
                    <div className="text-xs text-muted-foreground">Start Date</div>
                    <div className="text-sm font-medium">{lead.warranty.startDate}</div>
                  </div>
                  <div className="p-2 rounded-lg bg-secondary/30">
                    <div className="text-xs text-muted-foreground">End Date</div>
                    <div className="text-sm font-medium">{lead.warranty.endDate}</div>
                  </div>
                </div>
                <div className="p-2 rounded-lg bg-primary/10">
                  <div className="text-xs text-muted-foreground">Coverage</div>
                  <div className="text-sm font-medium">{lead.warranty.coverage}</div>
                </div>
              </CardContent>
            )}
          </Card>
        )}

        {/* Customer Feedback */}
        {lead.feedback && (
          <Card>
            <CardHeader className="cursor-pointer" onClick={() => toggleSection("feedback")}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-warning" />
                  <CardTitle className="text-sm font-semibold">Customer Feedback</CardTitle>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3 w-3 ${i < lead.feedback.rating ? "fill-warning text-warning" : "text-muted"}`}
                      />
                    ))}
                  </div>
                </div>
                {expandedSections.feedback ? (
                  <ChevronUp className="h-4 w-4 text-muted-foreground" />
                ) : (
                  <ChevronDown className="h-4 w-4 text-muted-foreground" />
                )}
              </div>
            </CardHeader>
            {expandedSections.feedback && (
              <CardContent className="space-y-2 pt-0">
                <div className="p-3 rounded-lg bg-secondary/30">
                  <p className="text-sm">{lead.feedback.comment}</p>
                </div>
                <div className="text-xs text-muted-foreground">Submitted on {lead.feedback.date}</div>
              </CardContent>
            )}
          </Card>
        )}

        {/* Status Update Actions */}
        {lead.status === "scheduled" && (
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Update Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Button size="sm" variant="outline" className="gap-1 bg-transparent">
                  <Check className="h-3 w-3" />
                  Contacted
                </Button>
                <Button size="sm" variant="outline" className="gap-1 bg-transparent">
                  <Calendar className="h-3 w-3" />
                  Reschedule
                </Button>
                <Button size="sm" variant="outline" className="gap-1 bg-transparent">
                  <X className="h-3 w-3" />
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
