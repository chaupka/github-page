import React from 'react';
import PropTypes from 'prop-types';

type SlideProps = {
    children: any
}

export default function Slide(props: SlideProps) {

const {children} = props

  return <section>{children}</section>;
}

Slide.propTypes = {
  children: PropTypes.node,
};