"use client";
import OTPInput from "@/shared/components/OTPInput";
import { Smartphone } from "@/shared/icons";
import Logout3 from "@/shared/icons/arrowsAction/Logout3";
import { Button } from "@/shared/ui";
import { useState } from "react";

export default function Page() {
  const [e, setE] = useState(false);

  return (
    <div>
      <h3 className="bg-">sdssdfdsf</h3>
      <OTPInput
        error={e}
        onComplete={(c) => {
          console.log(c);
        }}
      />
      <OTPInput
        color="DARK"
        size="SM"
        error={e}
        onComplete={(c) => {
          console.log(c);
        }}
      />
      <Logout3 size="XL" />
      <Button
        className="text-amber-50"
        size="SM"
        color="ERROR"
        icon={<Smartphone color="LIGHT" size="SM" />}
        onClick={() => {
          setE(!e);
        }}
      >
        error
      </Button>
      <Button className="text-amber-50" size="MD" color="NEUTRAL">
        ,vndfssdfsdf
      </Button>

      <Button className="text-amber-50" size="LG" color="PRIMARY">
        ورود
      </Button>
      <Button className="text-amber-50" size="XS" color="SECONDARY">
        ,vndfssdfsdf
      </Button>
      <Button className="text-amber-50" size="XL" color="SUCCESS">
        ,vndfssdfsdf
      </Button>
    </div>
  );
}
