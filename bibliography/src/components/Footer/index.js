import React from 'react';

function Footer() {
    return (
        <div className="page-footer">
            <div className="container">
                <div className="footer-copyright">
                        <div className="col s4 left-align">
                            <p>See also: <a href="https://jwkeena.github.io/csl-letters/"><b>C.S. Lewis Letter Search</b></a></p>
                        </div>
                        <div className="col s4">
                        <a href="mailto:jwkeena@gmail.com" className="btn indigo darken-4">Submit new text
                            <i className="material-icons right">send</i>
                        </a>
                        </div>
                        <div className="col s4 right-align">
                            <p>Code and design by <a href="https://jwkeena.github.io/"><b>Justin Keena</b></a></p>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;