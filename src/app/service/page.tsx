"use client"
import { useState,useEffect } from "react";
import Banner from "@/components/banner";
import Link from "next/link";

export default function ServiceList() {

  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        if(!response.ok){
          throw new Error('sorry something went wrong')
        }
        const result = await response.json();
        setData(result)
      } catch (error) {
        console.error('Error fetching data:',error)
      }
    }
    fetchData();
  },[])

  if (!data) {
    return <p>Loading...</p>;
  }
  return (
    <div className="content">
       <Banner
              title="ServiceList"
              desc="Ex non tempor eu quis sint minim sint. Aute quis voluptate ad laboris quis consequat occaecat adipisicing consequat voluptate anim. Officia esse cillum ex duis elit cupidatat. Tempor aliquip anim elit cupidatat ex eu qui. Consectetur labore anim reprehenderit ut exercitation qui dolore eu. Aliquip excepteur id tempor do sunt aliqua sint aliqua dolor. Voluptate sunt et non officia laborum voluptate proident fugiat cupidatat voluptate officia deserunt elit. Duis commodo ipsum sunt minim mollit ea nostrud. In id dolor eiusmod non ea in. Non nulla aliqua do proident nulla id enim non ullamco aute." bannerStyle="bg-[silver] text-white"      />
              {/* render the fetched data */}
              {data && (<>
                <ul>
                  {data.map((item:any) => (
                    <li key={item.id}>
                      <Link href={`/service/${item.id}`}>{item.name}</Link>
                    </li>
                  ))}
                </ul>
              </>)}
    </div>
  );
}
