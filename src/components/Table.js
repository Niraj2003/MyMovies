import 'bootstrap/dist/css/bootstrap.min.css';
import './Table.css';

const movielist = ["Inception", "Marvel", "Tenet"];
function TableData() {
    const final = [];
    for (let  user of movielist) {
        final.push(<td key={user}>{user}</td>);
    }
    var serialnum = 1;
    return (
        <div className='tdata'>
        <table class="table caption-top">
            <caption><center>List of Movies/Series </center></caption>
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
                    <td>{name}</td>
                    <td>
                        <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                        </div>
                    </td>
                    <td> <input class="form-control" type="text" placeholder="Feedback" aria-label="default input example"></input> </td>
                </tr>
            ))}

            

            </tbody>
        </table>
        </div>
    );
}

export default TableData;