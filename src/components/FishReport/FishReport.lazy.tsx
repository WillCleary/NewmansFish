import React, { lazy, Suspense } from 'react';

const LazyFishReport = lazy(() => import('./FishReport'));

const FishReport = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyFishReport {...props} />
  </Suspense>
);

export default FishReport;
