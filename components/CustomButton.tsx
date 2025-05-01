
export const CustomButton = () => {

    const link = 'https://amazon.com';

    return (
        <h1 style={{
            color: '#ff0000',
            backgroundColor: 'white',
            fontSize: '50px'
        }}>
            <a href={link}>
                Click here
            </a>
        </h1>
    )
}
