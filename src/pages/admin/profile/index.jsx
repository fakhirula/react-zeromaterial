import { useOutletContext } from "react-router-dom";
import ProfileSection from "../../../components/Section/Profile";

export default function AdminProfile() {
  const { userData } = useOutletContext();

  return (
    <>{userData ? <ProfileSection profile={userData} /> : <p>Loading...</p>}</>
  );
}
