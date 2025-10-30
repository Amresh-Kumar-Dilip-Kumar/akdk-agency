import React from "react";
import { db } from "@/db/prisma";
import { format } from "date-fns";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ArrowLeft,
  Mail, 
  Phone,
  Building,
  Calendar,
  DollarSign,
  Briefcase,
  Globe,
  Users,
  FileText,
  CheckCircle,
  Clock,
  Tag
} from "lucide-react";
import Link from "next/link";

interface QuestionnaireDetailPageProps {
  params: Promise<{ id: string }>;
}

async function getSubmission(id: number) {
  return await db.questionnaireSubmission.findUnique({
    where: { id }
  });
}

export default async function QuestionnaireDetailPage({ params }: QuestionnaireDetailPageProps) {
  const { id } = await params;
  const submission = await getSubmission(parseInt(id));

  if (!submission) {
    notFound();
  }

  // Parse JSON fields
  const services = JSON.parse(submission.services || "[]");
  const features = JSON.parse(submission.features || "[]");

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/admin/questionnaire">
            <Button variant="outline" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to List
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Submission #{submission.id}</h1>
            <p className="text-muted-foreground">
              Submitted on {format(new Date(submission.createdAt), "dd MMMM yyyy 'at' hh:mm a")}
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Mail className="h-4 w-4 mr-2" />
            Send Proposal
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Main Details */}
        <div className="lg:col-span-2 space-y-6">
          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>Primary contact details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Mail className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">{submission.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Phone className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium">{submission.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Users className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Contact Name</p>
                    <p className="font-medium">{submission.contactName}</p>
                  </div>
                </div>

                {submission.preferredContact && (
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-orange-100 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-orange-600" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Preferred Contact</p>
                      <p className="font-medium capitalize">{submission.preferredContact}</p>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Business Information */}
          <Card>
            <CardHeader>
              <CardTitle>Business Information</CardTitle>
              <CardDescription>Details about the client's business</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {submission.businessName && (
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-indigo-100 rounded-lg">
                      <Building className="h-5 w-5 text-indigo-600" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Business Name</p>
                      <p className="font-medium">{submission.businessName}</p>
                    </div>
                  </div>
                )}

                {submission.industry && (
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-cyan-100 rounded-lg">
                      <Tag className="h-5 w-5 text-cyan-600" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Industry</p>
                      <p className="font-medium capitalize">{submission.industry}</p>
                    </div>
                  </div>
                )}

                {submission.businessSize && (
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-pink-100 rounded-lg">
                      <Users className="h-5 w-5 text-pink-600" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Business Size</p>
                      <p className="font-medium capitalize">{submission.businessSize}</p>
                    </div>
                  </div>
                )}

                {submission.currentWebsite && (
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-teal-100 rounded-lg">
                      <Globe className="h-5 w-5 text-teal-600" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Current Website</p>
                      <a 
                        href={submission.currentWebsite} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="font-medium text-blue-600 hover:underline"
                      >
                        {submission.currentWebsite}
                      </a>
                    </div>
                  </div>
                )}
              </div>

              {submission.description && (
                <div className="pt-4 border-t">
                  <p className="text-sm text-muted-foreground mb-2">Business Description</p>
                  <p className="text-sm leading-relaxed">{submission.description}</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Services & Features */}
          <Card>
            <CardHeader>
              <CardTitle>Services & Features</CardTitle>
              <CardDescription>Requested services and features</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {services.length > 0 && (
                <div>
                  <p className="text-sm font-medium mb-3">Services Needed</p>
                  <div className="flex flex-wrap gap-2">
                    {services.map((service: string, idx: number) => (
                      <Badge key={idx} variant="secondary" className="bg-blue-100 text-blue-800">
                        {service}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {features.length > 0 && (
                <div>
                  <p className="text-sm font-medium mb-3">Features Required</p>
                  <div className="flex flex-wrap gap-2">
                    {features.map((feature: string, idx: number) => (
                      <Badge key={idx} variant="outline">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {submission.additionalInfo && (
                <div className="pt-4 border-t">
                  <p className="text-sm font-medium mb-2">Additional Information</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {submission.additionalInfo}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Summary */}
        <div className="space-y-6">
          {/* Project Summary */}
          <Card>
            <CardHeader>
              <CardTitle>Project Summary</CardTitle>
              <CardDescription>Key project details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-red-100 rounded-lg">
                  <Briefcase className="h-5 w-5 text-red-600" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Project Type</p>
                  <p className="font-medium capitalize">
                    {submission.projectType.replace(/-/g, " ")}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-yellow-100 rounded-lg">
                  <DollarSign className="h-5 w-5 text-yellow-600" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Budget Range</p>
                  <p className="font-medium">{submission.budget}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Clock className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Timeline</p>
                  <p className="font-medium capitalize">{submission.timeline}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Calendar className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Submitted At</p>
                  <p className="font-medium">
                    {format(new Date(submission.createdAt), "dd MMM yyyy")}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button className="w-full" variant="default">
                <Mail className="h-4 w-4 mr-2" />
                Send Proposal
              </Button>
              <Button className="w-full" variant="outline">
                <Phone className="h-4 w-4 mr-2" />
                Schedule Call
              </Button>
              <Button className="w-full" variant="outline">
                <FileText className="h-4 w-4 mr-2" />
                Create Quote
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
