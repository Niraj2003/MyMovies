import 'bootstrap/dist/css/bootstrap.min.css';
import './Table.css';

const movielist = ["Inception", "Marvel", "Tenet", "Titanic", "Catch Me If You Can","Shape of water","Moonlight", "The Matrix"];
function TableData() {
    const final = [];
    for (let  user of movielist) {
        final.push(<td key={user}>{user}</td>);
    }

    const handleMouseEnter = e => {
        e.target.style.color = "blue";
    }

    const handleMouseLeave = e => {
        e.target.style.color = "black";
    }
    
    var urlle = `https://www.imdb.com/find?q=` ;
    var urlri = `&ref_=nv_sr_sm`;
    var serialnum = 1;
    var url = `https://www.google.com/search?q=`;
    return (
        <div className='tdata'>
            <table className="table caption-top">
                <caption><center>Movies Bucket List </center></caption>
                <thead>
                    <tr>
                        <th scope="col">Sr. No </th>
                        <th scope="col">Movie/Series Name</th>
                        <th scope="col">Watched or Not</th>
                        <th scope="col"><center>Feedback/ Description</center></th>
                        <th scope='col'><center>IMDB Rating</center></th>
                    </tr>
                </thead>
                <tbody>

                {movielist.map(name => (
                        <tr>
                        <th>{serialnum++}</th>
                        <td><a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href={url+name} target="_blank" rel="noopener noreferrer" style={{color: 'black',textDecoration: 'none'} }> {name}</a></td>
                        <td>
                        <center>
                            <div className="form-check form-switch">
                                <input className="form-check-input"  type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                            </div>
                        </center>
                        </td>
                        <td> <input className="form-control" type="text" placeholder="" aria-label="default input example"></input> </td>
                        <td><center><a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href={urlle+name+urlri} target="_blank" rel="noopener noreferrer" style={{color: 'black',textDecoration: 'none'} }> View Rating</a></center></td>
                    </tr>
                ))}

                <tr>
                    <th >{serialnum++} </th>
                    <td > <input class="form-control" placeholder='Movie Name'></input> </td>
                    <td>
                    <center>
                        <div className="form-check form-switch">
                            <input className="form-check-input"  type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                        </div>
                        
                    </center>
                    </td>
                    <td> <input className="form-control" type="text" placeholder="Feedback" aria-label="default input example"></input> </td>
                    <td></td>
                </tr>

                </tbody>
            </table>
            <div>
            <center><button type="button" className="btn btn-secondary">Add & Save</button></center>
            </div>
        </div>
    );
}

export default TableData;