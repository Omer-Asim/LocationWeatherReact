import React, { useState } from "react";

const Weather = ({ weather }) => {
  const [goster, setGoster] = useState(false);
  const calistir = () => {
    setGoster(!goster);
  };
  if (!weather) {
    return <div></div>;
  }

  return (
    <div className="container" style={{ minHeight: "88vh" }}>
      <div className="d-flex justify-content-center">
        <button onClick={calistir} className="btn btn-outline-danger">
          Anlık Hava Durumunu Öğrenmek İstiyorum
        </button>
      </div>

      {goster === true && (
        <React.StrictMode>
          <div className="text-center display-4 mt-3 p-3 ">
            {" "}
            <i
              className="fas fa-map-marked-alt"
              style={{ color: "#EA4335" }}
            ></i>{" "}
            Konum :{weather.name.toUpperCase()}
          </div>
          <hr />
          <div className="text-center display-4 p-3">
            {" "}
            <i class="fas fa-temperature-low text-info"></i> Sıcaklık :
            {weather.main.temp} &#8451;
          </div>
          <hr />
          <div className="text-center display-4 p-3">
            {" "}
            <i className="fas fa-caret-right text-secondary"></i> Durum :
            {weather.weather.map((data) => data.description.toUpperCase())}
          </div>
          <hr />
        </React.StrictMode>
      )}
    </div>
  );
};

export default Weather;
