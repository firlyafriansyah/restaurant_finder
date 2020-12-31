import CONFIG from "../global/config";

const addReviewInitiator = {
  init({ dataReview }) {
    this._dataReview = dataReview;

    this._postDataReview();
  },

  async _postDataReview() {
    if (this._checkEmptyField(this._dataReview)) {
      const fetchResponse = await fetch(
        `${CONFIG.BASE_URL}review`,
        this._optionsForPostdata(this._dataReview)
      );
      const response = await fetchResponse.json();
      this._checkPostResponse(response);
    }
  },

  _checkPostResponse(response) {
    if (!response.error) {
      window.location.reload();
    } else {
      alert("Terjadi kesalahan silahkan ulangi kembali!");
    }
  },

  _optionsForPostdata(data) {
    return {
      method: CONFIG.POST_METHOD,
      headers: {
        "X-Auth-Token": CONFIG.X_AUTH_TOKEN,
        "Content-Type": CONFIG.CONTENT_TYPE,
      },
      body: this._bodyForPostdata(data),
    };
  },

  _bodyForPostdata(dataReview) {
    const data = {
      id: dataReview.id,
      name: dataReview.name,
      review: dataReview.review,
    };
    return JSON.stringify(data);
  },

  _checkEmptyField(data) {
    if (data.name === "") {
      alert("Kolom nama kosong!");
      return false;
    } else if (data.review === "") {
      alert("Kolom review kosong!");
      return false;
    } else {
      return true;
    }
  },
};

export default addReviewInitiator;
