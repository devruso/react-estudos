export function ChecarNumero(props){

    if (props.numero % 2 === 0){
        return (<>
            <p>par</p>
        </>)
    }else{
        return (<>
            <p>impar</p>
        </>)
    }
}