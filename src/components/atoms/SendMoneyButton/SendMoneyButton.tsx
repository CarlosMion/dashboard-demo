import { ButtonContainer, Content } from "./styled";
import { useTranslations } from "next-intl";
import { SendIcon } from "@/components/atoms/icons";
import { useCallback } from "react";
import { toast } from "react-toastify";

export default function SendMoneyButton() {
  const t = useTranslations();

  const sentToast = useCallback(
    () => toast.success(t("moneySentSuccessfully")),
    [t]
  );

  return (
    <ButtonContainer onClick={sentToast}>
      <Content>
        {t("send")}
        <SendIcon />
      </Content>
    </ButtonContainer>
  );
}
