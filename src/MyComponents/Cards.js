import './stylesheets/Cards.css'
function Cards(props){
    return(
        <div className="contain">
            <div className="image">
            <img src={props.url} alt=""/>
            </div>
            <div className="name"><span className="title">{props.nam}</span></div>
            <div className="content"><p className="about-it">{props.content}</p></div>
            <a href={props.link} target="_blank"><button>Watch Now</button></a>
        </div>
    );
}

export default Cards