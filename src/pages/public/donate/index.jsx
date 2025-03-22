import { useLocation, useNavigate, useOutletContext } from "react-router-dom";
import DonationSection from "../../../components/Section/Donation";
import { useEffect } from "react";

export default function Donate() {
  const location = useLocation();
  const id = location.state;

  const { userData } = useOutletContext();
  const token = localStorage.getItem("accessToken");


  const navigate = useNavigate();

  useEffect(() => {
    if (!id) {
      navigate(-1);
    }

    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  return (
    <>
      {userData ? (
        <DonationSection campaignId={id} profile={userData} />
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
