import { decodeToken } from "../../../_formats";
import ProfileSection from "../../../components/Section/Profile";

export default function AdminProfile() {

  const userData = decodeToken(localStorage.getItem("accessToken"));

  return <ProfileSection profile={userData} />;
}
