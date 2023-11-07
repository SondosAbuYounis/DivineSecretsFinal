import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";
import React from 'react'
import axios from "axios";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const About = () => {
  const { userId } = useParams();
  const [data, setData] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
  
    
    const fetchData = async () => {
      try {
        // End Point
        const response = await axios.get('http://localhost:3001/home'); 
        setData(response.data);
        console.log('array', data);
      } catch (error) {
        console.error('Error', error);
      }
    };
  
    fetchData();
  }, []);
  
  return (
    <div style={{ backgroundColor: '#FEFAF0'}}>
    <Card  style={{ backgroundColor: '#FEFAF0'}}>
      <CardBody style={{ backgroundColor: 'transparent', boxShadow:'none'}}>
        <CardTitle tag="h5">Messages</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          Contact Us messages
        </CardSubtitle>

        <Table style={{ backgroundColor: '#403F2B20'}} className="no-wrap mt-3 align-middle bg-[#403F2B20]" responsive borderless>
          <thead>
            <tr>
              {/* table color  */}
              <th style={{backgroundColor: 'transparent', color: '#403F2B', height:'3rem', fontFamily:'sans-serif'}}>Username</th>
              <th style={{backgroundColor: 'transparent', color: '#403F2B', height:'3rem', fontFamily:'sans-serif'}}>Email</th>
              <th style={{backgroundColor: 'transparent', color: '#403F2B', height:'3rem', fontFamily:'sans-serif'}} > Message</th>

              {/* <th>Budget</th> */}
            </tr>
          </thead>
          <tbody>
            {users.map((tdata) => (
              <tr  key={tdata.id} style={{borderBottom: '1px solid #403F2B50'}}>
                <td style={{backgroundColor: '#ffffff50'}}>
                  <div className="d-flex align-items-center p-2">
                    <div className="ms-3">
                      <h6 className="mb-0">{tdata.title}</h6>
                    </div>
                  </div>
                </td>                     
                <td><span className="text-muted">{tdata.id}</span>  </td>
              </tr>
            ))}
          </tbody>
         
        </Table>
       
      </CardBody>
    </Card>
  </div>
  );
};

export default About;
