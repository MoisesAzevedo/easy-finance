"use client";
import ButtonCustom from "@/components/ui/ButtonCustom";
import React, { useEffect, useRef, useState } from "react";
import styles from "./reservations.module.scss"



export default function Reservationpage() {
  
  

  const inputReserveRef = useRef(null);
  const inputPercentageRef = useRef(null);
  const inputValueRef = useRef(null);
  const inputBalanceRef = useRef(null);

  
  const [flagClearInput, setFlagClearInput] = useState(false);

  
  
  const [reservation_arr, setReservation_arr] = useState([
      { reserve: "Dizimo", percentage: 0.10 * 100, value: "R$10000,00",
       balance: 9000.0 },
      { reserve: "Faculdade", percentage: 10, value: "R$10000,00",
       balance: "R$ 7.0000,00" },
      { reserve: "Moradia", percentage: 10, value: "R$10000,00",
        balance: "R$ 6.0000,00" },
      { reserve: "Lazer", percentage: 10, value: "R$10000,00",
        balance: "R$ 5.0000,00" },
       { reserve: "Pessoal", percentage: 10, value: "R$10000,00",
        balance: "R$ 4.0000,00" },
      { reserve: "Investimento", percentage: 30, value: "R$3000,00",
        balance: "R$ 1.0000,00" },
      { reserve: "CNH", percentage: 9, value: "R$900",
        balance: "R$100,00" },
     { reserve: "Emergencia", percentage: 1, value: "R$100,00",
       balance: "R$ 0,00" },
    ]);

  
  

    const handleChange = (index, event) => {
      const newReservation_arr = [...reservation_arr];
      newReservation_arr[index] = event.target.value;
      setReservation_arr(newReservation_arr);
    };

  

    const newObject = (event) => {
        if (
          inputReserveRef.current.value &&
          inputPercentageRef.current.value &&
          inputValueRef.current.value &&
          inputBalanceRef.current.value != ""
        ) {
          setFlagClearInput(true);
    
          setReservation_arr((prevState) => [
            ...prevState,
            {
              reserve: inputReserveRef.current.value,
              percentage: inputPercentageRef.current.value,
              value: inputValueRef.current.value,
              balance: inputBalanceRef.current.value
            }
          ]);
        } else {
          console.log("nao executado o input ref");
        }
      };
 
    


  return (
  <html lang="en">
    <body>
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
                      type="number"
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
          value="Salvar Alterações"
        />
      </div>

      </section>
    </body>
    </html>)
}