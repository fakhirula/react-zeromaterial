import { useEffect } from "react";
import ProfileSection from "../../../components/Section/Profile";
import { useNavigate, useOutletContext } from "react-router-dom";

export default function UserProfile() {
  const { userData } = useOutletContext();
  const token = localStorage.getItem("accessToken");

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  return (
    <>
      {userData ? (
        <ProfileSection profile={userData} />
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
