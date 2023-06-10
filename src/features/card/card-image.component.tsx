import { FC, PropsWithChildren } from 'react';
import { ContainerImage } from "./cardStyled";


const CardImage: FC<PropsWithChildren<object>> = ({ children }: PropsWithChildren<object>) => (
  <ContainerImage className={'card-image'}>{children}</ContainerImage>
);

export default CardImage;
