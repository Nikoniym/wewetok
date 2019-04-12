import React from "react"
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";


class ExcursionShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      excursion: []
    };
  }

  componentDidMount() {
    fetch("/api/v1/excursions/" + this.props.id + '.json')
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({excursion: data.excursion});
      });
  }

  _renderImages(images) {
    if (images && images.length > 0) {
      console.log(images)
      return (
        <div style={{width: '500px'}}>
          <ImageGallery items={images}/>
        </div>
      )
    }
  }

  render() {
    const { excursion } = this.state;

    return (
      <div>
        <img src={excursion.image_url}/>

        <div className="content_wrapper">
          <h2>Show {excursion.title}</h2>

          <p>{excursion.description}</p>
        </div>

        {this._renderImages(excursion.images)}
      </div>
    );
  }
}

export default ExcursionShow