import React from 'react'
import { getJobApplications, updateJobApplicationStatus } from '../../actions.apply-for-job'
import { JobApplicationsTable } from './job-applications-table'

export default async function ApplyAdminDisplay() {
  const applications = await getJobApplications()

  return (
    <div className="container mx-auto py-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Job Applications</h1>
        <p className="text-gray-600 mt-2">
          View and manage job application submissions
        </p>
      </div>
      <JobApplicationsTable 
        applications={applications} 
        updateStatusAction={updateJobApplicationStatus}
      />
    </div>
  )
}
