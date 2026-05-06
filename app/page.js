import Button from "../Components/Button";
import Card from "../Components/Card";
import Badge from "../Components/Badge";

export default function Home() {
  return (
    <div className="p-10 flex flex-col gap-6">
      <h1 className="text-3xl font-bold">Hello Ritika!</h1>

      <Button text="Click Me!" />
      <Button text="Submit" color="green" />
      <Button text="Delete" color="red" />

      <Card title="JavaScript" description="Learning JS fundamentals!">
        <Badge label="Day 1 , Day 2 : Done" />
      </Card>

      <Card title="React" description="Learning React today!">
        <Badge label="Day 3 " />
      </Card>
    </div>
  );
}