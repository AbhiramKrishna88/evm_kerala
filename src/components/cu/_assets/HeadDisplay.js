import React from 'react'

const HeadDisplay = () => {
    return (
        <div className="card-header text-center">
            <h6 className="card-title">SEC Kerala</h6>
            <h6 className="card-subtitle mb-2 text-muted">2020</h6>
          <div className="row mt-5 d-flex align-items-center mx-auto">
            <div className="col-2">
              <span className="dot light1On bg-green"></span>
            </div>
            <div className="col-8">
              <div className="bg-danger text-light py-1 px-4 text-monospace">
                <div id="dis1">000000000000</div>
                <div id="dis2">000000000000</div>
              </div>
            </div>
            <div className="col-2 float-right d-flex justify-content-end">
              <span className="dot light2On bg-red"></span>
            </div>
          </div>
        </div>
    )
}

export default HeadDisplay
