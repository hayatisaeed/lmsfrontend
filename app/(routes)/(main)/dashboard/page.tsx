"use client";
import InputEdit from "@/features/profile/components/InputEdit";
import PasswordInput from "@/features/profile/components/PasswordInput";
import DropDown from "@/shared/components/DropDown";
import OTPInput from "@/shared/components/OTPInput";

import { Smartphone, UserRounded } from "@/shared/icons";
import Logout3 from "@/shared/icons/arrowsAction/Logout3";
import { toPersianDigits } from "@/shared/lib/digitConverter.ts";
import { Button } from "@/shared/ui";
import { useState } from "react";

export default function Page() {
  const [e, setE] = useState(false);

  return (
    <div>
      <DropDown>
        <DropDown.Window id="user">
          <DropDown.Item>حساب کاربری</DropDown.Item>
          <DropDown.Item icon={<UserRounded size="SM" />}>
            حساب کاربری
          </DropDown.Item>
          <DropDown.Item>حساب کاربری</DropDown.Item>
        </DropDown.Window>

        <DropDown.Toggler id="user">
          <DropDown.Button id="user" />
          {/* <button type="button">sfsdfsd</button> */}
        </DropDown.Toggler>
      </DropDown>
      <h3 className="text-4xl num-onaly">تست</h3>
      <h3 className="text-4xl font-kalameh">تست</h3>
      <h3 className="num-only font-shabnam font-normal text-4xl ">
        {toPersianDigits("09911476750")}
      </h3>
      <h3 className="font-shabnam font-normal font text-4xl">
        {toPersianDigits("546756774424058")}
      </h3>
      <h3 className="font-shabnam fodnt-normal font text-4xl">
        {toPersianDigits("546756774424058")}
      </h3>
      <h3 className="num-only text-4xl">
        {toPersianDigits("546756774424058")}
      </h3>
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
      <Logout3 size="XL" color="GREEN" />
      <Button
        className="text-amber-50"
        size="XXL"
        color="ERROR"
        loading
        icon={<Smartphone color="LIGHT" size="SM" />}
        onClick={() => {
          setE(!e);
        }}
      >
        error
      </Button>
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
      </Button>{" "}
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
      </Button>{" "}
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
      </Button>{" "}
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
      </Button>{" "}
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
      </Button>{" "}
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
      </Button>{" "}
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
      </Button>{" "}
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
      </Button>{" "}
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
      </Button>{" "}
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
