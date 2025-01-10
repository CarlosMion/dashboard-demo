import { FullPageCenteredContainer } from "@/components/CommonStyledComponents";
import MyCards from "@/components/organisms/MyCards";

export default function CreditCardsPage() {
  return (
    <FullPageCenteredContainer>
      <MyCards displayMode={"all"} />
    </FullPageCenteredContainer>
  );
}
