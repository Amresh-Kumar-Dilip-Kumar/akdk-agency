import React from "react";
import {db} from "@/db/prisma";
import { deleteMessage, markAsReplied, bulkDeleteMessages } from "./action";
import { format } from "date-fns";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Search, 
  Download, 
  Trash2, 
  MoreHorizontal, 
  Mail,
  MessageSquare,
  Clock,
  CheckCircle,
  AlertCircle,
  Calendar,
  Reply,
  Archive,
  Eye,
  Filter
} from "lucide-react";
import ExportMessagesBtn from "./ExportMessagesBtn";

async function getContactStats() {
  const [total, thisMonth, thisWeek, unread] = await Promise.all([
    db.contactformdetails.count(),
    db.contactformdetails.count({
      where: {
        created_at: {
          gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1)
        }
      }
    }),
    db.contactformdetails.count({
      where: {
        created_at: {
          gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
        }
      }
    }),
    db.contactformdetails.count({
      where: {
        status: 'unread'
      }
    })
  ]);

  return { total, thisMonth, thisWeek, unread };
}

async function getContactMessages() {
  return await db.contactformdetails.findMany({
    orderBy: { created_at: "desc" },
  });
}

export default async function ContactFormEntriesPage() {
  const [messages, stats] = await Promise.all([
    getContactMessages(),
    getContactStats()
  ]);

  
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'read':
        return (
          <Badge variant="default" className="bg-blue-100 text-blue-800">
            <Eye className="h-3 w-3 mr-1" />
            Read
          </Badge>
        );
      case 'replied':
        return (
          <Badge variant="default" className="bg-green-100 text-green-800">
            <CheckCircle className="h-3 w-3 mr-1" />
            Replied
          </Badge>
        );
      case 'archived':
        return (
          <Badge variant="default" className="bg-gray-100 text-gray-800">
            <Archive className="h-3 w-3 mr-1" />
            Archived
          </Badge>
        );
      default:
        return (
          <Badge variant="default" className="bg-orange-100 text-orange-800">
            <AlertCircle className="h-3 w-3 mr-1" />
            New
          </Badge>
        );
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'high':
        return (
          <Badge variant="destructive" className="bg-red-100 text-red-800">
            High
          </Badge>
        );
      case 'medium':
        return (
          <Badge variant="default" className="bg-yellow-100 text-yellow-800">
            Medium
          </Badge>
        );
      default:
        return (
          <Badge variant="outline" className="bg-gray-50 text-gray-600">
            Normal
          </Badge>
        );
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Contact Form Messages</h1>
          <p className="text-muted-foreground">
            Manage customer inquiries and contact form submissions
          </p>
        </div>
        <div className="flex gap-2">
          <ExportMessagesBtn messages={messages} />
          <Button size="sm">
            <Reply className="h-4 w-4 mr-2" />
            Reply All
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-card text-card-foreground rounded-lg border p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Total Messages</p>
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

        <div className="bg-card text-card-foreground rounded-lg border p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Unread</p>
              <p className="text-2xl font-bold text-orange-600">{stats.unread}</p>
            </div>
            <AlertCircle className="h-8 w-8 text-orange-500" />
          </div>
        </div>
      </div>

      {/* Enhanced Table */}
      <div className="bg-card rounded-lg border">
        <div className="p-6 space-y-4">
          {/* Search and Actions Bar */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex gap-2 items-center flex-1">
              <div className="relative flex-1 max-w-sm">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search messages..."
                  className="pl-10"
                />
              </div>
              
              <Select defaultValue="all">
                <SelectTrigger className="w-[140px]">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="unread">Unread</SelectItem>
                  <SelectItem value="read">Read</SelectItem>
                  <SelectItem value="replied">Replied</SelectItem>
                  <SelectItem value="archived">Archived</SelectItem>
                </SelectContent>
              </Select>

              <Select defaultValue="all">
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Priority</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="normal">Normal</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Archive className="h-4 w-4 mr-2" />
                Archive Selected
              </Button>
              <Button variant="outline" size="sm" className="text-red-600">
                <Trash2 className="h-4 w-4 mr-2" />
                Delete Selected
              </Button>
            </div>
          </div>

          {/* Table */}
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[50px]">
                    <Checkbox />
                  </TableHead>
                  <TableHead className="w-[80px]">ID</TableHead>
                  <TableHead className="w-[180px]">Name</TableHead>
                  <TableHead className="w-[200px]">Email</TableHead>
                  <TableHead className="w-[120px]">Phone</TableHead>
                  <TableHead>Message</TableHead>
                  <TableHead className="w-[100px]">Status</TableHead>
                  <TableHead className="w-[100px]">Priority</TableHead>
                  <TableHead className="w-[160px]">Submitted</TableHead>
                  <TableHead className="w-[80px]">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {messages.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={10} className="text-center py-8 text-muted-foreground">
                      No messages yet.
                    </TableCell>
                  </TableRow>
                ) : (
                  messages.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>
                        <Checkbox />
                      </TableCell>
                      <TableCell className="font-mono text-sm">{item.id}</TableCell>
                      <TableCell className="font-medium">{item.name}</TableCell>
                      <TableCell>{item.email}</TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        {item.phone || 'N/A'}
                      </TableCell>
                      <TableCell className="max-w-xs">
                        <div className="truncate">
                          {item.message || 'No message'}
                        </div>
                      </TableCell>
                      <TableCell>
                        {getStatusBadge(item.status || 'unread')}
                      </TableCell>
                      <TableCell>
                        {getPriorityBadge(item.priority || 'normal')}
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        {format(new Date(item.created_at), "dd MMM yyyy, hh:mm a")}
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0" type="button">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <Eye className="h-4 w-4 mr-2" />
                              Mark as Read
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Reply className="h-4 w-4 mr-2" />
                              Reply
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Archive className="h-4 w-4 mr-2" />
                              Archive
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                              <form action={deleteMessage}>
                                <input type="hidden" name="id" value={item.id} />
                                <Button variant="ghost" className="flex items-center text-red-600 w-full p-0">
                                  <Trash2 className="h-4 w-4 mr-2" />
                                  Delete
                                </Button>
                              </form>
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
          {messages.length > 0 && (
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <div>
                Showing 1 to {messages.length} of {messages.length} messages
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
