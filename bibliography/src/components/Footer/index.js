import React from 'react';
import Tooltip from '../../components/Tooltip';

function Footer() {
    return (
        <div className="page-footer">
            <div className="container">
                <div className="footer-copyright">
                        <div className="col s4 left-align">
                            <p>See also: <b><Tooltip footer={true}>C.S. Lewis Letter Search</Tooltip></b></p>
                        </div>
                        <div className="col s4">
                            <a href="mailto:jwkeena@gmail.com" className="btn indigo darken-4" title="New texts and corrections to existing ones are welcome. For new texts please include as much bibliographical information as possible: exact date of publication, title, reference, and explanatory notes.">Submit new text
                            <i className="material-icons right">send</i>
                        </a>
                        </div>
                        <div className="col s4 right-align">
                            <p>Code and design by <a href="https://jwkeena.github.io/" target="_blank" rel="noopener noreferrer" title="See my portfolio"><b>Justin Keena</b></a></p>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;