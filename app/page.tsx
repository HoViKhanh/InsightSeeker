import dynamic from 'next/dynamic';
import Head from 'next/head';

const DynamicHeader = dynamic(() => import('./Header'), { ssr: false });
const DynamicHeroSection = dynamic(() => import('./Hero'), { ssr: false });
const DynamicIntroductionSection = dynamic(() => import('./Introduction'), { ssr: false });
const DynamicFeatureSection = dynamic(() => import('./Features'), { ssr: false });
const DynamicAboutSection = dynamic(() => import('./About'), { ssr: false });
const DynamicContactSection = dynamic(() => import('./Contact'), { ssr: false });

export default function Page() {
  return (
    <>
      <div>
        <DynamicHeader />
        <DynamicHeroSection />
        <DynamicIntroductionSection />
        <DynamicFeatureSection />
        <DynamicContactSection />
        <DynamicAboutSection />
      </div>
    </>
  );
}
