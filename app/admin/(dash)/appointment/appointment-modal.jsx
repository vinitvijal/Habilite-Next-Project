import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"


export function AppointmentModal({ isOpen, onClose, appointment, onUpdate }) {
  const [formData, setFormData] = useState(null)

  useEffect(() => {
    if (appointment) {
      setFormData(appointment)
    }
  }, [appointment])

  const handleChange = (field, value) => {
    if (formData) {
      setFormData({ ...formData, [field]: value })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData) {
      onUpdate(formData)
    }
  }

  if (!formData) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Appointment</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="patientName">Patient Name</Label>
              <Input
                id="patientName"
                value={formData.patientName}
                onChange={(e) => handleChange("patientName", e.target.value)}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="date">Date</Label>
              <Input
                id="date"
                type="date"
                value={formData.date}
                onChange={(e) => handleChange("date", e.target.value)}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="time">Time</Label>
              <Input
                id="time"
                type="time"
                value={formData.time}
                onChange={(e) => handleChange("time", e.target.value)}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="type">Appointment Type</Label>
              <Select value={formData.type} onValueChange={(value) => handleChange("type", value)}>
                <SelectTrigger id="type">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="General Checkup">General Checkup</SelectItem>
                  <SelectItem value="Dental Cleaning">Dental Cleaning</SelectItem>
                  <SelectItem value="Consultation">Consultation</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="status">Status</Label>
              <Select
                value={formData.status}
                onValueChange={(value) => handleChange("status", value)}
              >
                <SelectTrigger id="status">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="scheduled">Scheduled</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="remarks">Remarks</Label>
              <Textarea
                id="remarks"
                value={formData.remarks || ""}
                onChange={(e) => handleChange("remarks", e.target.value)}
                placeholder="Add your remarks here..."
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

