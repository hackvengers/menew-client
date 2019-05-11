import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./OcrTemplate.scss";
import * as MenuAPI from "lib/api/menu";

class OcrTemplate extends Component {
  state = {
    boundingBoxList: [],
    clickedBox: null
  };

  componentDidMount = () => {
    const boundingBoxList = [];

    const { regions } = this.props.location.state;
    if (!regions) return;

    regions.forEach((region, regionIndex) => {
      region.lines.forEach((line, lineIndex) => {
        const coord = line.boundingBox.split(",");

        let menuName = "";
        line.words.forEach(word => {
          menuName = menuName.concat(word.text, " ");
        });

        boundingBoxList.push(
          <div
            className={
              this.state.clickedBox === regionIndex + "_" + lineIndex
                ? "checked"
                : undefined
            }
            style={{
              display: "inline-block",
              border: "3px solid #00FF00",
              position: "absolute",
              left: `${coord[0]}px`,
              top: `${coord[1]}px`,
              width: `${coord[2]}px`,
              height: `${coord[3]}px`,
              zIndex: "1"
            }}
            key={regionIndex + "_" + lineIndex}
            onClick={() => {
              MenuAPI.getMenuText({ query: menuName, target: "ko" }).then(
                res => {
                  const { translatedText } = res.data;
                  alert(translatedText);
                }
              );
            }}
          />
        );
      });
    });

    this.setState({
      boundingBoxList
    });
  };

  render() {
    const { imageUrl } = this.props.location.state;
    console.log(imageUrl);

    return (
      <div className="OcrTemplate">
        <div className="bounding-wrapper" style={{ position: "relative" }}>
          {this.state.boundingBoxList}
          {imageUrl && (
            <img
              src={imageUrl}
              style={{ position: "absolute", top: 0, left: 0 }}
              alt="menu"
            />
          )}
        </div>
      </div>
    );
  }
}

export default withRouter(OcrTemplate);
