import { useEffect } from "react";
import { useDesserts } from "../contexts/DessertsContext";
import { createPortal } from "react-dom";
import { ReactSVG } from "react-svg";
import Button from "../ui/Button";

export default function OrderModal() {
  const { getDessertsCart } = useDesserts();
  const desserts = getDessertsCart();

  useEffect(() => {
    document.documentElement.classList.add("no-scroll");
    return () => document.documentElement.classList.remove("no-scroll");
  }, []);

  return createPortal(
    <div>
      <div>
        <ReactSVG src="images/icon-order-confirmed.svg" />

        <h2>Order Confirmed</h2>
        <p>We hope you enjoy your food!</p>

        <div>
          {desserts.map(({ image, name, cart, price }, i) => {
            return (
              <div key={i}>
                <div>
                  <img src={image?.thumbnail} alt="" />
                </div>
                <div>
                  <p>{name}</p>
                  <p>
                    <span>{cart}x</span>
                    <span>@${price}</span>
                  </p>
                </div>
                <p>${cart * price}</p>
              </div>
            );
          })}

          <p>
            <span>Order Total</span>
            <span>$46.50</span>
          </p>
        </div>

        <Button>Start New Order</Button>
      </div>
    </div>,
    document.body,
  );
}
