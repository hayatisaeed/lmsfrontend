//import account
import Account from "@/components/header/Account";

//import label
import Label from "@/components/header/Label";
export default function Header() {
  return (
    <div className="w-full bg-white-primary rounded-none lg:rounded-2xl px-5 py-4 mb-5 flex justify-between items-center">
      <Label type="Admin" />
      <Account name="امیرحسین شکری" />
    </div>
  );
}
