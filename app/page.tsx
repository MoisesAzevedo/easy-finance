import type { Metadata } from "next";
import Inflows from "./pages/inflows/inflows";
import Reservationpage from "./pages/reservations/reservation";

export default function IndexPage() {
  //return <Inflows />;
  return <Reservationpage />
}

export const metadata: Metadata = {
  title: "Redux Toolkit"
};
