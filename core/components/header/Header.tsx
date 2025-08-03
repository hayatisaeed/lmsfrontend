//import account
import Account from "@/core/components/header/Account";

//import label
import Label from "@/core/components/header/Label";

interface IHeaderProps {
  role: "Student" | "Professor" | "Admin";
}

export default function Header({ role }: IHeaderProps) {
  return (
    <div className="w-full bg-white-primary rounded-none lg:rounded-2xl px-5 py-4 mb-5 flex justify-between items-center">
      <Label type={role} />
      <Account name="امیرحسین شکری" />
    </div>
  );
}
