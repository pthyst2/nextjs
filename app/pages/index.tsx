import { useState } from 'react';
import type { GetServerSideProps, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link'; 
import { mockBlogs } from '../data/mocks/mockBlogs';
import LayoutHome from '../layouts/layout-home/layout-home';

const Home: NextPage = ({ blogs }: any ) => {
  //#region Meta
  const [metaTitle, setTitle] = useState('Empaty');
  const [metaDescription, setDescription] = useState('Creating your 3D space');
  const [metaImage, setImage] = useState('/images/1.jpg');
  const [metaKeyword, setKeyword] = useState('empaty,space');
  //#endregion

  return (
    <> 
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="icon" href="/favicon.ico" />
        <meta property='og:title' content={metaTitle} />
        <meta property='og:description' content={metaDescription} />
        <meta property='og:image' content={metaImage} />
        <meta property='og:keyword' content={metaKeyword} /> 
      </Head>
      <LayoutHome>
        <div className='flex justify-center items-center min-h-[2000px]'>
          <p>Index Page</p>
        </div>
      </LayoutHome>
    </>
  )
}
/** Fetch data at build time */
export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      blogs: JSON.parse(JSON.stringify(mockBlogs))
    }
  }
}
/** Fetch data at request time */
/*export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      blogs: JSON.parse(JSON.stringify(mockBlogs))
    }
  }
}*/
export default Home
