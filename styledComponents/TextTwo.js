import React from 'react';

const styles = {
  layout: {
    // textAlign: 'left',
    color: "#FFF9DE",
    // borderLeft: '1px solid',
    padding: 15
  }
}

const TextTwo = props => {

    return (
      <div>
        <div style={styles.layout}>
          {props.children}
        </div>
      </div>
    );
}

export default TextTwo;