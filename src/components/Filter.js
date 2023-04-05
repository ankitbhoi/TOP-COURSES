import React from 'react'

const Filter = (props) => {
    // let filterData=props.filterData;
  return (
    <div>
        {props.filterData.map(
            data=> <button key={data.id}>{data.title}</button>
        )}
    </div>
  )
}

export default Filter