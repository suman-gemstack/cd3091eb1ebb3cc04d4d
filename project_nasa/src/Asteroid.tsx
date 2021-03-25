import React from  'react';
import { withRouter, RouteComponentProps } from 'react-router-dom'

interface Props extends RouteComponentProps {
  location: any;
}

class Asteroid extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  } 

  render() {
    return (
      <div
      style={{
        textAlign: "center",
      }}
      >
        <h3>
        Name:- {this.props.location.state.data.name}
        </h3>
        <h3>
          Nasa jpl url:- {this.props.location.state.data.nasa_jpl_url}
        </h3>
        <h3>
         Is potentially hazardous asteroid:- 
         {this.props.location.state.data.is_potentially_hazardous_asteroid ? "Yes" : "No"}
        </h3>
      </div>
    )
  }
};

export default withRouter(Asteroid)