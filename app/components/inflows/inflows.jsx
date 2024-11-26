"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./inflows.module.scss";
import { Button } from "@/components/ui/button";
import ButtonCustom from "@/components/ui/ButtonCustom";
import { title } from "process";

const Inflows = () => {
  const inputTitleRef = useRef(null);
  const inputValueRef = useRef(null);
  const inputDateRef = useRef(null);
  const inputTypeRef = useRef(null);

  const [flagClearInput, setFlagClearInput] = useState(false);

  //database
  const [inflows_arr, setInflows_arr] = useState([
    { title: "Salário", value: 50.0, date: "20/10/2024", type: "Pessoal" },
    { title: "Freela", value: 100.0, date: "15/10/2024", type: "Lazer" }
  ]);
  const types = ["Pessoal", "Lazer"];

  const updated = "20/09/2024";
  ///////////////////////////////////////
  const [drop, setDrop] = useState(inflows_arr.map(() => "rotate-0"));
  const [dropNewItem, setDropNewItem] = useState("rotate-0");

  const handleChange = (index, event) => {
    const newInflows_arr = [...inflows_arr];
    newInflows_arr[index] = event.target.value;
    setInflows_arr(newInflows_arr);
  };

  const newObject = (event) => {
    if (
      inputTitleRef.current.value &&
      inputValueRef.current.value &&
      inputDateRef.current.value &&
      inputTypeRef.current.value != ""
    ) {
      setFlagClearInput(true);

      setInflows_arr((prevState) => [
        ...prevState,
        {
          title: inputTitleRef.current.value,
          value: inputValueRef.current.value,
          date: inputDateRef.current.value,
          type: inputTypeRef.current.value
        }
      ]);
    } else {
      console.log("nao executado o input ref");
    }
  };

  const clearInput = () => {
    inputTitleRef.current.value = "";
    inputValueRef.current.value = "";
    inputDateRef.current.value = "";
    inputTypeRef.current.value = "";
  };

  useEffect(() => {
    clearInput();
    inputTitleRef.current.focus();

    setFlagClearInput(false);
  }, [flagClearInput]);

  function rotateDropDown(n, index) {
    if (n == "") {
      newObject();

      if (dropNewItem == "rotate-0") {
        setDropNewItem("rotate-180");
      } else {
        setDropNewItem("rotate-0");
      }
    }

    setDrop((prev) => {
      const newDrop = [...prev];

      newDrop[index] =
        newDrop[index] != "rotate-180" ? "rotate-180" : "rotate-0";

      return newDrop;
    });
  }

  return (
    <section className={styles.section}>
      <header>
        <div>
          <h1>Entradas</h1>
          <p>Atualizado em: {updated}</p>
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
              <th>Titulo</th>
              <th>Valor</th>
              <th>Data</th>
              <th>Tipo</th>
            </tr>
          </thead>

          <tbody>
            {inflows_arr.map((item, index) => {
              return (
                <tr>
                  <td>
                    <input
                      type="text"
                      value={item.title}
                      onChange={(e) => handleChange(index, e)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={item.value}
                      onChange={(e) => handleChange(index, e)}
                    />
                  </td>
                  <td>
                    <input
                      type="data"
                      value={item.date}
                      onChange={(e) => handleChange(index, e)}
                    />
                  </td>
                  <td>
                    <select
                      onFocus={() => {
                        rotateDropDown("null", index);
                      }}
                      onBlur={() => {
                        rotateDropDown("null", index);
                      }}
                      onChange={(e) => handleChange(index, e)}
                      value={item.type}
                    >
                      <option />
                      {types.map((item, index) => {
                        return (
                          <>
                            <option>{item}</option>;
                          </>
                        );
                      })}
                    </select>
                    <img src="/icons/DropDown.png" className={drop[index]} />
                  </td>
                </tr>
              );
            })}

            <tr>
              <td>
                <input type="text" ref={inputTitleRef} onBlur={newObject} />
              </td>
              <td>
                <input type="text" ref={inputValueRef} onBlur={newObject} />
              </td>
              <td>
                <input type="data" ref={inputDateRef} onBlur={newObject} />
              </td>
              <td>
                <select
                  onFocus={() => {
                    const n = "";
                    rotateDropDown(n);
                  }}
                  onBlur={() => {
                    const n = "";
                    rotateDropDown(n);
                  }}
                  ref={inputTypeRef}
                >
                  <option />
                  {types.map((item, index) => {
                    return (
                      <>
                        <option>{item}</option>;
                      </>
                    );
                  })}
                </select>
                <img src="/icons/DropDown.png" className={dropNewItem} />
              </td>
            </tr>
          </tbody>
        </table>
      </form>

      <div className={styles.submit}>
        <ButtonCustom value="Adicionar Extrato" />
        <ButtonCustom
          /*   type="submit" */
          value="Salvar Alterações"
        />
      </div>
    </section>
  );
};

export default Inflows;
