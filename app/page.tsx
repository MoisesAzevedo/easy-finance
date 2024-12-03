import type { Metadata } from "next";
import Inflows from "./pages/inflows/inflows";

export default function IndexPage() {
  return <Inflows />;
}

export const metadata: Metadata = {
  title: "Redux Toolkit"
};
