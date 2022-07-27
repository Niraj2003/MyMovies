import 'bootstrap/dist/css/bootstrap.min.css';
import './Table.css';

const movielist = ["Inception", "Marvel", "Tenet", "Titanic", "Catch Me If You Can","Shape of water","Moonlight", "The Matrix"];
function TableData() {
    const final = [];
    for (let  user of movielist) {
        final.push(<td key={user}>{user}</td>);
    }
    var serialnum = 1;
    var url = `https://www.google.com/search?q=`;
    return (
        <div className='tdata'>
            <table class="table caption-top">
                <caption><center>Movies Bucket List </center></caption>
                <thead>
                    <tr>
                        <th scope="col">Sr. No </th>
                        <th scope="col">Movie/Series Name</th>
                        <th scope="col">Watched or Not</th>
                        <th scope="col">Feedback/ Description</th>
                    </tr>
                </thead>
                <tbody>

                {movielist.map(name => (
                        <tr>
                        <th>{serialnum++}</th>
                        <td><a href={url+name} target="_blank" rel="noopener noreferrer"> {name}</a></td>
                        <td>
                        {/* <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/> */}
                        <center>
                            <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                            </div>
                        </center>
                        </td>
                        <td> <input class="form-control" type="text" placeholder="" aria-label="default input example"></input> </td>
                    </tr>
                ))}

                

                </tbody>
            </table>
            <div>
            <center><button type="button" class="btn btn-secondary">Save</button></center>
            </div>
        </div>
    );
}

export default TableData;