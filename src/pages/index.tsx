import Image from "next/image";
import { Inter } from "next/font/google";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableHeader, TableCaption, TableHead, TableRow, TableCell } from "@/components/ui/table";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>DagName</TableHead>
            <TableHead>Principal Operator</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell className="font-medium">INV001</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell className="font-medium">INV001</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Button>Click me</Button>
    </main>
  );
}
