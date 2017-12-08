import React, { Component } from 'react';
import { connect } from 'react-redux';
import SchoolTitle from '../components/SchoolTitle';

class TopBar extends Component {
  render(){
     return <SchoolTitle title={this.props.school.schoolTitle} />
  }
}

export default connect(
  (state) => ({ school: state.school })
)(TopBar);