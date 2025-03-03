import { useEffect } from "react";
import { decodeToken } from "../../../_formats";
import ProfileSection from "../../../components/Section/Profile";
import { useNavigate } from "react-router-dom";

export default function UserProfile() {
  const token = localStorage.getItem("accessToken");
  const userData = decodeToken(token);

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);
  

  return <ProfileSection profile={userData} />;
}
