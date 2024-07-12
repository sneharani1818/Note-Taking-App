import {React, useState} from 'react'
import FeatureCard from './FeatureCard';
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
                {/* //Task cards */}
                
                <div className="row mt-2 mx-auto justify-content-center">
                    <FeatureCard title="Task1" description="Description" />
                    <FeatureCard title="Task 2" description="Description" />
                    <FeatureCard title="Task 3" description="Description" />
                </div>
            


              <div className="col-md-6">
                  <h2 className="text-center mb-4">Add Note</h2>
                  
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
                              rows="1"
                              value={description}
                              onChange={(e) => setDescription(e.target.value)}
                              required
                          ></textarea>
                      </div>
                      <button type="submit" onClick={handleSubmit} className="btn btn-primary w-100">Add Note</button>
                  
              </div>
          </div>
      </div>
  );
}

export default MainPage;