import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
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
import { db } from "@/db/prisma";
import { format } from "date-fns";
import {
  Search,
  Download,
  Upload,
  Trash2,
  MoreHorizontal,
  Plus,
  Mail,
  Users,
  TrendingUp,
  Calendar,
  CheckCircle,
  Filter,
} from "lucide-react";
import ExportClientBtn from "./export-client-btn";
import HeaderAdminTables from "../_comp/HeaderAdminTableComp";



async function getSubscriberStats() {
  const [total, thisMonth, thisWeek] = await Promise.all([
    db.subscriber.count(),
    db.subscriber.count({
      where: {
        subscribedAt: {
          gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
        },
      },
    }),
    db.subscriber.count({
      where: {
        subscribedAt: {
          gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
        },
      },
    }),
  ]);

  return { total, thisMonth, thisWeek };
}

async function getSubscribers() {
  return await db.subscriber.findMany({
    orderBy: { subscribedAt: "desc" },
  });
}
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
export default async function NewsLetterList() {
  const [subscribers, stats] = await Promise.all([
    getSubscribers(),
    getSubscriberStats(),
  ]);

  

  return (
    <div className="space-y-6">
      {/* Header */}
      <HeaderAdminTables
        title="Newsletter Subscribers"
        description="Manage your newsletter subscribers and track their activity."
        RightSideComp={
          <>
          <Button variant="outline" size="sm">
            <Upload className="h-4 w-4 mr-2" />
            Import
          </Button>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Add Subscriber
          </Button>
          </>
        }
      />
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6 flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground">
            Total Subscribers
          </p>
          <p className="text-2xl font-bold">{stats.total}</p>
        </div>
        <Users className="h-8 w-8 text-muted-foreground" />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground">
            This Month
          </p>
          <p className="text-2xl font-bold">{stats.thisMonth}</p>
        </div>
        <Calendar className="h-8 w-8 text-muted-foreground" />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground">
            This Week
          </p>
          <p className="text-2xl font-bold">{stats.thisWeek}</p>
        </div>
        <TrendingUp className="h-8 w-8 text-muted-foreground" />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground">
            Quick Access
          </p>
          <Button variant="outline" size="sm" className="mt-2" asChild>
            <a
          href="/admin/newsletter-manager-portal"
          target="_blank"
          rel="noopener noreferrer"
            >
          <Mail className="h-4 w-4 mr-2" />
          Manager Portal
            </a>
          </Button>
        </div>
          </CardContent>
        </Card>
      </div>

      {/* Enhanced Table */}
      <div className="bg-card rounded-lg border">
        <div className="p-6 space-y-4">
          {/* Search and Actions Bar */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input placeholder="Search subscribers..." className="pl-10" />
            </div>

            <div className="flex gap-2">
              <ExportClientBtn 
                subscribers={subscribers}
              />

              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
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
                  <TableHead>Email</TableHead>
                  <TableHead className="w-[120px]">Status</TableHead>
                  <TableHead className="w-[180px]">Subscribed At</TableHead>
                  <TableHead className="w-[80px]">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {subscribers.length === 0 ? (
                  <TableRow>
                    <TableCell
                      colSpan={6}
                      className="text-center py-8 text-muted-foreground"
                    >
                      No subscribers yet.
                    </TableCell>
                  </TableRow>
                ) : (
                  subscribers.map((subscriber) => (
                    <TableRow key={subscriber.id}>
                      <TableCell>
                        <Checkbox />
                      </TableCell>
                      <TableCell className="font-mono text-sm">
                        {subscriber.id}
                      </TableCell>
                      <TableCell className="font-medium">
                        {subscriber.email}
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant="default"
                          className="bg-green-100 text-green-800"
                        >
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Active
                        </Badge>
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        {format(
                          new Date(subscriber.subscribedAt),
                          "dd MMM yyyy, hh:mm a"
                        )}
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <Mail className="h-4 w-4 mr-2" />
                              Send Email
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-red-600">
                              <Trash2 className="h-4 w-4 mr-2" />
                              Delete
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
          {subscribers.length > 0 && (
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <div>
                Showing 1 to {subscribers.length} of {subscribers.length}{" "}
                subscribers
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
