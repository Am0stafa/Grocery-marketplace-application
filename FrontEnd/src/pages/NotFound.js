import React from 'react';
import Layout from '../components/Layout';

const NotFound = () => {
    
    const center = {
        textAlign: 'center'
    }

    return ( 
        <Layout>
            <div style={center}>
                <h1>404</h1>
                <p>An error 404 occured</p>
            </div>
        </Layout>
     );
}
 
export default NotFound;