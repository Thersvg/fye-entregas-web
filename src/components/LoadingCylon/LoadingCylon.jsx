import 'react-loading-skeleton/dist/skeleton.css'
import { Allcontainer} from './LoadingCylonStyled';

import ReactLoading from 'react-loading';

const LoadingCylonHold = () => {
  return (
    <>
       <Allcontainer>
         <ReactLoading type={'cylon'} color={'#243b55'} height={100} width={100} />
      </Allcontainer>  
    </>
  );
};

export default LoadingCylonHold;