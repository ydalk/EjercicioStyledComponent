import { FC, PropsWithChildren } from "react";
import CardImage from "@/features/card/card-image.component";
import CardBody from "@/features/card/card-body.component";
import { ContainerCard } from "./cardStyled";



type CompoundCard = FC<PropsWithChildren<object>> & {
  Image: FC<PropsWithChildren<object>>;
  Body: FC<PropsWithChildren<object>>;
};

const Card: CompoundCard = ({ children }: PropsWithChildren<object>) => (
  <>
  <ContainerCard className={"card"}>{children}</ContainerCard>
  </>
);

Card.Image = CardImage;
Card.Body = CardBody;

export default Card;
