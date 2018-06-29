import React from 'react';
import Card from '../card';
import electron_img from '../../../images/electron.png'
import nginx_img from '../../../images/nginx.svg'
import git_img from '../../../images/git.svg'
import github_img from '../../../images/github.svg'
import cli_img from '../../../images/cli.png'

class OthersCards extends React.Component {
    render() {
        return (
            <div className='cards-container'>
                <Card name='Electron' image={electron_img} />
                <Card name='NGiNX' image={nginx_img} />
                <Card name='Git' image={git_img} />
                <Card name='GitHub' image={github_img} />
                <Card name='Command Line' image={cli_img} />
            </div>
        )
    }
}

export default OthersCards;
