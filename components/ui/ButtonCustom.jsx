import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const ButtonCustom = (props) => {
  return (
    <Button
      variant={props.variant ? props.variant : "outline"}
      className={
        props.className
          ? props.className
          : "bg-[#A9E2BD]  hover:bg-[#94cea8] active:bg-[#82b594] h-[48px] text-[16px] text-[#1F4D18] font-semibold"
      }
    >
      {props.value}
    </Button>
  );
};

export default ButtonCustom;
