import { useState } from 'react';
import type { GetServerSideProps, GetStaticProps, NextPage } from 'next';
import { mockBlogs } from '../data/mocks/mockBlogs';
import LayoutHome from '../layouts/layout-home/layout-home';
import SeoHead from '../partials/seo-head/seo-head';
import SectionHome from '../partials/section-home/section-home';
const Home: NextPage = ({ blogs }: any ) => {
  //#region SEO meta
  const meta = {
    title: 'Empaty',
    description: 'Creating your 3D spaces',
    url: 'https://nextjs-eight-lovat-69.vercel.app/',
    image: 'https://nextjs-eight-lovat-69.vercel.app/images/backgrounds/1.jpg',
    keyword: 'empaty,space',
    type: 'website'
  }
  //#endregion

  const sectionHome = {
    title: 'Section 1',
    backgroundColor: "#fcfcfc"
  }

  return (
    <> 
      <SeoHead data={meta}></SeoHead>
      <LayoutHome>
        <SectionHome input={sectionHome}>
          <div className="flex justify-center items-center min-h-[200px]">
            <p>This is section home</p>
          </div>
        </SectionHome>
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
