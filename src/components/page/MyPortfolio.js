import React from 'react';

const MyPortfolio = () => {
      return (
            <div className='font-bold text-xl'>
                  <p>Name : MD REJOAN MOLLA</p>
                  <p>EMil : mollamdrejoan@gmail.com</p>
                  <p>Educational Background : Persuing BSc at CHEMISTRY(2ND YEAR) National college</p>
                  <p>Add Skills</p>
                  <div className="overflow-x-auto">
                        <table className="table w-full">
                              <thead>
                                    <tr>
                                          <th></th>
                                          <th>Skills Name</th>
                                    </tr>
                              </thead>
                              <tbody>
                                    <tr>
                                          <th>1</th>
                                          <td>HTML/CSS skills.</td>
                                    </tr>
                                    <tr>
                                          <th>2</th>
                                          <td>Analytical skills.</td>
                                    </tr>
                                    <tr>
                                          <th>3</th>
                                          <td>Responsive design skills.</td>
                                    </tr>
                                    <tr>
                                          <th>4</th>
                                          <td>JavaScript skills.</td>
                                    </tr>
                                    <tr>
                                          <th>5</th>
                                          <td>Interpersonal skills.</td>
                                    </tr>
                                    <tr>
                                          <th>6</th>
                                          <td>Testing and debugging skills</td>
                                    </tr>
                                    <tr>
                                          <th>7</th>
                                          <td>Back-end basics.</td>
                                    </tr>
                              </tbody>
                        </table>
                  </div>
            </div>
      );
};

export default MyPortfolio;