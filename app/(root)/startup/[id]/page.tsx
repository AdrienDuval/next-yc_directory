import { client } from '@/sanity/lib/client';
import { STARTUP_BY_ID_QUERY } from '@/sanity/lib/queries';
import { notFound } from 'next/navigation';
import React from 'react'

export const experimental_ppr = true;

const page = async ({params} : {params: Promise<{id: string}>}) => {

	const id = (await params).id

	const post = await client.fetch(STARTUP_BY_ID_QUERY, {id})

	console.log({post, id})

	if(!post) return notFound();
	
	
  return (
	<div>
	  <h1 className='text-3xl'>{post.title}</h1>
	</div>
  );
}

export default page