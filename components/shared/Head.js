import Head from 'next/head';

export default class extends React.Component {
    render(){
        return(
            <Head>
            <link rel = 'stylesheet' href = 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'/>

            <link rel = 'stylesheet' href="https://www.w3schools.com/w3css/4/w3.css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                    {/* Font awesome */}

             <link rel='stylesheet' href={this.props.cssLink} />
                    {/* External CSS */}

              <link href="https://fonts.googleapis.com/css?family=Fjalla+One" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css?family=Handlee" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css?family=Merriweather" rel="stylesheet" />
                    {/* Fonts */}

                    
            {/*<link rel="stylesheet" href="F:\MERN Stack\Softwares\bootstrap-3.3.7-dist\bootstrap-3.3.7-dist\css"/>*/}
            {<link href="https://fonts.googleapis.com/icon?family=Material+Icons"rel="stylesheet" />}
                    {/* Material Icons */}

            

             <script src="https://sdk.accountkit.com/en_US/sdk.js"></script>
                    {/* Account Kit */}
            </Head>
        )
    }
    
}