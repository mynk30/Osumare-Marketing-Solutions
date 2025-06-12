import './Process.css';

const Process = () => {
  return (
    <div className="process-wrapper">
      <div className="container">
        <div className="section-heading">
          <h2>Transform Your Productivity With Our <br/>Innovative To-Do List Features</h2>
        </div> 
        <div className="row mx-0">
          <div className="col-12 col-md-6 col-lg-3">
            <div className="card-box">
              <div>
                <h3 className="count">01</h3>
              </div>
              <div className="card-content">
                <div className="card-icon-box">
                  <i className="bi bi-box-fill text-danger" style={{ fontSize: '2rem' }}></i>
                </div>
                <h4 className="card-heading">User-Friendly Interface</h4>
                <div className="heading-lines">
                  <div className="line line-1"></div>
                  <div className="line line-2"></div>
                </div>
                <p>Our platform offers seamless task management to boost your efficiency</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="card-box">
              <div>
                <h3 className="count">02</h3>
              </div>
              <div className="card-content">
                <div className="card-icon-box">
                  <i className="bi bi-box-fill text-danger" style={{ fontSize: '2rem' }}></i>
                </div>
                <h4 className="card-heading">Real-Time Sync</h4>
                <div className="heading-lines">
                  <div className="line line-1"></div>
                  <div className="line line-2"></div>
                </div>
                <p>Stay connected across devices with instant task synchronization</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="card-box">
              <div>
                <h3 className="count">03</h3>
              </div>
              <div className="card-content">
                <div className="card-icon-box">
                  <i className="bi bi-box-fill text-danger" style={{ fontSize: '2rem' }}></i>
                </div>
                <h4 className="card-heading">Priority Management</h4>
                <div className="heading-lines">
                  <div className="line line-1"></div>
                  <div className="line line-2"></div>
                </div>
                <p>Organize tasks by priority levels for better focus</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="card-box">
              <div>
                <h3 className="count">04</h3>
              </div>
              <div className="card-content">
                <div className="card-icon-box">
                  <i className="bi bi-box-fill text-danger" style={{ fontSize: '2rem' }}></i>
                </div>
                <h4 className="card-heading">Smart Reminders</h4>
                <div className="heading-lines">
                  <div className="line line-1"></div>
                  <div className="line line-2"></div>
                </div>
                <p>Never miss a deadline with intelligent reminder system</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
