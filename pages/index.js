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
