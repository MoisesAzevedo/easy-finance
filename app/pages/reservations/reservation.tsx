"use client";
import ButtonCustom from "@/components/ui/ButtonCustom";
import React, { useEffect, useRef, useState } from "react";
import styles from "./reservations.module.scss"



export default function Reservationpage() {

  //add interface
  interface Reservation {
    reserve: string;
    percentage: string;
    value: number;
    balance: number;
  }


  const [reservation_arr, setReservation_arr] = useState<Reservation[]>([
    { reserve: "Dizimo", percentage: "10%", value: 1000.00,
   balance: 9000.00},
    { reserve: "Faculdade", percentage: "10%", value: 1000.00,
    balance:  7000.00 },
    { reserve: "Moradia", percentage: "10%", value: 1000.00,
    balance:  6000.00 },
    { reserve: "Lazer", percentage: "10%", value: 1000.00,
     balance:  5000.00 },
    { reserve: "Pessoal", percentage: "10%", value: 1000.00,
     balance: 4000.00 },
    { reserve: "Investimento", percentage: "30%", value: 3000.00,
     balance: 1000.00 },
    { reserve: "CNH", percentage: "9%", value: 900,
     balance: 100},
    { reserve: "Emergencia", percentage: "1%", value: 100,
    balance: 0 }, 
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
          value: 0 ,
          balance: 0, 
          },
        ]);
      } 
      else {
      console.log("nao executado o input ref");
      }
    };


    // mask for number
    const maskCoin = (value: string | number) => {
      if(!value) return "";

      const numericValue = String(value).replace(/\D/g, "");
      const valuefloat = parseFloat(numericValue) / 100;
      if(isNaN(valuefloat)) return "";

      return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(valuefloat)
    }


  // Removing the body/html to fix the bug of being on top
  return (
      <section className={styles.section}>
      <header>
        <div>
          <h1>Reservas</h1>
        </div>

        <div className={styles.total}>
          <p>Pagamentos:  10.000,00</p>
          <p>Saldo:  10.300,00</p>
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
                      type="text"
                      value={maskCoin(item.value)}
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