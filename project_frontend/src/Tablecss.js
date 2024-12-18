import './Myfile.css'
export var Travelsname=()=>
{
    const cssfile={backgroundColor:'yellow'}

    return(
        <>
        <table style={cssfile}>
            <thead>
                <tr>
                    <th>Travels Name</th>
                    <th>Route</th>
                    <th>Price</th>
                    <th>Bus Type</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Goibibo Travel</td>
                    <td>Salem to Chennai</td>
                    <td>500</td>
                    <td>Sleeper AC</td>
                </tr>

                <tr>
                    <td>GT Holiday</td>
                    <td>Coimbatore to Chennai</td>
                    <td>800</td>
                    <td>Non-AC Sleeper</td>
                </tr>

                <tr>
                    <td>SRT</td>
                    <td>Thiruvarur to Chennai</td>
                    <td>250</td>
                    <td>Normal Bus</td>
                </tr>
            </tbody>
        </table>
        </>
    );
};
                                                          
                                                           