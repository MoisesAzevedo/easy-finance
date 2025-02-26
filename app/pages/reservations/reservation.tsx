"use client";
import ButtonCustom from "@/components/ui/ButtonCustom";
import React, { useEffect, useRef, useState } from "react";
import styles from "./reservations.module.scss"



export default function Reservationpage() {

  //add interface
  interface Reservation {
    reserve: string;
    percentage: string;
    value: string;
    balance: string;
  }


  const [reservation_arr, setReservation_arr] = useState<Reservation[]>([
    { reserve: "Dizimo", percentage: "10%", value: "R$10000,00",
   balance: "R$ 9000.000"},
    { reserve: "Faculdade", percentage: "10%", value: "R$10000,00",
    balance: "R$ 7.0000,00" },
    { reserve: "Moradia", percentage: "10%", value: "R$10000,00",
    balance: "R$ 6.0000,00" },
    { reserve: "Lazer", percentage: "10%", value: "R$10000,00",
     balance: "R$ 5.0000,00" },
    { reserve: "Pessoal", percentage: "10%", value: "R$10000,00",
     balance: "R$ 4.0000,00" },
    { reserve: "Investimento", percentage: "30%", value: "R$3000,00",
     balance: "R$ 1.0000,00" },
    { reserve: "CNH", percentage: "9%", value: "R$900",
     balance: "R$100,00" },
    { reserve: "Emergencia", percentage: "1%", value: "R$100,00",
    balance: "R$ 0,00" }, 
  ]);

    const [flagClearInput, setFlagClearInput] = useState(false);
  
    const inputReserveRef = useRef<HTMLInputElement>(null);
    const inputPercentageRef = useRef<HTMLInputElement>(null);
    const inputValueRef = useRef<HTMLInputElement>(null);
    const inputBalanceRef = useRef<HTMLInputElement>(null);
  
    const handleChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
      const newReservation_arr = [...reservation_arr];
      newReservation_arr[index] = {...newReservation_arr[index], reserve: event.target.value}
      setReservation_arr(newReservation_arr);
    };
 
    const newObject = () => {
      if (
        inputReserveRef.current?.value &&
        inputPercentageRef.current?.value &&
        inputValueRef.current?.value &&
        inputBalanceRef.current?.value
      ) {
        setFlagClearInput(true);
  
        setReservation_arr((prevState: Reservation[]) => [
          ...prevState,
          {
          reserve: "null",  
          percentage: "null", 
          value: "null" ,
          balance: "null", 
          },
        ]);
      } 
      else {
      console.log("nao executado o input ref");
      }
    };
    

  // Removing the body/html to fix the bug of being on top
  return (
      <section className={styles.section}>
      <header>
        <div>
          <h1>Reservas</h1>
        </div>

        <div className={styles.total}>
          <p>Pagamentos: R$ 10.000,00</p>
          <p>Saldo: R$ 10.300,00</p>
        </div>
        
        </header>

        <form className={styles.wrapper}>
        <table>
          <thead>
            <tr>
              <th>Reserva</th>
              <th>Percentual</th>
              <th>Valor</th>
              <th>Saldo p/ reserva</th>
            </tr>
          </thead>

          <tbody>
            {reservation_arr.map((item, index) => {
              return (
                <tr>
                  <td>
                    <div className={styles.v_dots}>
                      <img src="icons/v_dots.png" />
                    </div>
                    <input
                      type="text"
                      value={item.reserve}
                      onChange={(e) => handleChange(index, e)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={item.percentage}
                      onChange={(e) => handleChange(index, e)}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      value={item.value}
                      onChange={(e) => handleChange(index, e)}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      value={item.balance}
                      onChange={(e) => handleChange(index, e)}
                    />
                  </td>                     
                </tr>
              );
            })}

            <tr>
              <td className={styles.add_line}>
                <input type="text" ref={inputReserveRef} onBlur={newObject} />
              </td>
              <td>
                <input type="number" ref={inputPercentageRef} onBlur={newObject} />
              </td>
              <td>
                <input type="number" ref={inputValueRef} onBlur={newObject} />
              </td>
              <td>
                <input type="number" ref={inputBalanceRef} onBlur={newObject} />
              </td>
            </tr>
          </tbody>
          </table>
          </form>

          <div className={styles.submit}>
        <ButtonCustom
          /*   type="submit" */
          value="Salvar Alterações"
        />
      </div>

      </section>
      )
}