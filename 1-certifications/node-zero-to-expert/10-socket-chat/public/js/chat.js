const url = ( window.location.hostname.includes( 'localhost' ) )
    ? 'http://localhost:8080/api/auth/'
    : 'http://localhost:8080/api/auth/';

let user = null;
let socket = null;

const validateJWT = async () =>
{
    const token = localStorage.getItem( 'token' ) || '';

    if ( token.length <= 10 )
    {
        window.location = 'index.html';
        throw new Error( 'There is no token in server' );
    }
    const answer = await fetch( url,
        {
            headers: { 'x-token': token }
        } );
    const { user: userDB, token: tokenDB } = await answer.json();
    localStorage.setItem( 'token', tokenDB );
    user = userDB;
    document.title = user.name;

    await connectSocket();
};

const connectSocket = async () =>
{
    const socket = io(
        {
            'extraHeaders':
            {
                'x-token': localStorage.getItem( 'token' )
            }
        } );
};

const main = async () =>
{
    await validateJWT();
};

main();