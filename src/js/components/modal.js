import React from 'react';

const BsModal = ({vidId}) => {

  // const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="modal fade" id="ytModal" tabIndex="-1" role="dialog" aria-labelledby="ytModalTitle" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="ytModalTitle">Modal title</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="responsive-ytv">
                <iframe frameBorder="0" className="embed-responsive-item"></iframe>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BsModal;