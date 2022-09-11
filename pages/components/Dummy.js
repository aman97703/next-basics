import React from 'react'

const Dummy = () => {
  return (
    <>
      <style jsx global>
        {`
                .dummy{
                    background:yellow;
                    color:red;
                }
            `}
      </style>
      <p className='dummy'>Dummy</p>
    </>
  )
}

export default Dummy