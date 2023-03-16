// Burada Table ve Button importladık card yapsaydık card importliiyicaktik row ve col içinde import yapılıyormuş araştırınca görülüyor
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import axios from "axios";
import React from "react";
import App2 from './appPost';
import ReactDOM from 'react-dom/client';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
const baseURLUser = "https://jsonplaceholder.typicode.com/users";


export default function App() {
  const [postUsers, setUsers] = React.useState(null);

  // axios ile verileri çekiyoruz
  
React.useEffect(() => {
  axios.get(baseURLUser).then((response) => {
    setUsers(response.data);
  });
}, []);        

//  Aslında basit bir yapı kurdum div içine table bastım sadece table'ın bir kısmını map döngüsünün içine aldım ki verilerimizi basabilelim.
// Ayriyetten hata ise bir function açmak ve bu function'export etmeye çalışmak içinde return değer döndürmeye çalışmak 
//  direkt table yapısı kurmak yeterli.
if (!postUsers) return null;


// Değişken tanımlıyoruz içine style özellikleri basıyoruz aşağıda da nreye yerleştirmemiz gerekiyosa
// oraya style={} diyerek süslü parantezin içine değişkenimizi yerelesştiriyoruz.
const styleThead = 
{
  backgroundColor: '#D0D0D0',
  fontFamily: "Sans-Serif"
}
const styleTheadTr = 
{
  color: 'Black'
}
const styleName = {
  fontWeight: "bold"
}
console.log(postUsers)
return (
 <BrowserRouter>
  <div className="users">
    {/* Table etiketini map'in Dışına çıkarttık bir kere table oluşsun diye */}
  <Table striped bordered hover>
      <thead style={styleThead}>
        <tr style={styleTheadTr}>
          <th>First Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Button</th>
        </tr>
      </thead>

  {postUsers.map(data =>
// tbody kısmını içeride tuttuk çünkü tabloa veriler tbody kısmına basılır bu yüzden kaç veri varsa map o kadar dönüp veerileri basıcaktır
    <tbody>
    <tr>
    <td style={styleName}>{data.name}</td>
    <td>{data.email}</td>
    <td>{data.phone}</td>
      <td>     
       <div>
       <Link to="/Posts" className="link">
        <Button variant="warning" onClick={ShowPosts}>Post Göster</Button>
        </Link>
      </div>
      </td> 
  
    {/* buttona onclick verdim postlara gitsin diye burada postta ki userId ile user json'unda ki Id yi eşleştirip routing yapıcaz. */}
  </tr>
</tbody>)}
{/* Routing (id si 1 olan kisinin postunu göstere tikladigimizda postlar datasindaki userId si 1 olanlarin postlari gelmeli
 bunu axios a verdiğimiz url ile yani routing ile yapıyorum)
listedeki herkesin idsi var postlarda da userId datasi var userlardaki id ile postlarda ki userId leri eslestiricek  */}
</Table>  
</div>

</BrowserRouter>);
// onclick metodu bizi postlara götürücek
function ShowPosts(){
    const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App2/>
  </React.StrictMode>
);
  }
}











































































// let divStyles = {
//   height: "25rem",
//   width: "25rem",
// };

// export default function App() {
//   const [post, setPost] = React.useState(null);
//   const [postUsers, setUsers] = React.useState(null);

// React.useEffect(() => {
//   axios.get(baseURL).then((response) => {
//     setPost(response.data);
//   });
//   axios.get(baseURLUser).then((response) => {
//     setUsers(response.data);
//   });
// }, []);



// if (!post) return null;
// // var posts = [];
// // posts = data;  
// if (!postUsers) return null;
// return (
//  <BrowserRouter>
//  <landing>
//  <div className="posts">
//   {
//   post.map(data =>
//     <p>{data.title},{data.body}</p>
//     )
//   }
//   </div>
//   <div className="users">
//   {
//         postUsers.map(data =>
//           <p>{data.id},{data.username}</p>
//           )
//   }
//   </div>
//  </landing>

//  </BrowserRouter>
//   );
// }