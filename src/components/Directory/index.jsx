import React from 'react';
import './style.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import MenuItem from '../MenuItem';
import { selectDirectorySections } from '../../redux/directory/directorySelectors';

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
