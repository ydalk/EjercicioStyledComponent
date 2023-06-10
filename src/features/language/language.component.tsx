import { FC } from "react";
import { useLanguage } from "@/features/language/index";
import {ButtonS, ContainerLanguage} from"./lenguageStyled";

const LanguageComponent: FC = () => {
  const { language, setLanguage, t } = useLanguage();
  return (
    <ContainerLanguage className={"language"}>
      <ButtonS
        onClick={() => setLanguage("SPANISH")}
          isActive={
          language === "SPANISH"
        }
      >
        {t("language.spanish")}
      </ButtonS>
      <ButtonS
        onClick={() => setLanguage("ENGLISH")}
          isActive={
          language === "ENGLISH"
        }
      >
        {t("language.english")}
      </ButtonS>
      <ButtonS
        onClick={() => setLanguage("PORTUGUESE")}
          isActive={
          language === "PORTUGUESE"
        }
      >
        {t("language.portuguese")}
      </ButtonS>
    </ContainerLanguage>
  );
};
export default LanguageComponent;
