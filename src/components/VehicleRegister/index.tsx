import React, { PropsWithChildren } from "react";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import Input from "../Input";

const VehicleRegister: React.FC = () => {
  const vehicleRegisterSchema = yup.object().shape({
    title: yup.string().required("Campo requerido!"),

    year: yup
      .number()
      .required("Campo requerido!")
      .typeError("Deve preencher com um numero"),

    km: yup
      .number()
      .required("Campo requerido!")
      .typeError("Deve preencher com um numero"),

    price: yup.string().required("Campo requerido!"),

    description: yup.string().required("Campo requerido!"),

    capeImage: yup.string().required("Campo requerido!"),
  });

  return <></>;
};

export default VehicleRegister;
