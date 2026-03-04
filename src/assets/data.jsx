import { BellRing, Monitor, Sliders } from "lucide-react";

const navLinks = ["Home", "About", "Technology", "Specs", "Reviews"];

const chartData = [40, 60, 30, 80, 50, 90, 45, 70, 85, 40, 60, 100];
const specs = [
  { label: "Inverter Dimensions", value: '74.4" x 41.2" x 1.57"' },
  { label: "Inverter Dimensions", value: '26" x 16" x 6"' },
  { label: "Materials", value: '26" x 16" x 6"' },
];

const services = [
  {
    title: "Monitor Energy Flow",
    icon: <Monitor size={14} />,
    bg: "bg-[url('/images/solar-2.jpg')] bg-cover bg-center saturate-150", 
  },
  {
    title: "Customize Preferences",
    icon: <Sliders size={14} />,
    bg: "bg-[url('/images/solar-1.jpg')] bg-cover bg-center saturate-150", 
  },
  {
    title: "Get Urgent Alerts",
    icon: <BellRing size={14} />,
    bg: "bg-[url('/images/solar-3.jpg')] bg-cover bg-center saturate-150", 
    isComingSoon: true,
  },
];



export { navLinks, chartData, specs, services, };
