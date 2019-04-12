import React from "react"

class ExcursionsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      excursions: []
    };
  }

  componentDidMount() {
    fetch("/api/v1/excursions.json")
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({excursions: data.excursions});
      });
  }

  _renderExcursions(excursions) {
    return(
      excursions.map(excursion => {
        return (
          <div className='grid__item__4'>
            <div key={excursion.id} className='excursions_list_item'>
              <a href={"excursions/" + excursion.id}>
                <img src={excursion.image_url}/>
                <h3>{excursion.title}</h3>
              </a>
            </div>
          </div>

        );
      })
    )
  }

  render() {
    return (
      <div>
        <h2>All excursions</h2>
        <div className='grid excursions_list'>
          { this._renderExcursions(this.state.excursions) }
        </div>
      </div>
    );
  }
}

export default ExcursionsIndex