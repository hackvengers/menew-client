import React, { Component } from 'react';
import './InfoTemplate.scss';
import MenuName from 'components/info/MenuName';
import InfoMenu from 'components/info/InfoMenu';
import MenuPicture from 'components/info/MenuPicture';
import exitIcon from 'static/2/2_common/2_X_icon.png';

class InfoTemplate extends Component {
  render() {
    return (
      <div className="info-container">
        <div id="info_exit_area">
          <img src={exitIcon} alt=""/>
        </div>
        <MenuName/>
        <InfoMenu/>
        <MenuPicture/>
      </div>
    );
  }
}

export default InfoTemplate;