import { Friend } from "@/types";
import { Container, Headline, Title } from "./styled";
import ProfilePicture from "@/components/atoms/ProfilePicture";

interface UserSelectorProps {
  user?: Friend;
}

export default function UserSelector({ user }: UserSelectorProps) {
  return (
    <Container>
      <ProfilePicture
        mobileSize={45}
        desktopSize={65}
        title={`${user?.name}'s picture`}
        src={user?.pictureUrl}
      />
      <Title variant="subtitle1">{user?.name}</Title>
      <Headline variant="body1">{user?.headline}</Headline>
    </Container>
  );
}
