import React from "react";

class ApplicationContainer extends React.Component {
  render() {
    return (
      <section>
        {this.props.children}
      </section>
    );
  }
}

ApplicationContainer.propTypes = {
  children : React.PropTypes.element.isRequired
};

export default ApplicationContainer;
