//import account
import Account from "@/core/components/header/Account";

//import label
import Label from "@/core/components/Label";
import NavMobile from "../navbar/NavMobile";
import { Navs } from "@/core/types/navLinks";

//types
import { Role } from "@/core/types/role";

interface IHeaderProps {
  path: "student" | "teacher" | "admin";
  role: Role;
  navs: Navs[];
  display_name:string
}


export default function Header({ role, navs, path ,display_name}: IHeaderProps) {
  return (
    <div className="w-full bg-white-primary rounded-none lg:rounded-2xl px-5 py-4 mb-5 flex justify-between items-center">
      <div className="hidden md:inline-block">
        <Label type={role} />
      </div>
      <div className=" md:hidden">
        <NavMobile navs={navs} path={path} />
      </div>
      <Account name={display_name} role={role} />
    </div>
  );
}
