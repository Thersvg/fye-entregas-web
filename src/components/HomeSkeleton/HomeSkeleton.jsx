import Skeleton from "react-loading-skeleton";
import { Allcontainer, OrderPendent, OrdersAccept } from "./HomeSkeletonStyled";

const CustomSkeletonHome = () => {
    return (
      <>
        <Allcontainer>
          <OrderPendent>
              <Skeleton width={600} height={500} borderRadius={15} />
          </OrderPendent>
          <OrdersAccept>
              <Skeleton width={600} height={500} borderRadius={15}/>
          </OrdersAccept>
        </Allcontainer>
      </>
    );
  };
  
  export default CustomSkeletonHome;