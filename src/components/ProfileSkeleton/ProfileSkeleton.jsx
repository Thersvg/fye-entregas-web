import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import { Allcontainer, Orders, Perfil } from './ProfileSkeletonStyled';

const CustomSkeletonProfile = () => {
  return (
    <>
      <Allcontainer>
        <Perfil>
            <Skeleton width={200} height={200} circle/>
            <Skeleton width={400} height={200} borderRadius={15} />
        </Perfil>
        <Orders>
            <Skeleton width={600} height={600} borderRadius={15}/>
        </Orders>
      </Allcontainer>
    </>
  );
};

export default CustomSkeletonProfile;