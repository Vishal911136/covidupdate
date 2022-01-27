import { useEffect, useState } from "react";


const CovidTable = () =>{
    const [data, setData] = useState([]);

    const getCovid = async () =>{
        const res = await fetch('https://data.covid19india.org/data.json');
        const covidData = await res.json();
        console.log(covidData.statewise);
        setData(covidData.statewise);
    }

    useEffect(()=>{
        getCovid();
    },[]);
    return(
        <>
        <h1 className="heading">India Covid Update 2021</h1>
        <h4 className="heading">last update <span style={{color: 'red'}}>13/08/2021 23:27:22</span></h4>
            <div className="covid_section">

                <div className="container">
                    <table className="main_table">
                        <thead className="table_heading">
                            <tr>
                                <th className="state">State</th>
                                <th>Confirmed</th>
                                <th>Recovered</th>
                                <th>Deaths</th>
                                <th>Active</th>
                                {/* <th>Updated</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((value,ind) =>{
                                    return (
                                        <tr key={ind}>
                                            <td>{value.state}</td>
                                            <td>{value.confirmed}</td>
                                            <td>{value.recovered}</td>
                                            <td className="death">{value.deaths}</td>
                                            <td>{value.active}</td>
                                            {/* <td>{value.lastupdatedtime}</td> */}
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default CovidTable;