import CONFIG from '../global/config';

const addReviewInitiator = {
  init({ dataReview }) {
    this._dataReview = dataReview;

    this.postDataReview();
  },

  async postDataReview() {
    if (this.checkEmptyField(this._dataReview)) {
      const fetchResponse = await fetch(
        `${CONFIG.BASE_URL}review`,
        this.optionsForPostdata(this._dataReview),
      );
      const response = await fetchResponse.json();
      this.checkPostResponse(response);
    }
  },

  checkPostResponse(response) {
    const container = document.querySelector('.alert-wrapper');
    if (!response.error) {
      window.location.reload();
    } else {
      container.style.display = 'block';
    }
  },

  optionsForPostdata(data) {
    return {
      method: CONFIG.POST_METHOD,
      headers: {
        'X-Auth-Token': CONFIG.X_AUTH_TOKEN,
        'Content-Type': CONFIG.CONTENT_TYPE,
      },
      body: this.bodyForPostdata(data),
    };
  },

  bodyForPostdata(dataReview) {
    const data = {
      id: dataReview.id,
      name: dataReview.name,
      review: dataReview.review,
    };
    return JSON.stringify(data);
  },

  checkEmptyField(data) {
    let result = true;
    const container = document.querySelector('.alert-wrapper');
    if (data.name === '') {
      container.style.display = 'block';
      result = false;
    } else if (data.review === '') {
      container.style.display = 'block';
      result = false;
    } else {
      result = true;
    }
    return result;
  },
};

export default addReviewInitiator;
