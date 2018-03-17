import React, { Component } from 'react';
import { number } from 'prop-types';
import Moment from 'moment';

export default class Date extends Component {
  static propTypes = {
    date: number
  };

  render() {
    return <span> {Moment.unix(this.props.date).format('DD-MMM-YYYY')}</span>;
  }
}
