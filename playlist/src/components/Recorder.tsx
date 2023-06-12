import { AutoImage } from "@/utils";
import React from "react";

export default function Recorder() {
  return (
    <div>
      <figure className="relative w-20 h-20">
        <AutoImage src="/media/img/record.png" alt="Record" />
      </figure>
    </div>
  );
}
