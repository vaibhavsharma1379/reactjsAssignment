import { useState } from "react";
export default function BookShow(props) {
  const [showPopup, setShowPopup] = useState(false);
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      moviename: formData.get("movieName"),
      movieDetails:formData.get("movieDetails")

    };
    localStorage.setItem("bookingData", JSON.stringify(data));
  };
  return (
    <div>
      <button className="address-button" onClick={togglePopup}>
        Book Show
      </button>
      {showPopup && (
        <div className="popup" style={{ zIndex: "4" }}>
          <div className="popup-content">
            <span className="close" onClick={togglePopup} onSubmit={handleSubmit}>
              &times;
            </span>

            <div
              className="shop-details-popup"
              id="account"
              role="tabpanel"
              aria-labelledby="account-tab"
            >
              <h2>Show Details</h2>
              <div className="row" style={{ marginRight: "25px" }}>
                <div className="input-field">
                  <div className="form-group">
                    <label>Show Name</label>
                    <input
                    name="movieName"
                      type="text"
                      className="form-control"
                      defaultValue={props.name?.movie}
                      //   placeholder="Enter Shop Name"
                    />
                  </div>
                </div>
                <div className="input-field">
                  <div className="form-group">
                    <label>Show Type</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={props.name?.type}
                      placeholder=""
                    />
                  </div>
                </div>
                <div className="input-field">
                  <div className="form-group">
                    <label>Language</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={props.name?.language}
                      placeholder="Enter Shop Catagory"
                    />
                  </div>
                </div>
                <div className="input-field">
                  <div className="form-group">
                    <label>Genres</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={props.name?.genres}
                      placeholder=""
                      name="movieDetails"
                    />
                  </div>
                </div>
                <div className="input-field">
                  <div className="form-group">
                    <label>Show Date</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue=""
                      placeholder="Enter Show date"
                    />
                  </div>
                </div>

                <div className="input-field">
                  <div className="form-group">
                    <label>Show Time</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue=""
                      placeholder="Enter Show Time"
                    />
                  </div>
                </div>
            <div className="input-field">
                  <div className="form-group">
                    <label>Email</label>
                    <input
                    name="email"
                      type="text"
                      className="form-control"
                      defaultValue=""
                      placeholder="Enter Pricing"
                    />
                  </div>
                </div>
                <div className="input-field">
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue=""
                      name="name"
                      placeholder="Enter Phone Number"
                    />
                  </div>
                </div> 
              </div>

              <div style={{ margin: "25px" }}>
                <button
                  className="address-button"
                  style={{ paddingLeft: "20px", paddingRight: "20px" }}
                  type="submit"
                >
                  Book
                </button>
                <button
                  className="address-button"
                  style={{ marginLeft: "25px" }}
                  onClick={togglePopup}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <style jsx>{`
        label {
          letter-spacing: 1.5px;
          font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
            "Lucida Sans", Arial, sans-serif;
          color: #4caf50;
          margin-bottom: 10px;
        }
        h2 {
          font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
            "Lucida Sans", Arial, sans-serif;
          color: #4caf50;
          letter-spacing: 2px;
        }
        .form-control {
          height: 25px;
          width: 250px;
          border-radius: 5px;
          font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
            "Lucida Sans", Arial, sans-serif;
        }
        input:focus {
          border-color: #4caf50;
          outline: none;
        }
        .row {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
        }
        .form-group {
          display: flex;
          flex-direction: column;
        }
        .input-field {
          margin: 10px 10px 15px 20px;
        }
        .shop-details-popup {
          margin: 3px 30px 3px 30px;
        }
        .address-button {
          letter-spacing: 2px;
          padding: 10px 25px 10px 25px;
          color: #fff;
          background-color: #4caf50;
          border: 0px;
          border-radius: 5px;
          font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
            "Lucida Sans", Arial, sans-serif;
          font-size: 18px;
        }
        .address-button:hover {
          background-color: #265728;
          transition-duration: 1s;
        }
        .popup {
          overflow: auto;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .popup-content {
          position: relative;
          background-color: white;
          padding: 20px;
          padding-right: 20px;
          border-radius: 10px;
          max-width: 800px;

          overflow: auto;
        }
        .close {
          position: absolute;
          top: 5px;
          right: 10px;
          font-size: 30px;
          cursor: pointer;
        }
        .order-content {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
        }
        @media (max-width: 768px) {
          .popup-content {
            height: 90%;
          }
          .row {
            grid-template-columns: repeat(1, 1fr);
          }
        }
      `}</style>
    </div>
  );
}
