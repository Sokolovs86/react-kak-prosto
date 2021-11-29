import preloader from '../../../assets/images/preloader.gif';

let Preloader = (props) => {
return <div style={{ backgroundColor: "whitesmoke" }}>
  <img src={preloader} alt={"downloading gif"} />
</div>;
}

export default Preloader;