"use client";

import { Suspense } from "react";
import { JobApplicationsTable } from "./job-applications-table";

type JobApplication = {
  id: number;
  name: string;
  email: string;
  resumeUrl: string;
  message: string | null;
  role: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
};

type JobApplicationsWrapperProps = {
  applications: JobApplication[];
  updateStatusAction: (
    id: number,
    status: string
  ) => Promise<{
    success: boolean;
    application?: JobApplication;
    error?: string;
  }>;
};

function JobApplicationsTableWithSuspense({
  applications,
  updateStatusAction,
}: JobApplicationsWrapperProps) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <JobApplicationsTable
        applications={applications}
        updateStatusAction={updateStatusAction}
      />
    </Suspense>
  );
}

export { JobApplicationsTableWithSuspense as JobApplicationsWrapper };
