
function fetchData( event ){
    event.preventDefault();
    //console.log( this );
    //console.log( event.target );
    let numOfDogs = $( '#numOfDogs' ).val();
    
    $.ajax({
        url : `https://dog.ceo/api/breeds/image/random/${numOfDogs}`,
        method : 'GET',
        success : function( data ){
            $( '.results' ).empty();
            for( let i = 0; i < data.message.length; i ++ ){
                $( '.results' ).append( `<img src="${data.message[i]}"/>`);
            }
            
        },
        error : function( err ){
            console.log( err );
        }
    }); 

    /*
    $.get( `https://dog.ceo/api/breeds/image/randoms/${numOfDogs}` )
        .done( function( data ){
            console.log( data );
        })
        .fail( function(err){
            console.log( "Something went wrong" );
        });
    */

}

$( '.dogImagesForm' ).on( 'submit', fetchData )