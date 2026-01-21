import React from 'react';
import Tooltip from '../../components/Tooltip';
import './styles.css';

function Footer() {
    return (
        <div className="page-footer">
            <div className="container">
                <div className="footer-copyright">
                    <div className="row" style={{marginBottom: 0}}>
                        <div className="center-align">
                            <a href="mailto:jwkeena@gmail.com" className="btn indigo darken-4" title="New texts and corrections to existing ones are welcome. For new texts please include as much bibliographical information as possible: exact date of publication, title, reference, and explanatory notes.">Submit new text
                                <i className="material-icons right">send</i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;