import React from 'react';
import Head from 'next/head';
import { PLASMIC } from '../plasmic-init';
import {
  PlasmicRootProvider,
  PlasmicComponent,
} from '@plasmicapp/loader-nextjs';

const PLASMIC_COMPONENT = "Homepage";

const Test = (props) => {
  return (
    <>
      <Head>
        <style>{`html{overflow-x:hidden;}`}</style>
      </Head>
      <PlasmicRootProvider
        loader={PLASMIC}
        prefetchedData={props.plasmicData}
      >
        <PlasmicComponent component={PLASMIC_COMPONENT}
          componentProps={{
            navigation: {
              props: {
                onClick: () => console.log("!!!")
              }
            }
          }}
        />
      </PlasmicRootProvider>
    </>
  );
};

Test.getInitialProps = async () => {
  const plasmicData = await PLASMIC.fetchComponentData(PLASMIC_COMPONENT);
  return {
    plasmicData,
  };
};

export default Test;
