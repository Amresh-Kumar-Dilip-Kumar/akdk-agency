import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import db from "@/db/prisma"; // adjust path if needed
import { format } from "date-fns"; // Optional: to format createdAt date

export default async function NewsLetterList() {
  const subscribers = await db.subscriber.findMany({
    orderBy: { subscribedAt: "desc" },
  });

  return (
    <Table>
      <TableCaption>List of all subscribed newsletter emails.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[50px]">ID</TableHead>
          <TableHead className="w-[300px]">Email</TableHead>
          <TableHead>Subscribed At</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {subscribers.map((subscriber) => (
          <TableRow key={subscriber.id}>
            <TableCell>{subscriber.id}</TableCell>
            <TableCell>{subscriber.email}</TableCell>
            <TableCell>
              {format(
                new Date(subscriber.subscribedAt),
                "dd MMM yyyy, hh:mm a"
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
