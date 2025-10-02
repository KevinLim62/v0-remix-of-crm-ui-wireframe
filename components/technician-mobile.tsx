"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  MapPin,
  Camera,
  CheckSquare,
  AlertTriangle,
  Navigation,
  Phone,
  Clock,
  ArrowLeft,
  ImageIcon,
  FileText,
  User,
  Home,
  Zap,
  Calendar,
  CheckCircle,
  XCircle,
  AlertCircle,
} from "lucide-react"

export default function TechnicianMobile() {
  const [currentView, setCurrentView] = useState<"dashboard" | "jobs" | "job-detail" | "site-survey" | "installation">(
    "dashboard",
  )
  const [selectedJob, setSelectedJob] = useState<any>(null)

  const jobs = [
    {
      id: 1,
      type: "Site Survey",
      customer: "Sarah Johnson",
      address: "123 Oak Street, Austin, TX 78701",
      time: "10:00 AM",
      phone: "+1 (555) 123-4567",
      email: "sarah.johnson@email.com",
      status: "assigned",
      priority: "high",
      notes: "Tesla Model 3 owner, needs Level 2 charger",
      vehicleInfo: "Tesla Model 3 (2023)",
      estimatedDuration: "2 hours",
      surveyCompleted: false,
      installationCompleted: false,
      surveyData: null,
      houseConditions: {
        propertyType: "Single Family Home",
        constructionYear: "2018",
        electricalPanelAge: "5 years",
        garageType: "Attached 2-car garage",
        parkingLocation: "Driveway",
        accessibilityNotes: "Easy access to electrical panel",
      },
      customerProfile: {
        name: "Sarah Johnson",
        phone: "+1 (555) 123-4567",
        email: "sarah.johnson@email.com",
        preferredContactTime: "Evenings after 6 PM",
        specialRequests: "Prefers weekend installations",
      },
    },
    {
      id: 2,
      type: "Installation",
      customer: "Mike Chen",
      address: "456 Pine Ave, Austin, TX 78702",
      time: "2:00 PM",
      phone: "+1 (555) 987-6543",
      email: "mike.chen@email.com",
      status: "in-progress",
      priority: "medium",
      notes: "BMW iX, premium charger package",
      vehicleInfo: "BMW iX xDrive50 (2024)",
      estimatedDuration: "4 hours",
      surveyCompleted: true,
      installationCompleted: false,
      surveyData: {
        phase: "three",
        tnbFuseSize: "63A",
        chargingPower: "22kW",
        cableLength: "15m",
        voltageReadings: { rn: "240V", yn: "240V", bn: "240V" },
        currentReadings: { r: "12A", y: "11A", b: "13A" },
        additionalItems: {
          tnbFuse: "1",
          mcb63A: "1",
          rccb63A: "1",
          concealedCabling: "15m",
        },
        siteImages: 5,
        customerConfirmed: true,
        surveyDate: "2024-01-15",
      },
      houseConditions: {
        propertyType: "Townhouse",
        constructionYear: "2020",
        electricalPanelAge: "4 years",
        garageType: "Attached single garage",
        parkingLocation: "Garage",
        accessibilityNotes: "Panel located in utility room",
        specialConditions: "Concrete walls require special mounting",
      },
      customerProfile: {
        name: "Mike Chen",
        phone: "+1 (555) 987-6543",
        email: "mike.chen@email.com",
        preferredContactTime: "Weekday mornings",
        specialRequests: "Needs installation completed before weekend",
      },
    },
  ]

  if (currentView === "job-detail" && selectedJob) {
    return (
      <JobDetailView
        job={selectedJob}
        onBack={() => setCurrentView("jobs")}
        onStartWork={() => {
          if (selectedJob.type === "Site Survey") {
            setCurrentView("site-survey")
          } else {
            setCurrentView("installation")
          }
        }}
      />
    )
  }

  if (currentView === "site-survey") {
    return <SiteSurveyView job={selectedJob} onBack={() => setCurrentView("job-detail")} />
  }

  if (currentView === "installation") {
    return <InstallationView job={selectedJob} onBack={() => setCurrentView("job-detail")} />
  }

  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* Header */}
      <div className="bg-card border-b border-border p-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-xl font-bold">Technician Dashboard</h1>
            <p className="text-sm text-muted-foreground">Welcome back, John</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-success rounded-full"></div>
            <span className="text-xs text-muted-foreground">Online</span>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-2">
          {[
            { key: "dashboard", label: "Overview" },
            { key: "jobs", label: "Jobs" },
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
                  <div className="text-2xl font-bold text-primary">3</div>
                  <div className="text-xs text-muted-foreground">Today's Jobs</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-success">12</div>
                  <div className="text-xs text-muted-foreground">Completed</div>
                </CardContent>
              </Card>
            </div>

            {/* Next Job */}
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Next Job</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/10">
                  <Clock className="h-4 w-4 text-primary" />
                  <div className="flex-1">
                    <div className="text-sm font-medium">Site Survey - Sarah Johnson</div>
                    <div className="text-xs text-muted-foreground">10:00 AM - 123 Oak Street</div>
                  </div>
                  <Button size="sm">
                    <Navigation className="h-3 w-3 mr-1" />
                    Navigate
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" className="gap-2 bg-transparent">
                <Camera className="h-4 w-4" />
                Quick Photo
              </Button>
              <Button variant="outline" className="gap-2 bg-transparent">
                <AlertTriangle className="h-4 w-4" />
                Report Issue
              </Button>
            </div>
          </div>
        )}

        {currentView === "jobs" && (
          <div className="space-y-4">
            {/* Job Cards */}
            <div className="space-y-3">
              {jobs.map((job) => (
                <Card
                  key={job.id}
                  className="card-swipe cursor-pointer"
                  onClick={() => {
                    setSelectedJob(job)
                    setCurrentView("job-detail")
                  }}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <div className="font-medium">{job.type}</div>
                        <div className="text-sm text-muted-foreground">{job.customer}</div>
                      </div>
                      <Badge variant={job.status === "assigned" ? "default" : "secondary"}>{job.status}</Badge>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {job.time}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {job.address.split(",")[0]}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                        <Navigation className="h-3 w-3 mr-1" />
                        Navigate
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                        <Phone className="h-3 w-3 mr-1" />
                        Call
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function JobDetailView({ job, onBack, onStartWork }: { job: any; onBack: () => void; onStartWork: () => void }) {
  const [expandedSections, setExpandedSections] = useState({
    propertyDetails: false,
    surveyResults: false,
  })

  const toggleSection = (section: "propertyDetails" | "surveyResults") => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* Header */}
      <div className="bg-card border-b border-border p-4">
        <div className="flex items-center gap-3 mb-4">
          <Button variant="ghost" size="icon" onClick={onBack}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div>
            <h1 className="text-lg font-bold">{job.type}</h1>
            <p className="text-sm text-muted-foreground">{job.customer}</p>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Job Progress */}
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Job Progress</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-3">
              {job.surveyCompleted ? (
                <CheckCircle className="h-4 w-4 text-success" />
              ) : job.type === "Site Survey" ? (
                <AlertCircle className="h-4 w-4 text-warning" />
              ) : (
                <XCircle className="h-4 w-4 text-muted-foreground" />
              )}
              <span className="text-sm">Site Survey</span>
              <Badge variant={job.surveyCompleted ? "default" : job.type === "Site Survey" ? "secondary" : "outline"}>
                {job.surveyCompleted ? "Completed" : job.type === "Site Survey" ? "In Progress" : "Pending"}
              </Badge>
            </div>
            <div className="flex items-center gap-3">
              {job.installationCompleted ? (
                <CheckCircle className="h-4 w-4 text-success" />
              ) : job.type === "Installation" ? (
                <AlertCircle className="h-4 w-4 text-warning" />
              ) : (
                <XCircle className="h-4 w-4 text-muted-foreground" />
              )}
              <span className="text-sm">Installation</span>
              <Badge
                variant={job.installationCompleted ? "default" : job.type === "Installation" ? "secondary" : "outline"}
              >
                {job.installationCompleted ? "Completed" : job.type === "Installation" ? "In Progress" : "Pending"}
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Customer Profile */}
        <Card>
          <CardHeader>
            <CardTitle className="text-sm flex items-center gap-2">
              <User className="h-4 w-4" />
              Customer Profile
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-muted-foreground">Name:</span>
                <div className="font-medium">{job.customerProfile.name}</div>
              </div>
              <div>
                <span className="text-muted-foreground">Phone:</span>
                <div className="font-medium">{job.customerProfile.phone}</div>
              </div>
              <div className="col-span-2">
                <span className="text-muted-foreground">Email:</span>
                <div className="font-medium">{job.customerProfile.email}</div>
              </div>
              <div>
                <span className="text-muted-foreground">Best Contact Time:</span>
                <div className="font-medium">{job.customerProfile.preferredContactTime}</div>
              </div>
              <div>
                <span className="text-muted-foreground">Vehicle:</span>
                <div className="font-medium">{job.vehicleInfo}</div>
              </div>
            </div>
            {job.customerProfile.specialRequests && (
              <div className="p-3 bg-secondary/50 rounded-lg">
                <span className="text-xs text-muted-foreground">Special Requests:</span>
                <div className="text-sm">{job.customerProfile.specialRequests}</div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Property Details - Made expandable with chevron icon */}
        <Card>
          <CardHeader className="cursor-pointer" onClick={() => toggleSection("propertyDetails")}>
            <CardTitle className="text-sm flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Home className="h-4 w-4" />
                Property Details
              </div>
              <div className={`transform transition-transform ${expandedSections.propertyDetails ? "rotate-180" : ""}`}>
                ▼
              </div>
            </CardTitle>
          </CardHeader>
          {expandedSections.propertyDetails && (
            <CardContent className="space-y-3">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Property Type:</span>
                  <div className="font-medium">{job.houseConditions.propertyType}</div>
                </div>
                <div>
                  <span className="text-muted-foreground">Built:</span>
                  <div className="font-medium">{job.houseConditions.constructionYear}</div>
                </div>
                <div>
                  <span className="text-muted-foreground">Electrical Panel:</span>
                  <div className="font-medium">{job.houseConditions.electricalPanelAge}</div>
                </div>
                <div>
                  <span className="text-muted-foreground">Garage:</span>
                  <div className="font-medium">{job.houseConditions.garageType}</div>
                </div>
                <div className="col-span-2">
                  <span className="text-muted-foreground">Parking Location:</span>
                  <div className="font-medium">{job.houseConditions.parkingLocation}</div>
                </div>
              </div>
              <div className="p-3 bg-secondary/50 rounded-lg">
                <span className="text-xs text-muted-foreground">Access Notes:</span>
                <div className="text-sm">{job.houseConditions.accessibilityNotes}</div>
                {job.houseConditions.specialConditions && (
                  <>
                    <span className="text-xs text-muted-foreground block mt-2">Special Conditions:</span>
                    <div className="text-sm">{job.houseConditions.specialConditions}</div>
                  </>
                )}
              </div>
            </CardContent>
          )}
        </Card>

        {/* Survey Results - Made expandable with chevron icon, only show if completed */}
        {job.surveyCompleted && job.surveyData && (
          <Card>
            <CardHeader className="cursor-pointer" onClick={() => toggleSection("surveyResults")}>
              <CardTitle className="text-sm flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4" />
                  Survey Results
                </div>
                <div className={`transform transition-transform ${expandedSections.surveyResults ? "rotate-180" : ""}`}>
                  ▼
                </div>
              </CardTitle>
            </CardHeader>
            {expandedSections.surveyResults && (
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Phase:</span>
                    <div className="font-medium capitalize">{job.surveyData.phase} Phase</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">TNB Fuse:</span>
                    <div className="font-medium">{job.surveyData.tnbFuseSize}</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Charging Power:</span>
                    <div className="font-medium">{job.surveyData.chargingPower}</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Cable Length:</span>
                    <div className="font-medium">{job.surveyData.cableLength}</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-sm font-medium">Electrical Readings</div>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="p-2 bg-secondary/50 rounded">
                      <div className="text-muted-foreground">Voltage</div>
                      <div>R-N: {job.surveyData.voltageReadings.rn}</div>
                      <div>Y-N: {job.surveyData.voltageReadings.yn}</div>
                      <div>B-N: {job.surveyData.voltageReadings.bn}</div>
                    </div>
                    <div className="p-2 bg-secondary/50 rounded">
                      <div className="text-muted-foreground">Current</div>
                      <div>R: {job.surveyData.currentReadings.r}</div>
                      <div>Y: {job.surveyData.currentReadings.y}</div>
                      <div>B: {job.surveyData.currentReadings.b}</div>
                    </div>
                    <div className="p-2 bg-secondary/50 rounded">
                      <div className="text-muted-foreground">Additional</div>
                      <div>TNB Fuse: {job.surveyData.additionalItems.tnbFuse}pc</div>
                      <div>MCB: {job.surveyData.additionalItems.mcb63A}pc</div>
                      <div>Cable: {job.surveyData.additionalItems.concealedCabling}</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-success/10 rounded-lg">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span className="text-sm">Survey completed on {job.surveyData.surveyDate}</span>
                  </div>
                  <Badge variant="outline">{job.surveyData.siteImages} photos</Badge>
                </div>
              </CardContent>
            )}
          </Card>
        )}

        {/* Job Info */}
        <Card>
          <CardHeader>
            <CardTitle className="text-sm flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Job Details
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-3">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">
                {job.time} ({job.estimatedDuration})
              </span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">{job.address}</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">{job.phone}</span>
            </div>
            <div className="flex items-center gap-3">
              <FileText className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">{job.notes}</span>
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="space-y-3">
          <Button className="w-full gap-2" onClick={onStartWork}>
            <CheckSquare className="h-4 w-4" />
            {job.type === "Site Survey" ? "Start Site Survey" : "Start Installation"}
          </Button>
          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline" className="gap-2 bg-transparent">
              <Navigation className="h-4 w-4" />
              Navigate
            </Button>
            <Button variant="outline" className="gap-2 bg-transparent">
              <Phone className="h-4 w-4" />
              Call Customer
            </Button>
          </div>
        </div>

        {/* Status Update */}
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Update Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2">
              <Button size="sm" variant="outline">
                Arrived
              </Button>
              <Button size="sm" variant="outline">
                In Progress
              </Button>
              <Button size="sm" variant="outline">
                Completed
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function SiteSurveyView({ job, onBack }: { job: any; onBack: () => void }) {
  const [currentSection, setCurrentSection] = useState(0)
  const [formData, setFormData] = useState({
    customerName: job?.customer || "",
    address: job?.address || "",
    technicianName: "John Smith",
    date: new Date().toISOString().split("T")[0],
    time: new Date().toLocaleTimeString("en-US", { hour12: false, hour: "2-digit", minute: "2-digit" }),
    phase: "",
    tnbFuseSize: "",
    voltageReadingRN: "",
    voltageReadingYN: "",
    voltageReadingBN: "",
    currentReadingR: "",
    currentReadingY: "",
    currentReadingB: "",
    chargingPower: "",
    cableLength: "",
    additionalItems: {
      tnbFuse: "",
      concealedCabling: "",
      metalCableTray: "",
      ceilingManhold: "",
      giConduit: "",
      mcb63A: "",
      rccb63A: "",
      mainSwitch63A: "",
    },
    additionalItemDetails: "",
    remarks: "",
    customerConfirmationName: "",
    customerConfirmationContact: "",
  })

  const sections = [
    "Basic Information",
    "Electrician Inspection",
    "Additional Items",
    "Site Images",
    "Customer Confirmation",
  ]

  const updateFormData = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const updateAdditionalItem = (item: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      additionalItems: { ...prev.additionalItems, [item]: value },
    }))
  }

  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* Header */}
      <div className="bg-card border-b border-border p-4">
        <div className="flex items-center gap-3 mb-4">
          <Button variant="ghost" size="icon" onClick={onBack}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div className="flex-1">
            <h1 className="text-lg font-bold">Site Visit Form</h1>
            <p className="text-sm text-muted-foreground">Onsite inspection and testing</p>
          </div>
        </div>

        {/* Progress */}
        <div className="flex gap-1 mb-4">
          {sections.map((_, index) => (
            <div
              key={index}
              className={`flex-1 h-1 rounded ${index <= currentSection ? "bg-primary" : "bg-secondary"}`}
            />
          ))}
        </div>

        {/* Section Navigation */}
        <div className="flex gap-1 overflow-x-auto">
          {sections.map((section, index) => (
            <Button
              key={index}
              variant={currentSection === index ? "default" : "ghost"}
              size="sm"
              onClick={() => setCurrentSection(index)}
              className="text-xs whitespace-nowrap"
            >
              {section}
            </Button>
          ))}
        </div>
      </div>

      <div className="p-4">
        {/* Basic Information */}
        {currentSection === 0 && (
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Basic Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="customerName">Customer Name</Label>
                  <Input
                    id="customerName"
                    value={formData.customerName}
                    onChange={(e) => updateFormData("customerName", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="address">Address</Label>
                  <Input
                    id="address"
                    value={formData.address}
                    onChange={(e) => updateFormData("address", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="technicianName">Technician Name</Label>
                  <Input
                    id="technicianName"
                    value={formData.technicianName}
                    onChange={(e) => updateFormData("technicianName", e.target.value)}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="date">Date</Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => updateFormData("date", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="time">Time</Label>
                    <Input
                      id="time"
                      type="time"
                      value={formData.time}
                      onChange={(e) => updateFormData("time", e.target.value)}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Electrician Inspection */}
        {currentSection === 1 && (
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Electrical System</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label className="text-sm font-medium">Phase Configuration</Label>
                  <RadioGroup
                    value={formData.phase}
                    onValueChange={(value) => updateFormData("phase", value)}
                    className="mt-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="single" id="single" />
                      <Label htmlFor="single">Single Phase</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="three" id="three" />
                      <Label htmlFor="three">Three Phase</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label className="text-sm font-medium">TNB Fuse Size (A)</Label>
                  <RadioGroup
                    value={formData.tnbFuseSize}
                    onValueChange={(value) => updateFormData("tnbFuseSize", value)}
                    className="mt-2"
                  >
                    <div className="grid grid-cols-3 gap-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="32A" id="32A" />
                        <Label htmlFor="32A">32A</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="63A" id="63A" />
                        <Label htmlFor="63A">63A</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="100A" id="100A" />
                        <Label htmlFor="100A">100A</Label>
                      </div>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label className="text-sm font-medium">Charging Power</Label>
                  <RadioGroup
                    value={formData.chargingPower}
                    onValueChange={(value) => updateFormData("chargingPower", value)}
                    className="mt-2"
                  >
                    <div className="grid grid-cols-3 gap-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="7kW" id="7kW" />
                        <Label htmlFor="7kW">7kW</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="22kW" id="22kW" />
                        <Label htmlFor="22kW">22kW</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="others" id="others" />
                        <Label htmlFor="others">Others</Label>
                      </div>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label htmlFor="cableLength" className="text-sm font-medium">
                    Cable Length (m)
                  </Label>
                  <Input
                    id="cableLength"
                    placeholder="Enter length in meters"
                    value={formData.cableLength}
                    onChange={(e) => updateFormData("cableLength", e.target.value)}
                    className="mt-2"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Electrical Readings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label className="text-sm font-medium mb-3 block">Voltage Reading (V)</Label>
                  <div className="grid grid-cols-1 gap-3">
                    <div className="flex items-center gap-3">
                      <Label htmlFor="voltageRN" className="text-sm w-12 text-muted-foreground">
                        R-N
                      </Label>
                      <Input
                        id="voltageRN"
                        placeholder="Voltage"
                        value={formData.voltageReadingRN}
                        onChange={(e) => updateFormData("voltageReadingRN", e.target.value)}
                        className="flex-1"
                      />
                      <span className="text-sm text-muted-foreground w-8">V</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Label htmlFor="voltageYN" className="text-sm w-12 text-muted-foreground">
                        Y-N
                      </Label>
                      <Input
                        id="voltageYN"
                        placeholder="Voltage"
                        value={formData.voltageReadingYN}
                        onChange={(e) => updateFormData("voltageReadingYN", e.target.value)}
                        className="flex-1"
                      />
                      <span className="text-sm text-muted-foreground w-8">V</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Label htmlFor="voltageBN" className="text-sm w-12 text-muted-foreground">
                        B-N
                      </Label>
                      <Input
                        id="voltageBN"
                        placeholder="Voltage"
                        value={formData.voltageReadingBN}
                        onChange={(e) => updateFormData("voltageReadingBN", e.target.value)}
                        className="flex-1"
                      />
                      <span className="text-sm text-muted-foreground w-8">V</span>
                    </div>
                  </div>
                </div>

                <div>
                  <Label className="text-sm font-medium mb-3 block">Current Reading (A)</Label>
                  <div className="grid grid-cols-1 gap-3">
                    <div className="flex items-center gap-3">
                      <Label htmlFor="currentR" className="text-sm w-12 text-muted-foreground">
                        R
                      </Label>
                      <Input
                        id="currentR"
                        placeholder="Current"
                        value={formData.currentReadingR}
                        onChange={(e) => updateFormData("currentReadingR", e.target.value)}
                        className="flex-1"
                      />
                      <span className="text-sm text-muted-foreground w-8">A</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Label htmlFor="currentY" className="text-sm w-12 text-muted-foreground">
                        Y
                      </Label>
                      <Input
                        id="currentY"
                        placeholder="Current"
                        value={formData.currentReadingY}
                        onChange={(e) => updateFormData("currentReadingY", e.target.value)}
                        className="flex-1"
                      />
                      <span className="text-sm text-muted-foreground w-8">A</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Label htmlFor="currentB" className="text-sm w-12 text-muted-foreground">
                        B
                      </Label>
                      <Input
                        id="currentB"
                        placeholder="Current"
                        value={formData.currentReadingB}
                        onChange={(e) => updateFormData("currentReadingB", e.target.value)}
                        className="flex-1"
                      />
                      <span className="text-sm text-muted-foreground w-8">A</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Additional Items */}
        {currentSection === 2 && (
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Electrical Components</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Label htmlFor="tnbFuse" className="text-sm w-24 text-muted-foreground">
                      TNB Fuse
                    </Label>
                    <Input
                      id="tnbFuse"
                      placeholder="qty"
                      value={formData.additionalItems.tnbFuse}
                      onChange={(e) => updateAdditionalItem("tnbFuse", e.target.value)}
                      className="w-20"
                    />
                    <span className="text-sm text-muted-foreground">/pc</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Label htmlFor="mcb63A" className="text-sm w-24 text-muted-foreground">
                      MCB 63A
                    </Label>
                    <Input
                      id="mcb63A"
                      placeholder="qty"
                      value={formData.additionalItems.mcb63A}
                      onChange={(e) => updateAdditionalItem("mcb63A", e.target.value)}
                      className="w-20"
                    />
                    <span className="text-sm text-muted-foreground">/pc</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Label htmlFor="rccb63A" className="text-sm w-24 text-muted-foreground">
                      RCCB 63A
                    </Label>
                    <Input
                      id="rccb63A"
                      placeholder="qty"
                      value={formData.additionalItems.rccb63A}
                      onChange={(e) => updateAdditionalItem("rccb63A", e.target.value)}
                      className="w-20"
                    />
                    <span className="text-sm text-muted-foreground">/pc</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Label htmlFor="mainSwitch63A" className="text-sm w-24 text-muted-foreground">
                      Main Switch
                    </Label>
                    <Input
                      id="mainSwitch63A"
                      placeholder="qty"
                      value={formData.additionalItems.mainSwitch63A}
                      onChange={(e) => updateAdditionalItem("mainSwitch63A", e.target.value)}
                      className="w-20"
                    />
                    <span className="text-sm text-muted-foreground">/pc</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Installation Materials</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Label htmlFor="concealedCabling" className="text-sm w-32 text-muted-foreground">
                      Concealed Cable
                    </Label>
                    <Input
                      id="concealedCabling"
                      placeholder="length"
                      value={formData.additionalItems.concealedCabling}
                      onChange={(e) => updateAdditionalItem("concealedCabling", e.target.value)}
                      className="w-20"
                    />
                    <span className="text-sm text-muted-foreground">/m</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Label htmlFor="metalCableTray" className="text-sm w-32 text-muted-foreground">
                      Metal Cable Tray
                    </Label>
                    <Input
                      id="metalCableTray"
                      placeholder="length"
                      value={formData.additionalItems.metalCableTray}
                      onChange={(e) => updateAdditionalItem("metalCableTray", e.target.value)}
                      className="w-20"
                    />
                    <span className="text-sm text-muted-foreground">/m</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Label htmlFor="giConduit" className="text-sm w-32 text-muted-foreground">
                      GI Conduit
                    </Label>
                    <Input
                      id="giConduit"
                      placeholder="length"
                      value={formData.additionalItems.giConduit}
                      onChange={(e) => updateAdditionalItem("giConduit", e.target.value)}
                      className="w-20"
                    />
                    <span className="text-sm text-muted-foreground">/m</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Label htmlFor="ceilingManhold" className="text-sm w-32 text-muted-foreground">
                      Ceiling Manhole
                    </Label>
                    <Input
                      id="ceilingManhold"
                      placeholder="qty"
                      value={formData.additionalItems.ceilingManhold}
                      onChange={(e) => updateAdditionalItem("ceilingManhold", e.target.value)}
                      className="w-20"
                    />
                    <span className="text-sm text-muted-foreground">/pc</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Additional Notes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="additionalItemDetails" className="text-sm font-medium">
                    Item Details
                  </Label>
                  <Textarea
                    id="additionalItemDetails"
                    placeholder="Specify quantities and details (e.g., 3m cable, 2pc switches)"
                    value={formData.additionalItemDetails}
                    onChange={(e) => updateFormData("additionalItemDetails", e.target.value)}
                    className="mt-2 min-h-[80px]"
                  />
                </div>

                <div>
                  <Label htmlFor="remarks" className="text-sm font-medium">
                    Site Remarks
                  </Label>
                  <Textarea
                    id="remarks"
                    placeholder="Special requirements, site conditions, or customer requests"
                    value={formData.remarks}
                    onChange={(e) => updateFormData("remarks", e.target.value)}
                    className="mt-2 min-h-[80px]"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Site Images */}
        {currentSection === 3 && (
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Site Images (Upload)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" className="h-24 flex-col gap-2 bg-transparent">
                    <Camera className="h-6 w-6" />
                    <span className="text-xs">Main DB</span>
                  </Button>
                  <Button variant="outline" className="h-24 flex-col gap-2 bg-transparent">
                    <Camera className="h-6 w-6" />
                    <span className="text-xs">TNB Fuse</span>
                  </Button>
                  <Button variant="outline" className="h-24 flex-col gap-2 bg-transparent">
                    <Camera className="h-6 w-6" />
                    <span className="text-xs">Current Reading</span>
                  </Button>
                  <Button variant="outline" className="h-24 flex-col gap-2 bg-transparent">
                    <Camera className="h-6 w-6" />
                    <span className="text-xs">Voltage Reading</span>
                  </Button>
                  <Button variant="outline" className="h-24 flex-col gap-2 bg-transparent col-span-2">
                    <Camera className="h-6 w-6" />
                    <span className="text-xs">Cabling Route (proposed cabling route with distance measurement)</span>
                  </Button>
                </div>

                {/* Sample captured photos */}
                <div className="space-y-2">
                  <div className="text-sm font-medium">Captured Photos (3)</div>
                  <div className="flex gap-2">
                    <div className="w-16 h-16 bg-secondary rounded-lg flex items-center justify-center">
                      <ImageIcon className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <div className="w-16 h-16 bg-secondary rounded-lg flex items-center justify-center">
                      <ImageIcon className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <div className="w-16 h-16 bg-secondary rounded-lg flex items-center justify-center">
                      <ImageIcon className="h-6 w-6 text-muted-foreground" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Customer Confirmation */}
        {currentSection === 4 && (
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Survey Summary</CardTitle>
                <p className="text-xs text-muted-foreground">Please review all information before confirming</p>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Basic Information Summary */}
                <div className="p-3 bg-secondary/30 rounded-lg">
                  <div className="text-sm font-medium mb-2">Basic Information</div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="text-muted-foreground">Customer:</span>
                      <div className="font-medium">{formData.customerName || "Not filled"}</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Date:</span>
                      <div className="font-medium">{formData.date || "Not filled"}</div>
                    </div>
                    <div className="col-span-2">
                      <span className="text-muted-foreground">Address:</span>
                      <div className="font-medium">{formData.address || "Not filled"}</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Technician:</span>
                      <div className="font-medium">{formData.technicianName}</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Time:</span>
                      <div className="font-medium">{formData.time}</div>
                    </div>
                  </div>
                </div>

                {/* Electrical System Summary */}
                <div className="p-3 bg-secondary/30 rounded-lg">
                  <div className="text-sm font-medium mb-2">Electrical System</div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="text-muted-foreground">Phase:</span>
                      <div className="font-medium">{formData.phase ? `${formData.phase} phase` : "Not selected"}</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">TNB Fuse:</span>
                      <div className="font-medium">{formData.tnbFuseSize || "Not selected"}</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Charging Power:</span>
                      <div className="font-medium">{formData.chargingPower || "Not selected"}</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Cable Length:</span>
                      <div className="font-medium">
                        {formData.cableLength ? `${formData.cableLength}m` : "Not filled"}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Electrical Readings Summary */}
                {(formData.voltageReadingRN ||
                  formData.voltageReadingYN ||
                  formData.voltageReadingBN ||
                  formData.currentReadingR ||
                  formData.currentReadingY ||
                  formData.currentReadingB) && (
                  <div className="p-3 bg-secondary/30 rounded-lg">
                    <div className="text-sm font-medium mb-2">Electrical Readings</div>
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div>
                        <span className="text-muted-foreground block mb-1">Voltage (V)</span>
                        <div className="space-y-1">
                          <div>R-N: {formData.voltageReadingRN || "—"}V</div>
                          <div>Y-N: {formData.voltageReadingYN || "—"}V</div>
                          <div>B-N: {formData.voltageReadingBN || "—"}V</div>
                        </div>
                      </div>
                      <div>
                        <span className="text-muted-foreground block mb-1">Current (A)</span>
                        <div className="space-y-1">
                          <div>R: {formData.currentReadingR || "—"}A</div>
                          <div>Y: {formData.currentReadingY || "—"}A</div>
                          <div>B: {formData.currentReadingB || "—"}A</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Additional Items Summary */}
                {Object.values(formData.additionalItems).some((item) => item) && (
                  <div className="p-3 bg-secondary/30 rounded-lg">
                    <div className="text-sm font-medium mb-2">Additional Items Required</div>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      {formData.additionalItems.tnbFuse && <div>TNB Fuse: {formData.additionalItems.tnbFuse}pc</div>}
                      {formData.additionalItems.mcb63A && <div>MCB 63A: {formData.additionalItems.mcb63A}pc</div>}
                      {formData.additionalItems.rccb63A && <div>RCCB 63A: {formData.additionalItems.rccb63A}pc</div>}
                      {formData.additionalItems.mainSwitch63A && (
                        <div>Main Switch: {formData.additionalItems.mainSwitch63A}pc</div>
                      )}
                      {formData.additionalItems.concealedCabling && (
                        <div>Concealed Cable: {formData.additionalItems.concealedCabling}m</div>
                      )}
                      {formData.additionalItems.metalCableTray && (
                        <div>Metal Cable Tray: {formData.additionalItems.metalCableTray}m</div>
                      )}
                      {formData.additionalItems.giConduit && (
                        <div>GI Conduit: {formData.additionalItems.giConduit}m</div>
                      )}
                      {formData.additionalItems.ceilingManhold && (
                        <div>Ceiling Manhole: {formData.additionalItems.ceilingManhold}pc</div>
                      )}
                    </div>
                  </div>
                )}

                {/* Additional Notes Summary */}
                {(formData.additionalItemDetails || formData.remarks) && (
                  <div className="p-3 bg-secondary/30 rounded-lg">
                    <div className="text-sm font-medium mb-2">Additional Notes</div>
                    <div className="text-xs space-y-2">
                      {formData.additionalItemDetails && (
                        <div>
                          <span className="text-muted-foreground">Item Details:</span>
                          <div className="font-medium">{formData.additionalItemDetails}</div>
                        </div>
                      )}
                      {formData.remarks && (
                        <div>
                          <span className="text-muted-foreground">Site Remarks:</span>
                          <div className="font-medium">{formData.remarks}</div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Site Images Summary */}
                <div className="p-3 bg-secondary/30 rounded-lg">
                  <div className="text-sm font-medium mb-2">Site Documentation</div>
                  <div className="text-xs">
                    <div className="flex items-center gap-2">
                      <ImageIcon className="h-4 w-4 text-muted-foreground" />
                      <span>3 site photos captured</span>
                    </div>
                    <div className="text-muted-foreground mt-1">
                      Main DB, TNB Fuse, Current Reading, Voltage Reading, Cabling Route
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Customer Confirmation</CardTitle>
                <p className="text-xs text-muted-foreground">This section must be filled in by the customer</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="customerConfirmationName">Name</Label>
                  <Input
                    id="customerConfirmationName"
                    value={formData.customerConfirmationName}
                    onChange={(e) => updateFormData("customerConfirmationName", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="customerConfirmationContact">Contact Number</Label>
                  <Input
                    id="customerConfirmationContact"
                    placeholder="This will be pre-filled but editable"
                    value={formData.customerConfirmationContact}
                    onChange={(e) => updateFormData("customerConfirmationContact", e.target.value)}
                  />
                </div>
                <div className="p-4 bg-secondary/50 rounded-lg">
                  <p className="text-sm text-center">
                    "I hereby confirm all of the information above is true and correct"
                  </p>
                </div>

                <div className="space-y-3">
                  <Button className="w-full gap-2 bg-transparent" variant="outline">
                    <FileText className="h-4 w-4" />
                    Send Summary to Customer
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    A copy of this survey summary will be sent to the customer's contact number with pre-filled
                    information that can be edited if needed.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Navigation */}
        <div className="flex gap-3 mt-6">
          <Button
            variant="outline"
            className="flex-1 bg-transparent"
            disabled={currentSection === 0}
            onClick={() => setCurrentSection(Math.max(0, currentSection - 1))}
          >
            Previous
          </Button>
          <Button
            className="flex-1"
            onClick={() => {
              if (currentSection < sections.length - 1) {
                setCurrentSection(currentSection + 1)
              } else {
                // Submit survey
                onBack()
              }
            }}
          >
            {currentSection === sections.length - 1 ? "Submit Survey" : "Next"}
          </Button>
        </div>
      </div>
    </div>
  )
}

function InstallationView({ job, onBack }: { job: any; onBack: () => void }) {
  const [currentSection, setCurrentSection] = useState(0)
  const [formData, setFormData] = useState({
    customerName: job?.customer || "",
    address: job?.address || "",
    technicianName: "John Smith",
    date: new Date().toISOString().split("T")[0],
    time: new Date().toLocaleTimeString("en-US", { hour12: false, hour: "2-digit", minute: "2-digit" }),
    chargerModel: "",
    serialNumber: "",
    installationLocation: "",
    powerRating: "",
    cableType: "",
    cableLength: "",
    circuitBreakerSize: "",
    earthingResistance: "",
    insulationTest: "",
    functionalTest: "",
    customerTraining: false,
    warrantyExplained: false,
    installationNotes: "",
    customerSignature: "",
    technicianSignature: "",
  })

  const sections = [
    "Installation Details",
    "Technical Specifications",
    "Testing & Commissioning",
    "Customer Handover",
    "Completion",
  ]

  const updateFormData = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* Header */}
      <div className="bg-card border-b border-border p-4">
        <div className="flex items-center gap-3 mb-4">
          <Button variant="ghost" size="icon" onClick={onBack}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div className="flex-1">
            <h1 className="text-lg font-bold">Installation Form</h1>
            <p className="text-sm text-muted-foreground">EV Charger Installation</p>
          </div>
        </div>

        {/* Progress */}
        <div className="flex gap-1 mb-4">
          {sections.map((_, index) => (
            <div
              key={index}
              className={`flex-1 h-1 rounded ${index <= currentSection ? "bg-primary" : "bg-secondary"}`}
            />
          ))}
        </div>

        {/* Section Navigation */}
        <div className="flex gap-1 overflow-x-auto">
          {sections.map((section, index) => (
            <Button
              key={index}
              variant={currentSection === index ? "default" : "ghost"}
              size="sm"
              onClick={() => setCurrentSection(index)}
              className="text-xs whitespace-nowrap"
            >
              {section}
            </Button>
          ))}
        </div>
      </div>

      <div className="p-4">
        {/* Installation Details */}
        {currentSection === 0 && (
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Installation Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="customerName">Customer Name</Label>
                  <Input
                    id="customerName"
                    value={formData.customerName}
                    onChange={(e) => updateFormData("customerName", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="address">Installation Address</Label>
                  <Input
                    id="address"
                    value={formData.address}
                    onChange={(e) => updateFormData("address", e.target.value)}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="date">Installation Date</Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => updateFormData("date", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="time">Start Time</Label>
                    <Input
                      id="time"
                      type="time"
                      value={formData.time}
                      onChange={(e) => updateFormData("time", e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="installationLocation">Installation Location</Label>
                  <Input
                    id="installationLocation"
                    placeholder="e.g., Garage wall, Driveway post"
                    value={formData.installationLocation}
                    onChange={(e) => updateFormData("installationLocation", e.target.value)}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Technical Specifications */}
        {currentSection === 1 && (
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Technical Specifications</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="chargerModel">Charger Model</Label>
                  <Input
                    id="chargerModel"
                    placeholder="e.g., Tesla Wall Connector Gen 3"
                    value={formData.chargerModel}
                    onChange={(e) => updateFormData("chargerModel", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="serialNumber">Serial Number</Label>
                  <Input
                    id="serialNumber"
                    value={formData.serialNumber}
                    onChange={(e) => updateFormData("serialNumber", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="powerRating">Power Rating</Label>
                  <RadioGroup
                    value={formData.powerRating}
                    onValueChange={(value) => updateFormData("powerRating", value)}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="7kW" id="power7kW" />
                      <Label htmlFor="power7kW">7kW</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="11kW" id="power11kW" />
                      <Label htmlFor="power11kW">11kW</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="22kW" id="power22kW" />
                      <Label htmlFor="power22kW">22kW</Label>
                    </div>
                  </RadioGroup>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="cableType">Cable Type</Label>
                    <Input
                      id="cableType"
                      placeholder="e.g., 6mm² 3-core"
                      value={formData.cableType}
                      onChange={(e) => updateFormData("cableType", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="cableLength">Cable Length (m)</Label>
                    <Input
                      id="cableLength"
                      placeholder="meters"
                      value={formData.cableLength}
                      onChange={(e) => updateFormData("cableLength", e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="circuitBreakerSize">Circuit Breaker Size (A)</Label>
                  <Input
                    id="circuitBreakerSize"
                    placeholder="e.g., 32A"
                    value={formData.circuitBreakerSize}
                    onChange={(e) => updateFormData("circuitBreakerSize", e.target.value)}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Testing & Commissioning */}
        {currentSection === 2 && (
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Testing & Commissioning</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="earthingResistance">Earthing Resistance (Ω)</Label>
                  <Input
                    id="earthingResistance"
                    placeholder="ohms"
                    value={formData.earthingResistance}
                    onChange={(e) => updateFormData("earthingResistance", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="insulationTest">Insulation Test Result (MΩ)</Label>
                  <Input
                    id="insulationTest"
                    placeholder="megaohms"
                    value={formData.insulationTest}
                    onChange={(e) => updateFormData("insulationTest", e.target.value)}
                  />
                </div>
                <div>
                  <Label>Functional Test</Label>
                  <RadioGroup
                    value={formData.functionalTest}
                    onValueChange={(value) => updateFormData("functionalTest", value)}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="pass" id="testPass" />
                      <Label htmlFor="testPass">Pass</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="fail" id="testFail" />
                      <Label htmlFor="testFail">Fail</Label>
                    </div>
                  </RadioGroup>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" className="h-24 flex-col gap-2 bg-transparent">
                    <Camera className="h-6 w-6" />
                    <span className="text-xs">Installation Photo</span>
                  </Button>
                  <Button variant="outline" className="h-24 flex-col gap-2 bg-transparent">
                    <Camera className="h-6 w-6" />
                    <span className="text-xs">Test Results</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Customer Handover */}
        {currentSection === 3 && (
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Customer Handover</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="customerTraining"
                      checked={formData.customerTraining}
                      onChange={(e) => updateFormData("customerTraining", e.target.checked)}
                      className="rounded"
                    />
                    <Label htmlFor="customerTraining">Customer training completed</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="warrantyExplained"
                      checked={formData.warrantyExplained}
                      onChange={(e) => updateFormData("warrantyExplained", e.target.checked)}
                      className="rounded"
                    />
                    <Label htmlFor="warrantyExplained">Warranty terms explained</Label>
                  </div>
                </div>
                <div>
                  <Label htmlFor="installationNotes">Installation Notes</Label>
                  <Textarea
                    id="installationNotes"
                    placeholder="Any special notes or observations about the installation"
                    value={formData.installationNotes}
                    onChange={(e) => updateFormData("installationNotes", e.target.value)}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Completion */}
        {currentSection === 4 && (
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Installation Completion</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="customerSignature">Customer Signature</Label>
                  <div className="border-2 border-dashed border-border rounded-lg h-24 flex items-center justify-center">
                    <span className="text-sm text-muted-foreground">Tap to sign</span>
                  </div>
                </div>
                <div>
                  <Label htmlFor="technicianSignature">Technician Signature</Label>
                  <div className="border-2 border-dashed border-border rounded-lg h-24 flex items-center justify-center">
                    <span className="text-sm text-muted-foreground">Tap to sign</span>
                  </div>
                </div>
                <div className="p-4 bg-success/10 rounded-lg">
                  <p className="text-sm text-center font-medium">Installation completed successfully</p>
                  <p className="text-xs text-center text-muted-foreground mt-1">
                    Customer copy will be emailed automatically
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Navigation */}
        <div className="flex gap-3 mt-6">
          <Button
            variant="outline"
            className="flex-1 bg-transparent"
            disabled={currentSection === 0}
            onClick={() => setCurrentSection(Math.max(0, currentSection - 1))}
          >
            Previous
          </Button>
          <Button
            className="flex-1"
            onClick={() => {
              if (currentSection < sections.length - 1) {
                setCurrentSection(currentSection + 1)
              } else {
                // Submit installation form
                onBack()
              }
            }}
          >
            {currentSection === sections.length - 1 ? "Complete Installation" : "Next"}
          </Button>
        </div>
      </div>
    </div>
  )
}
