import { useLocation, useNavigate } from "react-router-dom";
import DonationSection from "../../../components/Section/Donation";
import { decodeToken } from "../../../_formats";
import { useEffect } from "react";

export default function Donate() {
  const location = useLocation();
  const id = location.state;

  const token = localStorage.getItem("accessToken");
  const userData = decodeToken(token);

  const navigate = useNavigate();

  useEffect(() => {
    if (!id) {
      navigate(-1);
    }
    
    if (!token) {
      navigate("/login");
    }

  }, [token, navigate]);

  console.log(id);

  return (
    <>
      <DonationSection campaignId={id} profile={userData} />
    </>
  );
}