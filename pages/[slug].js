import React from 'react'

const DetailPage = ({title, slug}) => {
  //console.log('slug: ', slug)
  return (
    <>
      <h1>{title}</h1>
    </>
  )
}

DetailPage.getInitialProps = async ({ query, reduxStore }) => {
  //NOTE Invisible console.log's in getInitialProps -- because of the static method 
  //WORKAROUND -- console.log props at DetailPage(props)
  return {
    title: 'Say Hello - Detail Page 1',
    slug: query.slug,
  }
}

export default DetailPage
