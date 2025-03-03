import { useEffect, useState } from "react";
import numeral from "numeral";
import {
  Button,
  Card,
  CardBody,
  Input,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import { getPaymentMethods } from "../../../_services/payment_method";
import { storeTestimonies } from "../../../_services/testimony";
import { useNavigate } from "react-router-dom";
import { storeDonations } from "../../../_services/donation";
import { getDonationTypes } from "../../../_services/donation_type";
import NotFound from "../NotFound";
import { DataError, DataLoading } from "../DataStatus";
import { showCampaigns } from "../../../_services/campaign";

export default function DonationSection({ campaignId, profile }) {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);

  const [paymentMethods, setPaymentMethods] = useState([]);
  const [donationTypes, setDonationTypes] = useState([]);
  const [campaign, setCampaign] = useState([]);
  const donationAmounts = [20000, 50000, 100000, 200000, 300000, 500000];
  const [formData, setFormData] = useState({
    campaign_id: campaignId.id,
    user_id: profile.id,
    payment_method_id: 0,
    donation_type_id: 0,
    amount: 0,
    quotes: "",
  });

  const navigate = useNavigate();

  const fetchData = async () => {
    setLoading(true);
    setErrors(null);

    try {
      const getPM = await getPaymentMethods();
      const getDT = await getDonationTypes();
      const getC = await showCampaigns(campaignId.id);
      setPaymentMethods(getPM);
      setDonationTypes(getDT);
      setCampaign(getC);
    } catch (err) {
      setErrors("Failed to fetch data, please try again later.");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "donation_amount") {
      setFormData((prevData) => ({ ...prevData, amount: value }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setLoading(true);

    try {
      if (formData.quotes.trim()) {
        await storeTestimonies({
          user_id: profile.id,
          quotes: formData.quotes,
        });
      }

      await storeDonations({
        campaign_id: campaignId.id,
        user_id: profile.id,
        payment_method_id: formData.payment_method_id,
        donation_type_id: formData.donation_type_id,
        amount: formData.amount,
      });
      navigate("/riwayat");
    } catch (err) {
      setErrors(err.response.data.errors || {});
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <DataLoading />;
  }

  if (errors) {
    return <DataError msg={errors} />;
  }

  return (
    <section className="mx-auto py-8 lg:pb-24 lg:pt-20">
      <form onSubmit={handleSubmit}>
        <div className="mx-auto text-center">
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-2 !text-base lg:!text-xl"
          >
            Donasi Kampanye Alam
          </Typography>
          <Typography
            variant="h5"
            color="blue-gray"
            className="mb-4 !text-2xl lg:mb-12 lg:!text-4xl"
          >
            Kebaikanmu, harapan mereka
          </Typography>

          <div className="grid grid-cols-1 gap-x-12 gap-y-6 lg:grid-cols-2 items-start">
            <div className="mx-auto flex flex-col gap-8 lg:max-w-sm">
              <div className="grid gap-3">
                <Typography variant="lead" className="text-left !font-semibold">
                  Nominal
                </Typography>
                <div className="grid gap-5">
                  <div className="grid grid-cols-3 gap-4">
                    {donationAmounts.map((amount) => (
                      <Button
                        key={amount}
                        variant="outlined"
                        className="max-w-full capitalize"
                        onClick={handleChange}
                        name="donation_amount"
                        value={amount}
                      >
                        Rp{amount.toLocaleString("id-ID")}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid gap-3">
                <Typography variant="lead" className="text-left !font-semibold">
                  Metode Pembayaran
                </Typography>
                <div className="grid gap-5">
                  <div className="grid grid-cols-3 gap-4">
                    {paymentMethods.map(({ id, name }) => (
                      <Button
                        key={id}
                        variant="outlined"
                        className="max-w-full capitalize"
                        onClick={handleChange}
                        name="payment_method_id"
                        value={id}
                      >
                        {name}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid gap-3">
                <Typography variant="lead" className="text-left !font-semibold">
                  Jenis Donasi
                </Typography>
                <div className="grid gap-5">
                  <div className="grid grid-cols-3 gap-4">
                    {donationTypes.map(({ id, name }) => (
                      <Button
                        key={id}
                        variant="outlined"
                        className="max-w-full capitalize"
                        onClick={handleChange}
                        name="donation_type_id"
                        value={id}
                      >
                        {name}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid gap-2">
                <Typography variant="lead" className="text-left !font-semibold">
                  Harapan kamu (opsional)
                </Typography>
                <Textarea
                  rows={6}
                  color="gray"
                  placeholder="Message"
                  name="quotes"
                  value={formData.quotes}
                  onChange={handleChange}
                  className="focus:border-t-gray-900"
                  containerProps={{
                    className: "!min-w-full",
                  }}
                  labelProps={{
                    className: "hidden",
                  }}
                />
              </div>
            </div>

            <Card
              shadow={false}
              className="mx-auto w-full max-w-[25rem] overflow-hidden border"
            >
              <CardBody className="flex flex-col gap-3 py-8 text-justify">
                <div className="grid gap-3">
                  <Typography
                    variant="lead"
                    className="text-left !font-semibold"
                  >
                    Informasi diri
                  </Typography>
                  <div className="grid gap-2">
                    <div>
                      <Typography
                        variant="small"
                        className="mb-2 text-left font-medium !text-gray-900"
                      >
                        Kampanye
                      </Typography>
                      <Input
                        color="gray"
                        size="lg"
                        placeholder="Nama Lengkap"
                        name="full-name"
                        value={campaign.title}
                        className="focus:border-t-gray-900"
                        containerProps={{
                          className: "!min-w-full",
                        }}
                        labelProps={{
                          className: "hidden",
                        }}
                        disabled
                      />
                    </div>
                    <div>
                      <Typography
                        variant="small"
                        className="mb-2 text-left font-medium !text-gray-900"
                      >
                        Your Email
                      </Typography>
                      <Input
                        color="gray"
                        size="lg"
                        placeholder="name@email.com"
                        name="email"
                        value={profile.email}
                        className="focus:border-t-gray-900"
                        containerProps={{
                          className: "!min-w-full",
                        }}
                        labelProps={{
                          className: "hidden",
                        }}
                        disabled
                      />
                    </div>
                  </div>
                </div>
                <hr className="border" />
                <Typography
                  variant="lead"
                  color="blue-gray"
                  className="text-left !font-semibold"
                >
                  Rincian Pembayaran
                </Typography>
                <div className="grid gap-3">
                  <div className="mb-3">
                    <div className="flex justify-between">
                      <Typography as="lead" className="text-gray-500">
                        Donasi
                      </Typography>
                      <Typography as="lead" className="text-gray-500">
                        Rp{numeral(formData.amount).format("0,0")}
                      </Typography>
                    </div>
                    <div className="flex justify-between">
                      <Typography as="lead" className="text-gray-500">
                        Biaya admin
                      </Typography>
                      <Typography as="lead" className="text-gray-500">
                        Rp{numeral(0).format("0,0")}
                      </Typography>
                    </div>
                  </div>
                  <hr className="border" />
                  <div className="mt-3">
                    <div className="flex justify-between">
                      <Typography as="lead" className="font-semibold">
                        Total dibayarkan
                      </Typography>
                      <Typography as="lead" className="font-semibold">
                        Rp{numeral(formData.amount).format("0,0")}
                      </Typography>
                    </div>
                  </div>
                </div>
                <Button
                  loading={loading}
                  disabled={loading}
                  type="submit"
                  className="w-full"
                  color="gray"
                >
                  Donasi
                </Button>
              </CardBody>
            </Card>
          </div>
        </div>
      </form>
    </section>
  );
}
