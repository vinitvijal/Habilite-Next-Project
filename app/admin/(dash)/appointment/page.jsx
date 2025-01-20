"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { AppointmentModal } from "./appointment-modal"
import { NewAppointmentDialog } from "./new-appointment"


export default function AppointmentsPage() {
  const [isOpen, setIsOpen] = useState(false)
  const [isNewAppointmentOpen, setIsNewAppointmentOpen] = useState(false)
  const [selectedAppointment, setSelectedAppointment] = useState(null)

  // Sample data - in a real app, this would come from an API
  const [appointments, setAppointments] = useState([
    {
      id: "1",
      patientName: "John Doe",
      date: "2025-01-21",
      time: "09:00",
      type: "General Checkup",
      status: "scheduled",
    },
    {
      id: "2",
      patientName: "Jane Smith",
      date: "2025-01-21",
      time: "10:30",
      type: "Dental Cleaning",
      status: "completed",
      remarks: "Follow-up needed in 6 months",
    },
    {
      id: "3",
      patientName: "Mike Johnson",
      date: "2025-01-21",
      time: "14:00",
      type: "Consultation",
      status: "cancelled",
    },
  ])

  const handleOpenModal = (appointment) => {
    setSelectedAppointment(appointment)
    setIsOpen(true)
  }

  const handleUpdateAppointment = (updatedAppointment) => {
    setAppointments(appointments.map((apt) => (apt.id === updatedAppointment.id ? updatedAppointment : apt)))
    setIsOpen(false)
  }

  const handleAddNewAppointment = (newAppointment) => {
    const id = (appointments.length + 1).toString()
    setAppointments([...appointments, { ...newAppointment, id }])
    setIsNewAppointmentOpen(false)
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "scheduled":
        return "bg-blue-500/10 text-blue-500 hover:bg-blue-500/20"
      case "completed":
        return "bg-green-500/10 text-green-500 hover:bg-green-500/20"
      case "cancelled":
        return "bg-red-500/10 text-red-500 hover:bg-red-500/20"
    }
  }

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Appointments</h1>
        <Button onClick={() => setIsNewAppointmentOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          New Appointment
        </Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Patient Name</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Time</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {appointments.map((appointment) => (
              <TableRow key={appointment.id}>
                <TableCell className="font-medium">{appointment.patientName}</TableCell>
                <TableCell>{appointment.date}</TableCell>
                <TableCell>{appointment.time}</TableCell>
                <TableCell>{appointment.type}</TableCell>
                <TableCell>
                  <Badge variant="secondary" className={getStatusColor(appointment.status)}>
                    {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm" onClick={() => handleOpenModal(appointment)}>
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <AppointmentModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        appointment={selectedAppointment}
        onUpdate={handleUpdateAppointment}
      />

      <NewAppointmentDialog
        open={isNewAppointmentOpen}
        onOpenChange={setIsNewAppointmentOpen}
        onAddAppointment={handleAddNewAppointment}
      />
    </div>
  )
}

