function Mendchilgee(){ // function component. props-gui
    return <h1>hello11</h1>
}
function Mendchilgee123(props){ // function component. props-toi
return <h1>{props.ner}</h1>;
}
function Mendchilgee456(props){ // function component. props-toi olon html renderlene
    return (
        <div>
            <h1>{props.ner}</h1>
            <h2>{props.nas}</h2>
        </div>
    )
}
function EtsegComp(props){
    return(
        <div>
            <Mendchilgee/>
            <Mendchilgee123 ner={props.ner} />
            <Mendchilgee456 ner={props.ner} nas={props.nas}/>
            <table>
                <tr><td> {props.angi[0]} </td></tr>
                <tr><td>{props.angi[1]}</td></tr>
                <tr><td>{props.angi[2]}</td></tr>
            </table>
        </div>
    )
}

ReactDOM.render(
    // <Mendchilgee/> ,
    // <Mendchilgee123 ner=" Hello Bat" nas='20'/> ,
    //  <Mendchilgee456 ner=" Hello Dorj" nas='20'/> ,
     <EtsegComp ner="James" nas="25" angi={['ПХ','МС','НББМС']}/>,
    document.getElementById('root')
  );
