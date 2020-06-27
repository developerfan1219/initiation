import * as React from 'react';
import { 
    Container, 
    Row, 
    Col,
    Table
} from 'reactstrap';
import { Context } from "../context/UserContext";
import { authAxios } from "../utils"
import { domainURL } from "../constants"

export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

function Dashboard() {
    const userContext: any = React.useContext(Context);
    const {usertoken, setUser} = userContext;
    const [loading, setLoading] = React.useState(1);
    const [domains, setDomains] = React.useState([]);

    React.useEffect(() => {
        if(loading)
        {
            getDomains();
        }        
    });
    
    const getDomains = () => {
        const data: Object = {
            headers: {
                token: usertoken
            }
        }
        
        authAxios
            .get(domainURL, data)
            .then(res => {
                setLoading(0);
                setDomains(res.data.domains);
                
            })
            .catch(err => {
                if (err.response.status === 404) {
                    console.log(err);
                } else {
                    console.log(err);
                }
            });
        
    }

    return (
        <Table className="mt-auto">
        <thead>
            <tr>
            <th>#</th>
            <th>Domain</th>
            
            </tr>
        </thead>
        <tbody>
            {
                domains.map((domain, index) => (
                    <tr key={`tr${index}`}>
                    <th scope="row" key={index}>{index+1}</th>
                    <td>{domain}</td>
                    
                    </tr>
                ))
            }
            
            
        </tbody>
        </Table>
    );
}

export default Dashboard;