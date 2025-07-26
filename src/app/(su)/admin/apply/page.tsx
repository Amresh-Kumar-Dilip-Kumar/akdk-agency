import React from 'react'
import { getJobApplications, updateJobApplicationStatus } from '../../actions'
import { JobApplicationsWrapper } from './job-applications-wrapper'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Users, Clock, CheckCircle, XCircle, Info } from 'lucide-react'

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
 
  return (
    <div className="min-h-screen bg-gray-50/50">
      <div className="container mx-auto px-4 space-y-8">
        {/* Header */}
        <div className="flex flex-col gap-4 ">
          <div className='flex justify-between items-start'>
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">Job Applications</h1>
              {/* <p className="text-sm text-gray-600 mt-2">
                Manage and track job application submissions
              </p> */}
            </div>
            
            {/* Info Button with Statistics Modal */}
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Info className="h-4 w-4" />
                  Statistics
                </Button>
              </DialogTrigger>
              <DialogContent className=" max-w-[90%]">
                <DialogHeader>
                  <DialogTitle>Application Statistics</DialogTitle>
                </DialogHeader>
                <StatisticCard />
              </DialogContent>
            </Dialog>
          </div>
          
          <JobApplicationsWrapper 
            applications={applications} 
            updateStatusAction={updateJobApplicationStatus}
          />

          {/* Statistics Cards */}
          
        </div>

        {/* Main Content */}
        {/* <Card className="shadow-sm"> */}
          <CardHeader className='hidden'>
            <CardTitle className="text-xl">Applications Management</CardTitle>
            <CardDescription>
              Search, filter, and manage job applications. Click on any application to view details or update status.
            </CardDescription>
          </CardHeader>
        {/* </Card> */}
      </div>`
    </div>
  )
}


async function StatisticCard(){
  const applications = await getJobApplications()

   const stats = {
    total: applications.length,
    pending: applications.filter((app: JobApplication) => app.status === 'pending').length,
    reviewed: applications.filter((app: JobApplication) => app.status === 'reviewed').length,
    shortlisted: applications.filter((app: JobApplication) => app.status === 'shortlisted').length,
    rejected: applications.filter((app: JobApplication) => app.status === 'rejected').length,
  }

  return(
    <div className="space-y-6  max-h-[70vh] overflow-y-auto">
      {/* Summary */}
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-900">{stats.total}</h3>
        <p className="text-gray-600">Total Applications Received</p>
      </div>
      
      {/* Detailed Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
            <div className="mt-1">
              <div className="text-xs text-gray-500">
                {stats.total > 0 ? `${Math.round((stats.pending / stats.total) * 100)}%` : '0%'} of total
              </div>
            </div>
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
            <div className="mt-1">
              <div className="text-xs text-gray-500">
                {stats.total > 0 ? `${Math.round((stats.reviewed / stats.total) * 100)}%` : '0%'} of total
              </div>
            </div>
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
            <div className="mt-1">
              <div className="text-xs text-gray-500">
                {stats.total > 0 ? `${Math.round((stats.shortlisted / stats.total) * 100)}%` : '0%'} of total
              </div>
            </div>
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
            <div className="mt-1">
              <div className="text-xs text-gray-500">
                {stats.total > 0 ? `${Math.round((stats.rejected / stats.total) * 100)}%` : '0%'} of total
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Additional Insights */}
      <div className="border-t pt-4">
        <h4 className="font-medium text-gray-900 mb-2">Quick Insights</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-green-500"></div>
            <span>Success Rate: {stats.total > 0 ? `${Math.round((stats.shortlisted / stats.total) * 100)}%` : '0%'}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-blue-500"></div>
            <span>Under Review: {stats.pending + stats.reviewed} applications</span>
          </div>
        </div>
      </div>
    </div>
  )
}