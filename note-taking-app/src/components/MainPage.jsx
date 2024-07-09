import {React, useState} from 'react'
const MainPage = () => {
  const [label, setLabel] = useState('');
  const [description, setDescription] = useState('');
  const [timeToComplete, setTimeToComplete] = useState('');

  const handleSubmit = (e) => {
      e.preventDefault();
      // Replace with your logic to handle the form submission
      console.log(`Label: ${label}, Description: ${description}, Time to Complete: ${timeToComplete}`);
      // Reset the form fields after submission
      setLabel('');
      setDescription('');
      setTimeToComplete('');
  };

  return (
      <div className="container mt-5">
          <div className="row justify-content-center">
              <div className="col-md-6">
                  <h2 className="text-center mb-4">Add Note</h2>
                  <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                          <label htmlFor="noteLabel" className="form-label">Label</label>
                          <input
                              type="text"
                              className="form-control"
                              id="noteLabel"
                              value={label}
                              onChange={(e) => setLabel(e.target.value)}
                              required
                          />
                      </div>
                      <div className="mb-3">
                          <label htmlFor="noteDescription" className="form-label">Description</label>
                          <textarea
                              className="form-control"
                              id="noteDescription"
                              rows="3"
                              value={description}
                              onChange={(e) => setDescription(e.target.value)}
                              required
                          ></textarea>
                      </div>
                      <div className="mb-3">
                          <label htmlFor="timeToComplete" className="form-label">Time to Complete</label>
                          <input
                              type="text"
                              className="form-control"
                              id="timeToComplete"
                              value={timeToComplete}
                              onChange={(e) => setTimeToComplete(e.target.value)}
                          />
                      </div>
                      <button type="submit" className="btn btn-primary w-100">Add Note</button>
                  </form>
              </div>
          </div>
      </div>
  );
}

export default MainPage;