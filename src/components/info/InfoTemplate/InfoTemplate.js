import React, { Component } from 'react';
import './InfoTemplate.scss';
import MenuName from 'components/info/MenuName';
import InfoMenu from 'components/info/InfoMenu';
import MenuPicture from 'components/info/MenuPicture';
import MenuAbout from 'components/info/MenuAbout';
import MenuReview from 'components/info/MenuReview';

import exitIcon from 'static/2/2_common/2_X_icon.png';

class InfoTemplate extends Component {
  state = {
    curTab: 'about'
  };

  showInfoMenu = () => {
    if(this.state.curTab === 'image') return <MenuPicture/>;
    if(this.state.curTab === 'about') return <MenuAbout/>;
    if(this.state.curTab === 'review') return <MenuReview/>;
  };

  render() {
    return (
      <div className="info-container">
        <div id="info_exit_area">
          <img src={exitIcon} alt=""/>
        </div>
        <MenuName/>
        <InfoMenu/>
        {this.showInfoMenu()}
      </div>
    );
  }
}

export default InfoTemplate;