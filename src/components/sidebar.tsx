import { ReactNode } from "react";
import { FaBeer } from "react-icons/fa";
import { TbLayoutDashboard } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import { MdOutlineContactPage } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";

export const Sidebar = () => {
  return (
    <div className="fixed top-[73px] left-0 m-0 flex h-screen w-60 flex-col border-r border-secondary bg-background pt-4 text-white ">
      <SideBarIcon icon={<TbLayoutDashboard size={24} />} text="Dashboard" />

      <div className="absolute bottom-[72px] w-60 border-t border-secondary pt-4">
        <SideBarIcon
          icon={<MdOutlineContactPage size={24} />}
          text="Meus NFTs"
        />
        <SideBarIcon icon={<AiOutlineHeart size={24} />} text="Favoritos" />
        <SideBarIcon
          icon={<IoSettingsOutline size={24} />}
          text="Configurações"
        />
      </div>
    </div>
  );
};

interface SideBarIconProps {
  icon: ReactNode;
  text?: string;
}

const SideBarIcon = ({ icon, text = "Tooltip 💡" }: SideBarIconProps) => {
  return (
    <div className="sidebar-icon group">
      {icon}
      <span>{text}</span>
    </div>
  );
};
