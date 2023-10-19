/* eslint-disable react/prop-types */
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

const Card = ({ icon, title, description, link }) => {
  const nav = useNavigate();
  return (
    <div
      onClick={() => nav(link)}
      className="shadow-lg border min-h-[200px] group hover:bg-blue-500 transition md:w-[300px] rounded-md flex flex-col justify-center items-center p-1 gap-1 cursor-pointer"
    >
      <Icon
        className="text-blue-500 text-[50px] group-hover:text-white"
        icon={icon}
      />
      <h1 className="font-bold text-lg group-hover:text-white">{title}</h1>
      <p className="text-sm group-hover:text-white">{description}</p>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div className="flex justify-center">
      <div className="p-5 w-[80%]">
        <h1 className="font-bold text-xl">Dashboard</h1>
        <div className="py-5 flex flex-wrap md:flex-row flex-col gap-5">
          <Card
            link={"/appointment"}
            icon={"ic:round-calendar-month"}
            title={"Book an Appointment"}
            description={"Easily connect with your doctors"}
          />
          <Card
            link={"/prescriptions"}
            icon={"tabler:prescription"}
            title={"Prescriptions"}
            description={"View your prescriptions from your doctors"}
          />
          <Card
            link={"/history"}
            icon={"tabler:history"}
            title={"History"}
            description={"View your medical history"}
          />
          <Card
            link={"/doctors"}
            icon={"ep:avatar"}
            title={"Doctors"}
            description={"View your doctors"}
          />
          <Card
            link={"/hospitals"}
            icon={"solar:hospital-bold"}
            title={"Hospitals"}
            description={"View your hospitals"}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
