
import Layout from "@/components/layouts/article";
import { WorkGridItem } from "@/components/grid-items";


import thumbPortfolio from '../../../public/projects/portfolio.png'

export default function Works() {
  return (
    <Layout title='Projects'>
      <div className="min-h-screen flex flex-col mx-4 pt-[100px] items-center">
        <h1 className="text-4xl md:text-6xl">My <span className="text-red-500">Works</span></h1>
        <div className="mt-[100px] grid md:grid-cols-2 h-full w-full gap-6">
          <WorkGridItem id='portfolio' title="Portfolio" thumbnail={thumbPortfolio}>
            A portfolio which forcases about me and my works
          </WorkGridItem>
        </div>
      </div>
    </Layout>
  )
}
