import React from "react";
import { db } from "@/db/prisma";
import { format } from "date-fns";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { 
  Search, 
  Download, 
  MoreHorizontal, 
  MessageSquare,
  Clock,
  Calendar,
  Briefcase,
  DollarSign,
  Users,
  Eye
} from "lucide-react";

async function getQuestionnaireStats() {
  const [total, thisMonth, thisWeek] = await Promise.all([
    db.questionnaireSubmission.count(),
    db.questionnaireSubmission.count({
      where: {
        createdAt: {
          gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1)
        }
      }
    }),
    db.questionnaireSubmission.count({
      where: {
        createdAt: {
          gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
        }
      }
    })
  ]);

  return { total, thisMonth, thisWeek };
}

async function getQuestionnaireSubmissions() {
  return await db.questionnaireSubmission.findMany({
    orderBy: { createdAt: "desc" },
  });
}

export default async function QuestionnairePage() {
  const [submissions, stats] = await Promise.all([
    getQuestionnaireSubmissions(),
    getQuestionnaireStats()
  ]);

  const getProjectTypeBadge = (type: string) => {
    const colors: Record<string, string> = {
      "new-website": "bg-blue-100 text-blue-800",
      "redesign": "bg-purple-100 text-purple-800",
      "mobile-app": "bg-green-100 text-green-800",
      "ecommerce": "bg-orange-100 text-orange-800",
      "web-app": "bg-cyan-100 text-cyan-800",
      "other": "bg-gray-100 text-gray-800"
    };
    
    const labels: Record<string, string> = {
      "new-website": "New Website",
      "redesign": "Redesign",
      "mobile-app": "Mobile App",
      "ecommerce": "E-commerce",
      "web-app": "Web App",
      "other": "Other"
    };

    return (
      <Badge variant="default" className={colors[type] || "bg-gray-100 text-gray-800"}>
        {labels[type] || type}
      </Badge>
    );
  };

  const getBudgetBadge = (budget: string) => {
    const colors: Record<string, string> = {
      "under-50k": "bg-gray-100 text-gray-800",
      "50k-1l": "bg-blue-100 text-blue-800",
      "1l-3l": "bg-green-100 text-green-800",
      "3l-5l": "bg-yellow-100 text-yellow-800",
      "above-5l": "bg-purple-100 text-purple-800",
      "discuss": "bg-orange-100 text-orange-800"
    };
    
    const labels: Record<string, string> = {
      "under-50k": "< ₹50K",
      "50k-1l": "₹50K - ₹1L",
      "1l-3l": "₹1L - ₹3L",
      "3l-5l": "₹3L - ₹5L",
      "above-5l": "> ₹5L",
      "discuss": "Discuss"
    };

    return (
      <Badge variant="default" className={colors[budget] || "bg-gray-100 text-gray-800"}>
        {labels[budget] || budget}
      </Badge>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Questionnaire Submissions</h1>
          <p className="text-muted-foreground">
            Project inquiries from the floating questionnaire CTA
          </p>
        </div>
        <div className="flex gap-2">
          <Button size="sm" variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-card text-card-foreground rounded-lg border p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Total Submissions</p>
              <p className="text-2xl font-bold">{stats.total}</p>
            </div>
            <MessageSquare className="h-8 w-8 text-muted-foreground" />
          </div>
        </div>
        
        <div className="bg-card text-card-foreground rounded-lg border p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">This Month</p>
              <p className="text-2xl font-bold">{stats.thisMonth}</p>
            </div>
            <Calendar className="h-8 w-8 text-muted-foreground" />
          </div>
        </div>

        <div className="bg-card text-card-foreground rounded-lg border p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">This Week</p>
              <p className="text-2xl font-bold">{stats.thisWeek}</p>
            </div>
            <Clock className="h-8 w-8 text-muted-foreground" />
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-card rounded-lg border">
        <div className="p-6 space-y-4">
          {/* Search Bar */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search submissions..."
                className="pl-10"
              />
            </div>
          </div>

          {/* Table */}
          <div className="rounded-md border overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[80px]">ID</TableHead>
                  <TableHead className="w-[180px]">Contact Name</TableHead>
                  <TableHead className="w-[200px]">Email</TableHead>
                  <TableHead className="w-[140px]">Phone</TableHead>
                  <TableHead className="w-[180px]">Business</TableHead>
                  <TableHead className="w-[140px]">Project Type</TableHead>
                  <TableHead className="w-[120px]">Budget</TableHead>
                  <TableHead className="w-[140px]">Timeline</TableHead>
                  <TableHead className="w-[160px]">Submitted</TableHead>
                  <TableHead className="w-[80px]">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {submissions.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={10} className="text-center py-8 text-muted-foreground">
                      No submissions yet.
                    </TableCell>
                  </TableRow>
                ) : (
                  submissions.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell className="font-mono text-sm">{item.id}</TableCell>
                      <TableCell className="font-medium">{item.contactName}</TableCell>
                      <TableCell className="text-sm">{item.email}</TableCell>
                      <TableCell className="text-sm">{item.phone}</TableCell>
                      <TableCell className="text-sm">
                        <div className="flex flex-col">
                          <span className="font-medium">{item.businessName || "N/A"}</span>
                          {item.industry && (
                            <span className="text-xs text-muted-foreground">{item.industry}</span>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        {getProjectTypeBadge(item.projectType)}
                      </TableCell>
                      <TableCell>
                        {getBudgetBadge(item.budget)}
                      </TableCell>
                      <TableCell className="text-sm">
                        {item.timeline}
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        {format(new Date(item.createdAt), "dd MMM yyyy, hh:mm a")}
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0" type="button">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem asChild>
                              <Link href={`/admin/questionnaire/${item.id}`}>
                                <Eye className="h-4 w-4 mr-2" />
                                View Details
                              </Link>
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>

          {/* Pagination Info */}
          {submissions.length > 0 && (
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <div>
                Showing 1 to {submissions.length} of {submissions.length} submissions
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <Button variant="outline" size="sm" disabled>
                  Next
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
