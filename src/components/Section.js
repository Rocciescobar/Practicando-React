import React from 'react';

const Section = ({data}) => (
  <div className="m-5 text-justify">
    <div>{data.bio}</div>
    <div><img src={data.url} alt='rocci' /></div>
  </div>
)

export default Section