import { useState } from 'react';
import Head from 'next/head';
export default function SeoHead({ data }:any){
    const fbAppId = '1239721703482016'; // Get it here: https://developers.facebook.com/apps/?show_reminder=true
 
    return (
    <>
        <Head>
            <link rel="icon" href="/favicon.ico" />
            <title>{ data.title }</title>
            <meta name="description" content={data.description} />
            <meta property='og:url' content={data.url} /> 
            <meta property='og:title' content={data.title} />
            <meta property='og:description' content={data.description} />
            <meta property='og:image' content={data.image} />
            <meta property='og:keyword' content={data.keyword} />
            <meta property='fb:app_id' content={fbAppId} /> 
            <meta property='og:type' content={data.type} /> 
        </Head>
    </>)
}