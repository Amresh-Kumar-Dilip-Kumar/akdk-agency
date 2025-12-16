"use client";

import React, { useState, useTransition, useCallback, useRef } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  ExternalLink,
  Eye,
  Trash2,
  Search,
  Filter,
  X,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { redirect, RedirectType } from "next/navigation";
import { useRouter, useSearchParams } from "next/navigation";

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

import { deleteJobApplicationAction } from "@/app/(su)/actions";

type JobApplicationsTableProps = {
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

const statusColors = {
  pending: "bg-yellow-100 text-yellow-800",
  reviewed: "bg-blue-100 text-blue-800",
  shortlisted: "bg-green-100 text-green-800",
  rejected: "bg-red-100 text-red-800",
};

export function JobApplicationsTable({
  applications,
  updateStatusAction,
}: JobApplicationsTableProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const debounceTimerRef = useRef<NodeJS.Timeout>(null);

  const [isPending, startTransition] = useTransition();
  const [selectedApplication, setSelectedApplication] =
    useState<JobApplication | null>(null);
  const [deletingId, setDeletingId] = useState<number | null>(null);
  const [searchInput, setSearchInput] = useState(
    searchParams.get("search") || ""
  );

  // Get URL parameters for state management
  const searchTerm = searchParams.get("search") || "";
  const statusFilter = searchParams.get("status") || "all";
  const roleFilter = searchParams.get("role") || "all";
  const currentPage = parseInt(searchParams.get("page") || "1", 10);
  const pageSize = parseInt(searchParams.get("pageSize") || "10", 10);

  // Get unique roles and statuses for filter options
  const uniqueRoles = Array.from(
    new Set(applications.map((app) => app.role))
  ).sort();
  const uniqueStatuses = Array.from(
    new Set(applications.map((app) => app.status))
  ).sort();

  // URL update helper function with scroll management
  const updateURL = useCallback(
    (updates: Record<string, string | number | null>) => {
      const params = new URLSearchParams(searchParams.toString());

      Object.entries(updates).forEach(([key, value]) => {
        if (
          value === null ||
          value === "" ||
          value === "all" ||
          (key === "page" && value === 1)
        ) {
          params.delete(key);
        } else {
          params.set(key, value.toString());
        }
      });

      // router.push(`/admin/apply?${params.toString()}`);
      redirect(`/admin/apply?${params.toString()}`,RedirectType.replace)
    },
    [searchParams, router]
  );

  // Debounced search function
  const debouncedSearch = useCallback(
    (searchValue: string) => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }

      debounceTimerRef.current = setTimeout(() => {
        updateURL({ search: searchValue || null, page: 1 });
      }, 300);
    },
    [updateURL]
  );

  // Sync search input with URL params
  React.useEffect(() => {
    setSearchInput(searchParams.get("search") || "");
  }, [searchParams]);

  const filteredApplications = applications.filter((application) => {
    const searchLower = searchTerm.toLowerCase();
    const matchesSearch =
      application.name.toLowerCase().includes(searchLower) ||
      application.email.toLowerCase().includes(searchLower) ||
      application.role.toLowerCase().includes(searchLower) ||
      application.status.toLowerCase().includes(searchLower);

    const matchesStatus =
      statusFilter === "all" || application.status === statusFilter;
    const matchesRole = roleFilter === "all" || application.role === roleFilter;

    return matchesSearch && matchesStatus && matchesRole;
  });

  const clearFilters = () => {
    updateURL({ search: null, status: null, role: null, page: 1 });
  };

  const hasActiveFilters =
    searchTerm || statusFilter !== "all" || roleFilter !== "all";

  // Pagination calculations
  const totalItems = filteredApplications.length;
  const totalPages = Math.ceil(totalItems / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedApplications = filteredApplications.slice(
    startIndex,
    endIndex
  );

  const goToPage = (page: number) => {
    updateURL({ page: Math.max(1, Math.min(page, totalPages)) });
  };

  const goToFirstPage = () => updateURL({ page: 1 });
  const goToLastPage = () => updateURL({ page: totalPages });
  const goToPreviousPage = () =>
    updateURL({ page: Math.max(1, currentPage - 1) });
  const goToNextPage = () =>
    updateURL({ page: Math.min(totalPages, currentPage + 1) });

  const handleStatusChange = (applicationId: number, newStatus: string) => {
    startTransition(async () => {
      const result = await updateStatusAction(applicationId, newStatus);
      if (!result.success) {
        alert(result.error || "Failed to update status");
      } else {
        // Refresh the page data without navigation
        router.refresh();
      }
    });
  };

  const handleDelete = (id: number) => {
    setDeletingId(id);
    startTransition(async () => {
      const result = await deleteJobApplicationAction(id);
      setDeletingId(null);
      if (result.success) {
        router.refresh();
      } else {
        alert(result.error || "Failed to delete application");
      }
    });
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date(date));
  };

  return (
    <div className="space-y-6 relative">
      {/* Loading overlay */}
      {isPending && (
        <div className="absolute inset-0 bg-white/50 backdrop-blur-sm flex items-center justify-center z-10 rounded-lg">
          <div className="flex items-center gap-2 bg-white p-4 rounded-lg shadow-lg">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
            <span className="text-sm text-gray-600">Updating...</span>
          </div>
        </div>
      )}

      {/* Search and Filters - Made sticky */}
      <div className="sticky top-0 z-20 bg-white pt-4 pb-4 border-b mb-4">
        <div className="space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search applications by name, email, role, or status..."
              value={searchInput}
              onChange={(e) => {
                setSearchInput(e.target.value);
                debouncedSearch(e.target.value);
              }}
              className="pl-10 h-11"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-gray-500" />
                <span className="text-sm font-medium text-gray-700">
                  Filters:
                </span>
              </div>

              <Select
                value={statusFilter}
                onValueChange={(value) => updateURL({ status: value, page: 1 })}
              >
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="All Statuses" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  {uniqueStatuses.map((status) => (
                    <SelectItem key={status} value={status}>
                      <div className="flex items-center gap-2">
                        <Badge
                          className={`${
                            statusColors[status as keyof typeof statusColors]
                          } text-xs`}
                        >
                          {status}
                        </Badge>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select
                value={roleFilter}
                onValueChange={(value) => updateURL({ role: value, page: 1 })}
              >
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="All Roles" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Roles</SelectItem>
                  {uniqueRoles.map((role) => (
                    <SelectItem key={role} value={role}>
                      {role}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {hasActiveFilters && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={clearFilters}
                  className="flex items-center gap-2"
                >
                  <X className="h-4 w-4" />
                  Clear Filters
                </Button>
              )}
            </div>

            {/* Page Size Selector */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-700">Show:</span>
              <Select
                value={pageSize.toString()}
                onValueChange={(value) =>
                  updateURL({ pageSize: Number(value), page: 1 })
                }
              >
                <SelectTrigger className="w-20">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="5">5</SelectItem>
                  <SelectItem value="10">10</SelectItem>
                  <SelectItem value="25">25</SelectItem>
                  <SelectItem value="50">50</SelectItem>
                  <SelectItem value="100">100</SelectItem>
                </SelectContent>
              </Select>
              <span className="text-sm text-gray-700">per page</span>
            </div>
          </div>

          {/* Active Filters Display */}
          {hasActiveFilters && (
            <div className="flex flex-wrap items-center gap-2 p-3 bg-gray-50 rounded-lg border">
              <span className="text-sm text-gray-500">Active filters:</span>
              {searchTerm && (
                <Badge variant="secondary" className="flex items-center gap-1">
                  Search: "{searchTerm}"
                  <button
                    onClick={() => updateURL({ search: null })}
                    className="ml-1 hover:text-gray-700"
                    title="Clear search filter"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              )}
              {statusFilter !== "all" && (
                <Badge variant="secondary" className="flex items-center gap-1">
                  Status: {statusFilter}
                  <button
                    onClick={() => updateURL({ status: null })}
                    className="ml-1 hover:text-gray-700"
                    title="Clear status filter"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              )}
              {roleFilter !== "all" && (
                <Badge variant="secondary" className="flex items-center gap-1">
                  Role: {roleFilter}
                  <button
                    onClick={() => updateURL({ role: null })}
                    className="ml-1 hover:text-gray-700"
                    title="Clear role filter"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Table */}
      <div id="applications-table" className="rounded-lg border bg-white shadow-sm min-h-[600px]">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[150px]">Name</TableHead>
              <TableHead className="w-[200px]">Email</TableHead>
              <TableHead className="w-[180px]">Role</TableHead>
              <TableHead className="w-[120px]">Status</TableHead>
              <TableHead className="w-[140px]">Applied</TableHead>
              <TableHead className="w-[300px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="min-h-[500px]">
            {paginatedApplications.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={6}
                  className="text-center py-8 text-gray-500 h-[500px] align-middle"
                >
                  {hasActiveFilters
                    ? "No applications match your current filters"
                    : "No job applications found"}
                </TableCell>
              </TableRow>
            ) : (
              <>
                {paginatedApplications.map((application) => (
                  <TableRow key={application.id} className="h-[60px]">
                    <TableCell className="font-medium">
                      {application.name}
                    </TableCell>
                    <TableCell>{application.email}</TableCell>
                    <TableCell>{application.role}</TableCell>
                    <TableCell>
                      <Badge
                        className={
                          statusColors[
                            application.status as keyof typeof statusColors
                          ]
                        }
                      >
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
                                    <label className="text-sm font-medium text-gray-500">
                                      Name
                                    </label>
                                    <p className="text-sm">
                                      {selectedApplication.name}
                                    </p>
                                  </div>
                                  <div>
                                    <label className="text-sm font-medium text-gray-500">
                                      Email
                                    </label>
                                    <p className="text-sm">
                                      {selectedApplication.email}
                                    </p>
                                  </div>
                                  <div>
                                    <label className="text-sm font-medium text-gray-500">
                                      Role
                                    </label>
                                    <p className="text-sm">
                                      {selectedApplication.role}
                                    </p>
                                  </div>
                                  <div>
                                    <label className="text-sm font-medium text-gray-500">
                                      Status
                                    </label>
                                    <Badge
                                      className={
                                        statusColors[
                                          selectedApplication.status as keyof typeof statusColors
                                        ]
                                      }
                                    >
                                      {selectedApplication.status}
                                    </Badge>
                                  </div>
                                  <div>
                                    <label className="text-sm font-medium text-gray-500">
                                      Applied Date
                                    </label>
                                    <p className="text-sm">
                                      {formatDate(selectedApplication.createdAt)}
                                    </p>
                                  </div>
                                  <div>
                                    <label className="text-sm font-medium text-gray-500">
                                      Last Updated
                                    </label>
                                    <p className="text-sm">
                                      {formatDate(selectedApplication.updatedAt)}
                                    </p>
                                  </div>
                                </div>

                                <div>
                                  <label className="text-sm font-medium text-gray-500">
                                    Resume
                                  </label>
                                  <div className="mt-1">
                                    <Button
                                      variant="outline"
                                      size="sm"
                                      onClick={() =>
                                        window.open(
                                          selectedApplication.resumeUrl,
                                          "_blank"
                                        )
                                      }
                                    >
                                      <ExternalLink className="h-4 w-4 mr-2" />
                                      View Resume
                                    </Button>
                                  </div>
                                </div>

                                {selectedApplication.message && (
                                  <div>
                                    <label className="text-sm font-medium text-gray-500">
                                      Message
                                    </label>
                                    <p className="text-sm mt-1 p-3 bg-gray-50 rounded-md">
                                      {selectedApplication.message}
                                    </p>
                                  </div>
                                )}

                                <div>
                                  <label className="text-sm font-medium text-gray-500">
                                    Update Status
                                  </label>
                                  <Select
                                    value={selectedApplication.status}
                                    onValueChange={(newStatus) => {
                                      handleStatusChange(
                                        selectedApplication.id,
                                        newStatus
                                      );
                                      setSelectedApplication({
                                        ...selectedApplication,
                                        status: newStatus,
                                      });
                                    }}
                                    disabled={isPending}
                                  >
                                    <SelectTrigger className="mt-1">
                                      <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectItem value="pending">
                                        Pending
                                      </SelectItem>
                                      <SelectItem value="reviewed">
                                        Reviewed
                                      </SelectItem>
                                      <SelectItem value="shortlisted">
                                        Shortlisted
                                      </SelectItem>
                                      <SelectItem value="rejected">
                                        Rejected
                                      </SelectItem>
                                    </SelectContent>
                                  </Select>
                                </div>
                              </div>
                            )}
                          </DialogContent>
                        </Dialog>

                        <Select
                          value={application.status}
                          onValueChange={(newStatus) => {
                            handleStatusChange(application.id, newStatus);
                          }}
                          disabled={isPending}
                        >
                          <SelectTrigger className="w-32">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="pending">Pending</SelectItem>
                            <SelectItem value="reviewed">Reviewed</SelectItem>
                            <SelectItem value="shortlisted">
                              Shortlisted
                            </SelectItem>
                            <SelectItem value="rejected">Rejected</SelectItem>
                          </SelectContent>
                        </Select>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              variant="destructive"
                              size="icon"
                              className="ml-2"
                              disabled={
                                isPending || deletingId === application.id
                              }
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
                              Are you sure you want to delete this application?
                              This action cannot be undone.
                            </div>
                            <div className="flex justify-end gap-2">
                              <DialogTrigger asChild>
                                <Button variant="outline">Cancel</Button>
                              </DialogTrigger>
                              <Button
                                variant="destructive"
                                onClick={() => handleDelete(application.id)}
                                disabled={
                                  isPending || deletingId === application.id
                                }
                              >
                                Delete
                              </Button>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
                {/* Fill remaining rows to maintain consistent height */}
                {Array.from({ 
                  length: Math.max(0, pageSize - paginatedApplications.length) 
                }, (_, i) => (
                  <TableRow key={`empty-${i}`} className="h-[60px]">
                    <TableCell colSpan={6} className="border-0">&nbsp;</TableCell>
                  </TableRow>
                ))}
              </>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination Controls */}
      <div className="h-16 flex flex-col sm:flex-row items-center justify-between gap-4">
        {totalItems > 0 ? (
          <>
            <div className="text-sm text-gray-700">
              Showing {startIndex + 1} to {Math.min(endIndex, totalItems)} of{" "}
              {totalItems} applications
              {hasActiveFilters && " (filtered)"}
            </div>

            {totalPages > 1 && (
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={goToFirstPage}
                  disabled={currentPage === 1}
                  className="hidden sm:flex"
                >
                  <ChevronsLeft className="h-4 w-4" />
                </Button>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={goToPreviousPage}
                  disabled={currentPage === 1}
                >
                  <ChevronLeft className="h-4 w-4" />
                  Previous
                </Button>

                <div className="flex items-center gap-2">
                  {/* Page numbers */}
                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    let pageNum;
                    if (totalPages <= 5) {
                      pageNum = i + 1;
                    } else if (currentPage <= 3) {
                      pageNum = i + 1;
                    } else if (currentPage >= totalPages - 2) {
                      pageNum = totalPages - 4 + i;
                    } else {
                      pageNum = currentPage - 2 + i;
                    }

                    return (
                      <Button
                        key={pageNum}
                        variant={currentPage === pageNum ? "default" : "outline"}
                        size="sm"
                        onClick={() => goToPage(pageNum)}
                        className="w-10 h-10 p-0"
                      >
                        {pageNum}
                      </Button>
                    );
                  })}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={goToNextPage}
                  disabled={currentPage === totalPages}
                >
                  Next
                  <ChevronRight className="h-4 w-4" />
                </Button>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={goToLastPage}
                  disabled={currentPage === totalPages}
                  className="hidden sm:flex"
                >
                  <ChevronsRight className="h-4 w-4" />
                </Button>
              </div>
            )}
          </>
        ) : (
          <div className="text-sm text-gray-500">No data to display</div>
        )}
      </div>

      <div className="h-8 flex items-center justify-center">
        {applications.length > 0 && (
          <div className="text-sm text-gray-500">
            Total applications: {applications.length}
          </div>
        )}
      </div>
    </div>
  );
}
