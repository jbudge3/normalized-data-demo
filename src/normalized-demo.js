import React, { Component } from 'react';
import { Radio } from 'antd';
import { NonNormalized } from './components/non-normalized/non-normalized';
import { Normalized } from "./components/normalized/normalized";
import './normalized-demo.css';

export class NormalizedDemo extends Component {
    state = {
        currentView: 'non-normalized'
    };

    _handleRadioClick = (event) => this.setState({currentView: event.target.value});

    render() {
        const { currentView } = this.state;

        return (
            <div className="NormalizedDemo">
                <Radio.Group defaultValue="non-normalized" onChange={ this._handleRadioClick }>
                    <Radio.Button value="non-normalized">Non-Normalized</Radio.Button>
                    <Radio.Button value="normalized">Normalized</Radio.Button>
                </Radio.Group>
                <NonNormalized show={ currentView === 'non-normalized' } />
                <Normalized show={ currentView === 'normalized' } />
            </div>
        );
    }
}
