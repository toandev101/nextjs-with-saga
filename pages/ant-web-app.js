import Layout from '../components/Layout'
import { Button, TextareaItem } from 'antd-mobile'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout title="Index">
        <TextareaItem
            title="标题"
            placeholder="auto focus in Alipay client"
            autoHeight
          />
      <Link href="/about">
        <Button>Go to About</Button>
      </Link>
    </Layout>
  )
}
