import React, { Component } from "react";
import { getActors, updateActor } from "../services/actorService";
import "bootstrap/dist/css/bootstrap.min.css";


class Actors extends Component {
  state = {
    actors: [],
    checked: false,
    flag: false
  };

  async componentDidMount() {
    const {data}  = await getActors();
    this.setState({ actors: data.actors  });
  }

   handleSubmit = async (id, checked, newflag) => {
    const data = await updateActor({ "actorid": id, "actorstatus": checked});

      this.setState({flag: !newflag});
  };

  async componentDidUpdate(prevProps, prevState){
    const { flag} = this.state;
    const {data}  = await getActors();

    if(prevState.flag !== flag){
      this.setState({ actors: data.actors   });
    }
  }

  render() {
    const { actors, flag} = this.state;

    return (
      <div className="actor">
          {actors.map((actor) =>
            <div key={actor.actorid} className="form-check form-switch">
             <input className="form-check-input actor__switch" type="checkbox" role="switch" id={actor.actorid} checked={actor.actorstatus}
                onChange= {e => {
                  this.setState({flag: !flag})
                 this.handleSubmit(e.target.id, e.target.checked, !flag)
               }
               }
                  disabled={flag}  />
            
               <label className="form-check-label actor__title" htmlFor={actor.actorid}>{actor.actorname}</label>
             </div>
           ) }     
       </div>
    );
  }
}

export default Actors;
