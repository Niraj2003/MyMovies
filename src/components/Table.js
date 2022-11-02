import 'bootstrap/dist/css/bootstrap.min.css';
import './Table.css';
import Form from 'react-bootstrap/Form';

const movielist = ["Shawshank Redemption",
"Good Will Hunting ",
"The Prestige",
"Inception",
"Titanic",
"Schindel's List",
"The Wolf Of Wall Street",
"Catch Me If You Can",
"Dead Poet Society ",
"Gone With The Wind",
"Batman Begins",
"The Dark Knight ",
"The Dark Knight Rises",
"Forest Gump",
"The King's Speech",
"The Darkest Hour",
"Terminal ",
"Marval Phase I",
"Marvel Phase Ii",
"Marvel Phase Iii",
"Shape Of Water ",
"Three Billboards",
"La La Land",
"Moonlight ",
"Predestination",
"The Matrix",
"The Matrtian ",
"Interstellar",
"Gravity",
"2001 A Space Odyssey ",
"Minority Report",
"Edge Of Tomorrow",
"Avatar ",
"Mad Max : Fury Road",
"Back To The Future I",
"Back To The Future Ii",
"Back To The Future Iii",
"Et Extra Terestrial",
"Bucketlist ",
"Eternal Sunshine Of A Spotless Mind",
"Life Is Beautiful",
"A Beautiful Mins",
"It’s A Wonderful Life ",
"Rainman",
"One Flew Over Cuckoos Nest",
"Silence Of The Lambs",
"The Man Who Know Infinity ",
"The Da Vinci Code",
"Bruce Almighty ",
"Social Network",
"The Theory Of Everything ",
"Pirates Of Silicon Valley ",
"Steve Jobs",
"Gandhi ",
"Rockey ",
"King Kong 1933",
"Godfater",
"Godfater Ii",
"Troy ",
"Fgladiator",
"Terminator 1",
"Terminator 2 : Judment Day",
"Terminator 3: Rise Of The Machines",
"The Usual Suspects",
"Fight Club",
"Svaing Private Ryan",
"Zodiac",
"Chaplin",
"The Judge",
"Trophic Thunder",
"Goodfellas",
"Sycho ",
"Rebecca",
"Vertigo",
"The Man Who Knew Too Much ",
"North By Northwest",
"The Lord Of Rings: Tfotr",
"The Hobbit",
"Life Of Pie",
"Seven",
"The Great Gatsby",
"Monster ",
"Dunkirk",
"Apocalyse Now",
"Citizen Kane",
"All About Eve",
"Singong In The Rain",
"Grapes Of Wrath ",
"Maltese Falcon",
"Seven Samurai",
];
function TableData() {
    const final = [];
    for (let  user of movielist) {
        final.push(<td key={user}>{user}</td>);
    }

    const handleMouseEnter = e => {
        e.target.style.color = "#371d53";
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
            <center><h2 >Movies Bucket List</h2></center> 
            <table className="table caption-top fs-6 ">
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
                        <td><a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href={url+name+" movie"} target="_blank" rel="noopener noreferrer" style={{color: 'black',textDecoration: 'none'} }> {name}</a></td>
                        <td>
                        <center>
                            {/* <div className="form-check form-switch">
                                <input className="form-check-input"  type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                            </div> */}
                            <center>
                            <Form.Check className='fs' type="switch" id="custom-switch " />
                            </center>
                            
                        </center>
                        </td>
                        <td> <input className="form-control" type="text" placeholder="" aria-label="default input example"></input> </td>
                        <td><center><a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href={urlle+name+urlri} target="_blank" rel="noopener noreferrer" style={{color: 'black',textDecoration: 'none'} }> View Rating</a></center></td>
                    </tr>
                ))}
{/* 
                <tr>
                    <th >{serialnum++} </th>
                    <td > <input className="form-control" placeholder='Movie Name'></input> </td>
                    <td>
                    <center>
                        <div className="form-check form-switch">
                            <input className="form-check-input"  type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                        </div>
                        
                    </center>
                    </td>
                    <td> <input className="form-control" type="text" placeholder="Feedback" ></input> </td>
                    <td></td>
                </tr> */}

                </tbody>
            </table>
        </div>
    );
}

export default TableData;