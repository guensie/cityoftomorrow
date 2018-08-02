import React from 'react';


export class Home extends React.Component{
    
    render(){
        return (
            <div className="homePage">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" id="makeRed" href="#">BriskLines</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
                            <a className="nav-item nav-link" href="#">Features</a>
                            <a className="nav-item nav-link" href="#">Pricing</a>
                        </div>
                    </div>
                </nav>
                <div className="jumbotron">
                    <h1 className="display-4"id="makeRed">Brisk Lines</h1>
                    <p className="lead">Brisk Lines is a new way for people to crowdsource their bus route</p>
                    <hr className="my-4" />
                    <p>It combines technology and human feedback to create a better way to commute. Find a Brisk Line to take you to and from work, and if one does not exit, create one and invite friends to join! Once enough peoplr have been matched to the line you created, Brisk Line will create a route with one of our 24 passenger person buses. All routes will be able to be tracked through the app, have no more than five stops total, and will have easy payment option via the app. </p>
                    <a className="btn btn-info btn-lg" href="#" role="button">Find a Line</a>
                </div>
                <div className="cards">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Step 1</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Sing Up for Brisk Lines</h6>
                            <p className="card-text">Enter your commute information: where you live, where you work, your time of departure and arrival each day.Brisk Line will search for an existing line</p>
                            <a href="#" className="card-link"></a>
                            <a href="#" className="card-link"></a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Step 2</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Create a Line</h6>
                            <p className="card-text"> If no line exists, you have the optionto create a line. You name the line, enter proposed pickup and drop off times, and what days of the week the line should be available. You have the option to invite friends to your line.</p>
                            <a href="#" className="card-link"></a>
                            <a href="#" className="card-link"></a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Step 3</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Your Line is Created.</h6>
                            <p className="card-text"> Our technology will serch for similar requests and if others upvote the line you created. Once a sufficient amount of people have expressed interest in the line, the line will be crteated. Once a line is created it will have a trial run of 6 weeks.</p>
                            <a href="#" className="card-link"></a>
                            <a href="#" className="card-link"></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

