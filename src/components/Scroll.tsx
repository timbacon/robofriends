import React from 'react';

interface IProps {
  children: React.ReactNode
}

const Scroll = (props: IProps) => {
  return (
    <div style={{overflowY: 'scroll', border: '1px solid black', height: '80vh'}}>
      {props.children}
    </div>
  )
};

export default Scroll;
