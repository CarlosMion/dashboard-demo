import { User } from "@/types";
import { Container } from "./styled";

interface HeaderProps {
  loggedInUser?: User;
  toggleDrawer: () => void;
}
// TODO: SHOW LOGIN BUTTON IF USER IS NOT LOGGED IN
export default function Header({}: HeaderProps) {
  return <Container></Container>;
}
