import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  
  const invoices = [
    {
      invoice: "United State",
      paymentStatus: "2500",
      totalAmount: "$230,900",
      paymentMethod: "29.9%",
    },
    {
        invoice: "United State",
        paymentStatus: "2500",
        totalAmount: "$230,900",
        paymentMethod: "29.9%",
      },
      {
        invoice: "United State",
        paymentStatus: "2500",
        totalAmount: "$230,900",
        paymentMethod: "29.9%",
      },
      {
        invoice: "United State",
        paymentStatus: "2500",
        totalAmount: "$230,900",
        paymentMethod: "29.9%",
      },
  ]
  
  export function TableDemo() {
    return (
      <Table>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="font-medium">{invoice.invoice}</TableCell>
              <TableCell>{invoice.paymentStatus}</TableCell>
              <TableCell>{invoice.paymentMethod}</TableCell>
              <TableCell className="text-right">{invoice.totalAmount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }
export default TableDemo;  