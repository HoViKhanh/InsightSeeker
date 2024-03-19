import dynamic from 'next/dynamic';

const DynamicSearchBox = dynamic(() => import('./SearchBox'), {
  ssr: false, 
 });


export default function page() {
  return (
    <div>
    <DynamicSearchBox/>
   </div>
  );
} 
