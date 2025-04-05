import { FC } from "react";
import { Card } from "@/components/ui/card";

interface PartnersCardProps {
  name?: string;
}

const PartnersCard: FC<PartnersCardProps> = () => {
  return (
    <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow">
      <div className={`flex flex-col ${"md:flex-row-reverse"} gap-6`}>
        <p>todo</p>
        {/* TODO: Remove partners from PartnersPage to be put into PartnersCard. Partners should be : VSE,CSAS,EY,Loreal, tbd,tbd (2 more). PartnersCard should look like 4fis.cz partners. (No text needed anymore)  /> */}
      </div>
    </Card>
  );
};

export default PartnersCard;
