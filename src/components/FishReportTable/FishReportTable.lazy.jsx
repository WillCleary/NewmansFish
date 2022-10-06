import React, { lazy, Suspense } from 'react';

const LazyFishReportTable = lazy(() => import('./FishReportTable'));

const FishReportTable = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyFishReportTable {...props} />
  </Suspense>
);

export default FishReportTable;
