import React from 'react'
import { getJobApplications, updateJobApplicationStatus } from '../../actions'
import { JobApplicationsWrapper } from './job-applications-wrapper'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Users, Clock, CheckCircle, XCircle } from 'lucide-react'
import HeaderAdminTables from '../_comp/HeaderAdminTableComp'

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

export default async function ApplyAdminDisplay() {
  const applications = await getJobApplications()

  // Calculate statistics
  const stats = {
    total: applications.length,
    pending: applications.filter((app: JobApplication) => app.status === 'pending').length,
    reviewed: applications.filter((app: JobApplication) => app.status === 'reviewed').length,
    shortlisted: applications.filter((app: JobApplication) => app.status === 'shortlisted').length,
    rejected: applications.filter((app: JobApplication) => app.status === 'rejected').length,
  }

  return (
    <div className="min-h-screen ">
      <div className="container mx-auto space-y-8">
        {/* Header */}
         <div className="flex flex-col gap-4">
        
          <HeaderAdminTables
            title="Job Applications"
            description="Manage and track job application submissions"
            RightSideComp={
              <Badge className="bg-blue-500 text-white">
                Total: {stats.total}
              </Badge>
            }
          />
          {/* Statistics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Applications</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.total}</div>
                <p className="text-xs text-muted-foreground">
                  All time submissions
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Pending</CardTitle>
                <Clock className="h-4 w-4 text-yellow-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-yellow-600">{stats.pending}</div>
                <p className="text-xs text-muted-foreground">
                  Awaiting review
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Reviewed</CardTitle>
                <div className="h-4 w-4 rounded-full bg-blue-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600">{stats.reviewed}</div>
                <p className="text-xs text-muted-foreground">
                  Under evaluation
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Shortlisted</CardTitle>
                <CheckCircle className="h-4 w-4 text-green-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">{stats.shortlisted}</div>
                <p className="text-xs text-muted-foreground">
                  Moving forward
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Rejected</CardTitle>
                <XCircle className="h-4 w-4 text-red-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-red-600">{stats.rejected}</div>
                <p className="text-xs text-muted-foreground">
                  Not proceeding
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Main Content */}
        <Card className="shadow-sm">
          {/* <CardHeader>
            <CardTitle className="text-xl">Applications Management</CardTitle>
            <CardDescription>
              Search, filter, and manage job applications. Click on any application to view details or update status.
            </CardDescription>
          </CardHeader> */}
          <CardContent className="p-6">
            <JobApplicationsWrapper 
              applications={applications} 
              updateStatusAction={updateJobApplicationStatus}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
