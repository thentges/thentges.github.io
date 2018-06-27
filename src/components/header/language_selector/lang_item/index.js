import React from 'react';


class LangItem extends React.Component {

    render() {
        const selected_css = this.props.isSelected ? ' selected' : '';

        return (
            <React.Fragment>
                <div className={"link lang" + selected_css}
                    onClick={this.props.changeLanguage}>
                <div className="content">{this.props.children}</div>
                </div>
            </React.Fragment>
        );
    }
}

export default LangItem;
