import { useEffect, useState } from "react";
import { decodeToken } from "../../../_formats";
import ProfileSection from "../../../components/Section/Profile";
import { useNavigate } from "react-router-dom";

export default function UserProfile() {
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

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
