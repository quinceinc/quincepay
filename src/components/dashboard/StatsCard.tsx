import Card from "../ui/Card";

export default function StatsCard({ title, value }) {
  return (
    <Card>
      <p className="text-gray-400">{title}</p>
      <h3 className="text-2xl mt-2 font-semibold">{value}</h3>
    </Card>
  );
}
