import { Card } from "./Card/Card";

export const ContainerCards = () => {
  return (
    <div className="w-full h-full mt-2 flex flex-col gap-1">
      {Array.from({ length: 3 }).map((_, index) => (
        <Card key={index} />
      ))}
    </div>
  );
};
