"use client"

import React, { useState, useTransition } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ExternalLink, Eye, Trash2 } from "lucide-react"
import { redirect } from 'next/navigation'

type JobApplication = {
  id: number
  name: string
  email: string
  resumeUrl: string
  message: string | null
  role: string
  status: string
  createdAt: Date
  updatedAt: Date
}

import { deleteJobApplicationAction } from "@/app/(su)/actions.apply-for-job"

type JobApplicationsTableProps = {
  applications: JobApplication[]
  updateStatusAction: (id: number, status: string) => Promise<{
    success: boolean
    application?: JobApplication
    error?: string
  }>
}

const statusColors = {
  pending: "bg-yellow-100 text-yellow-800",
  reviewed: "bg-blue-100 text-blue-800", 
  shortlisted: "bg-green-100 text-green-800",
  rejected: "bg-red-100 text-red-800"
}

export function JobApplicationsTable({ applications, updateStatusAction }: JobApplicationsTableProps) {
  const [isPending, startTransition] = useTransition()
  const [selectedApplication, setSelectedApplication] = useState<JobApplication | null>(null)

  const handleStatusChange = (applicationId: number, newStatus: string) => {
    startTransition(async () => {
      const result = await updateStatusAction(applicationId, newStatus)
      if (!result.success) {
        alert(result.error || "Failed to update status")
      }
    })
  }

  const [deletingId, setDeletingId] = useState<number | null>(null)

  const handleDelete = (id: number) => {
    setDeletingId(id)
    startTransition(async () => {
      const result = await deleteJobApplicationAction(id)
      setDeletingId(null)
      if (result.success) {
        redirect("/admin/apply")
      } else {
        alert(result.error || "Failed to delete application")
      }
    })
  }

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(new Date(date))
  }

  return (
    <>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Applied</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {applications.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-8 text-gray-500">
                  No job applications found
                </TableCell>
              </TableRow>
            ) : (
              applications.map((application) => (
                <TableRow key={application.id}>
                  <TableCell className="font-medium">
                    {application.name}
                  </TableCell>
                  <TableCell>{application.email}</TableCell>
                  <TableCell>{application.role}</TableCell>
                  <TableCell>
                    <Badge className={statusColors[application.status as keyof typeof statusColors]}>
                      {application.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{formatDate(application.createdAt)}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setSelectedApplication(application)}
                          >
                            <Eye className="h-4 w-4" />
                            View
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <DialogHeader>
                            <DialogTitle>Application Details</DialogTitle>
                          </DialogHeader>
                          {selectedApplication && (
                            <div className="space-y-4">
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <label className="text-sm font-medium text-gray-500">Name</label>
                                  <p className="text-sm">{selectedApplication.name}</p>
                                </div>
                                <div>
                                  <label className="text-sm font-medium text-gray-500">Email</label>
                                  <p className="text-sm">{selectedApplication.email}</p>
                                </div>
                                <div>
                                  <label className="text-sm font-medium text-gray-500">Role</label>
                                  <p className="text-sm">{selectedApplication.role}</p>
                                </div>
                                <div>
                                  <label className="text-sm font-medium text-gray-500">Status</label>
                                  <Badge className={statusColors[selectedApplication.status as keyof typeof statusColors]}>
                                    {selectedApplication.status}
                                  </Badge>
                                </div>
                                <div>
                                  <label className="text-sm font-medium text-gray-500">Applied Date</label>
                                  <p className="text-sm">{formatDate(selectedApplication.createdAt)}</p>
                                </div>
                                <div>
                                  <label className="text-sm font-medium text-gray-500">Last Updated</label>
                                  <p className="text-sm">{formatDate(selectedApplication.updatedAt)}</p>
                                </div>
                              </div>
                              
                              <div>
                                <label className="text-sm font-medium text-gray-500">Resume</label>
                                <div className="mt-1">
                                  <Button 
                                    variant="outline" 
                                    size="sm"
                                    onClick={() => window.open(selectedApplication.resumeUrl, '_blank')}
                                  >
                                    <ExternalLink className="h-4 w-4 mr-2" />
                                    View Resume
                                  </Button>
                                </div>
                              </div>

                              {selectedApplication.message && (
                                <div>
                                  <label className="text-sm font-medium text-gray-500">Message</label>
                                  <p className="text-sm mt-1 p-3 bg-gray-50 rounded-md">
                                    {selectedApplication.message}
                                  </p>
                                </div>
                              )}

                              <div>
                                <label className="text-sm font-medium text-gray-500">Update Status</label>
                                <Select
                                  value={selectedApplication.status}
                                  onValueChange={(newStatus) => {
                                    handleStatusChange(selectedApplication.id, newStatus)
                                    setSelectedApplication({
                                      ...selectedApplication,
                                      status: newStatus
                                    })
                                    redirect("/admin/apply")
                                  }}
                                  disabled={isPending}
                                >
                                  <SelectTrigger className="mt-1">
                                    <SelectValue />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="pending">Pending</SelectItem>
                                    <SelectItem value="reviewed">Reviewed</SelectItem>
                                    <SelectItem value="shortlisted">Shortlisted</SelectItem>
                                    <SelectItem value="rejected">Rejected</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                            </div>
                          )}
                        </DialogContent>
                      </Dialog>

                      <Select
                        value={application.status}
                        onValueChange={(newStatus) =>{ handleStatusChange(application.id, newStatus);redirect("/admin/apply")}}
                        disabled={isPending}
                      >
                        <SelectTrigger className="w-32">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pending">Pending</SelectItem>
                          <SelectItem value="reviewed">Reviewed</SelectItem>
                          <SelectItem value="shortlisted">Shortlisted</SelectItem>
                          <SelectItem value="rejected">Rejected</SelectItem>
                        </SelectContent>
                      </Select>
                        <Dialog>
                        <DialogTrigger asChild>
                          <Button
                          variant="destructive"
                          size="icon"
                          className="ml-2"
                          disabled={isPending || deletingId === application.id}
                          title="Delete application"
                          >
                          <Trash2 className="h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                          <DialogTitle>Confirm Delete</DialogTitle>
                          </DialogHeader>
                          <div className="py-4">
                          Are you sure you want to delete this application? This action cannot be undone.
                          </div>
                          <div className="flex justify-end gap-2">
                          <DialogTrigger asChild>
                            <Button variant="outline">
                            Cancel
                            </Button>
                          </DialogTrigger>
                          <Button
                            variant="destructive"
                            onClick={() => handleDelete(application.id)}
                            disabled={isPending || deletingId === application.id}
                          >
                            Delete
                          </Button>
                          </div>
                        </DialogContent>
                        </Dialog>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {applications.length > 0 && (
        <div className="mt-4 text-sm text-gray-500">
          Total applications: {applications.length}
        </div>
      )}
    </>
  )
}
