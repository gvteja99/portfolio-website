import React, { Component } from "react";

class Footer extends Component {
  render() {
    if (this.props.sharedBasicInfo) {
      var networks = this.props.sharedBasicInfo.social.map(function (network) {
        return (
          <span key={network.name} className="m-4">
            <a href={network.url} target="_blank" rel="noopener noreferrer">
              <i className={network.class} aria-hidden="true"></i>
            </a>
          </span>
        );
      });
    }

    return (
      <footer>
        <div className="col-md-12">
          <div className="social-links">{networks}</div>

          <div className="copyright py-4 text-center">
            <div className="container">
              <small>
                Designed by {" "}
                {this.props.sharedBasicInfo
                  ? this.props.sharedBasicInfo.nickName
                  : "???"}. Shoutout to Dorota.
              </small>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
