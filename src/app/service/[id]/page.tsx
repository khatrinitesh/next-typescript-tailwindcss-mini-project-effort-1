"use client"
import { useState,useEffect } from "react";
import Banner from "@/components/banner";
import { useParams,useRouter } from 'next/navigation';


interface InfoProps{
  name:string;
  email:string;
  username:string;
}

const ServiceDetail:React.FC = () => {
  const router =useRouter();
  const btnBack = () => {
    router.push('/')
  }
  const [data, setData] = useState<InfoProps | null>(null);
  const { id } = useParams(); // Access the id parameter from the URL
  console.log(id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        if(!response.ok){
          throw new Error('sorry something went wrong')
        }
        const result = await response.json();
        setData(result)
      } catch (error) {
        console.error('Error fetching data:',error)
      }
    }
    if(id){
      fetchData();
    }
  },[id])
  return (
    <div className="content">
      <button onClick={btnBack}>Back</button>
       <Banner
              title="ServiceDetail"
              desc="Ex non tempor eu quis sint minim sint. Aute quis voluptate ad laboris quis consequat occaecat adipisicing consequat voluptate anim. Officia esse cillum ex duis elit cupidatat. Tempor aliquip anim elit cupidatat ex eu qui. Consectetur labore anim reprehenderit ut exercitation qui dolore eu. Aliquip excepteur id tempor do sunt aliqua sint aliqua dolor. Voluptate sunt et non officia laborum voluptate proident fugiat cupidatat voluptate officia deserunt elit. Duis commodo ipsum sunt minim mollit ea nostrud. In id dolor eiusmod non ea in. Non nulla aliqua do proident nulla id enim non ullamco aute." bannerStyle="bg-[silver] text-white"      />
              {/* render the fetched data */}
              {data?.name}
    </div>
  );
}


export default ServiceDetail;