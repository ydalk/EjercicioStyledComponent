import { FC, PropsWithChildren } from "react";
import { ContainerBody } from "./cardStyled";

const CardBody: FC<PropsWithChildren<object>> = ({
  children,
}: PropsWithChildren<object>) => <ContainerBody className={"card-body"}>{children}</ContainerBody>;

export default CardBody;
