import React, { useState } from "react";
import numeral from 'numeral';
import { Button, Card, CardBody, Input, Textarea, Typography } from "@material-tailwind/react";

export function DonationSection() {
  const [selectedDonation, setSelectedDonation] = useState(0); // State to store selected donation
  const [selectedMethod, setSelectedMethod] = useState(""); // State to store selected donation method

  const handleDonationChange = (event) => {
    setSelectedDonation(parseInt(event.target.value)); // Update state with selected donation amount
  };

  const handleMethodChange = (event) => {
    setSelectedMethod(event.target.value); // Update state with selected donation method
  };

  const calculateAdminFee = () => {
    switch (selectedMethod) {
      case "virtualAccount":
        return 3000;
      case "emoney":
        return 1000;
      case "qris":
        return 0;
      default:
        return 0;
    }
  };

  const totalAmount = () => {
    const adminFee = calculateAdminFee();
    return (selectedDonation) + adminFee;
  };
  
  return (
    <section className="mx-auto py-8 lg:pb-24 lg:pt-20">
      <form action="#">
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
                <Typography
                  variant="lead"
                  className="text-left !font-semibold"
                >
                  Nominal donasi
                </Typography>
                <div className="grid gap-5">
                  <div className="grid grid-cols-3 gap-4">
                    <Button
                      variant="outlined"
                      className="max-w-full capitalize"
                      onClick={handleDonationChange}
                      value={20000}
                      style={{ backgroundColor: selectedDonation === 20000 ? "#ddd" : "#fff" }}
                    >
                      Rp20.000
                    </Button>
                    <Button
                      variant="outlined"
                      className="max-w-full capitalize"
                      onClick={handleDonationChange}
                      value={50000}
                      style={{ backgroundColor: selectedDonation === 50000 ? "#ddd" : "#fff" }}
                    >
                      Rp50.000
                    </Button>
                    <Button
                      variant="outlined"
                      className="max-w-full capitalize"
                      onClick={handleDonationChange}
                      value={100000}
                      style={{ backgroundColor: selectedDonation === 100000 ? "#ddd" : "#fff" }}
                    >
                      Rp100.000
                    </Button>
                    <Button
                      variant="outlined"
                      className="max-w-full capitalize"
                      onClick={handleDonationChange}
                      value={200000}
                      style={{ backgroundColor: selectedDonation === 200000 ? "#ddd" : "#fff" }}
                    >
                      Rp200.000
                    </Button>
                    <Button
                      variant="outlined"
                      className="max-w-full capitalize"
                      onClick={handleDonationChange}
                      value={300000}
                      style={{ backgroundColor: selectedDonation === 300000 ? "#ddd" : "#fff" }}
                    >
                      Rp300.000
                    </Button>
                    <Button
                      variant="outlined"
                      className="max-w-full capitalize"
                      onClick={handleDonationChange}
                      value={500000}
                      style={{ backgroundColor: selectedDonation === 500000 ? "#ddd" : "#fff" }}
                    >
                      Rp500.000
                    </Button>
                  </div>
                </div>
              </div>

              <div className="grid gap-3">
                <Typography
                  variant="lead"
                  className="text-left !font-semibold"
                >
                  Metode Pembayaran donasi
                </Typography>
                <div className="grid gap-5">
                  <div className="grid grid-cols-3 gap-4">
                    <Button
                      variant="outlined"
                      className="max-w-full capitalize"
                      onClick={handleMethodChange}
                      value="virtualAccount"
                      style={{ backgroundColor: selectedMethod === "virtualAccount" ? "#ddd" : "#fff" }}
                    >Virtual Account</Button>
                    <Button
                      variant="outlined"
                      className="max-w-full capitalize"
                      onClick={handleMethodChange}
                      value="emoney"
                      style={{ backgroundColor: selectedMethod === "emoney" ? "#ddd" : "#fff" }}
                    >E-Money</Button>
                    <Button
                      variant="outlined"
                      className="max-w-full capitalize"
                      onClick={handleMethodChange}
                      value="qris"
                      style={{ backgroundColor: selectedMethod === "qris" ? "#ddd" : "#fff" }}
                    >QRIS</Button>
                  </div>
                </div>
              </div>

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
                      Nama Lengkap
                    </Typography>
                    <Input
                      color="gray"
                      size="lg"
                      placeholder="Nama Lengkap"
                      name="full-name"
                      className="focus:border-t-gray-900"
                      containerProps={{
                        className: "!min-w-full",
                      }}
                      labelProps={{
                        className: "hidden",
                      }}
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
              </div>

              
              <div className="grid gap-2">
                <Typography
                  variant="lead"
                  className="text-left !font-semibold"
                >
                  Harapan kamu (opsional)
                </Typography>
                <Textarea
                  rows={6}
                  color="gray"
                  placeholder="Message"
                  name="message"
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
            
            <Card shadow={false} className="mx-auto w-full max-w-[25rem] overflow-hidden border">
              <CardBody className="flex flex-col gap-3 py-8 text-justify">
                <Typography variant="lead" color="blue-gray" className="text-left !font-semibold">
                  Rincian Pembayaran
                </Typography>
                <div className="grid gap-3">
                  <div className="mb-3">
                    <div className="flex justify-between">
                      <Typography as="lead" className="text-gray-500">
                        Donasi
                      </Typography>
                      <Typography as="lead" className="text-gray-500">
                        Rp{numeral(selectedDonation).format('0,0')}
                      </Typography>
                    </div>
                    <div className="flex justify-between">
                      <Typography as="lead" className="text-gray-500">
                        Biaya admin
                      </Typography>
                      <Typography as="lead" className="text-gray-500">
                        Rp{numeral(calculateAdminFee()).format('0,0')}
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
                        Rp{numeral(totalAmount()).format('0,0')}
                      </Typography>
                    </div>
                  </div>
                </div>
                <Button className="w-full" color="gray">
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

export default DonationSection;