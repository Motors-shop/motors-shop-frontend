import ThemeButton from "../ThemeButton";
import { IProductInfoProps } from "../../pages/Product/types";
import { ThemeDetailCard } from "./style";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserProvider";

const VehicleDetail = ({ data }: IProductInfoProps) => {
  const { title, year, km, price, owner } = data;
  const { loadingUser, user } = useContext(UserContext);

  console.log(owner.id);
  console.log(user.id);

  return (
    <ThemeDetailCard>
      <h2>{title}</h2>
      <div>
        <div className="tags">
          <span>{year}</span>
          <span>{km} KM</span>
        </div>
        <p>{price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</p>
      </div>
      <ThemeButton disabled={owner.id === user.id || loadingUser ? true : false} variant="primary">
        {owner.id === user.id || loadingUser ? (
          "Comprar"
        ) : (
          <a
            href={`https://api.whatsapp.com/send/?phone=55${owner.phone}&text=Ol%C3%A1%2C+me+interessei+pelo+seu+produto+e+gostaria+de+finalizar+a+compra+do+ve%C3%ADculo&type=phone_number&app_absent=0`}
            target="_blank"
            rel="noreferrer"
          >
            Comprar
          </a>
        )}
      </ThemeButton>
    </ThemeDetailCard>
  );
};

export default VehicleDetail;
