import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { withRedux } from '../lib/redux'
import Link from 'next/link';

const IndexPage = ({title}) => {
  const sayHello = useSelector((state) => state.sample.sayHello)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch({
      type: 'HELLO_WATCH',
      payload: '[DISPATCH 2] Good morning after useEffect',
    })
  }, []);

  return (
    <>
      <h1>{title}</h1>
      <h2>{sayHello}</h2>
      <Link href={`/detail-abc`}>
          <a>Detail</a>
      </Link>
      <br />
      <Link href={`/ant-web`}>
          <a>Ant Desgin Web</a>
      </Link>
      <br />
      <Link href={`/ant-web-app`}>
          <a>Ant Desgin Web App</a>
      </Link>
    </>
  )
}

IndexPage.getInitialProps = ({ reduxStore }) => {
  const { dispatch } = reduxStore
  dispatch({
    type: 'HELLO_WATCH',
    payload: '[DISPATCH 1] - Good morning',
  })
  return {
    title: 'Say Hello',
  }
}

export default withRedux(IndexPage)
