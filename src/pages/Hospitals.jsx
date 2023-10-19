import { Button, Modal } from "@mui/material";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Card = () => {
  const [isOpen, setIsOpen] = useState(false);
  const nav = useNavigate();
  return (
    <>
      <div className="flex flex-col gap-1 border shadow-md w-fit rounded-md overflow-hidden">
        <div className="h-[300px] w-[300px] bg-blue-300"></div>
        <div className="flex flex-col gap-1 p-2">
          <h1 className="font-bold">Hospital Name</h1>
          <div className="flex justify-between w-full items-center">
            <span className="flex items-center gap-1">
              4.5 <Icon className="text-yellow-400" icon={"ic:round-star"} />
            </span>
            <Button onClick={() => setIsOpen(true)} variant="contained">
              View Details
            </Button>
          </div>
        </div>
      </div>
      <Modal
        className="flex justify-center items-center"
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <div className="bg-white p-5 w-full max-w-[800px] flex flex-col gap-5 h-full md:h-fit overflow-auto">
          <span>
            <Icon
              className="ml-auto text-red-500 text-3xl cursor-pointer"
              icon={"ic:round-close"}
              onClick={() => setIsOpen(false)}
            />
          </span>
          <div className="flex gap-5 flex-col md:flex-row">
            <div className="h-[300px] lg:w-[800px] w-full bg-blue-400"></div>
            <div className="flex flex-col gap-2">
              <h1 className="font-bold">Hospital Name</h1>
              <div className="flex flex-col gap-3 h-full">
                <h1 className="font-medium">Description</h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
                  rem, fuga pariatur delectus nostrum tempora odit placeat
                  quidem quos, omnis natus consequatur eos cumque?
                  Exercitationem temporibus asperiores doloribus culpa est?
                </p>
              </div>
              <Button onClick={() => nav("/appointment")} variant="contained">
                Get your Appointment now!
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

const Hospitals = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[80%] p-5">
        <h1 className="font-bold text-xl">Hospitals</h1>
        <div className="flex flex-wrap pt-5 gap-5">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Hospitals;
