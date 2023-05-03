import React, { useState } from "react";
import styled from "styled-components";
import { Icon, Box, Btn, Saldo, Detalle, IconTema } from "../UI";
import privado from "../../assets/images/privado.svg";
import ojo from "../../assets/images/ojo.svg";
import dinero from "../../assets/images/dinero.svg";

const IconMargin = styled(Icon)`
margin-top: 2px;
`

const Account = () => {
  const [toggleState, untoggle] = useState(true);

  const toggleHandler = () => {
    untoggle((toggleState) => !toggleState);
  };

  return (
    <Box>
      <h2>Cuenta</h2>
      <div style={{ fontSize: "26px", padding: "20px 0" }}>
        Saldo disponible
        <samp>
          <IconTema className="imagen-icono" src={dinero} alt="Icono de saldo" />
        </samp>
        {toggleState ? (
          <Saldo>
            <Detalle>$</Detalle> 8,621.50
          </Saldo>
        ) : null}
      </div>

      <Btn onClick={toggleHandler}>
        <IconMargin
          className="imagen-icono"
          src={toggleState ? privado : ojo}
          alt="Privacidad de saldo"
        />
      </Btn>
    </Box>
  );
};

export default Account;
