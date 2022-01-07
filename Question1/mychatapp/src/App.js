export default function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="row bg-success ">
            <h3 >MyChatApp</h3>
            <div >byAmolShinde/210940520012</div>
          </div>
        </div>
        <div class="col-8 p-4">
          <input id="h1" className="form-control form-control-lg" type="text" placeholder="Let's chat here..." />
          <input className="m-2 col-4" type="text" placeholder="Hiii" />
          <input type="text" placeholder="WhatsApp" />
        </div>
        <div class="col-4 p-4" >
          <button className="form-control form-control-lg" >SEND</button>
        </div>
      </div>
    </div>

  );
}


