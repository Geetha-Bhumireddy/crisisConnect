import './index.css'

const DonutChart = () => (
  <div className="bg-container">
    <div className="bg-container-each-progress-circle">
      <h4>Volunteers Registered</h4>
      <div className="progress-circle">
        <div className="progress-circle-wrapper">
          <svg className="progress-circle-svg" width="100" height="100">
            <circle className="progress-circle-track" cx="50" cy="50" r="45" />
            <circle className="progress-circle-bar" cx="50" cy="50" r="45" />
          </svg>
          <div className="progress-circle-text">
            <span className="progress-circle-percent">40%</span>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-container-each-progress-circle">
      <h4>Disaster Registered</h4>
      <div className="progress-circle">
        <div className="progress-circle-wrapper">
          <svg className="progress-circle-svg" width="100" height="100">
            <circle className="progress-circle-track" cx="50" cy="50" r="45" />
            <circle className="progress-circle-bar2" cx="50" cy="50" r="45" />
          </svg>
          <div className="progress-circle-text">
            <span className="progress-circle-percent">80%</span>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-container-each-progress-circle">
      <h4>Funds Raised</h4>
      <div className="progress-circle3">
        <div className="progress-circle-wrapper">
          <svg className="progress-circle-svg" width="100" height="100">
            <circle className="progress-circle-track" cx="50" cy="50" r="45" />
            <circle className="progress-circle-bar" cx="50" cy="50" r="45" />
          </svg>
          <div className="progress-circle-text">
            <span className="progress-circle-percent">60%</span>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-container-each-progress-circle">
      <h4>Recovery</h4>
      <div className="progress-circle3">
        <div className="progress-circle-wrapper">
          <svg className="progress-circle-svg" width="100" height="100">
            <circle className="progress-circle-track" cx="50" cy="50" r="45" />
            <circle className="progress-circle-bar2" cx="50" cy="50" r="45" />
          </svg>
          <div className="progress-circle-text">
            <span className="progress-circle-percent">50%</span>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default DonutChart
