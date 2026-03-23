import Card from "../ui/Card";
import Button from "../ui/Button";

export default function BalanceCard({ balance, onWithdraw, loading }) {
  return (
    <Card>
      <p className="text-gray-400">Available Balance</p>
      <h2 className="text-4xl font-bold mt-2">${balance}</h2>

      <div className="mt-6">
        <Button onClick={onWithdraw} loading={loading}>
          Withdraw Funds
        </Button>
      </div>
    </Card>
  );
}
