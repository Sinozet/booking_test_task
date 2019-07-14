class Hotel {
  constructor({ id, name, stars, photo, photo_preview, description, city }) {
    this.id = id;
    this.name = name;
    this.stars = stars;
    this.photo = photo;
    this.photoPreview = photo_preview;
    this.description = description; 
    this.city = city;
    Object.freeze(this); 
  }
}

export default Hotel;