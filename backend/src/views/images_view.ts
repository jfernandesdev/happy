import Image from '../models/Image';

const environmentType = process.env.NODE_ENV == 'prod' ? process.env.BUCKET_URL_IMAGE : `${process.env.API_URL}/uploads`;

export default {
  render(image: Image) {
    return {
      url: `${environmentType}/${image.path}`
    }
  },

  renderMany(images: Image[]) {
    return images.map(image => this.render(image));
  }
}