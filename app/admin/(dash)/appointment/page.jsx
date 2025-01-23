"use client"

import { useEffect, useState } from "react"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { AppointmentModal } from "./appointment-modal"
import { NewAppointmentDialog } from "./new-appointment"
import { createAdminAppointment, createAppointment, getAppointments, updateAppointment } from "@/actions/appointment"


export default function AppointmentsPage() {
  const [isOpen, setIsOpen] = useState(false)
  const [isNewAppointmentOpen, setIsNewAppointmentOpen] = useState(false)
  const [selectedAppointment, setSelectedAppointment] = useState(null)

  // Sample data - in a real app, this would come from an API
  const [currentPage, setCurrentPage] = useState(0);
  const [appointments, setAppointments] = useState([])

  const handleOpenModal = (appointment) => {
    setSelectedAppointment(appointment)
    setIsOpen(true)
  }

  const handleUpdateAppointment = (updatedAppointment) => {
    console.log(updatedAppointment)
    const token = localStorage.getItem('token');
    if(!token) return
    const response = updateAppointment(token, updatedAppointment.appointName, updatedAppointment.appointEmail, updatedAppointment.appointPhone, updatedAppointment.appointQuery, updatedAppointment.allotedDate, updatedAppointment.allotedTime, updatedAppointment.allotedType, updatedAppointment.appointStatus, updatedAppointment.allotedRemark, updatedAppointment.appointId)
    setAppointments(appointments.map((apt) => apt.appointId === updatedAppointment.appointId ? updatedAppointment : apt))
    console.log(response)
    setIsOpen(false)
  }

  const handleAddNewAppointment = async (newAppointment) => {
    console.log(newAppointment)
    const response = await createAdminAppointment(newAppointment.name, newAppointment.email, newAppointment.date, newAppointment.time, newAppointment.type )
    console.log(response)
    setIsNewAppointmentOpen(false)
  }

  async function getData(){
    const token = localStorage.getItem('token');
    if(!token) return
    const data = await getAppointments(token, currentPage);
    setAppointments(data)
    console.log(data)
    setCurrentPage((currentPage) => currentPage+1)
  }

  useEffect(()=>{
    getData()
  }, [])

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
              <TableHead>Created On</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Time</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {appointments.map((appointment) => (
              <TableRow key={appointment.appointId}>
                <TableCell className="font-medium">{appointment.appointName}</TableCell>
                <TableCell>{appointment.appointDate.toString() || "Not Alloted"}</TableCell>
                <TableCell>{appointment.allotedDate || "Not Alloted"}</TableCell>
                <TableCell>{appointment.allotedTime || "Not Alloted"}</TableCell>
                <TableCell>{appointment.allotedType || "Not Alloted"}</TableCell>
                <TableCell>
                  {appointment && appointment.appointStatus && <Badge variant="secondary" className={getStatusColor(appointment.appointStatus)}>
                    {appointment.appointStatus.charAt(0).toUpperCase() + appointment.appointStatus.slice(1)}
                  </Badge>}
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

