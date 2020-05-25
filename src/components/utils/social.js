import React from 'react'
import {
    useStaticQuery,
    graphql
} from "gatsby"
import {
    FaFacebookF,
    FaInstagram,
    FaGithub,
    FaYoutube,
    FaLinkedin,
    FaWhatsapp
} from 'react-icons/fa';

const Social = () => {

    const {
        site: {
            siteMetadata: {
                social: {
                    facebook,
                    github,
                    instagram,
                    linkedin,
                    youtube,
                    whatsapp
                }
            }
        }
    } = useStaticQuery(graphql `{
            site {
                siteMetadata {
                    social {
                            facebook
                            github
                            instagram
                            linkedin
                            youtube
                            whatsapp
                    }
                }
            }
        }`
    );
  
    return (
        <ul>
            <li>
                <a href={linkedin} target="_blank" rel="noopener noreferrer" title="Linkedin" alt="Linkedin"><FaLinkedin className="icon"/></a>
            </li>
            <li>
                <a href={github} target="_blank" rel="noopener noreferrer" title="GitHub" alt="GitHub"><FaGithub className="icon"/></a>
            </li>
            <li>
                <a href={youtube} target="_blank" rel="noopener noreferrer" title="Youtube" alt="Youtube"><FaYoutube className="icon"/></a>
            </li>
            <li>
                <a href={instagram} target="_blank" rel="noopener noreferrer" title="Instagram" alt="Instagram"><FaInstagram className="icon"/></a>
            </li>
            <li>
                <a href={facebook} target="_blank" rel="noopener noreferrer" title="Facebook" alt="Facebook"><FaFacebookF className="icon"/></a>
            </li>
            <li>
                <a href={whatsapp} target="_blank" rel="noopener noreferrer" title="Whatsapp" alt="Whatsapp"><FaWhatsapp className="icon"/></a>
            </li>
        </ul>
    )
}

export default Social
