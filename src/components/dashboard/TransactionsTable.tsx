import Card from "../ui/Card";
import Badge from "../ui/Badge";

export default function TransactionsTable({ transactions }) {
  return (
    <Card>
      <h3 className="mb-4 font-semibold">Recent Transactions</h3>

      <div className="space-y-3">
        {transactions.map((t, i) => (
          <div key={i} className="flex justify-between text-sm">
            <span>${t.amount}</span>
            <Badge text={t.status} />
          </div>
        ))}
      </div>
    </Card>
  );
}
