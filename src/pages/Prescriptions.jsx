import { Button, Modal } from "@mui/material";
import { useState } from "react";
import { Icon } from "@iconify/react";

const Card = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="flex flex-col gap-1 border shadow-md w-fit rounded-md overflow-hidden">
        <div className="h-[300px] w-[300px] bg-blue-300"></div>
        <div className="flex flex-col gap-1 p-2">
          <h1 className="font-bold">Biogesic</h1>
          <span className="text-green-600">₱299.00</span>
          <div className="flex justify-between w-full items-center">
            <span>UNILAB</span>
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
            <div className="h-[300px] md:w-[300px] w-full bg-blue-400"></div>
            <div className="flex flex-col gap-2">
              <h1 className="font-bold">(12x) Biogesic (500mg)</h1>
              <span>Paracetamol</span>
              <span className="text-green-600">₱299.00</span>
              <span>Take: Trice per day</span>
              <span>Every: 3-5 hours</span>
              <span>For: 5 days</span>
              <Button variant="contained">e-Prescription</Button>
            </div>
          </div>
          <div className="">
            <h1 className="font-bold">Product Description</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae nam repellendus magnam, voluptates sunt aut consectetur
              omnis sequi, illo fuga totam amet voluptate? Commodi placeat
              obcaecati, error reprehenderit fugit iusto!
            </p>
          </div>
          <div className="">
            <h1 className="font-bold">Side Effects</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae nam repellendus magnam, voluptates sunt aut consectetur
              omnis sequi, illo fuga totam amet voluptate? Commodi placeat
              obcaecati, error reprehenderit fugit iusto!
            </p>
          </div>
        </div>
      </Modal>
    </>
  );
};

const Prescriptions = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[80%] p-5">
        <h1 className="font-bold text-xl">Prescriptions</h1>
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

export default Prescriptions;
